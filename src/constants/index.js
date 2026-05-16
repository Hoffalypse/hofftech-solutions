import {
  facebook,
  linkedin,
  twitter,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Services",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: send,
    title: "Workflow Automation",
    content:
      "Replace manual, time-consuming processes with custom-built systems that reduce errors, save staff hours, and free your team to focus on higher-value work.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Custom Web Applications",
    content:
      "Secure, scalable applications for internal teams or public-facing use — built with role-based access, modern authentication, and a posture aligned with NIST 800-171 controls.",
  },
  {
    id: "feature-3",
    icon: star,
    title: "AI-Powered Tools",
    content:
      "Chatbots, document processing, and intelligent automation that reduce response times and workload — built on production-grade infrastructure, not demos.",
  },
];

export const credibilitySignals = [
  {
    id: "cred-1",
    title: "Registration",
    value: "SAM.gov Pending",
  },
  {
    id: "cred-2",
    title: "NAICS Codes",
    value: "541511 / 541512 / 541519",
  },
  {
    id: "cred-3",
    title: "Based In",
    value: "Colorado — Serving Nationally",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      {
        name: "Services",
        link: "#features",
      },
      {
        name: "Experience",
        link: "#experience",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  {
    title: "Contracting",
    links: [
      {
        name: "Capability Statement",
        link: "/contact",
      },
      {
        name: "Subcontracting Inquiries",
        link: "/contact",
      },
      {
        name: "NAICS: 541511, 541512, 541519",
        link: "/contact",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-3",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];
