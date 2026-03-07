import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Burak Koc",
  initials: "BK",
  url: "https://github.com/bureeeek",
  location: "Dornbirn, Vorarlberg, Austria",
  locationLink: "https://www.google.com/maps/place/Dornbirn,+Austria",
  description: "HTL student & Full-Stack Developer based in Vorarlberg, Austria.",
  summary:
    "HTL student & Full-Stack Developer based in Vorarlberg, Austria. I build modern web applications and websites for businesses. Passionate about clean code, great UI/UX, and turning ideas into products.",
  avatarUrl: "/me.png",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "PHP (Laravel)",
    "SQL",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Bootstrap",
    "Supabase",
    "Vercel AI SDK",
    "Docker",
    "Git",
    "Vercel",
    "REST APIs",
    "GitHub Actions",
    "Scrum",
    "Unity",
    "C#",
  ],
  languages: [
    "German (Native)",
    "Turkish (Native)",
    "English (Fluent)",
    "Arabic (Learning)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#work", icon: NotebookIcon, label: "Resume/CV" },
  ],
  contact: {
    email: "burak.kc@outlook.com",
    tel: "+43 676 5267042",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bureeeek",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/burak-koc-35623b382",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:burak.kc@outlook.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "DerChat.at",
      href: "https://derchat.at",
      badges: [],
      location: "Remote, Vorarlberg",
      title: "Junior Software Engineer – Remote, Vorarlberg",
      logoUrl: "",
      start: "Jan 2026",
      end: "Present",
      description:
        "• Built a GDPR-compliant AI Chatbot SaaS with Next.js (App Router), React & TypeScript\n• Auth, data & storage flows with Supabase + Multi-Tenant architecture\n• AI features with Vercel AI SDK (LLM integration, Chat-UX)\n• UI/UX optimization with Tailwind CSS & component-based architecture",
    },
    {
      company: "Künz GmbH",
      href: "https://www.kuenz.com",
      badges: [],
      location: "Hard, Vorarlberg",
      title: "Software Development Intern – Hard, Vorarlberg",
      logoUrl: "",
      start: "Jul 2024",
      end: "Sep 2024",
      description:
        "• Independent project ownership from planning to deployment\n• Docker containerization for build processes (Markdown → PDF)\n• Optimization of internal developer tools & workflows",
    },
    {
      company: "EA Automobile Bregenz",
      href: "#",
      badges: [],
      location: "Bregenz, Vorarlberg",
      title: "Full-Stack Web Developer – Bregenz, Vorarlberg",
      logoUrl: "",
      start: "Jun 2023",
      end: "Sep 2023",
      description:
        "• Full-Stack website with Laravel, MySQL & CMS for vehicle presentation\n• Admin dashboard for managing and categorizing vehicle listings\n• Independent project ownership from planning to deployment",
    },
  ],
  education: [
    {
      school: "HTL Dornbirn (Höhere Technische Lehranstalt)",
      href: "https://www.htldornbirn.at",
      degree:
        "Wirtschaftsingenieurwesen / Betriebsinformatik - Full-Stack development, Databases, SAP ERP, Big Data, Networking, IT-Security, Cloud Infrastructure, Scrum",
      logoUrl: "",
      start: "Sep 2021",
      end: "Jun 2026 (expected)",
    },
  ],
  projects: [
    {
      title: "Immersives Lernen – VR Classroom (Diplomarbeit)",
      href: "#",
      dates: "Jun 2025 - Apr 2026",
      active: true,
      description:
        "VR-based interactive classroom for training and presentations. Built with Unity, C# and SCTK including a quiz system.",
      technologies: ["Unity", "C#", "VR", "SCTK"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Data Visualizer (Crypto & Stocks)",
      href: "#",
      dates: "Sep 2025 - Jan 2026",
      active: true,
      description:
        "Web tool for analyzing market movements with real-time data, chart analysis and technical indicators.",
      technologies: ["Python", "Next.js", "REST API", "TradingView"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Coffee-Bike Dolce Vita – Business Website",
      href: "https://coffeebike-dolcevita.ch",
      dates: "2025",
      active: true,
      description:
        "Full company website for a local coffee business. Dark theme, modern design.",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      links: [
        {
          type: "Website",
          href: "https://coffeebike-dolcevita.ch",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
