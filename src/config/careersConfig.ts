// Careers Form Integration Configuration

export const CAREERS_CONFIG = {
  // EmailJS Credentials
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_Inzovate",
  EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_CAREERS_TEMPLATE_ID || "template_kkp1vqc",
  EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "8uL8PikwPewH6Sm9V",

  // Google Sheets Apps Script Web App URL
  GOOGLE_SHEETS_WEB_APP_URL:
    import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL ||
    "https://script.google.com/macros/s/AKfycbwX8iewsLMETb70RU5prdserHGp87jr3FNTuk46_GK0lLAJYcxs2gtTlwbIDZf4fSwzgA/exec",
};
