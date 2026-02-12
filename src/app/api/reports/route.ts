import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

// Generate weekly report for a client
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const clientId = searchParams.get("clientId")
    
    if (!clientId) {
      return NextResponse.json({ error: "Client ID required" }, { status: 400 })
    }

    const client = await prisma.client.findUnique({
      where: { id: clientId },
      include: { user: true },
    })

    if (!client) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 })
    }

    // Get data from last 7 days
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)

    const [leads, chatMessages, content] = await Promise.all([
      prisma.lead.findMany({
        where: { 
          clientId,
          createdAt: { gte: weekAgo }
        },
        orderBy: { createdAt: "desc" },
      }),
      prisma.chatMessage.count({
        where: { 
          clientId,
          createdAt: { gte: weekAgo }
        },
      }),
      prisma.content.count({
        where: { 
          clientId,
          createdAt: { gte: weekAgo }
        },
      }),
    ])

    // Get all-time stats
    const [totalLeads, totalChats] = await Promise.all([
      prisma.lead.count({ where: { clientId } }),
      prisma.chatMessage.count({ where: { clientId } }),
    ])

    const report = {
      client: {
        name: client.businessName,
        email: client.user.email,
      },
      period: {
        start: weekAgo.toISOString().split("T")[0],
        end: new Date().toISOString().split("T")[0],
      },
      thisWeek: {
        newLeads: leads.length,
        chatbotConversations: chatMessages,
        contentCreated: content,
      },
      allTime: {
        totalLeads,
        totalChats,
      },
      leads: leads.map(l => ({
        name: l.name || "Anonymous",
        email: l.email,
        phone: l.phone,
        message: l.message,
        date: l.createdAt,
        status: l.status,
      })),
    }

    return NextResponse.json(report)
  } catch (error) {
    console.error("Error generating report:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// Send weekly report email
export async function POST(request: NextRequest) {
  try {
    const { clientId } = await request.json()
    
    if (!clientId) {
      return NextResponse.json({ error: "Client ID required" }, { status: 400 })
    }

    // Generate report
    const reportRes = await fetch(`${process.env.NEXTAUTH_URL}/api/reports?clientId=${clientId}`)
    const report = await reportRes.json()

    // TODO: Send email using Resend or SendGrid
    // For now, return the report data that would be emailed

    const emailContent = `
Weekly Marketing Report for ${report.client.name}
${report.period.start} - ${report.period.end}

📊 THIS WEEK'S RESULTS
━━━━━━━━━━━━━━━━━━━━━
• New Leads: ${report.thisWeek.newLeads}
• Chatbot Conversations: ${report.thisWeek.chatbotConversations}
• Content Created: ${report.thisWeek.contentCreated}

📈 ALL-TIME STATS
━━━━━━━━━━━━━━━━━━━━━
• Total Leads: ${report.allTime.totalLeads}
• Total Conversations: ${report.allTime.totalChats}

🎯 NEW LEADS THIS WEEK
━━━━━━━━━━━━━━━━━━━━━
${report.leads.length > 0 
  ? report.leads.map((l: any) => `• ${l.name}${l.email ? ` - ${l.email}` : ''}${l.phone ? ` - ${l.phone}` : ''}`).join('\n')
  : 'No new leads this week'}

Questions? Reply to this email or call us!

- Your BudulTech Team
(385) 215-9346
    `.trim()

    return NextResponse.json({ 
      success: true, 
      report,
      emailPreview: emailContent 
    })
  } catch (error) {
    console.error("Error sending report:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
