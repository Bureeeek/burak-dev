import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Burak Koc",
  initials: "BK",
  url: "https://github.com/bureeeek",
  location: "Dornbirn, Vorarlberg, Österreich",
  locationLink: "https://www.google.com/maps/place/Dornbirn,+Austria",
  description: "HTL-Schüler und Full-Stack-Entwickler aus Vorarlberg.",
  summary:
    "Ich bin HTL-Schüler und Full-Stack-Entwickler aus Vorarlberg. Ich entwickle moderne Webanwendungen und Websites für Unternehmen, mit Fokus auf sauberen Code, starke UI/UX und die Umsetzung von Ideen in nutzbare Produkte.",
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
    "Deutsch (Muttersprache)",
    "Türkisch (Muttersprache)",
    "Englisch (fließend)",
    "Arabisch (in Ausbildung)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Startseite" },
    { href: "/#work", icon: NotebookIcon, label: "Lebenslauf" },
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
        name: "E-Mail senden",
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
      start: "Jan. 2026",
      end: "Heute",
      description:
        "• Entwicklung einer DSGVO-konformen KI-Chatbot-SaaS mit Next.js (App Router), React und TypeScript\n• Authentifizierung, Daten- und Storage-Flows mit Supabase und Multi-Tenant-Architektur\n• KI-Funktionen mit dem Vercel AI SDK, inklusive LLM-Integration und Chat-UX\n• UI/UX-Optimierung mit Tailwind CSS und komponentenbasierter Architektur",
    },
    {
      company: "Künz GmbH",
      href: "https://www.kuenz.com",
      badges: [],
      location: "Hard, Vorarlberg",
      title: "Praktikant Softwareentwicklung – Hard, Vorarlberg",
      logoUrl: "",
      start: "Juli 2024",
      end: "Sept. 2024",
      description:
        "• Eigenverantwortliche Projektumsetzung von der Planung bis zur Veröffentlichung\n• Docker-Containerisierung für Build-Prozesse (Markdown → PDF)\n• Optimierung interner Entwicklerwerkzeuge und Workflows",
    },
    {
      company: "EA Automobile Bregenz",
      href: "#",
      badges: [],
      location: "Bregenz, Vorarlberg",
      title: "Full-Stack-Webentwickler – Bregenz, Vorarlberg",
      logoUrl: "",
      start: "Juni 2023",
      end: "Sept. 2023",
      description:
        "• Full-Stack-Website mit Laravel, MySQL und CMS zur Fahrzeugpräsentation\n• Admin-Dashboard zur Verwaltung und Kategorisierung von Fahrzeuginseraten\n• Eigenverantwortliche Projektumsetzung von der Planung bis zur Veröffentlichung",
    },
  ],
  education: [
    {
      school: "HTL Dornbirn (Höhere Technische Lehranstalt)",
      href: "https://www.htldornbirn.at",
      degree:
        "Wirtschaftsingenieurwesen / Betriebsinformatik - Full-Stack-Entwicklung, Datenbanken, SAP ERP, Big Data, Netzwerktechnik, IT-Security, Cloud-Infrastruktur, Scrum",
      logoUrl: "",
      start: "Sept. 2021",
      end: "Juni 2026 (voraussichtlich)",
    },
  ],
  projects: [
    {
      title: "Immersives Lernen – VR Classroom (Diplomarbeit)",
      href: "#",
      dates: "Juni 2025 - Apr. 2026",
      active: true,
      description:
        "VR-basierter interaktiver Klassenraum für Schulungen und Präsentationen. Entwickelt mit Unity, C# und SCTK, inklusive Quizsystem.",
      technologies: ["Unity", "C#", "VR", "SCTK"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Datenvisualisierung (Krypto & Aktien)",
      href: "#",
      dates: "Sept. 2025 - Jan. 2026",
      active: true,
      description:
        "Webtool zur Analyse von Marktbewegungen mit Echtzeitdaten, Chartanalyse und technischen Indikatoren.",
      technologies: ["Python", "Next.js", "REST API", "TradingView"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Coffee-Bike Dolce Vita – Unternehmenswebsite",
      href: "https://coffeebike-dolcevita.ch",
      dates: "2025",
      active: true,
      description:
        "Vollständige Unternehmenswebsite für ein lokales Kaffee-Business mit dunklem Design und moderner Oberfläche.",
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
