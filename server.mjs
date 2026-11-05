import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __serverDir = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.SMTP_PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// ── SMTP Transporters ────────────────────────────────────────────────────────
// 1. Company SMTP Transporter (inzovatetechnologies@gmail.com)
const companyTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "inzovatetechnologies@gmail.com",
    pass: "yyyugwljlzyzawxv",
  },
});

// 2. Website System SMTP Transporter (inzovatetech@gmail.com)
const websiteTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "inzovatetech@gmail.com",
    pass: "njpveuobiiyklihe",
  },
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Inzovate SMTP Service" });
});

// ── Backend SEO Keywords Endpoints ──────────────────────────────────────────
let cachedSeoData = null;

function loadSeoKeywords() {
  if (!cachedSeoData) {
    try {
      const filePath = path.join(__serverDir, "seo-keywords.json");
      const raw = fs.readFileSync(filePath, "utf-8");
      const categorized = JSON.parse(raw);
      const allList = Array.from(new Set(Object.values(categorized).flat()));
      cachedSeoData = {
        totalKeywords: allList.length,
        categories: Object.keys(categorized),
        categorized,
        keywords: allList,
      };
    } catch (err) {
      console.error("Failed to read seo-keywords.json:", err);
      cachedSeoData = { totalKeywords: 0, categories: [], categorized: {}, keywords: [] };
    }
  }
  return cachedSeoData;
}

app.get(["/api/seo-keywords", "/api/seo/keywords"], (req, res) => {
  const data = loadSeoKeywords();
  const { category } = req.query;
  if (category && data.categorized[category]) {
    return res.json({
      success: true,
      category,
      count: data.categorized[category].length,
      keywords: data.categorized[category],
    });
  }
  res.json({
    success: true,
    totalCount: data.totalKeywords,
    categories: data.categories,
    keywords: data.keywords,
    categorized: data.categorized,
  });
});

app.get("/api/seo/categories", (req, res) => {
  const data = loadSeoKeywords();
  res.json({
    success: true,
    categories: data.categories,
    totalKeywords: data.totalKeywords,
  });
});

// ── Backend Blog Metadata Endpoints ─────────────────────────────────────────
const BLOGS_DATA = [
  {
    id: "10-essential-crm-features-2026",
    slug: "10-essential-crm-features-every-growing-business-needs-in-2026",
    title: "10 Essential CRM Features Every Growing Business Needs in 2026",
    metaTitle: "10 Essential CRM Features Every Growing Business Needs in 2026 | Inzovate",
    metaDescription:
      "Explore the 10 essential CRM features every growing business needs in 2026. Learn how lead tracking, sales pipelines, workflow automation, and custom CRM systems drive growth.",
    urlSlug: "10-essential-crm-features-every-growing-business-needs-in-2026",
    date: "October 16 2026",
    image: "/10-essential-crm-features-2026.jpg",
    primaryFocusKeyword: "10 essential CRM features every growing business needs in 2026",
    secondaryKeywords: [
      "CRM software for small businesses",
      "customer relationship management",
      "sales pipeline management",
      "CRM automation",
      "centralized customer database",
      "CRM reporting and analytics",
      "CRM email integration",
      "CRM task management",
      "custom CRM solutions"
    ],
    longTailKeywords: [
      "essential CRM features for growing businesses",
      "best CRM features for small business growth",
      "how CRM automation improves sales in 2026",
      "sales pipeline tracking for growing companies"
    ]
  },
  {
    id: "crm-for-service-based-businesses",
    slug: "crm-for-service-based-businesses",
    title: "CRM for Service-Based Businesses: A Complete Guide",
    metaTitle: "CRM for Service-Based Businesses: Complete Guide",
    metaDescription:
      "Discover how CRM software helps service-based businesses manage leads, automate sales, improve customer relationships and grow revenue.",
    urlSlug: "crm-for-service-based-businesses",
    date: "October 30 2026",
    image: "/crm-service-based-businesses.jpg",
    primaryFocusKeyword: "CRM for service-based businesses",
    secondaryKeywords: [
      "CRM software for service businesses",
      "Customer relationship management software",
      "CRM solutions for small businesses",
      "CRM implementation services",
      "CRM automation for businesses",
      "Sales pipeline management software",
      "Lead management software",
      "Customer management system",
      "CRM customization services",
      "Business process automation"
    ],
    longTailKeywords: [
      "Best CRM software for service-based companies",
      "How CRM helps service-based businesses grow",
      "Benefits of CRM software for small businesses",
      "How to automate customer management using CRM"
    ]
  }
];

app.get(["/api/blogs", "/api/blog/metadata"], (req, res) => {
  res.json({
    success: true,
    count: BLOGS_DATA.length,
    blogs: BLOGS_DATA
  });
});

app.get("/api/blogs/:slug", (req, res) => {
  const blog = BLOGS_DATA.find((b) => b.slug === req.params.slug || b.id === req.params.slug);
  if (!blog) {
    return res.status(404).json({ success: false, error: "Blog not found" });
  }
  res.json({ success: true, blog });
});

// ── Send Free Trial & Pricing Direct Emails Endpoint ─────────────────────────
app.post("/api/send-trial-emails", async (req, res) => {
  try {
    const {
      customer,
      receipt,
      pdfBase64,
      pdfFilename,
    } = req.body;

    if (!customer || !customer.email) {
      return res.status(400).json({ success: false, error: "Customer details missing" });
    }

    const {
      fullName,
      email: customerEmail,
      phone,
      countryCode,
      planName,
      planPrice,
      trialDays,
    } = customer;

    const mandateId = receipt?.mandateId || `MND-${Date.now().toString(36).toUpperCase()}`;
    const umrn = receipt?.umrn || `UMRN${Date.now().toString().slice(-8)}`;
    const trialEndDate = receipt?.trialEndDate || "In 30 days";
    const reminderDate = receipt?.reminderDate || "In 27 days";
    const paymentMethod = receipt?.paymentMethod || "NPCI UPI AutoPay";

    // Prepare PDF Attachment if provided
    const attachments = [];
    if (pdfBase64) {
      attachments.push({
        filename: pdfFilename || `Inzovate_Receipt_${mandateId}.pdf`,
        content: pdfBase64,
        encoding: "base64",
        contentType: "application/pdf",
      });
    }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // EMAIL 1: Company Mail -> Customer Mail (Confirmation & 24-hr Access & PDF)
    // From: inzovatetechnologies@gmail.com
    // To: customerEmail
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    const customerPlainText = `
Dear ${fullName},

Thank you for choosing Inzovate Technologies! Your registration for the ${planName} Plan (${trialDays}-Day Complimentary Trial) has been confirmed successfully.

SUBSCRIPTION SUMMARY:
- Plan: ${planName} Cloud CRM
- Free Trial Period: ${trialDays} Days
- Amount Charged Today: ₹0.00
- First Renewal Date: ${trialEndDate}
- Recurring Rate: ₹${Number(planPrice).toLocaleString("en-IN")}/user/month
- Mandate Reference ID: ${mandateId}
- NPCI UMRN: ${umrn}
- Payment Method: ${paymentMethod}

ACCESS PROVISIONING:
Within 24 hours, our provisioning team will configure your dedicated workspace and dispatch your login credentials to this email address (${customerEmail}).

RENEWAL REMINDER:
An automated reminder notification will be dispatched 3 days prior to renewal on ${reminderDate}. You may modify or cancel your subscription at any time with zero penalty.

Your official digital receipt (${pdfFilename || 'Receipt.pdf'}) is attached to this email.

If you have any questions or require custom onboarding support, please contact us at inzovatetechnologies@gmail.com or visit www.inzovate-technologies.com.

Warm regards,
Inzovate Technologies Private Limited
Enterprise Software & Cloud CRM Solutions
Tamil Nadu, India
    `.trim();

    const customerHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Inzovate Technologies</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f6f8; padding: 24px 12px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #0f172a; padding: 28px 24px; text-align: center;">
              <h1 style="margin: 0; color: #f8fafc; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">INZOVATE TECHNOLOGIES</h1>
              <p style="margin: 4px 0 0 0; color: #94a3b8; font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Enterprise Cloud CRM & Automation</p>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 32px 28px;">
              <h2 style="margin: 0 0 16px 0; color: #0f172a; font-size: 18px; font-weight: 600;">Welcome, ${fullName}</h2>
              <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.6; color: #475569;">
                Thank you for choosing Inzovate Technologies. Your registration for the <strong>${planName} Plan (${trialDays}-Day Free Trial)</strong> has been successfully authorized and confirmed.
              </p>

              <!-- Access Guarantee Box -->
              <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 16px; margin-bottom: 24px;">
                <h3 style="margin: 0 0 6px 0; color: #166534; font-size: 14px; font-weight: 600;">Dedicated Access Provisioning</h3>
                <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #15803d;">
                  Our enterprise provisioning team is preparing your workspace. Within 24 hours, you will receive your admin login credentials and direct access to your ${planName} CRM suite.
                </p>
              </div>

              <!-- Subscription Table -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; margin-bottom: 24px;">
                <tr>
                  <td colspan="2" style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">
                    Subscription Details
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;">Customer Name:</td>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #0f172a; text-align: right;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;">Customer Email:</td>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a; text-align: right;">${customerEmail}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;">Subscription Plan:</td>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #0f172a; text-align: right;">${planName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;">Complimentary Trial:</td>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #16a34a; text-align: right;">${trialDays} Days</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;">Charged Today:</td>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #16a34a; text-align: right;">₹0.00</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;">First Renewal Date:</td>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a; text-align: right;">${trialEndDate}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;">Recurring Rate:</td>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a; text-align: right;">₹${Number(planPrice).toLocaleString("en-IN")}/user/month</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;">Mandate ID:</td>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #f1f5f9; font-size: 12px; font-family: monospace; color: #475569; text-align: right;">${mandateId}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-size: 13px; color: #64748b;">Payment Rail:</td>
                  <td style="padding: 10px 16px; font-size: 13px; color: #0f172a; text-align: right;">${paymentMethod}</td>
                </tr>
              </table>

              <!-- Notice -->
              <p style="margin: 0 0 20px 0; font-size: 12px; line-height: 1.5; color: #64748b;">
                <strong>Renewal Reminder Notice:</strong> An automated reminder will be emailed to you 3 days prior to renewal (${reminderDate}). You may cancel or modify your subscription at any time without penalty.
              </p>

              <p style="margin: 0 0 24px 0; font-size: 12px; line-height: 1.5; color: #64748b;">
                Your official PDF receipt is attached to this email.
              </p>

              <!-- Footer Signature -->
              <div style="border-top: 1px solid #e2e8f0; padding-top: 18px; margin-top: 20px; font-size: 12px; color: #94a3b8; line-height: 1.6;">
                <p style="margin: 0 0 4px 0; font-weight: 600; color: #475569;">Inzovate Technologies Team</p>
                <p style="margin: 0;">Website: <a href="https://inzovate-technologies.com" style="color: #2563eb; text-decoration: none;">www.inzovate-technologies.com</a> | Email: <a href="mailto:inzovatetechnologies@gmail.com" style="color: #2563eb; text-decoration: none;">inzovatetechnologies@gmail.com</a></p>
              </div>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    const customerMailOptions = {
      from: `"Inzovate Technologies" <inzovatetechnologies@gmail.com>`,
      to: customerEmail,
      replyTo: "inzovatetechnologies@gmail.com",
      subject: `Welcome to Inzovate Technologies - ${planName} Plan Registration (${mandateId})`,
      text: customerPlainText,
      html: customerHtml,
      headers: {
        "X-Mailer": "Inzovate Mail Engine",
        "X-Priority": "3",
        "List-Unsubscribe": "<mailto:inzovatetechnologies@gmail.com?subject=unsubscribe>",
      },
      attachments,
    };

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // EMAIL 2: Company Mail -> Company Mail (Internal Notification & PDF)
    // From: inzovatetechnologies@gmail.com
    // To: inzovatetechnologies@gmail.com
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    const companyPlainText = `
NEW SUBSCRIPTION REGISTRATION

A new customer has completed trial registration on the website.

CLIENT PROFILE:
- Full Name: ${fullName}
- Email: ${customerEmail}
- Phone: ${countryCode || "+91"} ${phone}
- Selected Plan: ${planName} Plan
- Trial Duration: ${trialDays} Days
- First Renewal Date: ${trialEndDate}
- Recurring Debit: ₹${Number(planPrice).toLocaleString("en-IN")}/month

MANDATE DETAILS:
- Mandate ID: ${mandateId}
- NPCI UMRN: ${umrn}
- Amount Paid Today: ₹0.00
- Payment Method: ${paymentMethod}

ACTION REQUIRED:
Please create and dispatch the workspace credentials to ${customerEmail} within 24 hours.
    `.trim();

    const companyHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Subscription Alert</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; padding: 24px 12px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #1e293b; padding: 20px 24px;">
              <h2 style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 600;">NEW SUBSCRIPTION REGISTRATION</h2>
              <p style="margin: 4px 0 0 0; color: #94a3b8; font-size: 12px;">Inzovate System Notification</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 24px;">
              
              <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 14px; margin-bottom: 20px; border-radius: 0 4px 4px 0;">
                <h3 style="margin: 0 0 10px 0; font-size: 14px; color: #1e293b;">Client Information</h3>
                <p style="margin: 3px 0; font-size: 13px; color: #334155;"><strong>Name:</strong> ${fullName}</p>
                <p style="margin: 3px 0; font-size: 13px; color: #334155;"><strong>Email:</strong> <a href="mailto:${customerEmail}" style="color: #2563eb;">${customerEmail}</a></p>
                <p style="margin: 3px 0; font-size: 13px; color: #334155;"><strong>Phone:</strong> ${countryCode || "+91"} ${phone}</p>
                <p style="margin: 3px 0; font-size: 13px; color: #334155;"><strong>Plan:</strong> ${planName} (${trialDays} Days Complimentary)</p>
                <p style="margin: 3px 0; font-size: 13px; color: #334155;"><strong>Renewal Date:</strong> ${trialEndDate}</p>
                <p style="margin: 3px 0; font-size: 13px; color: #334155;"><strong>Monthly Debit:</strong> ₹${Number(planPrice).toLocaleString("en-IN")}/month</p>
              </div>

              <div style="background-color: #f8fafc; border-left: 4px solid #10b981; padding: 14px; margin-bottom: 20px; border-radius: 0 4px 4px 0;">
                <h3 style="margin: 0 0 10px 0; font-size: 14px; color: #1e293b;">Mandate & Receipt Info</h3>
                <p style="margin: 3px 0; font-size: 13px; color: #334155;"><strong>Mandate ID:</strong> <code>${mandateId}</code></p>
                <p style="margin: 3px 0; font-size: 13px; color: #334155;"><strong>UMRN:</strong> <code>${umrn}</code></p>
                <p style="margin: 3px 0; font-size: 13px; color: #334155;"><strong>Amount Charged:</strong> ₹0.00</p>
                <p style="margin: 3px 0; font-size: 13px; color: #334155;"><strong>Payment Rail:</strong> ${paymentMethod}</p>
                <p style="margin: 3px 0; font-size: 13px; color: #334155;"><strong>PDF Attachment:</strong> ${pdfFilename || 'Receipt.pdf'}</p>
              </div>

              <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; padding: 12px; font-size: 13px; color: #1e40af;">
                <strong>Action Required:</strong> Please provision workspace credentials and dispatch them to <strong>${customerEmail}</strong> within 24 hours.
              </div>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    const companyMailOptions = {
      from: `"Inzovate Web System" <inzovatetech@gmail.com>`,
      to: "inzovatetechnologies@gmail.com",
      replyTo: customerEmail,
      subject: `New Subscription Registered: ${fullName} - ${planName} Plan (${mandateId})`,
      text: companyPlainText,
      html: companyHtml,
      headers: {
        "X-Mailer": "Inzovate Mail Engine",
        "X-Priority": "3",
      },
      attachments,
    };

    // 1. Customer Confirmation: Sent via companyTransporter (inzovatetechnologies@gmail.com)
    let customerResult = null;
    try {
      customerResult = await companyTransporter.sendMail(customerMailOptions);
      console.log("✅ Customer confirmation email SENT via companyTransporter:", customerResult.messageId);
    } catch (cErr) {
      console.error("Customer email error:", cErr);
    }

    // 2. Company Alert: Sent from inzovatetech@gmail.com to inzovatetechnologies@gmail.com via websiteTransporter
    let companyResult = null;
    try {
      companyResult = await websiteTransporter.sendMail(companyMailOptions);
      console.log("✅ Company notification email SENT via websiteTransporter:", companyResult.messageId);
    } catch (wErr) {
      console.warn("websiteTransporter notification failed, trying companyTransporter fallback...", wErr);
      try {
        const fallbackOptions = {
          ...companyMailOptions,
          from: `"Inzovate Web System" <inzovatetechnologies@gmail.com>`,
        };
        companyResult = await companyTransporter.sendMail(fallbackOptions);
        console.log("✅ Company notification email SENT via fallback companyTransporter:", companyResult.messageId);
      } catch (fbErr) {
        console.error("Company email fallback error:", fbErr);
      }
    }

    return res.json({
      success: true,
      customerEmailSent: !!customerResult?.messageId,
      customerMessageId: customerResult?.messageId,
      companyEmailSent: !!companyResult?.messageId,
      companyMessageId: companyResult?.messageId,
      mandateId,
    });
  } catch (err) {
    console.error("Error sending SMTP emails:", err);
    return res.status(500).json({ success: false, error: err.message || "Failed to send SMTP emails" });
  }
});

// General contact form SMTP endpoint
app.post("/api/send-email", async (req, res) => {
  try {
    const payload = req.body;
    const senderName = payload.full_name || payload.sender_name || "Website Visitor";
    const userEmail = payload.email || payload.reply_to || "inzovatetechnologies@gmail.com";
    const subject = payload.subject || `Inquiry from ${senderName}: ${payload.form_type || 'General Lead'}`;
    const messageContent = payload.message || payload.comments || payload.description || JSON.stringify(payload, null, 2);

    const plainText = `
New inquiry received from website:

- Form Type: ${payload.form_type || 'General Inquiry'}
- Name: ${senderName}
- Email: ${userEmail}
- Phone: ${payload.phone || 'Not provided'}
- Company: ${payload.company_name || 'N/A'}
- Product/Service: ${payload.product || payload.service || 'N/A'}

Message:
${messageContent}
    `.trim();

    const targetRecipient = payload.destination_email || payload.target_email || payload.recipient_email || payload.to_email || "inzovatetechnologies@gmail.com";

    const attachments = [];
    if (payload.attachments && Array.isArray(payload.attachments)) {
      attachments.push(...payload.attachments);
    } else if (payload.resume_base64) {
      const cleanBase64 = payload.resume_base64.includes(",")
        ? payload.resume_base64.split(",")[1]
        : payload.resume_base64;
      const fileName = payload.resume_file_name || "Resume.pdf";
      attachments.push({
        filename: fileName,
        content: Buffer.from(cleanBase64, "base64"),
      });
    }

    const mailOptions = {
      from: `"Inzovate Web System" <inzovatetech@gmail.com>`,
      to: targetRecipient,
      replyTo: userEmail,
      subject: subject,
      text: plainText,
      headers: {
        "X-Mailer": "Inzovate Mail Engine",
        "X-Priority": "3",
      },
    };

    if (payload.html) {
      mailOptions.html = payload.html;
    }
    if (attachments.length > 0) {
      mailOptions.attachments = attachments;
    }

    const info = await websiteTransporter.sendMail(mailOptions);
    return res.json({ success: true, messageId: info.messageId });
  } catch (err) {
    console.error("General SMTP Error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Inzovate Direct SMTP Email Server running on port ${PORT}`);
});
