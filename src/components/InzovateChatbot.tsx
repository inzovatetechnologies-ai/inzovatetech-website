import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Sparkles,
  X,
  Minimize2,
  Send,
  ArrowUp,
  Building2,
  Cloud,
  Cpu,
  Code2,
  Users,
  Rocket,
  ChevronRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  Mail,
  User,
  FileText,
  RotateCcw,
  HelpCircle,
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Upload,
  Trash2,
  Paperclip,
} from "lucide-react";
import { sendUnifiedEmail } from "../services/emailService";
import { submitCareersForm } from "../services/careersSubmissionService";

// --- Types ---
export interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  quickReplies?: string[];
  showWelcomeCards?: boolean;
  stepIndex?: number;
  isSuccess?: boolean;
}

const QUICK_CARDS = [
  {
    id: "zoho-crm",
    title: "ZOHO CRM",
    desc: "CRM implementation & automation",
    icon: Building2,
    serviceKey: "Zoho CRM",
  },
  {
    id: "aws-cloud",
    title: "AWS & CLOUD",
    desc: "Cloud infrastructure & solutions",
    icon: Cloud,
    serviceKey: "AWS & Cloud",
  },
  {
    id: "ai-automation",
    title: "AI & AUTOMATION",
    desc: "AI-powered business automation",
    icon: Cpu,
    serviceKey: "AI & Automation",
  },
  {
    id: "custom-software",
    title: "CUSTOM SOFTWARE",
    desc: "Web, mobile & enterprise apps",
    icon: Code2,
    serviceKey: "Custom Software",
  },
  {
    id: "careers-jobs",
    title: "CAREERS & JOBS",
    desc: "Full-time hiring & engineering roles",
    icon: Briefcase,
    serviceKey: "Careers & Jobs",
  },
  {
    id: "student-internships",
    title: "INTERNSHIPS",
    desc: "Student projects & hands-on training",
    icon: GraduationCap,
    serviceKey: "Student Internships",
  },
  {
    id: "hrm-solutions",
    title: "HRM SOLUTIONS",
    desc: "HR & workforce management",
    icon: Users,
    serviceKey: "HRM Solutions",
  },
  {
    id: "digital-transformation",
    title: "DIGITAL TRANSFORMATION",
    desc: "Modernize business operations",
    icon: Rocket,
    serviceKey: "Digital Transformation",
  },
];

const SAMPLE_QUESTIONS = [
  "💼 Careers & Job Openings",
  "🎓 Student Internships",
  "💡 What is Zoho CRM?",
  "💵 How much does implementation cost?",
  "📍 Where is your office located?",
  "📞 Contact Information",
];

const SERVICE_OPTIONS = [
  "Careers & Jobs",
  "Student Internships",
  "Zoho CRM",
  "AWS & Cloud",
  "Custom Software",
  "AI & Automation",
  "HRM Solutions",
  "Other",
];

const CAREER_DOMAIN_OPTIONS = [
  "Full-Stack Software Engineer",
  "AWS Cloud / DevOps Architect",
  "Zoho CRM Implementation Consultant",
  "UI/UX Designer",
  "QA / Software Tester",
  "Other Engineering Role",
];

const INTERNSHIP_DOMAIN_OPTIONS = [
  "Web & Mobile App Development",
  "AI & Machine Learning Project",
  "Cloud Infrastructure & DevOps",
  "Zoho CRM & Automation",
  "UI/UX Design Internship",
  "Other Internship Field",
];

const WHATSAPP_NUMBER = "9342008797";

export default function InzovateChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showProactive, setShowProactive] = useState(false);
  const [proactiveDismissed, setProactiveDismissed] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Conversational Form State
  const [currentStep, setCurrentStep] = useState<number>(0); // 0 = Q&A mode, 1..6 = guided form steps
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    requirement: "",
  });

  const [resumeFile, setResumeFile] = useState<{
    name: string;
    size: string;
    base64: string;
    type: string;
  } | null>(null);

  const [formError, setFormError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Resume File Upload Change Handler
  const handleResumeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setFormError("File size exceeds 10MB limit. Please select a smaller file.");
      return;
    }

    setFormError("");

    const formatSize = (bytes: number) => {
      if (bytes < 1024 * 1024) {
        return `${(bytes / 1024).toFixed(1)} KB`;
      }
      return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setResumeFile({
        name: file.name,
        size: formatSize(file.size),
        base64: base64,
        type: file.type,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveResume = () => {
    setResumeFile(null);
  };

  // Outside click listener to close chatbot window
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Proactive greeting disabled to prevent auto-popups on site load
  useEffect(() => {
    setShowProactive(false);
  }, []);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  // Initial welcome setup on first open
  const handleOpenChat = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setShowProactive(false);

    if (messages.length === 0) {
      const initTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setMessages([
        {
          id: "msg-welcome-1",
          sender: "bot",
          text: "How can we help your business?\nAsk me any question below, explore careers & internships, or connect with our expert team.",
          timestamp: initTime,
          showWelcomeCards: true,
        },
      ]);
    }
  };

  const handleDismissProactive = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowProactive(false);
    setProactiveDismissed(true);
    sessionStorage.setItem("inzovate_chat_greeting_dismissed", "true");
  };

  const getTimeString = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // Add user message & handle bot response
  const addUserMessage = (text: string) => {
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: getTimeString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setFormError("");

    // Process logic: if in step 1..6, process form input; otherwise Q&A mode
    if (currentStep > 0) {
      handleFormStepInput(text);
    } else {
      processGeneralInput(text);
    }
  };

  // Select a card from welcome grid
  const handleSelectCard = (serviceKey: string) => {
    setFormData((prev) => ({ ...prev, service: serviceKey }));
    if (serviceKey === "Careers & Jobs" || serviceKey === "Student Internships") {
      startLeadForm(serviceKey);
    } else {
      addUserMessage(serviceKey);
    }
  };

  // Bot typing simulation helper
  const botReply = (
    text: string,
    quickReplies?: string[],
    callback?: () => void
  ) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text,
        timestamp: getTimeString(),
        quickReplies,
      };
      setMessages((prev) => [...prev, botMsg]);
      if (callback) callback();
    }, 700);
  };

  // Start Guided Application & Detail Collection Form
  const startLeadForm = (category?: string) => {
    const selectedCategory = category || formData.service || "General Inquiry";
    const isCareer = selectedCategory.toLowerCase().includes("career") || selectedCategory.toLowerCase().includes("job");
    const isInternship = selectedCategory.toLowerCase().includes("intern");

    let formTitle = "Let's connect you with the Inzovate team.";
    if (isCareer) {
      formTitle = "💼 Career Application & Job Enquiry:\nLet me collect your details for our HR team.";
    } else if (isInternship) {
      formTitle = "🎓 Student Internship Application:\nLet me collect your student details for our HR & Internship team.";
    }

    setFormData((prev) => ({ ...prev, service: selectedCategory }));
    setResumeFile(null);

    const totalStepsNum = (isCareer || isInternship) ? 6 : 5;

    botReply(
      `${formTitle}\n\nStep 1 of ${totalStepsNum}: What's your full name?`,
      undefined,
      () => {
        setCurrentStep(1);
      }
    );
  };

  // Q&A Knowledge Base & Natural Language Intelligence Engine
  const processGeneralInput = (input: string) => {
    const lower = input.toLowerCase();

    // Directly trigger application form if user clicks apply or selects job/internship
    if (
      lower.includes("apply for a job") ||
      lower.includes("apply for internship") ||
      lower.includes("apply for job") ||
      lower.includes("apply for internship") ||
      lower.includes("apply now")
    ) {
      if (lower.includes("intern")) {
        startLeadForm("Student Internships");
      } else {
        startLeadForm("Careers & Jobs");
      }
      return;
    }

    // Direct card / chip click triggers
    if (lower === "careers & jobs" || lower === "careers & job openings") {
      startLeadForm("Careers & Jobs");
      return;
    }

    if (lower === "student internships" || lower === "internships") {
      startLeadForm("Student Internships");
      return;
    }

    // Handoff & Expert intent
    if (
      lower.includes("expert") ||
      lower.includes("talk to an expert") ||
      lower.includes("consultation") ||
      lower.includes("quote") ||
      lower.includes("estimate") ||
      lower.includes("schedule") ||
      lower.includes("call") ||
      lower.includes("send enquiry") ||
      lower.includes("book") ||
      lower.includes("contact hr")
    ) {
      startLeadForm();
      return;
    }

    if (lower.includes("whatsapp")) {
      handleWhatsAppRedirect();
      return;
    }

    // 1. Careers, Jobs & Hiring Info
    if (
      lower.includes("career") ||
      lower.includes("job") ||
      lower.includes("hiring") ||
      lower.includes("opening") ||
      lower.includes("vacancy") ||
      lower.includes("opportunity") ||
      lower.includes("full time") ||
      lower.includes("work with us")
    ) {
      botReply(
        "💼 Careers at Inzovate Technologies:\n\nWe are actively hiring talented professionals across multiple domains:\n• Full-Stack Software Engineers (React, Node.js, Python)\n• AWS Cloud & DevOps Architects\n• Certified Zoho CRM Implementation Consultants\n• UI/UX Designers & Business Analysts\n\nWould you like to submit your candidate details directly?",
        ["Apply for a Job", "Student Internships", "WhatsApp us"]
      );
    }
    // 2. Internships & Student Projects Info
    else if (
      lower.includes("intern") ||
      lower.includes("internship") ||
      lower.includes("fresher") ||
      lower.includes("student") ||
      lower.includes("training") ||
      lower.includes("college") ||
      lower.includes("stipend") ||
      lower.includes("project work")
    ) {
      botReply(
        "🎓 Student & Graduate Internships at Inzovate:\n\nWe offer hands-on, high-impact internship programs:\n• Web & Mobile App Development Internships\n• AI & Machine Learning Project Internships\n• Cloud Infrastructure & DevOps Internships\n• Zoho CRM Consulting & Sales Automation Internships\n\nBenefits: Real client projects, 1-on-1 mentorship, Official Certificate of Completion, and full-time job conversion for top performers!\n\nWould you like to fill in your student details to apply?",
        ["Apply for Internship", "Careers & Jobs", "WhatsApp us"]
      );
    }
    // 3. Website / Contact / Phone / Email Info
    else if (
      lower.includes("website") ||
      lower.includes("url") ||
      lower.includes("link") ||
      lower.includes("phone") ||
      lower.includes("email") ||
      lower.includes("reach") ||
      lower.includes("contact") ||
      lower.includes("number") ||
      lower.includes("address")
    ) {
      botReply(
        "Here is how you can reach Inzovate Technologies:\n\n📞 Phone: +91 9342008797\n✉️ Service & Product Enquiries: inzovatetechnologies@gmail.com\n✉️ Careers & Internships: inzovatetech@gmail.com\n💬 WhatsApp: +91 9342008797\n🌐 Website: www.inzovate-technologies.com",
        ["Talk to an expert", "Continue on WhatsApp", "Our Services"]
      );
    }
    // 4. Greetings & Courtesy
    else if (
      lower.includes("hi") ||
      lower.includes("hello") ||
      lower.includes("hey") ||
      lower.includes("greetings") ||
      lower === "vanakkam" ||
      lower.includes("good morning") ||
      lower.includes("good afternoon") ||
      lower.includes("good evening")
    ) {
      botReply(
        "Hello! 👋 I'm Inzovate AI, your business & technology assistant.\n\nHow can I help you today? You can explore careers & internships, ask questions about our services, or request a consultation.",
        ["Careers & Jobs", "Student Internships", "What is Zoho CRM?", "Talk to an expert"]
      );
    }
    // 5. Company & Team Overview
    else if (
      lower.includes("inzovate") ||
      lower.includes("who are you") ||
      lower.includes("about company") ||
      lower.includes("about inzovate") ||
      lower.includes("team") ||
      lower.includes("who is")
    ) {
      botReply(
        "Inzovate Technologies is a premier global IT & Cloud Consulting firm. We specialize in Zoho CRM implementations, AWS Cloud infrastructure, Custom AI Automation, Enterprise Software, Careers & Internship programs.",
        ["Careers & Jobs", "Student Internships", "Our Services", "Talk to an expert"]
      );
    }
    // 6. Services List / Portfolio
    else if (
      lower.includes("services") ||
      lower.includes("what do you do") ||
      lower.includes("offer") ||
      lower.includes("solutions") ||
      lower.includes("portfolio")
    ) {
      botReply(
        "Inzovate Technologies offers a complete suite of enterprise IT solutions & programs:\n\n• Zoho CRM Implementation & Customization\n• AWS & Cloud Infrastructure Engineering\n• Custom AI Models & Workflow Automation\n• Web & Mobile Software Development\n• Student Internship & Career Programs\n• HRM & Workforce Solutions\n\nWhich area would you like to explore?",
        ["Zoho CRM", "AWS & Cloud", "Careers & Jobs", "Student Internships"]
      );
    }
    // 7. Pricing / Cost / Budget
    else if (
      lower.includes("cost") ||
      lower.includes("price") ||
      lower.includes("fee") ||
      lower.includes("charge") ||
      lower.includes("pricing") ||
      lower.includes("budget") ||
      lower.includes("how much")
    ) {
      botReply(
        "Implementation and consulting pricing depend on your specific business requirements, scale, and customization needs.\n\nWe offer transparent, highly flexible packages tailored for growing businesses. Would you like a free cost estimate for your project?",
        ["Talk to an expert", "WhatsApp us", "What is Zoho CRM?"]
      );
    }
    // 8. Location / Office Addresses
    else if (
      lower.includes("location") ||
      lower.includes("where") ||
      lower.includes("office") ||
      lower.includes("bhavani") ||
      lower.includes("erode") ||
      lower.includes("salem") ||
      lower.includes("tamil nadu")
    ) {
      botReply(
        "📍 Primary Offices: Bhavani, Erode, Salem, Tamil Nadu, India.\n🌐 Global Delivery: Serving clients across North America, Europe, UK, UAE & APAC with 24/7 dedicated support.",
        ["Contact Information", "Talk to an expert", "WhatsApp us"]
      );
    }
    // 9. Zoho CRM Specifics
    else if (lower.includes("zoho") || lower.includes("crm")) {
      botReply(
        "Zoho CRM is a powerful cloud customer relationship management platform.\n\nInzovate helps businesses organize leads, track sales pipelines, automate follow-ups, integrate Zoho Books/Desk/Forms, and customize workflows.\n\nWould you like to consult with our certified Zoho implementation team?",
        ["Talk to an expert", "How much does it cost?", "WhatsApp us"]
      );
    }
    // 10. AWS & Cloud Specifics
    else if (lower.includes("aws") || lower.includes("cloud") || lower.includes("server") || lower.includes("devops") || lower.includes("hosting")) {
      botReply(
        "Our Cloud Solutions team handles AWS architecture design, server setup, cloud migration, DevOps pipelines, security compliance, and 24/7 infrastructure monitoring.\n\nWould you like a cloud consultation?",
        ["Talk to an expert", "Tell me more", "WhatsApp us"]
      );
    }
    // 11. AI & Automation Specifics
    else if (
      lower.includes("ai") ||
      lower.includes("bot") ||
      lower.includes("automation") ||
      lower.includes("nlp") ||
      lower.includes("machine learning")
    ) {
      botReply(
        "We build enterprise AI models, intelligent chatbots, automated invoice & PDF generators, and workflow automation triggers to save manual labor and accelerate business growth.\n\nWould you like to discuss an AI solution?",
        ["Talk to an expert", "Tell me more", "WhatsApp us"]
      );
    }
    // 12. Software / App / Website Specs
    else if (
      lower.includes("software") ||
      lower.includes("app") ||
      lower.includes("web") ||
      lower.includes("mobile") ||
      lower.includes("react") ||
      lower.includes("python") ||
      lower.includes("tech stack")
    ) {
      botReply(
        "We design and develop high-performance web applications, mobile apps (iOS & Android), SaaS platforms, and enterprise software using React, TypeScript, Node.js, Python, and Cloud backends.\n\nWould you like to share your application requirements?",
        ["Talk to an expert", "Tell me more", "WhatsApp us"]
      );
    }
    // 13. HRM & Workforce Specs
    else if (lower.includes("hrm") || lower.includes("hr") || lower.includes("payroll") || lower.includes("employee") || lower.includes("attendance")) {
      botReply(
        "Our HRM & Workforce software automates attendance tracking, payroll, employee onboarding, performance metrics, and leave management.\n\nWould you like to see a demo?",
        ["Talk to an expert", "Tell me more", "WhatsApp us"]
      );
    }
    // 14. Digital Transformation Specs
    else if (lower.includes("digital") || lower.includes("transformation") || lower.includes("modernize")) {
      botReply(
        "We modernize legacy business operations, eliminate redundant manual processes, and integrate modern SaaS platforms for maximum scalability.\n\nWould you like to explore a digital roadmap?",
        ["Talk to an expert", "Tell me more", "WhatsApp us"]
      );
    }
    // 15. Timelines & Project Process
    else if (lower.includes("time") || lower.includes("duration") || lower.includes("how long") || lower.includes("timeline") || lower.includes("process")) {
      botReply(
        "Project timelines depend on scope:\n\n• Zoho CRM Setup: 1–2 Weeks\n• Web & Mobile Apps: 3–6 Weeks\n• Cloud & AWS Migration: 4–8 Weeks\n\nWe provide a clear milestone roadmap before starting your project.",
        ["Talk to an expert", "WhatsApp us", "Our Services"]
      );
    }
    // 16. Support & Maintenance
    else if (lower.includes("support") || lower.includes("maintenance") || lower.includes("sla") || lower.includes("help")) {
      botReply(
        "We provide comprehensive post-implementation support, 24/7 infrastructure monitoring, system maintenance, employee training, and regular feature updates.\n\nWould you like to speak with our support team?",
        ["Talk to an expert", "WhatsApp us", "Contact Details"]
      );
    }
    // 17. Polite Thank You
    else if (lower.includes("thank") || lower.includes("thanks") || lower.includes("nandri") || lower.includes("great") || lower.includes("awesome")) {
      botReply(
        "You're very welcome! 😊 Is there anything else I can help you with today?",
        ["Careers & Jobs", "Student Internships", "What is Zoho CRM?", "WhatsApp us"]
      );
    }
    // Intelligent Fallback Q&A answer
    else {
      botReply(
        `Thank you for reaching out! Inzovate Technologies provides enterprise IT, Cloud, AI, Careers & Internship programs.\n\nWould you like to speak directly with our team regarding "${input}"?`,
        ["Careers & Jobs", "Student Internships", "Talk to an expert", "WhatsApp us"]
      );
    }
  };

  // Step-back in form mode
  const handleFormStepBack = () => {
    const isCareerOrIntern =
      formData.service.toLowerCase().includes("career") ||
      formData.service.toLowerCase().includes("job") ||
      formData.service.toLowerCase().includes("intern");
    const totalStepsNum = isCareerOrIntern ? 6 : 5;

    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      botReply(`Step ${prevStep} of ${totalStepsNum}: Please enter your previous answer or update details.`);
    } else {
      setCurrentStep(0);
      botReply("Returned to Question & Answer mode. How else can I assist you?", [
        "Careers & Jobs",
        "Student Internships",
        "What is Zoho CRM?",
        "WhatsApp us",
      ]);
    }
  };

  // Cancel form mode completely
  const handleCancelFormMode = () => {
    setCurrentStep(0);
    botReply("Guided form cancelled. Feel free to ask any question about our services or careers!", [
      "Careers & Jobs",
      "Student Internships",
      "What is Zoho CRM?",
      "WhatsApp us",
    ]);
  };

  // Handle step-by-step form input
  const handleFormStepInput = (input: string) => {
    const isCareer = formData.service.toLowerCase().includes("career") || formData.service.toLowerCase().includes("job");
    const isInternship = formData.service.toLowerCase().includes("intern");
    const totalStepsNum = (isCareer || isInternship) ? 6 : 5;

    if (currentStep === 1) {
      // Step 1: Name validation
      if (input.trim().length < 2) {
        setFormError("Please enter your full name.");
        botReply("Please enter your full name to proceed with Step 1.");
        return;
      }
      setFormData((prev) => ({ ...prev, name: input.trim() }));
      setCurrentStep(2);
      botReply(`Nice to meet you, ${input.trim()}!\n\nStep 2 of ${totalStepsNum}: What's the best mobile number to reach you?`);
    } else if (currentStep === 2) {
      // Step 2: Mobile validation (digits check)
      const cleanPhone = input.replace(/\D/g, "");
      if (cleanPhone.length < 7) {
        setFormError("Please enter a valid mobile number.");
        botReply("Please enter a valid mobile number (at least 10 digits).");
        return;
      }
      setFormData((prev) => ({ ...prev, mobile: input.trim() }));
      setCurrentStep(3);
      botReply(`Thank you.\n\nStep 3 of ${totalStepsNum}: What's your email address?`);
    } else if (currentStep === 3) {
      // Step 3: Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.trim())) {
        setFormError("Please enter a valid email address.");
        botReply("Please enter a valid email address (e.g. name@company.com).");
        return;
      }
      setFormData((prev) => ({ ...prev, email: input.trim() }));
      setCurrentStep(4);

      let optionsList = SERVICE_OPTIONS;
      let promptText = `Step 4 of ${totalStepsNum}: What area or service are you interested in?`;

      if (isCareer) {
        optionsList = CAREER_DOMAIN_OPTIONS;
        promptText = `Step 4 of ${totalStepsNum}: Which engineering or career role are you applying for?`;
      } else if (isInternship) {
        optionsList = INTERNSHIP_DOMAIN_OPTIONS;
        promptText = `Step 4 of ${totalStepsNum}: Which internship domain are you interested in?`;
      }

      botReply(promptText, optionsList);
    } else if (currentStep === 4) {
      // Step 4: Service / Role selection
      setFormData((prev) => ({ ...prev, requirement: `Role/Domain: ${input.trim()}` }));
      setCurrentStep(5);

      let promptStep5 = `Understood (${input.trim()}).\n\nStep 5 of ${totalStepsNum}: Tell us a little about your project details or requirements.`;
      if (isCareer) {
        promptStep5 = `Got it (${input.trim()}).\n\nStep 5 of ${totalStepsNum}: Please tell us about your qualifications, total experience, skills, or key achievements.`;
      } else if (isInternship) {
        promptStep5 = `Great (${input.trim()}).\n\nStep 5 of ${totalStepsNum}: Please tell us about your college name, degree/year of study, key skills, or project interests.`;
      }

      botReply(promptStep5);
    } else if (currentStep === 5) {
      // Step 5: Requirement / Details
      const finalDetails = input.trim();
      const combinedRequirement = formData.requirement
        ? `${formData.requirement}\nDetails: ${finalDetails}`
        : finalDetails;
      const updatedData = { ...formData, requirement: combinedRequirement };
      setFormData(updatedData);

      if (isCareer || isInternship) {
        setCurrentStep(6);
        botReply(
          `📄 Step 6 of 6: Upload your Resume / CV below (PDF, DOC, DOCX, PNG, JPG up to 10MB), or click "Skip Resume & Submit".`
        );
      } else {
        submitLeadForm(updatedData, null);
      }
    } else if (currentStep === 6) {
      if (input.trim().toLowerCase() === "skip") {
        submitLeadForm(formData, null);
      } else {
        botReply(
          "Please use the Resume Upload box below to attach your file, or click 'Skip Resume & Submit' to finalize your application."
        );
      }
    }
  };

  // Direct option click in Step 4
  const handleSelectServiceOption = (serviceName: string) => {
    addUserMessage(serviceName);
  };

  // Submit Lead Form
  const submitLeadForm = async (
    data: typeof formData,
    fileToUpload: typeof resumeFile = resumeFile
  ) => {
    setIsSubmitting(true);
    setIsTyping(true);

    const isCareerOrIntern =
      data.service.toLowerCase().includes("career") ||
      data.service.toLowerCase().includes("job") ||
      data.service.toLowerCase().includes("intern");

    const messagePayload = fileToUpload
      ? `${data.requirement}\n\n[ATTACHED RESUME]: ${fileToUpload.name} (${fileToUpload.size})`
      : data.requirement;

    const success = await sendUnifiedEmail({
      form_type: isCareerOrIntern ? "INZOVATE CANDIDATE APPLICATION" : "INZOVATE WEBSITE CHATBOT",
      full_name: data.name,
      phone: data.mobile,
      email: data.email,
      service: data.service,
      message: messagePayload,
      subject: `New Application/Enquiry (${data.service}) - Inzovate Technologies`,
      inquiry_purpose: `Chatbot Submission: ${data.service}`,
      resume_file_name: fileToUpload?.name || "None",
      resume_file_size: fileToUpload?.size || "N/A",
      resume_url_or_data: fileToUpload?.name ? `Attached: ${fileToUpload.name} (${fileToUpload.size})` : "None",
    });

    if (isCareerOrIntern) {
      try {
        const resumeInfoStr = fileToUpload
          ? `${fileToUpload.name} (${fileToUpload.size})`
          : "Not provided";

        await submitCareersForm({
          name: data.name,
          email: data.email,
          phone: data.mobile,
          experience: data.service,
          position: data.service,
          resumeUrl: resumeInfoStr,
          resumeBase64: fileToUpload?.base64 || "",
          resumeFileName: fileToUpload?.name || "",
          message: messagePayload,
        });
      } catch (err) {
        console.error("Google Sheets dispatch error from Chatbot:", err);
      }
    }

    setIsSubmitting(false);
    setIsTyping(false);
    setIsSubmittedSuccess(true);
    setCurrentStep(0);

    const successText = fileToUpload
      ? `You're all set! 📄 Application & Resume (${fileToUpload.name}) submitted successfully!\n\nOur HR team at Inzovate Technologies will review your details & resume and contact you shortly.`
      : "You're all set!\nYour application & details have been sent directly to the Inzovate Technologies team. We'll review your submission and contact you shortly.";

    const successMsg: Message = {
      id: `bot-success-${Date.now()}`,
      sender: "bot",
      text: successText,
      timestamp: getTimeString(),
      isSuccess: true,
    };

    setMessages((prev) => [...prev, successMsg]);
  };

  // WhatsApp Redirect Helper
  const handleWhatsAppRedirect = () => {
    const name = formData.name || "Applicant / User";
    const mobile = formData.mobile || "N/A";
    const email = formData.email || "N/A";
    const service = formData.service || "General / Career / Internship Application";
    const requirement = formData.requirement || "Application / Inquiry via Inzovate Website Chatbot.";
    const resumeInfo = resumeFile ? `\nAttached Resume: ${resumeFile.name} (${resumeFile.size})` : "";

    const textPayload =
      `Hello INZOVATE TECHNOLOGIES,\n\n` +
      `I am submitting my Application / Enquiry via the Website Chatbot:\n\n` +
      `Name: ${name}\n` +
      `Mobile: ${mobile}\n` +
      `Email: ${email}\n` +
      `Category: ${service}\n` +
      `Details: ${requirement}` +
      `${resumeInfo}\n\n` +
      `Please contact me regarding my submission.`;

    const encodedText = encodeURIComponent(textPayload);
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${encodedText}`, "_blank");
  };

  // Quick Reply Chip Click
  const handleQuickReplyClick = (reply: string) => {
    if (reply === "WhatsApp us") {
      handleWhatsAppRedirect();
      return;
    }

    const cleanText = reply.replace(/^[💼🎓💡💵📍📞💬]\s*/, "");

    if (
      cleanText === "Apply for a Job" ||
      cleanText === "Careers & Jobs" ||
      cleanText === "Careers & Job Openings"
    ) {
      startLeadForm("Careers & Jobs");
      return;
    }

    if (
      cleanText === "Apply for Internship" ||
      cleanText === "Student Internships" ||
      cleanText === "Internships"
    ) {
      startLeadForm("Student Internships");
      return;
    }

    addUserMessage(cleanText);
  };

  // Send input text submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addUserMessage(inputValue.trim());
  };

  const handleResetChat = () => {
    setMessages([]);
    setCurrentStep(0);
    setIsSubmittedSuccess(false);
    setFormData({ name: "", mobile: "", email: "", service: "", requirement: "" });
    setResumeFile(null);
    handleOpenChat();
  };

  return (
    <>
      {/* 1. Proactive Greeting Badge */}
      <AnimatePresence>
        {showProactive && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              bottom: "90px",
              right: "24px",
              zIndex: 99998,
              background: "linear-gradient(135deg, #0A1128 0%, #152452 100%)",
              color: "#FFFFFF",
              padding: "16px 20px",
              borderRadius: "16px",
              boxShadow: "0 12px 32px rgba(10, 17, 40, 0.35)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              maxWidth: "310px",
              width: "calc(100vw - 48px)",
              cursor: "pointer",
            }}
            onClick={handleOpenChat}
            role="button"
            aria-label="Open chat assistant"
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(0, 102, 255, 0.25)",
                    border: "1px solid rgba(0, 102, 255, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0066FF",
                  }}
                >
                  <Bot size={22} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: "14px", fontWeight: 700, color: "#FFFFFF" }}>
                    Looking for Tech Solutions, Careers or Internships?
                  </h4>
                  <p style={{ margin: "3px 0 0 0", fontSize: "12px", color: "#94A3B8" }}>
                    Talk to an Inzovate expert.
                  </p>
                </div>
              </div>
              <button
                onClick={handleDismissProactive}
                style={{
                  background: "none",
                  border: "none",
                  color: "#94A3B8",
                  cursor: "pointer",
                  padding: "2px",
                  display: "flex",
                  borderRadius: "4px",
                }}
                aria-label="Dismiss proactive notification"
              >
                <X size={16} />
              </button>
            </div>
            <button
              style={{
                marginTop: "12px",
                width: "100%",
                background: "#0066FF",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "8px",
                padding: "8px 14px",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              Start Chat <ChevronRight size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Floating Chat Launcher */}
      {!isOpen && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 99999,
          }}
        >
          <button
            onClick={handleOpenChat}
            style={{
              position: "relative",
              width: "62px",
              height: "62px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0A1128 0%, #0066FF 100%)",
              color: "#FFFFFF",
              border: "1.5px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 10px 28px rgba(0, 102, 255, 0.4)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              outline: "none",
            }}
            aria-label="Chat with Inzovate"
            title="Chat with Inzovate"
          >
            <Bot size={30} />

            {/* Online Indicator Badge */}
            <span
              style={{
                position: "absolute",
                top: "2px",
                right: "2px",
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                backgroundColor: "#10B981",
                border: "2.5px solid #0A1128",
              }}
            />
          </button>
        </motion.div>
      )}

      {/* 3. Chat Window Shell */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatWindowRef}
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "64px" : "auto",
            }}
            exit={{ opacity: 0, y: 25, scale: 0.96 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              width: "350px",
              maxWidth: "calc(100vw - 20px)",
              maxHeight: "580px",
              height: isMinimized ? "64px" : "min(510px, calc(100dvh - 36px))",
              background: "#FFFFFF",
              borderRadius: "20px",
              boxShadow: "0 20px 50px -10px rgba(10, 17, 40, 0.28), 0 0 0 1px rgba(226, 232, 240, 0.8)",
              zIndex: 100000,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              fontFamily:
                "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            }}
            role="dialog"
            aria-label="Inzovate AI Assistant Chat Window"
          >
            {/* 3.1 Header */}
            <div
              style={{
                background: "linear-gradient(135deg, #0A1128 0%, #152452 100%)",
                padding: "16px 20px",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                flexShrink: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                {/* Circular Logo Avatar */}
                <div
                  style={{
                    position: "relative",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(0, 102, 255, 0.2)",
                    border: "1.5px solid rgba(0, 102, 255, 0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 16px rgba(0, 102, 255, 0.5)",
                  }}
                >
                  <Bot size={22} color="#0066FF" />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <h3 style={{ margin: 0, fontSize: "15px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "0.5px" }}>
                      INZOVATE
                    </h3>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "11px",
                        color: "#10B981",
                        fontWeight: 600,
                        background: "rgba(16, 185, 129, 0.15)",
                        padding: "2px 8px",
                        borderRadius: "10px",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#10B981",
                        }}
                      />
                      Online
                    </span>
                  </div>
                  <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#94A3B8" }}>
                    Inzovate AI Assistant • Replies instantly
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "none",
                    color: "#94A3B8",
                    borderRadius: "8px",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  title={isMinimized ? "Expand" : "Minimize"}
                  aria-label="Minimize chat window"
                >
                  <Minimize2 size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "none",
                    color: "#94A3B8",
                    borderRadius: "8px",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  title="Close"
                  aria-label="Close chat window"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* 3.2 Conversational Form Progress Bar Header */}
                {currentStep > 0 && (
                  <div
                    style={{
                      background: "#F8FAFC",
                      padding: "10px 16px",
                      borderBottom: "1px solid #E2E8F0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexShrink: 0,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <button
                        onClick={handleFormStepBack}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #CBD5E1",
                          borderRadius: "6px",
                          padding: "4px 8px",
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "#0A1128",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                        title="Go back one step"
                      >
                        <ArrowLeft size={12} /> Back
                      </button>
                      <button
                        onClick={handleCancelFormMode}
                        style={{
                          background: "none",
                          border: "none",
                          fontSize: "12px",
                          color: "#64748B",
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Cancel
                      </button>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div
                        style={{
                          height: "5px",
                          width: "80px",
                          background: "#E2E8F0",
                          borderRadius: "999px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${(currentStep / (formData.service.toLowerCase().includes("career") || formData.service.toLowerCase().includes("job") || formData.service.toLowerCase().includes("intern") ? 6 : 5)) * 100}%`,
                            background: "#0066FF",
                            transition: "width 0.3s ease",
                            borderRadius: "999px",
                          }}
                        />
                      </div>
                      <span style={{ fontSize: "12px", fontWeight: 700, color: "#0066FF" }}>
                        Step {currentStep}/{formData.service.toLowerCase().includes("career") || formData.service.toLowerCase().includes("job") || formData.service.toLowerCase().includes("intern") ? 6 : 5}
                      </span>
                    </div>
                  </div>
                )}

                {/* 3.3 Messages Scroll Area */}
                <div
                  style={{
                    flex: 1,
                    padding: "20px 16px",
                    overflowY: "auto",
                    background: "#F8FAFC",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {messages.map((msg) => (
                    <React.Fragment key={msg.id}>
                      {/* Message Bubble */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: msg.sender === "user" ? "flex-end" : "flex-start",
                        }}
                      >
                        <div
                          style={{
                            maxWidth: "88%",
                            padding: "14px 18px",
                            borderRadius:
                              msg.sender === "user" ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
                            background:
                              msg.sender === "user"
                                ? "linear-gradient(135deg, #0A1128 0%, #0066FF 100%)"
                                : "#FFFFFF",
                            color: msg.sender === "user" ? "#FFFFFF" : "#1E293B",
                            boxShadow:
                              msg.sender === "user"
                                ? "0 4px 14px rgba(0, 102, 255, 0.25)"
                                : "0 2px 8px rgba(0, 0, 0, 0.04)",
                            border: msg.sender === "user" ? "none" : "1px solid #E2E8F0",
                            fontSize: "14.5px",
                            lineHeight: 1.6,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {msg.text}
                        </div>
                        <span
                          style={{
                            fontSize: "11px",
                            color: "#94A3B8",
                            marginTop: "4px",
                            marginRight: msg.sender === "user" ? "4px" : "0",
                            marginLeft: msg.sender === "bot" ? "4px" : "0",
                          }}
                        >
                          {msg.timestamp}
                        </span>
                      </div>

                      {/* Welcome Action Cards & Sample Questions */}
                      {msg.showWelcomeCards && (
                        <div style={{ marginTop: "8px" }}>
                          <h4 style={{ margin: "0 0 10px 0", fontSize: "12px", color: "#64748B", fontWeight: 800, letterSpacing: "0.5px" }}>
                            SOLUTIONS & OPPORTUNITIES
                          </h4>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr",
                              gap: "10px",
                              marginBottom: "16px",
                            }}
                          >
                            {QUICK_CARDS.map((card) => {
                              const CardIcon = card.icon;
                              return (
                                <button
                                  key={card.id}
                                  onClick={() => handleSelectCard(card.serviceKey)}
                                  style={{
                                    background: "#FFFFFF",
                                    border: "1px solid #E2E8F0",
                                    borderRadius: "14px",
                                    padding: "12px 10px",
                                    textAlign: "left",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.02)",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "#0066FF";
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 102, 255, 0.12)";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "#E2E8F0";
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.02)";
                                  }}
                                >
                                  <div>
                                    <div
                                      style={{
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: "8px",
                                        background: "rgba(0, 102, 255, 0.08)",
                                        color: "#0066FF",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "6px",
                                      }}
                                    >
                                      <CardIcon size={16} />
                                    </div>
                                    <div style={{ fontSize: "11.5px", fontWeight: 800, color: "#0A1128" }}>
                                      {card.title}
                                    </div>
                                    <div style={{ fontSize: "10.5px", color: "#64748B", marginTop: "2px", lineHeight: 1.25 }}>
                                      {card.desc}
                                    </div>
                                  </div>
                                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
                                    <ChevronRight size={14} color="#0066FF" />
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          {/* Quick Sample Questions Section */}
                          <h4 style={{ margin: "14px 0 8px 0", fontSize: "12px", color: "#64748B", fontWeight: 800, letterSpacing: "0.5px" }}>
                            OR ASK A QUESTION
                          </h4>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                            {SAMPLE_QUESTIONS.map((q) => (
                              <button
                                key={q}
                                onClick={() => handleQuickReplyClick(q)}
                                style={{
                                  background: "#FFFFFF",
                                  border: "1px solid #CBD5E1",
                                  color: "#0A1128",
                                  borderRadius: "16px",
                                  padding: "6px 12px",
                                  fontSize: "12px",
                                  fontWeight: 600,
                                  cursor: "pointer",
                                  transition: "all 0.15s ease",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.borderColor = "#0066FF";
                                  e.currentTarget.style.color = "#0066FF";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.borderColor = "#CBD5E1";
                                  e.currentTarget.style.color = "#0A1128";
                                }}
                              >
                                {q}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Step 4 Service / Role Options Chips */}
                      {currentStep === 4 && msg.sender === "bot" && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
                          {(msg.quickReplies || SERVICE_OPTIONS).map((opt) => (
                            <button
                              key={opt}
                              onClick={() => handleSelectServiceOption(opt)}
                              style={{
                                background: "#FFFFFF",
                                border: "1.5px solid #0066FF",
                                color: "#0066FF",
                                borderRadius: "20px",
                                padding: "8px 14px",
                                fontSize: "13px",
                                fontWeight: 700,
                                cursor: "pointer",
                                boxShadow: "0 2px 6px rgba(0, 102, 255, 0.1)",
                              }}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Quick Reply Chips */}
                      {msg.quickReplies && currentStep !== 4 && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "6px" }}>
                          {msg.quickReplies.map((chip) => (
                            <button
                              key={chip}
                              onClick={() => handleQuickReplyClick(chip)}
                              style={{
                                background: "#FFFFFF",
                                border: "1px solid #CBD5E1",
                                color: "#0A1128",
                                borderRadius: "20px",
                                padding: "7px 14px",
                                fontSize: "12.5px",
                                fontWeight: 700,
                                cursor: "pointer",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                transition: "all 0.15s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#0066FF";
                                e.currentTarget.style.color = "#0066FF";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "#CBD5E1";
                                e.currentTarget.style.color = "#0A1128";
                              }}
                            >
                              {chip.includes("WhatsApp") && <MessageCircle size={14} color="#25D366" />}
                              {chip}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Success State Actions */}
                      {msg.isSuccess && (
                        <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
                          <button
                            onClick={handleWhatsAppRedirect}
                            style={{
                              background: "#25D366",
                              color: "#FFFFFF",
                              border: "none",
                              borderRadius: "12px",
                              padding: "12px 18px",
                              fontSize: "14px",
                              fontWeight: 700,
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)",
                            }}
                          >
                            <MessageCircle size={18} /> Continue on WhatsApp
                          </button>

                          <button
                            onClick={handleResetChat}
                            style={{
                              background: "#FFFFFF",
                              color: "#0A1128",
                              border: "1px solid #CBD5E1",
                              borderRadius: "12px",
                              padding: "10px 18px",
                              fontSize: "13.5px",
                              fontWeight: 700,
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "6px",
                            }}
                          >
                            <RotateCcw size={16} /> Start New Conversation
                          </button>
                        </div>
                      )}
                    </React.Fragment>
                  ))}

                  {/* Step 6 Resume Upload Card UI */}
                  {currentStep === 6 && !isSubmitting && (
                    <div
                      style={{
                        background: "#FFFFFF",
                        border: "2px dashed #0066FF",
                        borderRadius: "16px",
                        padding: "16px",
                        marginTop: "8px",
                        boxShadow: "0 4px 14px rgba(0, 102, 255, 0.08)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "10px",
                            background: "rgba(0, 102, 255, 0.1)",
                            color: "#0066FF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Upload size={20} />
                        </div>
                        <div>
                          <div style={{ fontSize: "13px", fontWeight: 800, color: "#0A1128" }}>
                            Upload Resume / CV
                          </div>
                          <div style={{ fontSize: "11px", color: "#64748B" }}>
                            PDF, DOC, DOCX, PNG, JPG (Max 10MB)
                          </div>
                        </div>
                      </div>

                      {!resumeFile ? (
                        <label
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                            padding: "16px",
                            background: "#F8FAFC",
                            borderRadius: "12px",
                            border: "1px dashed #CBD5E1",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "#0066FF";
                            e.currentTarget.style.background = "#EFF6FF";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "#CBD5E1";
                            e.currentTarget.style.background = "#F8FAFC";
                          }}
                        >
                          <Paperclip size={20} color="#0066FF" />
                          <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#0066FF" }}>
                            Choose Resume File
                          </span>
                          <span style={{ fontSize: "10.5px", color: "#94A3B8" }}>
                            Click to browse or drag file here
                          </span>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                            onChange={handleResumeFileChange}
                            style={{ display: "none" }}
                          />
                        </label>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px 14px",
                            background: "#F0FDF4",
                            border: "1px solid #86EFAC",
                            borderRadius: "12px",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "10px", overflow: "hidden" }}>
                            <CheckCircle2 size={18} color="#16A34A" />
                            <div style={{ overflow: "hidden" }}>
                              <div
                                style={{
                                  fontSize: "12px",
                                  fontWeight: 700,
                                  color: "#166534",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  maxWidth: "170px",
                                }}
                              >
                                {resumeFile.name}
                              </div>
                              <div style={{ fontSize: "10.5px", color: "#15803D" }}>
                                {resumeFile.size} • Attached
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={handleRemoveResume}
                            style={{
                              background: "none",
                              border: "none",
                              color: "#EF4444",
                              cursor: "pointer",
                              padding: "4px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "6px",
                            }}
                            title="Remove file"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      )}

                      {/* Action Submit Buttons */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "2px" }}>
                        <button
                          onClick={() => submitLeadForm(formData, resumeFile)}
                          disabled={isSubmitting}
                          style={{
                            width: "100%",
                            background: resumeFile
                              ? "linear-gradient(135deg, #0A1128 0%, #0066FF 100%)"
                              : "#0066FF",
                            color: "#FFFFFF",
                            border: "none",
                            borderRadius: "10px",
                            padding: "10px 14px",
                            fontSize: "13px",
                            fontWeight: 700,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            boxShadow: "0 4px 12px rgba(0, 102, 255, 0.25)",
                          }}
                        >
                          <Send size={15} />
                          {resumeFile ? "Submit Application with Resume" : "Submit Application"}
                        </button>

                        <button
                          onClick={() => {
                            setResumeFile(null);
                            submitLeadForm(formData, null);
                          }}
                          disabled={isSubmitting}
                          style={{
                            width: "100%",
                            background: "none",
                            border: "1px solid #CBD5E1",
                            color: "#64748B",
                            borderRadius: "10px",
                            padding: "8px 14px",
                            fontSize: "12px",
                            fontWeight: 600,
                            cursor: "pointer",
                          }}
                        >
                          Skip Resume & Submit
                        </button>
                      </div>
                    </div>
                  )}

                  {/* AI Typing Indicator */}
                  {isTyping && (
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #E2E8F0",
                          borderRadius: "18px",
                          padding: "10px 16px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span style={{ fontSize: "12px", color: "#64748B", fontWeight: 600 }}>
                          Inzovate AI is typing
                        </span>
                        <motion.span
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ repeat: Infinity, duration: 1.2, delay: 0 }}
                          style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#0066FF" }}
                        />
                        <motion.span
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
                          style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#0066FF" }}
                        />
                        <motion.span
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}
                          style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#0066FF" }}
                        />
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* 3.4 Form Error Alert */}
                {formError && (
                  <div
                    style={{
                      background: "#FEF2F2",
                      color: "#991B1B",
                      fontSize: "12px",
                      padding: "8px 16px",
                      borderTop: "1px solid #FCA5A5",
                      fontWeight: 600,
                    }}
                  >
                    ⚠️ {formError}
                  </div>
                )}

                {/* 3.5 Bottom Input Bar */}
                <form
                  onSubmit={handleSubmit}
                  style={{
                    background: "#FFFFFF",
                    padding: "14px 16px",
                    borderTop: "1px solid #E2E8F0",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    flexShrink: 0,
                  }}
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={
                      currentStep === 1
                        ? "Type your name..."
                        : currentStep === 2
                        ? "Type your mobile number..."
                        : currentStep === 3
                        ? "Type your email..."
                        : currentStep === 5
                        ? "Describe your qualification, college, or skills..."
                        : "Ask about careers, internships, services..."
                    }
                    style={{
                      flex: 1,
                      height: "48px",
                      borderRadius: "14px",
                      border: "1.5px solid #E2E8F0",
                      padding: "0 16px",
                      fontSize: "14px",
                      color: "#0A1128",
                      outline: "none",
                      background: "#F8FAFC",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#0066FF")}
                    onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                    disabled={isSubmitting}
                  />

                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isSubmitting}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: inputValue.trim()
                        ? "linear-gradient(135deg, #0A1128 0%, #0066FF 100%)"
                        : "#CBD5E1",
                      color: "#FFFFFF",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: inputValue.trim() ? "pointer" : "not-allowed",
                      transition: "all 0.2s ease",
                      flexShrink: 0,
                      boxShadow: inputValue.trim() ? "0 4px 12px rgba(0, 102, 255, 0.3)" : "none",
                    }}
                    aria-label="Send message"
                  >
                    <ArrowUp size={20} />
                  </button>
                </form>

                {/* Footer Brand Credit */}
                <div
                  style={{
                    background: "#FFFFFF",
                    padding: "6px 16px 10px",
                    textAlign: "center",
                    fontSize: "11px",
                    color: "#94A3B8",
                    borderTop: "1px solid #F1F5F9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                  }}
                >
                  <span>Powered by</span>
                  <span style={{ fontWeight: 800, color: "#0A1128" }}>INZOVATE AI</span>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
