import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.clientId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const client = await prisma.client.findUnique({
      where: { id: session.user.clientId },
      select: {
        id: true,
        chatbotEnabled: true,
        chatbotName: true,
        chatbotGreeting: true,
        chatbotColor: true,
        chatbotContext: true,
      },
    })

    return NextResponse.json({
      clientId: client?.id,
      config: {
        chatbotEnabled: client?.chatbotEnabled ?? true,
        chatbotName: client?.chatbotName ?? "AI Assistant",
        chatbotGreeting: client?.chatbotGreeting ?? "Hi! How can I help you today?",
        chatbotColor: client?.chatbotColor ?? "#3B82F6",
        chatbotContext: client?.chatbotContext ?? "",
      },
    })
  } catch (error) {
    console.error("Error fetching chatbot config:", error)
    return NextResponse.json({ error: "Failed to fetch config" }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.clientId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { chatbotEnabled, chatbotName, chatbotGreeting, chatbotColor, chatbotContext } = await req.json()

    await prisma.client.update({
      where: { id: session.user.clientId },
      data: {
        chatbotEnabled,
        chatbotName,
        chatbotGreeting,
        chatbotColor,
        chatbotContext,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating chatbot config:", error)
    return NextResponse.json({ error: "Failed to update config" }, { status: 500 })
  }
}
