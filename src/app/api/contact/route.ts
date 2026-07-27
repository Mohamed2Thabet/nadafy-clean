/**
 * Contact Form API Route
 * Handles form submissions and sends emails via Resend
 * Server-side only - no client exposure
 */

import { NextRequest, NextResponse } from 'next/server'
import type { ContactFormData } from '@/types'

/**
 * Validates email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validates phone number (Saudi format)
 */
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+966|966|0)?5[0-9]{8}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

/**
 * Sanitizes input to prevent XSS
 */
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim()
}

/**
 * POST handler for contact form submissions
 */
export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const body = await req.json()
    const { name, phone, email, service, message } = body as ContactFormData

    // Validate required fields
    if (!name || !phone || !email || !service || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate phone format
    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    // Check for Resend API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      phone: sanitizeInput(phone),
      email: sanitizeInput(email),
      service: sanitizeInput(service),
      message: sanitizeInput(message),
    }

    // Send email via Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Rich Sea Clean <onboarding@resend.dev>',
        to: [process.env.CONTACT_EMAIL || 'iu9deem@gmail.com'],
        subject: `طلب جديد - ${sanitizedData.service}`,
        html: `
          <!DOCTYPE html>
          <html dir="rtl" lang="ar">
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #00A3AD; color: white; padding: 20px; text-align: center; }
              .content { background: #f9f9f9; padding: 20px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #00A3AD; }
              .value { margin-top: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>طلب جديد من موقع البحر الزاخر</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">الاسم:</div>
                  <div class="value">${sanitizedData.name}</div>
                </div>
                <div class="field">
                  <div class="label">رقم الجوال:</div>
                  <div class="value">${sanitizedData.phone}</div>
                </div>
                <div class="field">
                  <div class="label">البريد الإلكتروني:</div>
                  <div class="value">${sanitizedData.email}</div>
                </div>
                <div class="field">
                  <div class="label">الخدمة المطلوبة:</div>
                  <div class="value">${sanitizedData.service}</div>
                </div>
                <div class="field">
                  <div class="label">الرسالة:</div>
                  <div class="value">${sanitizedData.message}</div>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    })

    const data = await response.json()

    // Log response for debugging (remove in production)
    if (process.env.NODE_ENV === 'development') {
      console.log('Resend API Response:', data)
    }

    // Check if email was sent successfully
    if (!response.ok) {
      throw new Error(data?.message || 'Failed to send email')
    }

    return NextResponse.json({
      success: true,
      message: 'تم إرسال طلبك بنجاح',
    })
  } catch (error) {
    // Log error for debugging
    console.error('Contact form error:', error)

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'حدث خطأ غير متوقع',
      },
      { status: 500 }
    )
  }
}
