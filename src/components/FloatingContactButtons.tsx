import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingContactButtons() {
  const whatsappUrl = `https://wa.me/919342008797?text=${encodeURIComponent(
    "Hi Inzovate Technologies, I would like to get a free quote for software, cloud & Zoho CRM services."
  )}`;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#25D366",
          color: "#FFFFFF",
          padding: "12px 18px",
          borderRadius: "30px",
          boxShadow: "0 10px 25px rgba(37, 211, 102, 0.45)",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "13.5px",
          border: "1.5px solid rgba(255, 255, 255, 0.3)",
          cursor: "pointer",
        }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline">WhatsApp Enquiry</span>
      </motion.a>

      <motion.a
        href="tel:+919342008797"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          backgroundColor: "#2563EB",
          color: "#FFFFFF",
          boxShadow: "0 8px 20px rgba(37, 99, 235, 0.4)",
          textDecoration: "none",
          border: "1.5px solid rgba(255, 255, 255, 0.2)",
        }}
        aria-label="Call Inzovate Operations"
        title="Call +91 9342008797"
      >
        <Phone size={18} />
      </motion.a>
    </div>
  );
}
