import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"

// GET - Fetch all clients (admin only)
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check if user is admin
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })

    if (user?.role !== "ADMIN") {
      return NextResponse.json({ error: "Admin access required" }, { status: 403 })
    }

    // Get all clients with stats
    const clients = await prisma.client.findMany({
      include: {
        user: {
          select: { email: true, name: true },
        },
        _count: {
          select: { 
            leads: true, 
            chatMessages: true,
            contents: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    })

    // Get aggregate stats
    const [totalLeads, totalChats] = await Promise.all([
      prisma.lead.count(),
      prisma.chatMessage.count(),
    ])

    const stats = {
      totalClients: clients.length,
      totalLeads,
      totalChats,
      activeThisWeek: clients.length, // TODO: Calculate based on activity
    }

    return NextResponse.json({ clients, stats })
  } catch (error) {
    console.error("Error fetching clients:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// POST - Create new client (admin only)
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const adminUser = await prisma.user.findUnique({
      where: { email: session.user.email },
    })

    if (adminUser?.role !== "ADMIN") {
      return NextResponse.json({ error: "Admin access required" }, { status: 403 })
    }

    const body = await request.json()
    const { 
      businessName, 
      businessType, 
      contactEmail, 
      contactName,
      phone, 
      website, 
      description,
      chatbotName,
      chatbotGreeting,
      chatbotColor,
    } = body

    if (!businessName || !contactEmail) {
      return NextResponse.json({ error: "Business name and contact email required" }, { status: 400 })
    }

    // Create user account for client (they won't use it, but needed for data model)
    const clientUser = await prisma.user.create({
      data: {
        email: contactEmail,
        name: contactName || businessName,
        password: "", // No password - they don't log in
        role: "CLIENT",
        client: {
          create: {
            businessName,
            businessType: businessType || null,
            phone: phone || null,
            website: website || null,
            description: description || null,
            chatbotName: chatbotName || "AI Assistant",
            chatbotGreeting: chatbotGreeting || "Hi! How can I help you today?",
            chatbotColor: chatbotColor || "#3B82F6",
          },
        },
      },
      include: {
        client: true,
      },
    })

    return NextResponse.json({ success: true, client: clientUser.client })
  } catch (error: any) {
    console.error("Error creating client:", error)
    if (error.code === "P2002") {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 })
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
