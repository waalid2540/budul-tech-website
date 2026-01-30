import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, company, budget, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Send email to you
    await resend.emails.send({
      from: 'Budul Tech Website <hello@budultech.com>',
      to: 'hello@budultech.com',
      subject: `New Lead: ${name} - ${company || 'No Company'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This lead came from your Budul Tech website contact form.</p>
      `,
    })

    // Send confirmation email to the customer
    await resend.emails.send({
      from: 'Budul Tech <hello@budultech.com>',
      to: email,
      subject: 'Thanks for contacting Budul Tech!',
      html: `
        <h2>Hi ${name}!</h2>
        <p>Thanks for reaching out to Budul Tech. We've received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to call us at <strong>(385) 215-9346</strong> if you need immediate assistance.</p>
        <br>
        <p>Best regards,</p>
        <p><strong>The Budul Tech Team</strong></p>
        <p>Utah's AI-Powered Development Agency</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
