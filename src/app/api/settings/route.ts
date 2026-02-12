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
    })

    if (!client) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 })
    }

    return NextResponse.json({
      businessName: client.businessName,
      businessType: client.businessType || "",
      website: client.website || "",
      phone: client.phone || "",
      address: client.address || "",
      description: client.description || "",
      sendgridApiKey: client.sendgridApiKey ? "••••••••" : "",
      twilioSid: client.twilioSid ? "••••••••" : "",
      twilioToken: client.twilioToken ? "••••••••" : "",
      twilioPhone: client.twilioPhone || "",
    })
  } catch (error) {
    console.error("Error fetching settings:", error)
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.clientId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await req.json()

    // Only update API keys if they're not the masked value
    const updateData: Record<string, string> = {
      businessName: data.businessName,
      businessType: data.businessType,
      website: data.website,
      phone: data.phone,
      address: data.address,
      description: data.description,
      twilioPhone: data.twilioPhone,
    }

    if (data.sendgridApiKey && !data.sendgridApiKey.includes("•")) {
      updateData.sendgridApiKey = data.sendgridApiKey
    }
    if (data.twilioSid && !data.twilioSid.includes("•")) {
      updateData.twilioSid = data.twilioSid
    }
    if (data.twilioToken && !data.twilioToken.includes("•")) {
      updateData.twilioToken = data.twilioToken
    }

    await prisma.client.update({
      where: { id: session.user.clientId },
      data: updateData,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating settings:", error)
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 })
  }
}
