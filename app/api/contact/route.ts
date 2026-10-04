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

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key:
          process.env.WEB3FORMS_ACCESS_KEY ||
          process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
          "1f5ef797-9188-4a69-bc57-31397ca054cb",
        name,
        email,
        company,
        message,
      }),
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.success) {
      return NextResponse.json(
        { error: result.message || "Failed to submit message to Web3Forms." },
        { status: response.status || 500 }
      );
    }
  } catch (error) {
    console.error("Web3Forms submission error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while sending message." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
