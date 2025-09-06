import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import validator from 'validator'

interface EmailRequestBody {
  name: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as EmailRequestBody

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      )
    }

    if (!validator.isEmail(body.email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Sanitize input
    const sanitizedName = validator.escape(body.name)
    const sanitizedEmail = validator.normalizeEmail(body.email)!
    const sanitizedMessage = validator.escape(body.message)

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.TARGET_EMAIL,
      subject: `New inquiry from ${sanitizedName}`,
      text: `
        Name: ${sanitizedName}
        Email: ${sanitizedEmail}
        Message: ${sanitizedMessage}
      `,
      html: `
        <h3>New Design Inquiry</h3>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage}</p>
      `,
    })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      {
        message: error instanceof Error
          ? error.message
          : 'Failed to send message'
      },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  })
}
