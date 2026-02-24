import { type NextRequest, NextResponse } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

function isValidEmail(email: string) {
  return email.includes("@") && email.includes(".");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createEmailTemplate(params: {
  name: string;
  email: string;
  subject: string;
  messageBody: string;
  submittedAt: string;
}) {
  const name = escapeHtml(params.name);
  const email = escapeHtml(params.email);
  const subject = escapeHtml(params.subject);
  const messageBody = escapeHtml(params.messageBody).replaceAll("\n", "<br/>");
  const submittedAt = escapeHtml(params.submittedAt);

  return `
  <div style="margin:0;padding:24px;background:#f4f4f5;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
      <tr>
        <td align="center">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width:680px;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e4e4e7;font-family:Poppins,Arial,sans-serif;">
            <tr>
              <td style="background:#0a0a0a;padding:28px 28px 24px 28px;">
                <p style="margin:0 0 10px 0;color:#86efac;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;font-weight:600;">
                  Ddigital Contact Form
                </p>
                <h1 style="margin:0;color:#ffffff;font-size:30px;line-height:1.2;font-weight:700;">
                  New Inquiry Received
                </h1>
                <p style="margin:10px 0 0 0;color:#d4d4d8;font-size:14px;line-height:1.6;">
                  A new message was submitted through the website contact section.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 28px 8px 28px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background:#fafafa;border:1px solid #e4e4e7;border-radius:14px;">
                  <tr>
                    <td style="padding:18px 18px 16px 18px;">
                      <p style="margin:0 0 10px 0;color:#27272a;font-size:13px;">
                        <strong>Name:</strong> ${name}
                      </p>
                      <p style="margin:0 0 10px 0;color:#27272a;font-size:13px;">
                        <strong>Email:</strong> <a href="mailto:${email}" style="color:#0a0a0a;text-decoration:underline;">${email}</a>
                      </p>
                      <p style="margin:0 0 10px 0;color:#27272a;font-size:13px;">
                        <strong>Inquiry Type:</strong> ${subject}
                      </p>
                      <p style="margin:0;color:#52525b;font-size:12px;">
                        Received: ${submittedAt}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:16px 28px 10px 28px;">
                <h2 style="margin:0 0 10px 0;color:#0a0a0a;font-size:16px;font-weight:700;">
                  Project Message
                </h2>
                <div style="padding:16px;background:#ffffff;border:1px solid #e4e4e7;border-radius:12px;color:#27272a;font-size:14px;line-height:1.7;">
                  ${messageBody}
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 28px 30px 28px;">
                <a href="mailto:${email}" style="display:inline-block;padding:12px 20px;border-radius:10px;background:#0a0a0a;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;">
                  Reply to ${name}
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
  `;
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
    const submittedAt = new Intl.DateTimeFormat("en-LK", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Colombo",
    }).format(new Date());

    const textContent = [
      "DDIGITAL CONTACT FORM",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Inquiry Type: ${subject}`,
      `Received: ${submittedAt}`,
      "",
      "Project Message:",
      messageBody,
    ].join("\n");

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
        subject: `Ddigital inquiry: ${subject} (${name})`,
        htmlContent: createEmailTemplate({
          name,
          email,
          subject,
          messageBody,
          submittedAt,
        }),
        textContent,
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
