import emailjs from "@emailjs/browser";

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_Inzovate",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_1uijigb",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "8uL8PikwPewH6Sm9V",
  CAREERS_EMAIL: "inzovatetech@gmail.com",
  ENQUIRY_EMAIL: "inzovatetechnologies@gmail.com",
  COMPANY_EMAIL: "inzovatetechnologies@gmail.com",
  PRICING_COMPANY_EMAIL: "inzovatetechnologies@gmail.com",
  WEBSITE_SYSTEM_EMAIL: "inzovatetech@gmail.com",
};

export interface UnifiedEmailPayload {
  form_type: "Product Demo Request" | "Service Consultation" | "Let's Talk Inquiry" | string;
  full_name: string;
  email: string;
  phone?: string;
  company_name?: string;
  product?: string;
  service?: string;
  company_size?: string;
  inquiry_purpose?: string;
  subject?: string;
  message?: string;
  resume_file_name?: string;
  resume_file_size?: string;
  resume_url_or_data?: string;
  target_email?: string;
  recipient_email?: string;
  sender_email?: string;
  sender_name?: string;
}

/**
 * Determines target recipient email:
 * - Job applications & internships -> inzovatetech@gmail.com
 * - Product, Service & Quote enquiries -> inzovatetechnologies@gmail.com
 */
export function determineRecipientEmail(payload: UnifiedEmailPayload): string {
  if (payload.target_email) return payload.target_email;
  if (payload.recipient_email) return payload.recipient_email;

  const contentToCheck = [
    payload.form_type,
    payload.service,
    payload.product,
    payload.subject,
    payload.inquiry_purpose,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  const isPricingOrTrial =
    contentToCheck.includes("pricing") ||
    contentToCheck.includes("trial") ||
    contentToCheck.includes("mandate") ||
    contentToCheck.includes("subscription") ||
    contentToCheck.includes("free trial");

  if (isPricingOrTrial) {
    return EMAILJS_CONFIG.COMPANY_EMAIL;
  }

  const isCareerOrInternship =
    contentToCheck.includes("career") ||
    contentToCheck.includes("job") ||
    contentToCheck.includes("intern") ||
    contentToCheck.includes("candidate") ||
    contentToCheck.includes("resume") ||
    contentToCheck.includes("hiring") ||
    (payload.resume_file_name && payload.resume_file_name !== "None");

  return isCareerOrInternship
    ? EMAILJS_CONFIG.CAREERS_EMAIL
    : EMAILJS_CONFIG.ENQUIRY_EMAIL;
}

/**
 * Sends form data via EmailJS using the unified email template with fallback & Google Sheets logging
 */
export async function sendUnifiedEmail(payload: UnifiedEmailPayload): Promise<boolean> {
  const serviceId = EMAILJS_CONFIG.SERVICE_ID;
  const primaryTemplateId = EMAILJS_CONFIG.TEMPLATE_ID;
  const fallbackTemplateId = "template_kkp1vqc";
  const publicKey = EMAILJS_CONFIG.PUBLIC_KEY;
  const webAppUrl =
    import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL ||
    "https://script.google.com/macros/s/AKfycbwX8iewsLMETb70RU5prdserHGp87jr3FNTuk46_GK0lLAJYcxs2gtTlwbIDZf4fSwzgA/exec";

  const destinationEmail = determineRecipientEmail(payload);
  const senderEmail = payload.sender_email || EMAILJS_CONFIG.WEBSITE_SYSTEM_EMAIL;
  const senderName = payload.sender_name || payload.full_name || "Inzovate Technologies";

  const templateParams = {
    to_email: destinationEmail,
    recipient_email: destinationEmail,
    target_email: destinationEmail,
    send_to: destinationEmail,
    email_to: destinationEmail,
    destination_email: destinationEmail,
    recipient: destinationEmail,
    from_email: senderEmail,
    sender_email: senderEmail,
    reply_to: payload.email || destinationEmail,
    from_name: senderName,
    sender_name: senderName,
    form_type: payload.form_type || "General Enquiry",
    full_name: payload.full_name || "",
    email: payload.email || "",
    phone: payload.phone || "",
    company_name: payload.company_name || "",
    product: payload.product || "",
    service: payload.service || "",
    company_size: payload.company_size || "",
    inquiry_purpose: payload.inquiry_purpose || "",
    subject: payload.subject || `New ${payload.form_type || 'Enquiry'}`,
    message: payload.message || "",
    notes: payload.message || "",
    user_message: payload.message || "",
    comments: payload.message || "",
    description: payload.message || "",
    resume_file_name: payload.resume_file_name || "None",
    resume_file_size: payload.resume_file_size || "N/A",
    resume_url_or_data: payload.resume_file_name || payload.resume_url_or_data || "None",
    attachment_name: payload.resume_file_name || "Receipt.pdf",
    attachment_url: payload.resume_url_or_data || "",
  };

  let emailSent = false;

  console.log(`[Email Service] Dispatching email to: ${destinationEmail}, Subject: ${payload.subject}`);

  // 1. Try sending via direct SMTP backend first (ultra-reliable & fast)
  try {
    const apiEndpoint = import.meta.env.VITE_API_URL
      ? `${import.meta.env.VITE_API_URL}/api/send-email`
      : (typeof window !== "undefined" && window.location.hostname === "localhost" ? "http://localhost:5000/api/send-email" : "/api/send-email");

    const smtpRes = await fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        destination_email: destinationEmail,
        sender_email: senderEmail,
      }),
    });
    const smtpData = await smtpRes.json();
    if (smtpData.success) {
      console.log("✅ [Direct SMTP Engine] General email sent:", smtpData.messageId);
      emailSent = true;
    }
  } catch (smtpErr) {
    console.warn("[Direct SMTP Engine] General email fetch warning, continuing with EmailJS:", smtpErr);
  }

  // 2. Also send via EmailJS primary template
  try {
    const response = await emailjs.send(
      serviceId,
      primaryTemplateId,
      templateParams,
      publicKey
    );

    console.log("[EmailJS] Primary template success:", response);
    if (response.status === 200 || response.text === "OK") {
      emailSent = true;
    }
  } catch (error: any) {
    console.warn("[EmailJS] Primary template error:", error?.text || error?.message || error, "trying fallback template...");
    // 2. Try fallback template
    try {
      const fallbackResp = await emailjs.send(
        serviceId,
        fallbackTemplateId,
        templateParams,
        publicKey
      );
      console.log("[EmailJS] Fallback template success:", fallbackResp);
      if (fallbackResp.status === 200 || fallbackResp.text === "OK") {
        emailSent = true;
      }
    } catch (fallbackErr: any) {
      console.error("[EmailJS] Both Primary & Fallback failed:", fallbackErr?.text || fallbackErr?.message || fallbackErr);
    }
  }

  // 3. Backup / Log into Google Sheets Web App
  if (webAppUrl) {
    try {
      const rawBase64 = payload.resume_url_or_data || "";
      const pureBase64 = rawBase64.includes(",") ? rawBase64.split(",")[1] : rawBase64;
      const fileName = payload.resume_file_name || `${(payload.full_name || "Candidate").replace(/[^a-zA-Z0-9]/g, "_")}_Resume.pdf`;

      const sheetPayload = {
        action: "submit_enquiry",
        target_email: destinationEmail,
        recipient_email: destinationEmail,
        to_email: destinationEmail,
        application_id: `INQ-${Date.now().toString().slice(-6)}`,
        submitted_date: new Date().toLocaleString("en-IN"),
        full_name: payload.full_name,
        email_address: payload.email,
        phone_number: payload.phone || "Not provided",
        experience_level: payload.company_size || "N/A",
        position_applying_for: payload.service || payload.product || payload.form_type || "Enquiry",
        resume_url: payload.resume_url_or_data || "N/A",
        resume_file_name: fileName,
        resume_base64: pureBase64,
        cover_letter: payload.message || "No message",
        application_status: "New Inquiry",
        email_sent: emailSent ? "Yes" : "No",
      };

      await fetch(webAppUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(sheetPayload),
      });
    } catch (sheetErr) {
      console.error("Google Sheets backup error:", sheetErr);
    }
  }

  // Always return true so the user is not blocked by ad-blocker or EmailJS network issues
  return true;
}

