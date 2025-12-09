import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour window

function getClientIP(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
         req.headers.get("x-real-ip") || 
         "unknown";
}

function isRateLimited(clientIP: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(clientIP);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }
  
  record.count++;
  return false;
}

// Input validation functions
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validateInput(data: unknown): { valid: boolean; error?: string; parsed?: { name: string; email: string; message: string } } {
  if (!data || typeof data !== "object") {
    return { valid: false, error: "Invalid request body" };
  }

  const { name, email, message } = data as Record<string, unknown>;

  // Validate name
  if (typeof name !== "string" || name.trim().length === 0) {
    return { valid: false, error: "Name is required" };
  }
  if (name.trim().length > 100) {
    return { valid: false, error: "Name must be 100 characters or less" };
  }

  // Validate email
  if (typeof email !== "string" || email.trim().length === 0) {
    return { valid: false, error: "Email is required" };
  }
  if (!validateEmail(email.trim())) {
    return { valid: false, error: "Invalid email address" };
  }

  // Validate message
  if (typeof message !== "string" || message.trim().length === 0) {
    return { valid: false, error: "Message is required" };
  }
  if (message.trim().length > 5000) {
    return { valid: false, error: "Message must be 5000 characters or less" };
  }

  return {
    valid: true,
    parsed: {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    },
  };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIP = getClientIP(req);
    if (isRateLimited(clientIP)) {
      console.log("Rate limit exceeded for IP:", clientIP);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Parse and validate input
    let requestData: unknown;
    try {
      requestData = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON in request body" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const validation = validateInput(requestData);
    if (!validation.valid || !validation.parsed) {
      console.log("Validation failed:", validation.error);
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, message } = validation.parsed;

    // Sanitize for HTML email
    const safeName = sanitizeHtml(name);
    const safeEmail = sanitizeHtml(email);
    const safeMessage = sanitizeHtml(message);

    console.log("Sending contact email from:", email, "name:", name);

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["ivanlay88@gmail.com"],
        reply_to: email,
        subject: `New Contact Form Submission from ${safeName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const error = await emailResponse.text();
      throw new Error(`Failed to send email: ${error}`);
    }

    const result = await emailResponse.json();
    console.log("Email sent successfully:", result);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred while sending your message" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
