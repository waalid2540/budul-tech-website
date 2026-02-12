import { NextResponse } from "next/server"
import Anthropic from "@anthropic-ai/sdk"
import prisma from "@/lib/prisma"

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { clientId, message, sessionId } = await req.json()

    if (!clientId || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Get client info
    const client = await prisma.client.findUnique({
      where: { id: clientId },
    })

    if (!client || !client.chatbotEnabled) {
      return NextResponse.json({ error: "Chatbot not available" }, { status: 404 })
    }

    // Get conversation history
    const history = await prisma.chatMessage.findMany({
      where: { clientId, sessionId },
      orderBy: { createdAt: "asc" },
      take: 10,
    })

    // Save user message
    await prisma.chatMessage.create({
      data: {
        clientId,
        sessionId,
        role: "user",
        content: message,
      },
    })

    // Check if lead capture is needed
    let shouldCaptureLead = false
    const leadKeywords = ["contact", "email", "phone", "call", "reach", "appointment", "book", "schedule"]
    if (leadKeywords.some((kw) => message.toLowerCase().includes(kw))) {
      shouldCaptureLead = true
    }

    // Build system prompt
    const systemPrompt = `You are ${client.chatbotName}, a helpful AI assistant for ${client.businessName}.

Business Information:
${client.description || "A local business ready to help customers."}

Additional Context:
${client.chatbotContext || "Be helpful and friendly. Answer questions about the business."}

Guidelines:
- Be friendly, helpful, and concise
- If asked about pricing, hours, or services, provide information if available in your context
- If you don't know something specific, offer to connect them with a human
- ${shouldCaptureLead ? "The customer seems interested in contact - politely ask for their name and email/phone to follow up" : ""}
- Keep responses conversational and under 150 words unless more detail is needed`

    // Check if API key exists
    if (!process.env.ANTHROPIC_API_KEY) {
      const demoResponse = `Thanks for your message! I'm ${client.chatbotName}, here to help you with ${client.businessName}. 

[Demo Mode - Add ANTHROPIC_API_KEY for real AI responses]

How can I assist you today?`

      await prisma.chatMessage.create({
        data: {
          clientId,
          sessionId,
          role: "assistant",
          content: demoResponse,
        },
      })

      return NextResponse.json({ response: demoResponse })
    }

    // Build messages array
    const messages = history.map((msg) => ({
      role: msg.role as "user" | "assistant",
      content: msg.content,
    }))
    messages.push({ role: "user", content: message })

    // Call Claude
    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 300,
      system: systemPrompt,
      messages,
    })

    const assistantMessage = response.content[0].type === "text" ? response.content[0].text : ""

    // Save assistant message
    await prisma.chatMessage.create({
      data: {
        clientId,
        sessionId,
        role: "assistant",
        content: assistantMessage,
      },
    })

    // Check if we captured lead info
    const emailMatch = message.match(/[\w.-]+@[\w.-]+\.\w+/)
    const phoneMatch = message.match(/[\d-]{10,}/)
    const nameMatch = message.match(/(?:my name is|i'm|i am)\s+([a-z]+)/i)

    if (emailMatch || phoneMatch) {
      await prisma.lead.create({
        data: {
          clientId,
          email: emailMatch?.[0],
          phone: phoneMatch?.[0],
          name: nameMatch?.[1],
          source: "chatbot",
          message: `Chatbot conversation - Session: ${sessionId}`,
        },
      })
    }

    return NextResponse.json({ response: assistantMessage })
  } catch (error) {
    console.error("Chat error:", error)
    return NextResponse.json({ error: "Chat failed" }, { status: 500 })
  }
}
