const nodemailer = require("nodemailer");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ message: "Invalid request body" }),
    };
  }

  const { name, email, subject, category, message } = body;

  // Basic server-side validation
  if (!name || !email || !subject || !message) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ message: "Missing required fields" }),
    };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ message: "Invalid email address" }),
    };
  }

  // Pull env vars set in Netlify dashboard
  const { GMAIL_USER, GMAIL_APP_PASSWORD, ADMIN_EMAIL } = process.env;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !ADMIN_EMAIL) {
    console.error("Missing environment variables");
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ message: "Server configuration error" }),
    };
  }

  // Create Gmail transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kathmandu",
    dateStyle: "full",
    timeStyle: "short",
  });

  // ── Email TO admin ──────────────────────────────────────────────
  const adminMailOptions = {
    from: `"EduBoost Nepal Contact" <${GMAIL_USER}>`,
    to: ADMIN_EMAIL,
    replyTo: email,
    subject: `[Contact] ${category} — ${subject}`,
    html: `
      <div style="font-family: 'Sora', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; border-radius: 16px; overflow: hidden;">
        <!-- Header stripe -->
        <div style="height: 4px; background: linear-gradient(90deg, #003893 50%, #dc143c 50%);"></div>
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #0c1b4d 100%); padding: 28px 32px 20px;">
          <h2 style="margin: 0 0 4px; font-size: 20px; color: #fff;">📬 New Contact Message</h2>
          <p style="margin: 0; font-size: 12px; color: #94a3b8;">EduBoost Nepal — ${timestamp}</p>
        </div>
        <!-- Body -->
        <div style="padding: 28px 32px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; width: 110px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #f1f5f9; font-weight: 600;">${escapeHtml(name)}</td>
            </tr>
            <tr style="border-top: 1px solid rgba(255,255,255,0.06);">
              <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #fb923c;">${escapeHtml(email)}</a></td>
            </tr>
            <tr style="border-top: 1px solid rgba(255,255,255,0.06);">
              <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Category</td>
              <td style="padding: 10px 0; color: #f1f5f9;">
                <span style="background: rgba(249,115,22,0.15); color: #fb923c; padding: 3px 10px; border-radius: 100px; font-size: 12px;">${escapeHtml(category)}</span>
              </td>
            </tr>
            <tr style="border-top: 1px solid rgba(255,255,255,0.06);">
              <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Subject</td>
              <td style="padding: 10px 0; color: #f1f5f9; font-weight: 600;">${escapeHtml(subject)}</td>
            </tr>
          </table>
          <!-- Message box -->
          <div style="margin-top: 20px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 18px 20px;">
            <p style="margin: 0 0 8px; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <p style="margin: 0; font-size: 14px; color: #e2e8f0; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          <!-- Reply button -->
          <div style="margin-top: 24px; text-align: center;">
            <a href="mailto:${escapeHtml(email)}?subject=Re: ${escapeHtml(subject)}"
               style="display: inline-block; background: linear-gradient(135deg, #f97316, #dc2626); color: #fff; font-weight: 700; padding: 12px 28px; border-radius: 100px; text-decoration: none; font-size: 14px;">
              Reply to ${escapeHtml(name)} →
            </a>
          </div>
        </div>
        <!-- Footer -->
        <div style="padding: 16px 32px; background: rgba(0,0,0,0.2); text-align: center; font-size: 11px; color: #475569;">
          EduBoost Nepal · contact@nabint.com.np · Kathmandu, Nepal 🇳🇵
        </div>
      </div>
    `,
  };

  // ── Auto-reply TO the user ──────────────────────────────────────
  const userMailOptions = {
    from: `"EduBoost Nepal" <${GMAIL_USER}>`,
    to: email,
    subject: `We received your message — EduBoost Nepal`,
    html: `
      <div style="font-family: 'Sora', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; border-radius: 16px; overflow: hidden;">
        <div style="height: 4px; background: linear-gradient(90deg, #003893 50%, #dc143c 50%);"></div>
        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #0c1b4d 100%); padding: 28px 32px 20px;">
          <h2 style="margin: 0 0 4px; font-size: 20px; color: #fff;">✅ Message Received!</h2>
          <p style="margin: 0; font-size: 12px; color: #94a3b8;">EduBoost Nepal</p>
        </div>
        <div style="padding: 28px 32px;">
          <p style="margin: 0 0 16px; font-size: 15px; color: #f1f5f9;">Hi <strong>${escapeHtml(name)}</strong>,</p>
          <p style="margin: 0 0 16px; font-size: 14px; color: #94a3b8; line-height: 1.7;">
            Thanks for contacting EduBoost Nepal! We've received your message and will get back to you within <strong style="color: #fb923c;">1–2 business days</strong>.
          </p>
          <!-- Message summary -->
          <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 16px 20px; margin-bottom: 20px;">
            <p style="margin: 0 0 6px; font-size: 12px; color: #64748b;">Your message</p>
            <p style="margin: 0 0 4px; font-size: 13px; font-weight: 600; color: #f1f5f9;">${escapeHtml(subject)}</p>
            <p style="margin: 0; font-size: 13px; color: #94a3b8; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          <p style="margin: 0 0 24px; font-size: 13px; color: #64748b; line-height: 1.6;">
            While you wait, check out our latest study guides and NEB exam tips on the blog.
          </p>
          <div style="text-align: center;">
            <a href="https://eduboostnepal.nabint.com.np/pages/blog.html"
               style="display: inline-block; background: linear-gradient(135deg, #f97316, #dc2626); color: #fff; font-weight: 700; padding: 12px 28px; border-radius: 100px; text-decoration: none; font-size: 14px;">
              Browse Study Guides →
            </a>
          </div>
        </div>
        <div style="padding: 16px 32px; background: rgba(0,0,0,0.2); text-align: center; font-size: 11px; color: #475569;">
          EduBoost Nepal · Kathmandu, Nepal 🇳🇵 · <a href="https://eduboostnepal.nabint.com.np" style="color: #475569;">eduboostnepal.nabint.com.np</a>
        </div>
      </div>
    `,
  };

  try {
    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: "Message sent successfully" }),
    };
  } catch (err) {
    console.error("Email send error:", err);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        message: "Failed to send message. Please try again.",
      }),
    };
  }
};

// Helper: prevent XSS in HTML emails
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
