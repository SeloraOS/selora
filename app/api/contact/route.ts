import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  // Wire up an email provider or CRM webhook here to deliver the submission.
  console.info("New contact submission", { name, email, company, message });

  return NextResponse.json({ success: true });
}
