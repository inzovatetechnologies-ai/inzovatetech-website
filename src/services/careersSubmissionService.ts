import emailjs from "@emailjs/browser";
import { CAREERS_CONFIG } from "../config/careersConfig";

export interface CareersFormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  position: string;
  resumeUrl: string;
  resumeBase64?: string;
  resumeFileName?: string;
  message: string;
}

export interface SubmissionResult {
  success: boolean;
  applicationId: string;
  emailSent: boolean;
  sheetSaved: boolean;
  message?: string;
  error?: string;
}

/**
 * Generates a unique Application ID (e.g., APP-20260905-8492)
 */
export function generateApplicationId(): string {
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, "");
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `APP-${dateStr}-${randomNum}`;
}

/**
 * Formats current date and time into a readable timestamp string
 */
export function formatSubmissionDate(): string {
  const now = new Date();
  return now.toLocaleString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

/**
 * Sends application details to EmailJS and appends to Google Sheets independently.
 */
export async function submitCareersForm(
  formData: CareersFormData
): Promise<SubmissionResult> {
  const applicationId = generateApplicationId();
  const submittedDate = formatSubmissionDate();

  let emailSent = false;
  let sheetSaved = false;

  const serviceId = CAREERS_CONFIG.EMAILJS_SERVICE_ID;
  const templateId = CAREERS_CONFIG.EMAILJS_TEMPLATE_ID;
  const publicKey = CAREERS_CONFIG.EMAILJS_PUBLIC_KEY;
  const webAppUrl = CAREERS_CONFIG.GOOGLE_SHEETS_WEB_APP_URL;

  // 1. Send Email directly via Dedicated SMTP Server to inzovatetech@gmail.com
  try {
    const apiEndpoint = import.meta.env.VITE_API_URL
      ? `${import.meta.env.VITE_API_URL}/api/send-email`
      : (typeof window !== "undefined" && window.location.hostname === "localhost" ? "http://localhost:5000/api/send-email" : "/api/send-email");

    const directRes = await fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        form_type: `Job Application: ${formData.position}`,
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        destination_email: "inzovatetech@gmail.com",
        subject: `💼 [JOB & INTERNSHIP APPLICATION] ${formData.position} - ${formData.name}`,
        resume_base64: formData.resumeBase64,
        resume_file_name: formData.resumeFileName,
      }),
    });
    const directData = await directRes.json();
    if (directData.success) {
      emailSent = true;
      console.log("✓ Direct SMTP email sent to inzovatetech@gmail.com:", directData.messageId);
    }
  } catch (directErr) {
    console.warn("Direct SMTP email warning, trying fallback:", directErr);
  }

  // 2. Backup Send Email via EmailJS Browser SDK
  if (publicKey && publicKey !== "YOUR_EMAILJS_PUBLIC_KEY" && serviceId && templateId) {
    try {
      const templateParams = {
        to_email: "inzovatetech@gmail.com",
        recipient_email: "inzovatetech@gmail.com",
        target_email: "inzovatetech@gmail.com",
        destination_email: "inzovatetech@gmail.com",
        careers_email: "inzovatetech@gmail.com",
        to_name: "Inzovate HR Team",
        application_id: applicationId,
        submitted_date: submittedDate,
        
        full_name: formData.name,
        name: formData.name,
        from_name: formData.name,
        
        email_address: formData.email,
        email: formData.email,
        from_email: formData.email,
        
        phone_number: formData.phone || "Not provided",
        phone: formData.phone || "Not provided",
        
        experience_level: formData.experience,
        experience: formData.experience,
        
        position_applying_for: formData.position,
        position: formData.position,
        
        resume_url: formData.resumeUrl || (formData.resumeFileName ? `File: ${formData.resumeFileName}` : "Not provided"),
        resume: formData.resumeUrl || (formData.resumeFileName ? `File: ${formData.resumeFileName}` : "Not provided"),
        resume_file_name: formData.resumeFileName || "Resume.pdf",
        
        cover_letter: formData.message || "Not provided",
        message: formData.message || "Not provided",

        application_status: "New",
        interview_status: "Not Scheduled",
      };

      const emailResponse = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      if (emailResponse.status === 200 || emailResponse.text === "OK") {
        emailSent = true;
        console.log("✓ EmailJS email sent successfully:", emailResponse);
      } else {
        console.warn("EmailJS responded with non-200 status:", emailResponse);
      }
    } catch (err: any) {
      console.error("❌ EmailJS submission error:", err);
      if (err?.text) {
        console.error("EmailJS Error details:", err.text);
      }
    }
  } else {
    console.warn("EmailJS credentials incomplete or placeholder in configuration.");
  }

  const emailSentStatus = emailSent ? "Yes" : "No";

  // 2. Save Application details into Google Sheets via Web App URL
  if (webAppUrl && webAppUrl !== "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
    try {
      const rawBase64 = formData.resumeBase64 || "";
      const pureBase64 = rawBase64.includes(",") ? rawBase64.split(",")[1] : rawBase64;
      const fileName = formData.resumeFileName || `${(formData.name || "Candidate").replace(/[^a-zA-Z0-9]/g, "_")}_Resume.pdf`;

      const sheetPayload = {
        action: "submit_careers_application",
        target_email: "inzovatetech@gmail.com",
        recipient_email: "inzovatetech@gmail.com",
        to_email: "inzovatetech@gmail.com",
        destination_email: "inzovatetech@gmail.com",
        admin_email: "inzovatetech@gmail.com",
        notify_email: "inzovatetech@gmail.com",
        notification_email: "inzovatetech@gmail.com",
        hr_email: "inzovatetech@gmail.com",
        application_id: applicationId,
        submitted_date: submittedDate,
        full_name: formData.name,
        email_address: formData.email,
        phone_number: formData.phone || "Not provided",
        experience_level: formData.experience,
        position_applying_for: formData.position,
        resume_url: formData.resumeUrl || "Not provided",
        resume_file_name: fileName,
        resume_base64: pureBase64,
        cover_letter: formData.message || "Not provided",
        application_status: "New",
        hr_notes: "",
        interview_date: "",
        interview_status: "Not Scheduled",
        email_sent: "Yes",
        send_email: false,
        skip_admin_email: true,
      };

      // POST to Google Apps Script Web App
      // Using mode: "no-cors" and text/plain ensures seamless cross-origin dispatch
      await fetch(webAppUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(sheetPayload),
      });

      sheetSaved = true;
      console.log("✓ Google Sheets submission dispatched successfully.");
    } catch (err) {
      console.error("❌ Google Sheets Web App submission error:", err);
    }
  } else {
    console.warn("Google Sheets Web App URL incomplete or placeholder.");
  }

  return {
    success: true,
    applicationId,
    emailSent,
    sheetSaved,
    message: `Application ${applicationId} processed successfully.`,
  };
}
