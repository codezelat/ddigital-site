import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import services from "../data/services";

export const metadata: Metadata = {
  title: "Services - Branding, Design, Content, Photography & Video | Ddigital",
  description:
    "Explore Ddigital's services across branding, design, content, photography, and videography. Quick overviews with links to deep dives for each service.",
  alternates: {
    canonical: "https://ddigital.lk/services",
  },
  openGraph: {
    title: "Ddigital Services | Branding, Design, Content, Photography & Video",
    description:
      "A dependable creative partner for brands that want to move fast without sacrificing craft. View our services and dive into detailed pages.",
    url: "https://ddigital.lk/services",
    images: [
      {
        url: "/img/brand/banner.jpg",
        width: 2000,
        height: 350,
        alt: "Ddigital - Digital Media Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ddigital Services | Branding, Design, Content, Photography & Video",
    description:
      "Learn how Ddigital supports founders and marketing teams across branding, design, content, and production.",
    images: ["/img/brand/banner.jpg"],
    creator: "@ddigital_lk",
  },
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ddigital Services",
    description:
      "Branding, design, content, photography, and videography services by Ddigital.",
    url: "https://ddigital.lk/services",
    hasPart: services.map((service) => ({
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: `https://ddigital.lk/services/${service.slug}`,
      provider: { "@id": "https://ddigital.lk/#organization" },
      areaServed: {
        "@type": "Country",
        name: "Sri Lanka",
      },
    })),
  };

  return (
    <main className="px-4 md:px-8 lg:px-12 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="mt-32 lg:mt-36 bg-black text-white rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 opacity-85 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_18%_18%,_rgba(34,197,94,0.25),_transparent_32%),radial-gradient(circle_at_82%_10%,_rgba(255,255,255,0.15),_transparent_30%)] mix-blend-screen" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
        <div className="relative p-8 lg:p-16 pt-16 lg:pt-20 flex flex-col gap-6 lg:gap-10">
          <div className="flex flex-wrap gap-3 text-sm uppercase tracking-[0.2em] text-white/70">
            <span className="px-3 py-1 rounded-full border border-white/20">
              Services
            </span>
            <span className="px-3 py-1 rounded-full border border-white/20">
              Strategy + Craft
            </span>
          </div>
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-10 items-start">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Services engineered to move brands forward, fast.
              </h1>
              <p className="text-lg lg:text-xl text-white/80">
                Quick overviews of how we help. Tap into a dedicated page for
                each service to see process, proof, and next steps.
              </p>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:-translate-y-0.5 transition-transform duration-200"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 space-y-4 backdrop-blur">
              <h2 className="text-xl font-semibold">What to expect</h2>
              <ul className="space-y-3 text-white/80">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#22c55e]" />
                  Senior leads in every engagement with transparent timelines.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#22c55e]" />
                  E-E-A-T friendly process: research, citations, clear outcomes.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#22c55e]" />
                  Assets designed to be fast to ship, easy to reuse, and simple
                  to govern.
                </li>
              </ul>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="https://cal.com/codezela/"
                  target="_blank"
                  className="px-5 py-3 bg-white text-black font-semibold rounded-xl hover:translate-y-[-2px] transition-transform duration-200"
                >
                  Book a discovery call
                </Link>
                <Link
                  href="https://wa.me/+94727333577/"
                  target="_blank"
                  className="px-5 py-3 bg-[#22c55e] text-black font-semibold rounded-xl hover:-translate-y-[-2px] transition-transform duration-200"
                >
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 space-y-12 lg:space-y-16">
        {services.map((service) => (
          <article
            key={service.slug}
            className="relative overflow-hidden rounded-3xl min-h-[36rem] lg:min-h-[24rem]"
          >
            <Image
              src={service.imageUrl1}
              alt={service.title}
              fill
              className="object-cover grayscale brightness-50"
              placeholder="blur"
              blurDataURL={service.blurUrl}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/10" />
            <div className="relative h-full flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 md:px-10 lg:px-14 py-12 gap-6 lg:gap-10">
              <div className="space-y-3 max-w-3xl text-white">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/70">
                  <span className="h-[1px] w-12 bg-white/60 hidden sm:block" />
                  {service.title}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                  {service.heroTitle}
                </h2>
                <p className="text-lg text-white/80">{service.intro}</p>
                <div className="flex flex-wrap gap-2 text-xs text-white/80">
                  {service.focus.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full border border-[#22c55e]/40 bg-[#22c55e]/20 text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-black/80 text-white rounded-2xl p-6 lg:p-7 w-full lg:w-96 shadow-[0_20px_120px_-60px_rgba(0,0,0,0.35)] space-y-4 border border-[#22c55e]/25 backdrop-blur">
                <p className="text-sm text-white/80">
                  {service.outcomes.slice(0, 2).join(" • ")}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="px-4 py-3 bg-white text-black rounded-xl font-semibold hover:-translate-y-0.5 transition-transform duration-200"
                  >
                    View service
                  </Link>
                  <Link
                    href="https://wa.me/+94727333577/"
                    target="_blank"
                    className="px-4 py-3 bg-[#22c55e] text-black rounded-xl font-semibold hover:-translate-y-0.5 transition-transform duration-200"
                  >
                    WhatsApp Us
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
