import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminPassword = await bcrypt.hash("admin123", 10)
  
  const admin = await prisma.user.upsert({
    where: { email: "admin@budultech.com" },
    update: {},
    create: {
      email: "admin@budultech.com",
      name: "Admin",
      password: adminPassword,
      role: "ADMIN",
    },
  })

  console.log("Created admin user:", admin.email)

  // Create demo client
  const clientPassword = await bcrypt.hash("demo123", 10)
  
  const demoUser = await prisma.user.upsert({
    where: { email: "demo@example.com" },
    update: {},
    create: {
      email: "demo@example.com",
      name: "Demo Business",
      password: clientPassword,
      role: "CLIENT",
      client: {
        create: {
          businessName: "Demo Coffee Shop",
          businessType: "Restaurant",
          description: "A cozy coffee shop in downtown serving artisan coffee and pastries. Open 7am-7pm daily.",
          phone: "(555) 123-4567",
          website: "https://democoffee.com",
          chatbotName: "Barista Bot",
          chatbotGreeting: "Hey there! ☕ Welcome to Demo Coffee Shop. What can I help you with today?",
          chatbotContext: "We serve espresso drinks, pour-overs, teas, and fresh pastries. We offer free wifi. Our hours are 7am-7pm daily. We're located at 123 Main Street downtown.",
        },
      },
    },
    include: {
      client: true,
    },
  })

  console.log("Created demo client:", demoUser.email)

  // Add some demo leads
  if (demoUser.client) {
    await prisma.lead.createMany({
      data: [
        {
          clientId: demoUser.client.id,
          name: "John Smith",
          email: "john@example.com",
          phone: "(555) 111-2222",
          source: "chatbot",
          message: "Interested in catering for an office event",
          status: "NEW",
        },
        {
          clientId: demoUser.client.id,
          name: "Sarah Johnson",
          email: "sarah@example.com",
          source: "chatbot",
          message: "Asked about gift cards",
          status: "CONTACTED",
        },
        {
          clientId: demoUser.client.id,
          name: "Mike Wilson",
          email: "mike@example.com",
          phone: "(555) 333-4444",
          source: "chatbot",
          message: "Wants to book venue for private event",
          status: "QUALIFIED",
        },
      ],
    })

    console.log("Created demo leads")

    // Add demo content
    await prisma.content.createMany({
      data: [
        {
          clientId: demoUser.client.id,
          type: "social",
          platform: "instagram",
          title: "Morning Coffee Post",
          content: "Rise and grind! ☕ Start your Monday right with our signature house blend. First cup is on us for new visitors this week!",
          hashtags: "#coffeelover #mondaymotivation #localcoffee",
        },
        {
          clientId: demoUser.client.id,
          type: "social",
          platform: "facebook",
          title: "Weekend Special",
          content: "This weekend only: Buy any latte, get a fresh-baked croissant FREE! 🥐 Perfect pairing for your Saturday morning. See you there!",
        },
      ],
    })

    console.log("Created demo content")
  }

  console.log("\n✅ Seed completed!")
  console.log("\nLogin credentials:")
  console.log("Admin: admin@budultech.com / admin123")
  console.log("Demo:  demo@example.com / demo123")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
