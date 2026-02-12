import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"

// GET - Fetch leads for the logged-in client
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { client: true },
    })

    if (!user?.client) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 })
    }

    const leads = await prisma.lead.findMany({
      where: { clientId: user.client.id },
      orderBy: { createdAt: "desc" },
    })

    const stats = {
      total: leads.length,
      new: leads.filter(l => l.status === "NEW").length,
      contacted: leads.filter(l => l.status === "CONTACTED").length,
      qualified: leads.filter(l => l.status === "QUALIFIED").length,
      converted: leads.filter(l => l.status === "CONVERTED").length,
    }

    return NextResponse.json({ leads, stats })
  } catch (error) {
    console.error("Error fetching leads:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// POST - Create a new lead (from chatbot or form)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { clientId, name, email, phone, message, source } = body

    if (!clientId) {
      return NextResponse.json({ error: "Client ID required" }, { status: 400 })
    }

    const lead = await prisma.lead.create({
      data: {
        clientId,
        name: name || null,
        email: email || null,
        phone: phone || null,
        message: message || null,
        source: source || "chatbot",
        status: "NEW",
      },
    })

    return NextResponse.json({ success: true, lead })
  } catch (error) {
    console.error("Error creating lead:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// PATCH - Update lead status
export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { leadId, status, notes } = body

    const lead = await prisma.lead.update({
      where: { id: leadId },
      data: {
        ...(status && { status }),
        ...(notes && { notes }),
      },
    })

    return NextResponse.json({ success: true, lead })
  } catch (error) {
    console.error("Error updating lead:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
