import jsPDF from "jspdf";
import { UpiMandateReceipt } from "../services/paymentService";

export function generatePdfReceipt(receipt: UpiMandateReceipt) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Colors
  const black = [10, 10, 10];
  const gold = [201, 162, 39]; // #C9A227
  const goldDark = [74, 58, 24];
  const textDark = [30, 41, 59];
  const textMuted = [100, 116, 139];
  const emerald = [22, 163, 74];

  // ── Header Background ───────────────────────────────────────────────────────
  doc.setFillColor(black[0], black[1], black[2]);
  doc.rect(0, 0, pageWidth, 42, "F");

  // Gold accent line under header
  doc.setFillColor(gold[0], gold[1], gold[2]);
  doc.rect(0, 41, pageWidth, 1.5, "F");

  // Company Title
  doc.setTextColor(248, 245, 236);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("INZOVATE TECHNOLOGIES", 16, 18);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(230, 200, 117);
  doc.text("PRIVATE LIMITED · ENTERPRISE CLOUD CRM", 16, 25);

  doc.setFontSize(8);
  doc.setTextColor(168, 162, 154);
  doc.text("support@inzovate-technologies.com · www.inzovate-technologies.com", 16, 32);

  // Receipt Badge (Right Top)
  doc.setFillColor(28, 24, 18);
  doc.roundedRect(pageWidth - 78, 10, 62, 22, 3, 3, "F");
  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(0.4);
  doc.roundedRect(pageWidth - 78, 10, 62, 22, 3, 3, "D");

  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("MANDATE RECEIPT", pageWidth - 47, 17, { align: "center" });

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.text(`ID: ${receipt.mandateId.slice(0, 14)}`, pageWidth - 47, 23, { align: "center" });
  doc.text(`Date: ${new Date().toLocaleDateString("en-IN")}`, pageWidth - 47, 28, { align: "center" });

  // ── Metadata Cards Grid ────────────────────────────────────────────────────
  let y = 52;

  // Client Details Box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(16, y, 86, 38, 2, 2, "FD");

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("BILLED TO", 22, y + 8);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(receipt.customerName || "Valued Customer", 22, y + 15);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text(`Email: ${receipt.customerEmail || "N/A"}`, 22, y + 22);
  doc.text(`Phone: ${receipt.customerPhone || "N/A"}`, 22, y + 28);
  doc.text("Country: India (IN)", 22, y + 33);

  // Mandate Summary Box
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(108, y, 86, 38, 2, 2, "FD");

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("MANDATE SPECIFICATIONS", 114, y + 8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("Mandate Status:", 114, y + 15);
  doc.setTextColor(emerald[0], emerald[1], emerald[2]);
  doc.setFont("helvetica", "bold");
  doc.text("ACTIVE & VERIFIED", 155, y + 15);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("Payment Rail:", 114, y + 22);
  doc.text("NPCI UPI AutoPay", 155, y + 22);

  const trialDays = receipt.trialDays || 15;
  const planName = receipt.planName || "Professional";
  const planPrice = receipt.planPrice || receipt.recurringAmount || 1400;

  doc.text("Trial Period:", 114, y + 28);
  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.setFont("helvetica", "bold");
  doc.text(`${trialDays} Days Free Trial`, 155, y + 28);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("Valid Until:", 114, y + 33);
  doc.text(receipt.trialEndDate, 155, y + 33);

  // ── Plan & Subscription Table ──────────────────────────────────────────────
  y = 98;

  // Table Header
  doc.setFillColor(15, 23, 42);
  doc.rect(16, y, pageWidth - 32, 9, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("ITEM / SUBSCRIPTION PLAN", 22, y + 6);
  doc.text("TRIAL DURATION", 108, y + 6);
  doc.text("RATE / USER", 144, y + 6);
  doc.text("DUE TODAY", pageWidth - 22, y + 6, { align: "right" });

  // Table Row 1
  y += 9;
  doc.setFillColor(255, 255, 255);
  doc.rect(16, y, pageWidth - 32, 18, "F");
  doc.setDrawColor(226, 232, 240);
  doc.line(16, y + 18, pageWidth - 16, y + 18);

  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text(`${planName} Plan Cloud CRM`, 22, y + 7);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("Includes full features, API, pipeline & automation", 22, y + 13);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "bold");
  doc.text(`${trialDays} Days Complimentary`, 108, y + 10);

  doc.setFont("helvetica", "normal");
  doc.text(`INR ${planPrice.toLocaleString("en-IN")}/mo`, 144, y + 10);

  doc.setTextColor(emerald[0], emerald[1], emerald[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("INR 0.00", pageWidth - 22, y + 10, { align: "right" });

  // ── Totals Box (Right Aligned) ──────────────────────────────────────────────
  y += 24;
  const totalsX = 110;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("Subtotal:", totalsX, y);
  doc.text("INR 0.00", pageWidth - 22, y, { align: "right" });

  y += 6;
  doc.text("CGST (0.0%):", totalsX, y);
  doc.text("INR 0.00", pageWidth - 22, y, { align: "right" });

  y += 6;
  doc.text("SGST (0.0%):", totalsX, y);
  doc.text("INR 0.00", pageWidth - 22, y, { align: "right" });

  y += 3;
  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(0.6);
  doc.line(totalsX, y + 2, pageWidth - 16, y + 2);

  y += 8;
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(totalsX - 4, y - 5, pageWidth - totalsX - 12, 12, 2, 2, "F");

  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("TOTAL CHARGED TODAY:", totalsX, y + 2);

  doc.setTextColor(emerald[0], emerald[1], emerald[2]);
  doc.setFontSize(12);
  doc.text("INR 0.00", pageWidth - 22, y + 2, { align: "right" });

  // ── UPI AutoPay Mandate Authorization Box ───────────────────────────────────
  y += 20;
  doc.setFillColor(248, 245, 236); // Pale champagne background
  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(0.5);
  doc.roundedRect(16, y, pageWidth - 32, 38, 3, 3, "FD");

  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("NATIONAL PAYMENTS CORPORATION OF INDIA (NPCI) - UPI AUTOPAY MANDATE", 22, y + 8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);

  doc.text(`Unique Mandate Reference (UMRN): `, 22, y + 16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(emerald[0], emerald[1], emerald[2]);
  doc.text(receipt.umrn || "UMRN-INZ2026849", 82, y + 16);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.text(`Beneficiary Merchant: `, 22, y + 22);
  doc.text("INZOVATE TECHNOLOGIES PRIVATE LIMITED", 82, y + 22);

  doc.text(`Post-Trial Renewal Date: `, 22, y + 28);
  doc.text(`${receipt.trialEndDate} (Automatic debit of INR ${planPrice.toLocaleString("en-IN")}/user/mo)`, 82, y + 28);

  doc.text(`Renewal Notification: `, 22, y + 34);
  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.setFont("helvetica", "bold");
  doc.text("SMS & Email notification will be sent 3 days prior to debit. Cancel anytime.", 82, y + 34);

  // ── Footer & Legal Disclaimer ──────────────────────────────────────────────
  const footerY = pageHeight - 24;

  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.4);
  doc.line(16, footerY, pageWidth - 16, footerY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text(
    "This is a computer-generated tax invoice & electronic mandate registration receipt issued by Inzovate Technologies Pvt Ltd.",
    16,
    footerY + 5
  );
  doc.text(
    "Governed by RBI circular on Processing of e-mandates on cards/Prepaid Payment Instruments (PPIs)/UPI for recurring transactions.",
    16,
    footerY + 9
  );
  doc.text(
    "For customer queries, contact support@inzovate-technologies.com or visit https://inzovate-technologies.com",
    16,
    footerY + 13
  );

  // Save the PDF file
  const filename = `Inzovate_Receipt_${receipt.mandateId || "MND"}.pdf`;
  doc.save(filename);
}

export function generatePdfReceiptBase64(receipt: UpiMandateReceipt): { base64: string; dataUri: string; filename: string } {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Colors
  const black = [10, 10, 10];
  const gold = [201, 162, 39]; // #C9A227
  const textDark = [30, 41, 59];
  const textMuted = [100, 116, 139];
  const emerald = [22, 163, 74];

  // Header Background
  doc.setFillColor(black[0], black[1], black[2]);
  doc.rect(0, 0, pageWidth, 42, "F");

  // Gold accent line under header
  doc.setFillColor(gold[0], gold[1], gold[2]);
  doc.rect(0, 41, pageWidth, 1.5, "F");

  // Company Title
  doc.setTextColor(248, 245, 236);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("INZOVATE TECHNOLOGIES", 16, 18);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(230, 200, 117);
  doc.text("PRIVATE LIMITED · ENTERPRISE CLOUD CRM", 16, 25);

  doc.setFontSize(8);
  doc.setTextColor(168, 162, 154);
  doc.text("support@inzovate-technologies.com · www.inzovate-technologies.com", 16, 32);

  // Receipt Badge (Right Top)
  doc.setFillColor(28, 24, 18);
  doc.roundedRect(pageWidth - 78, 10, 62, 22, 3, 3, "F");
  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(0.4);
  doc.roundedRect(pageWidth - 78, 10, 62, 22, 3, 3, "D");

  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("MANDATE RECEIPT", pageWidth - 47, 17, { align: "center" });

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.text(`ID: ${receipt.mandateId.slice(0, 14)}`, pageWidth - 47, 23, { align: "center" });
  doc.text(`Date: ${new Date().toLocaleDateString("en-IN")}`, pageWidth - 47, 28, { align: "center" });

  // Metadata Cards Grid
  let y = 52;

  // Client Details Box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(16, y, 86, 38, 2, 2, "FD");

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("BILLED TO", 22, y + 8);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(receipt.customerName || "Valued Customer", 22, y + 15);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text(`Email: ${receipt.customerEmail || "N/A"}`, 22, y + 22);
  doc.text(`Phone: ${receipt.customerPhone || "N/A"}`, 22, y + 28);
  doc.text("Country: India (IN)", 22, y + 33);

  // Mandate Summary Box
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(108, y, 86, 38, 2, 2, "FD");

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("MANDATE SPECIFICATIONS", 114, y + 8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("Mandate Status:", 114, y + 15);
  doc.setTextColor(emerald[0], emerald[1], emerald[2]);
  doc.setFont("helvetica", "bold");
  doc.text("ACTIVE & VERIFIED", 155, y + 15);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("Payment Rail:", 114, y + 22);
  doc.text("NPCI UPI AutoPay", 155, y + 22);

  const trialDays = receipt.trialDays || 15;
  const planName = receipt.planName || "Professional";
  const planPrice = receipt.planPrice || receipt.recurringAmount || 1400;

  doc.text("Trial Period:", 114, y + 28);
  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.setFont("helvetica", "bold");
  doc.text(`${trialDays} Days Free Trial`, 155, y + 28);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("Valid Until:", 114, y + 33);
  doc.text(receipt.trialEndDate, 155, y + 33);

  // Plan & Subscription Table
  y = 98;

  // Table Header
  doc.setFillColor(15, 23, 42);
  doc.rect(16, y, pageWidth - 32, 9, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("ITEM / SUBSCRIPTION PLAN", 22, y + 6);
  doc.text("TRIAL DURATION", 108, y + 6);
  doc.text("RATE / USER", 144, y + 6);
  doc.text("DUE TODAY", pageWidth - 22, y + 6, { align: "right" });

  // Table Row 1
  y += 9;
  doc.setFillColor(255, 255, 255);
  doc.rect(16, y, pageWidth - 32, 18, "F");
  doc.setDrawColor(226, 232, 240);
  doc.line(16, y + 18, pageWidth - 16, y + 18);

  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text(`${planName} Plan Cloud CRM`, 22, y + 7);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("Includes full features, API, pipeline & automation", 22, y + 13);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "bold");
  doc.text(`${trialDays} Days Complimentary`, 108, y + 10);

  doc.setFont("helvetica", "normal");
  doc.text(`INR ${planPrice.toLocaleString("en-IN")}/mo`, 144, y + 10);

  doc.setTextColor(emerald[0], emerald[1], emerald[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("INR 0.00", pageWidth - 22, y + 10, { align: "right" });

  // Totals Box
  y += 24;
  const totalsX = 110;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("Subtotal:", totalsX, y);
  doc.text("INR 0.00", pageWidth - 22, y, { align: "right" });

  y += 6;
  doc.text("CGST (0.0%):", totalsX, y);
  doc.text("INR 0.00", pageWidth - 22, y, { align: "right" });

  y += 6;
  doc.text("SGST (0.0%):", totalsX, y);
  doc.text("INR 0.00", pageWidth - 22, y, { align: "right" });

  y += 3;
  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(0.6);
  doc.line(totalsX, y + 2, pageWidth - 16, y + 2);

  y += 8;
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(totalsX - 4, y - 5, pageWidth - totalsX - 12, 12, 2, 2, "F");

  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("TOTAL CHARGED TODAY:", totalsX, y + 2);

  doc.setTextColor(emerald[0], emerald[1], emerald[2]);
  doc.setFontSize(12);
  doc.text("INR 0.00", pageWidth - 22, y + 2, { align: "right" });

  // UPI AutoPay Mandate Authorization Box
  y += 20;
  doc.setFillColor(248, 245, 236);
  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(0.5);
  doc.roundedRect(16, y, pageWidth - 32, 38, 3, 3, "FD");

  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("NATIONAL PAYMENTS CORPORATION OF INDIA (NPCI) - UPI AUTOPAY MANDATE", 22, y + 8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);

  doc.text(`Unique Mandate Reference (UMRN): `, 22, y + 16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(emerald[0], emerald[1], emerald[2]);
  doc.text(receipt.umrn || "UMRN-INZ2026849", 82, y + 16);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.text(`Beneficiary Merchant: `, 22, y + 22);
  doc.text("INZOVATE TECHNOLOGIES PRIVATE LIMITED", 82, y + 22);

  doc.text(`Post-Trial Renewal Date: `, 22, y + 28);
  doc.text(`${receipt.trialEndDate} (Automatic debit of INR ${planPrice.toLocaleString("en-IN")}/user/mo)`, 82, y + 28);

  doc.text(`Renewal Notification: `, 22, y + 34);
  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.setFont("helvetica", "bold");
  doc.text("SMS & Email notification will be sent 3 days prior to debit. Cancel anytime.", 82, y + 34);

  // Footer & Legal Disclaimer
  const footerY = pageHeight - 24;

  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.4);
  doc.line(16, footerY, pageWidth - 16, footerY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text(
    "This is a computer-generated tax invoice & electronic mandate registration receipt issued by Inzovate Technologies Pvt Ltd.",
    16,
    footerY + 5
  );
  doc.text(
    "Governed by RBI circular on Processing of e-mandates on cards/Prepaid Payment Instruments (PPIs)/UPI for recurring transactions.",
    16,
    footerY + 9
  );
  doc.text(
    "For customer queries, contact support@inzovate-technologies.com or visit https://inzovate-technologies.com",
    16,
    footerY + 13
  );

  const filename = `Inzovate_Receipt_${receipt.mandateId || "MND"}.pdf`;
  const dataUri = doc.output("datauristring");
  const base64 = dataUri.split(",")[1] || "";

  return {
    filename,
    dataUri,
    base64,
  };
}
