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

    const contents = await prisma.content.findMany({
      where: { clientId: session.user.clientId },
      orderBy: { createdAt: "desc" },
      take: 50,
    })

    return NextResponse.json(contents)
  } catch (error) {
    console.error("Error fetching content:", error)
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.clientId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { type, platform, content, hashtags, title } = await req.json()

    const savedContent = await prisma.content.create({
      data: {
        clientId: session.user.clientId,
        type,
        platform,
        content,
        hashtags,
        title,
      },
    })

    return NextResponse.json(savedContent)
  } catch (error) {
    console.error("Error saving content:", error)
    return NextResponse.json({ error: "Failed to save content" }, { status: 500 })
  }
}
