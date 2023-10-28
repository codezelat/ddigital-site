import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, subject, messageBody } = await request.json();

  if (!email || !name || !subject || !messageBody) {
    return NextResponse.json(
      { error: "Please fill in all fields" },
      { status: 400 }
    );
  } else if (!email.includes("@") || !email.includes(".")) {
    return NextResponse.json(
      { error: "Please enter a valid email address" },
      { status: 400 }
    );
  }

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    // cc: email, (uncomment this line when it's required to send a copy to the sender)
    subject: `Message via Ddigital contact form from ${name}`,
    text: `Name: ${name} \n Email: ${email} \n Subject: ${subject} \n Message: ${messageBody}`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Your message has been sent successfully");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
