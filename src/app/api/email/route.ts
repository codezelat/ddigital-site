import { type NextRequest, NextResponse } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

function isValidEmail(email: string) {
  return email.includes("@") && email.includes(".");
}

export async function POST(request: NextRequest) {
  const { email, name, subject, messageBody } = await request.json();

  if (!email || !name || !subject || !messageBody) {
    return NextResponse.json(
      { error: "Please fill in all fields" },
      { status: 400 }
    );
  } else if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address" },
      { status: 400 }
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || "Ddigital Website";
  const recipientEmail =
    process.env.CONTACT_RECEIVER_EMAIL || "hello@ddigital.lk";

  if (!apiKey || !senderEmail) {
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          email: senderEmail,
          name: senderName,
        },
        to: [
          {
            email: recipientEmail,
          },
        ],
        replyTo: {
          email,
          name,
        },
        subject: `Message via Ddigital contact form from ${name}`,
        textContent: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${messageBody}`,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Brevo send failed:", response.status, errorBody);
      return NextResponse.json(
        { error: "Failed to send your message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    console.error("Brevo request failed:", err);
    return NextResponse.json(
      { error: "Failed to send your message" },
      { status: 500 }
    );
  }
}
