import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface CrmFaqSectionProps {
  industryFaqs?: FaqItem[];
  title?: string;
}

export const generalFaqs: FaqItem[] = [
  {
    question: "What is an industry-specific solution?",
    answer: "An industry-specific solution is tailored to the exact workflows, terminology, pipelines, and compliance requirements of a particular sector (such as publishing, construction, logistics, HR, or manufacturing), unlike generic tools that require complex customization."
  },
  {
    question: "Can the system be customized for our business?",
    answer: "Yes, absolutely. Inzovate software is built to be modular and highly customizable. We configure pipelines, custom data fields, lead assignment rules, approval workflows, and reports around your specific business operations."
  },
  {
    question: "Can we migrate our existing business data?",
    answer: "Yes. Our engineering team assists with seamless data migration from Excel spreadsheets, legacy software, email accounts, or existing systems into your new Inzovate platform with zero data loss."
  },
  {
    question: "Can the system integrate with our existing software?",
    answer: "Yes. Our software supports REST API integrations with ERPs, accounting software, websites, WhatsApp Business API, payment gateways, and custom third-party platforms."
  },
  {
    question: "Can we automate follow-ups and notifications?",
    answer: "Yes. You can automate task creation, email alerts, WhatsApp notifications, follow-up reminders, and stage movement based on system events or specified delay timers."
  },
  {
    question: "Can different employees have different access permissions?",
    answer: "Yes. Inzovate software features granular role-based access control (RBAC). Managers, team members, partners, and support staff see only the data and permissions appropriate for their role."
  },
  {
    question: "Can the software be accessed from mobile devices?",
    answer: "Yes. Our software is fully responsive across mobile phones, tablets, laptops, and desktops, enabling field teams and remote executives to access live data on the go."
  },
  {
    question: "Can the platform scale as our business grows?",
    answer: "Yes. Built on cloud microservices architecture, the system easily scales to support thousands of active users, millions of records, and multi-location business expansion."
  },
  {
    question: "Can Inzovate provide implementation and support?",
    answer: "Yes. We provide end-to-end services: requirements mapping, configuration, data migration, staff training, user onboarding, and ongoing technical support."
  },
  {
    question: "Can we request a customized demo?",
    answer: "Yes! You can book a free demo where our product experts present a live walk-through tailored to your industry workflows."
  }
];

export default function CrmFaqSection({ industryFaqs = [], title = "Frequently Asked Questions" }: CrmFaqSectionProps) {
  const allFaqs = [...industryFaqs, ...generalFaqs];
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "0px 0px -60px 0px" });

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      ref={sectionRef}
      className={`content-wrap newmrhomebox services-section bottom-animated top-animated middle-animated py-20 bg-white border-t border-slate-200 relative ${
        inView ? "animate" : ""
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 services-fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            {title}
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Everything you need to know about our enterprise solutions and implementation.
          </p>
        </div>

        <div className="space-y-3.5">
          {allFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const delayClass = `services-delay-${Math.min(idx + 1, 6)}`;
            return (
              <div
                key={idx}
                className={`bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-200 hover:border-slate-300 services-fade-down ${delayClass}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
