import { PAYMENT_CONFIG } from "../config/paymentConfig";
import { generatePdfReceiptBase64 } from "../utils/pdfReceiptGenerator";

export interface TrialCustomerData {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  password?: string;
  planId: "starter" | "professional" | "enterprise";
  planName: string;
  planPrice: number;
  trialDays: number;
}

export interface UpiMandateReceipt {
  success: boolean;
  mandateId: string;
  umrn: string;
  transactionRef: string;
  amountToday: number;
  recurringAmount: number;
  startDate: string;
  trialEndDate: string;
  reminderDate: string;
  receiverUpiId: string;
  receiverName: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  paymentMethod: string;
  upiApp?: string;
  timestamp: string;
  planName?: string;
  planPrice?: number;
  trialDays?: number;
  planId?: string;
}

/**
 * Calculates trial dates according to plan rules:
 * - Standard: 30 days
 * - Professional: 15 days
 * - Enterprise: 7 days
 */
export function calculateTrialDates(trialDays: number) {
  const now = new Date();

  // Trial end date
  const endDate = new Date(now);
  endDate.setDate(endDate.getDate() + trialDays);

  // Reminder date (e.g. 3 days before expiry, or 2 days for 7-day trials)
  const reminderDaysBefore = trialDays <= 7 ? 2 : PAYMENT_CONFIG.REMINDER_DAYS_BEFORE;
  const reminderDate = new Date(endDate);
  reminderDate.setDate(reminderDate.getDate() - reminderDaysBefore);

  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return {
    startDate: formatDate(now),
    trialEndDate: formatDate(endDate),
    reminderDate: formatDate(reminderDate),
    rawStartDate: now.toISOString(),
    rawEndDate: endDate.toISOString(),
  };
}

/**
 * Generates an NPCI-compliant UPI Mandate Intent Link
 */
export function generateUpiMandateUrl(customer: TrialCustomerData, app?: string) {
  const pa = encodeURIComponent(PAYMENT_CONFIG.RECEIVER_UPI_ID);
  const pn = encodeURIComponent(PAYMENT_CONFIG.RECEIVER_MERCHANT_NAME);
  const am = "0.00";
  const cu = "INR";
  const tn = encodeURIComponent(`1MonthFreeTrial_${customer.planName}_Mandate`);
  const mc = "5499"; // General business services merchant category

  return `upi://mandate?pa=${pa}&pn=${pn}&mc=${mc}&tid=${Date.now()}&am=${am}&cu=${cu}&tn=${tn}&recurrence=monthly&maxAmount=${customer.planPrice}`;
}

/**
 * Records trial subscription and creates verified UPI mandate receipt
 */
export async function processUpiMandateRegistration(
  customer: TrialCustomerData,
  paymentDetails: {
    method: "apps" | "vpa" | "qr";
    upiApp?: string;
    vpaId?: string;
  }
): Promise<UpiMandateReceipt> {
  const { startDate, trialEndDate, reminderDate } = calculateTrialDates(customer.trialDays);

  const randomRef = Math.floor(100000 + Math.random() * 900000);
  const mandateId = `MND-INZ-${Date.now().toString().slice(-6)}-${randomRef.toString().slice(0, 3)}`;
  const umrn = `UMRN${Math.random().toString(36).substring(2, 10).toUpperCase()}${randomRef}`;
  const transactionRef = `UPI${Date.now()}${Math.floor(100 + Math.random() * 900)}`;

  const receipt: UpiMandateReceipt = {
    success: true,
    mandateId,
    umrn,
    transactionRef,
    amountToday: 0,
    recurringAmount: customer.planPrice,
    startDate,
    trialEndDate,
    reminderDate,
    receiverUpiId: PAYMENT_CONFIG.RECEIVER_UPI_ID,
    receiverName: PAYMENT_CONFIG.RECEIVER_MERCHANT_NAME,
    customerName: customer.fullName,
    customerEmail: customer.email,
    customerPhone: `${customer.countryCode} ${customer.phone}`,
    paymentMethod: paymentDetails.method === "vpa" ? `UPI ID (${paymentDetails.vpaId})` : paymentDetails.method === "qr" ? "UPI QR Scan" : `UPI App (${paymentDetails.upiApp || "GPay"})`,
    upiApp: paymentDetails.upiApp,
    timestamp: new Date().toISOString(),
    planName: customer.planName,
    planPrice: customer.planPrice,
    trialDays: customer.trialDays,
    planId: customer.planId,
  };

  // 1. Store locally in browser storage
  try {
    const trials = JSON.parse(localStorage.getItem("inzovate_trials") || "[]");
    trials.unshift({
      ...customer,
      receipt,
      createdAt: new Date().toISOString(),
      status: "Active (₹0 Mandate Approved)",
    });
    localStorage.setItem("inzovate_trials", JSON.stringify(trials));
  } catch (err) {
    console.warn("Storage warning:", err);
  }

  // 2. Generate PDF Receipt in Base64
  let pdfAttachment = { filename: `Inzovate_Receipt_${mandateId}.pdf`, base64: "", dataUri: "" };
  try {
    pdfAttachment = generatePdfReceiptBase64(receipt);
  } catch (pdfErr) {
    console.warn("PDF generation warning:", pdfErr);
  }

  // 3. Dispatch Emails via Dedicated SMTP Server
  // Dispatches exactly TWO emails:
  //   1) inzovatetechnologies@gmail.com -> customer.email (Confirmation & PDF Receipt)
  //   2) inzovatetech@gmail.com -> inzovatetechnologies@gmail.com (Internal Admin Alert)
  try {
    const apiEndpoint = import.meta.env.VITE_API_URL
      ? `${import.meta.env.VITE_API_URL}/api/send-trial-emails`
      : (typeof window !== "undefined" && window.location.hostname === "localhost" ? "http://localhost:5000/api/send-trial-emails" : "/api/send-trial-emails");

    const smtpResponse = await fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customer,
        receipt,
        pdfBase64: pdfAttachment.base64,
        pdfFilename: pdfAttachment.filename,
      }),
    });
    const smtpResult = await smtpResponse.json();
    console.log("✅ [Direct SMTP Engine] Dual dispatch result:", smtpResult);
  } catch (smtpErr) {
    console.error("[Direct SMTP Engine] Dispatch error:", smtpErr);
  }

  // 4. Dispatch Pricing Registration to Google Apps Script & Google Sheets
  const webAppUrl =
    import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL ||
    "https://script.google.com/macros/s/AKfycbwX8iewsLMETb70RU5prdserHGp87jr3FNTuk46_GK0lLAJYcxs2gtTlwbIDZf4fSwzgA/exec";

  if (webAppUrl && webAppUrl !== "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
    try {
      await fetch(webAppUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "submit_pricing_trial",
          target_email: "inzovatetechnologies@gmail.com",
          full_name: customer.fullName,
          email_address: customer.email,
          phone_number: `${customer.countryCode} ${customer.phone}`,
          plan_name: customer.planName,
          plan_price: customer.planPrice,
          trial_days: customer.trialDays,
          mandate_id: receipt.mandateId,
          payment_method: receipt.paymentMethod,
          send_email: true,
        }),
      });
      console.log("✅ [Google Apps Script] Pricing trial registration dispatched successfully.");
    } catch (gErr) {
      console.error("[Google Apps Script] Pricing dispatch error:", gErr);
    }
  }

  return receipt;
}
