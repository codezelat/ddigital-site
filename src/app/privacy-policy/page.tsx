import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Ddigital",
  description:
    "Read how Ddigital collects, uses, and protects your information. Transparent privacy practices for Sri Lankan clients and global visitors.",
  alternates: { canonical: "https://ddigital.lk/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Ddigital",
    description:
      "Learn about Ddigital's privacy practices, data security, cookies, and your rights.",
    url: "https://ddigital.lk/privacy-policy",
  },
};

const sections = [
  {
    title: "Information we collect",
    body: [
      "Contact details (name, email, phone) when you submit a form, book a call, or message us.",
      "Business details about your project so we can propose relevant services.",
      "Usage data (device, browser, pages visited) collected through analytics to improve performance.",
      "Communication records (emails, chat messages) to deliver support and project updates.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "To respond to enquiries, proposals, and bookings you initiate.",
      "To deliver services you request and maintain project documentation.",
      "To improve site performance, content relevance, and security.",
      "To comply with legal obligations and prevent fraud or misuse.",
    ],
  },
  {
    title: "Cookies and analytics",
    body: [
      "We use cookies for basic site functionality and to remember preferences.",
      "Aggregated analytics help us understand visit patterns; we do not sell personal data.",
      "You can clear or block cookies in your browser settings at any time.",
    ],
  },
  {
    title: "Data sharing",
    body: [
      "We do not sell personal data.",
      "Trusted vendors (hosting, analytics, communications) may process data under strict confidentiality and data protection terms.",
      "We will disclose data only when required by law or to protect our rights and users’ safety.",
    ],
  },
  {
    title: "Data security and retention",
    body: [
      "Data is stored on secure infrastructure with access controls and encryption in transit.",
      "We retain data only as long as necessary to provide services or meet legal obligations, then delete or anonymize it.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Request access to the personal data we hold about you.",
      "Ask for corrections or deletion where legally permissible.",
      "Object to or restrict certain processing, including marketing.",
      "Withdraw consent where processing is based on consent.",
    ],
  },
  {
    title: "International visitors",
    body: [
      "Our primary operations are in Sri Lanka; data may be processed in other regions where our vendors operate.",
      "We apply reasonable safeguards to protect data transferred across borders.",
    ],
  },
  {
    title: "Contact us",
    body: [
      "For privacy requests, email info@ddigital.lk or info@codezela.com. We aim to respond within 10 business days.",
      "Postal: 345/35, RIT Alles Mw, Colombo 08, Sri Lanka.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy | Ddigital",
    description:
      "Privacy Policy describing how Ddigital collects, uses, and protects personal information.",
    url: "https://ddigital.lk/privacy-policy",
  };

  return (
    <main className="px-4 md:px-8 lg:px-12 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="mt-36 bg-black text-white rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.2),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.12),transparent_28%)] mix-blend-screen" />
        <div className="relative p-8 lg:p-16 space-y-6 lg:space-y-8">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/70">
            <span className="h-[1px] w-12 bg-white/60 hidden sm:block" />
            Privacy Policy
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Your privacy, handled with care.
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-4xl">
            We collect only what we need to respond to you, deliver your
            project, and keep our platform secure. Below is a plain-language
            summary of how we handle data for visitors and clients in Sri Lanka
            and abroad.
          </p>
        </div>
      </section>

      <section className="mt-16 grid lg:grid-cols-[1.1fr,0.9fr] gap-10">
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-neutral-100 shadow-[0_20px_120px_-60px_rgba(0,0,0,0.25)] space-y-6">
          <div className="space-y-2">
            <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Overview
            </div>
            <p className="text-neutral-700 leading-relaxed">
              Ddigital (a subsidiary of Codezela Technologies) is committed to
              transparent data practices. This policy explains what we collect,
              why we collect it, how we keep it secure, and your choices. By
              using our site or services, you agree to this policy.
            </p>
          </div>
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.title} className="space-y-2">
                <h2 className="text-xl font-semibold text-neutral-900">
                  {section.title}
                </h2>
                <ul className="space-y-2 text-neutral-800">
                  {section.body.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-[#22c55e]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-black text-white rounded-3xl p-8 lg:p-10 border border-white/10 space-y-4">
            <h2 className="text-2xl font-semibold">Key points</h2>
            <ul className="space-y-3 text-white/85">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#22c55e]" />
                We do not sell personal data ever.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#22c55e]" />
                Source files and project data remain accessible only to your
                authorized contacts and our delivery team.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#22c55e]" />
                Requests for access, correction, or deletion are honored where
                legally permissible.
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-[0_20px_120px_-60px_rgba(0,0,0,0.25)] space-y-4">
            <h2 className="text-2xl font-semibold">Last updated</h2>
            <p className="text-neutral-700">
              This policy was last updated on 01 February 2025. We will post any
              changes on this page and encourage you to review it periodically.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-[0_20px_120px_-60px_rgba(0,0,0,0.25)] space-y-4">
            <h2 className="text-2xl font-semibold">Need help?</h2>
            <p className="text-neutral-700">
              For privacy questions or data requests, reach us at{" "}
              <Link
                href="mailto:info@ddigital.lk"
                className="underline font-semibold"
              >
                info@ddigital.lk
              </Link>{" "}
              or call <Link href="tel:+94727333577">+94 72 733 3577</Link>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://cal.com/codezela/"
                target="_blank"
                className="px-5 py-3 bg-black text-white font-semibold rounded-xl hover:-translate-y-0.5 transition-transform duration-200"
              >
                Book a call
              </Link>
              <Link
                href="https://wa.me/+94727333577/"
                target="_blank"
                className="px-5 py-3 bg-[#22c55e] text-black font-semibold rounded-xl hover:-translate-y-0.5 transition-transform duration-200"
              >
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
