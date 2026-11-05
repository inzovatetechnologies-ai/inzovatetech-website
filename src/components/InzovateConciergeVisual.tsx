import { motion } from "framer-motion";

export default function InzovateConciergeVisual() {
  return (
    <div className="relative w-full max-w-[640px] mx-auto select-none">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ translateY: -3, scale: 1.01 }}
      >
        <img
          src="/contact.gif"
          alt="Customer Service Specialist"
          className="w-full h-auto object-contain block"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 86% at 50% 50%, #000 55%, rgba(0,0,0,0.85) 72%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 90% 86% at 50% 50%, #000 55%, rgba(0,0,0,0.85) 72%, transparent 100%)",
          }}
        />
      </motion.div>
    </div>
  );
}
