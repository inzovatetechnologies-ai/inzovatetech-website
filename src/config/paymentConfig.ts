/**
 * Inzovate Technologies — Payment & UPI Mandate Gateway Configuration
 * Receiver bank and UPI configuration for collecting customer subscriptions.
 */

export interface ReceiverBankDetails {
  upiId: string;
  merchantName: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  branch: string;
  accountType: string;
}

export const PAYMENT_CONFIG = {
  // Receiver UPI ID (VPA) for AutoPay Mandates
  RECEIVER_UPI_ID: import.meta.env.VITE_RECEIVER_UPI_ID || "inzovatetechnologies@icici",
  RECEIVER_MERCHANT_NAME: "Inzovate Technologies Pvt Ltd",
  
  // Receiver Bank Account Details (can be updated with your official bank info)
  BANK_DETAILS: {
    upiId: import.meta.env.VITE_RECEIVER_UPI_ID || "inzovatetechnologies@icici",
    merchantName: "Inzovate Technologies Pvt Ltd",
    bankName: import.meta.env.VITE_RECEIVER_BANK_NAME || "ICICI Bank Ltd",
    accountNumber: import.meta.env.VITE_RECEIVER_ACCOUNT_NO || "000000000000",
    ifscCode: import.meta.env.VITE_RECEIVER_IFSC || "ICIC0000001",
    branch: import.meta.env.VITE_RECEIVER_BRANCH || "Main Branch",
    accountType: "Current Account",
  } as ReceiverBankDetails,

  // Plan trial periods as requested
  PLAN_TRIAL_DAYS: {
    starter:      30,     // Starter: 30 Days Free Trial
    professional: 15,     // Professional: 15 Days Free Trial
    enterprise:   7,      // Enterprise: 7 Days Free Trial
  },

  // Notification reminder days before trial expiration
  REMINDER_DAYS_BEFORE: 3,

  // Gateway mode: 'simulation' or 'live'
  GATEWAY_MODE: import.meta.env.VITE_PAYMENT_MODE || "live_simulation",
};
