import { DEFAULT_BLUR_DATA_URL } from "./placeholders";
export type Service = {
  slug: string;
  title: string;
  heroTitle: string;
  intro: string;
  description: string;
  focus: string[];
  outcomes: string[];
  stats: { label: string; value: string; helper?: string }[];
  imageUrl1: string;
  imageUrl2: string;
  blurUrl: string;
};

export const services: Service[] = [
  {
    slug: "branding",
    title: "Branding",
    heroTitle: "Brand systems that make buyers trust you faster.",
    intro:
      "Evidence-led positioning, messaging, and identity systems that help customers recognise and remember your edge.",
    description:
      "We align leadership, market research, and design craft to deliver a brand platform that is easy for teams to apply and hard for competitors to copy.",
    focus: [
      "Positioning, messaging pillars, and voice kits",
      "Visual identity, logo refresh, and design language systems",
      "Brand guidelines, digital asset kits, and launch playbooks",
    ],
    outcomes: [
      "Confident storytelling across every touchpoint",
      "Frictionless handover to marketing, product, and sales teams",
      "Governance that keeps the brand consistent as you scale",
    ],
    stats: [
      { label: "Engagement lift", value: "+23%", helper: "avg. across recent launches" },
      { label: "Rollout speed", value: "2–4 weeks", helper: "sprint-based delivery" },
    ],
    imageUrl1: "/img/services-hover/1.jpg",
    imageUrl2: "/img/services/1.svg",
    blurUrl: DEFAULT_BLUR_DATA_URL,
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    heroTitle: "Design that ships quickly and stays on-brand.",
    intro:
      "Production-ready design for campaigns, social, pitch decks, and product comms with rigorous quality control and fast turnaround.",
    description:
      "We blend brand stewardship with high-velocity production so every asset feels premium whether it is a carousel, a keynote, or an always-on campaign toolkit.",
    focus: [
      "Campaign creative, social templates, and ad sets",
      "Sales decks, investment pitch materials, and case study kits",
      "Print collateral, event graphics, and motion-ready storyboards",
    ],
    outcomes: [
      "Consistent look-and-feel across every platform",
      "Fewer revisions thanks to upfront guardrails and QA",
      "Scalable design system so internal teams can self-serve",
    ],
    stats: [
      { label: "On-time delivery", value: "98%", helper: "tracked over the past quarter" },
      { label: "Revision cycles", value: "<2", helper: "avg. rounds per asset" },
    ],
    imageUrl1: "/img/services-hover/2.jpg",
    imageUrl2: "/img/services/2.svg",
    blurUrl: DEFAULT_BLUR_DATA_URL,
  },
  {
    slug: "packaging-design",
    title: "Packaging Design",
    heroTitle: "Packaging that converts browsers into buyers.",
    intro:
      "Shelf-stopping concepts engineered for manufacturability, sustainability, and premium unboxing experiences.",
    description:
      "We validate creative against retail constraints, printing requirements, and shopper psychology so your pack sings in-store and online.",
    focus: [
      "Structural concepts, dielines, and production-ready art files",
      "Material guidance for sustainability and cost efficiency",
      "Mockups, 3D renders, and guidelines for print partners",
    ],
    outcomes: [
      "Packaging that is distinctive, compliant, and easy to produce",
      "Clear value propositions visible within three feet or three seconds",
      "Smooth press checks thanks to vendor-ready specifications",
    ],
    stats: [
      { label: "Retail-ready", value: "100%", helper: "QA checklist for every file" },
      { label: "Time to shelf", value: "4–6 weeks", helper: "concept to pilot run" },
    ],
    imageUrl1: "/img/services-hover/3.jpg",
    imageUrl2: "/img/services/3.svg",
    blurUrl: DEFAULT_BLUR_DATA_URL,
  },
  {
    slug: "creative-content",
    title: "Creative Content",
    heroTitle: "Content that earns attention and drives action.",
    intro:
      "Script-to-shoot storytelling for campaigns, founder-led content, and social that actually performs.",
    description:
      "We craft narratives with clear hooks, sharp messaging, and platform-native edits so your brand shows up with authority and personality.",
    focus: [
      "Campaign concepts, scripts, and storyboards",
      "Short-form and long-form content for social, web, and events",
      "Always-on content calendars with measurement checkpoints",
    ],
    outcomes: [
      "Content engineered for watch-through and click-through",
      "Founders and subject-matter experts positioned as trusted voices",
      "Reliable production rhythm with pre-approved guardrails",
    ],
    stats: [
      { label: "Watch-through lift", value: "+18%", helper: "vs. prior baselines" },
      { label: "Content cadence", value: "weekly/bi-weekly", helper: "locked-in sprints" },
    ],
    imageUrl1: "/img/services-hover/4.jpg",
    imageUrl2: "/img/services/4.svg",
    blurUrl: DEFAULT_BLUR_DATA_URL,
  },
  {
    slug: "photography-videography",
    title: "Photography and Videography",
    heroTitle: "Production that captures your brand at its best.",
    intro:
      "From product launches to documentaries, we shoot with strategy ensuring every frame serves a story and a business outcome.",
    description:
      "Our crews handle end-to-end production with meticulous pre-pro, on-set efficiency, and post workflows tuned for multi-platform delivery.",
    focus: [
      "Campaign films, product showcases, and event coverage",
      "Studio and lifestyle photography with creative direction",
      "Post-production, color grading, and platform-specific deliveries",
    ],
    outcomes: [
      "Footage that translates into high-performing edits across channels",
      "On-time shoots with detailed call sheets and risk plans",
      "Consistent look, tone, and pacing that strengthens brand recall",
    ],
    stats: [
      { label: "Shoot punctuality", value: "100%", helper: "tracked across projects" },
      { label: "Delivery formats", value: "4K + social-first", helper: "ready-to-publish masters" },
    ],
    imageUrl1: "/img/services-hover/5.jpg",
    imageUrl2: "/img/services/5.svg",
    blurUrl: DEFAULT_BLUR_DATA_URL,
  },
];

export default services;
