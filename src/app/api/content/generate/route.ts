import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import Anthropic from "@anthropic-ai/sdk"
import prisma from "@/lib/prisma"

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const platformGuidelines: Record<string, string> = {
  instagram: "Keep it visual-focused, use line breaks for readability, include a call-to-action, suggest relevant hashtags (5-10)",
  facebook: "Can be longer form, encourage engagement with questions, more conversational tone",
  linkedin: "Professional tone, thought leadership angle, industry insights, no hashtags needed",
  twitter: "Keep under 280 characters, punchy and engaging, use 1-2 relevant hashtags",
  email: "Subject line + body, clear CTA, professional but personable",
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.clientId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check if API key is configured
    if (!process.env.ANTHROPIC_API_KEY) {
      // Return mock content for demo purposes
      return NextResponse.json({
        content: `🚀 [Demo Mode - Add ANTHROPIC_API_KEY to enable AI]\n\nThis is sample content about: ${(await req.json()).topic}\n\nYour actual AI-generated content will appear here once you configure your Anthropic API key in the .env file.`,
        hashtags: "#demo #aimarketing #budultech",
      })
    }

    const { topic, platform, contentType, tone } = await req.json()

    // Get client info for context
    const client = await prisma.client.findUnique({
      where: { id: session.user.clientId },
    })

    const systemPrompt = `You are an expert social media marketer and copywriter. Generate engaging ${platform} content.

Business context: ${client?.businessName || "Business"} - ${client?.description || "A growing business"}

Guidelines for ${platform}:
${platformGuidelines[platform] || "Create engaging content"}

Content type: ${contentType}
Tone: ${tone}

Return ONLY the content text, no explanations. If hashtags are appropriate, include them at the end separated by a line break.`

    const message = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 500,
      messages: [
        {
          role: "user",
          content: `Create a ${contentType} ${platform} post about: ${topic}`,
        },
      ],
      system: systemPrompt,
    })

    const responseText = message.content[0].type === "text" ? message.content[0].text : ""
    
    // Split content and hashtags
    const parts = responseText.split(/\n\n(?=#)/)
    const content = parts[0].trim()
    const hashtags = parts[1]?.trim() || ""

    return NextResponse.json({ content, hashtags })
  } catch (error) {
    console.error("Content generation error:", error)
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    )
  }
}
