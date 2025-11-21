import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import services from "../../data/services";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Props["params"]>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((item) => item.slug === resolvedParams.slug);
  if (!service) return {};

  const title = `${service.title} Services | Ddigital`;
  const description = service.intro;
  const url = `https://ddigital.lk/services/${service.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: service.imageUrl1,
          width: 2000,
          height: 1200,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.imageUrl1],
      creator: "@ddigital_lk",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Props["params"]>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: `https://ddigital.lk/services/${service.slug}`,
    provider: { "@id": "https://ddigital.lk/#organization" },
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
  };

  return (
    <main className="px-4 md:px-8 lg:px-12 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="mt-32 lg:mt-36 relative overflow-hidden rounded-3xl bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent" />
        <Image
          src={service.imageUrl1}
          alt={service.title}
          fill
          className="object-cover grayscale brightness-50"
          placeholder="blur"
          blurDataURL={service.blurUrl}
          sizes="100vw"
          priority
        />
        <div className="relative p-8 lg:p-16 pt-16 lg:pt-20 grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/70">
              <span className="h-[1px] w-12 bg-white/60" />
              {service.title}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              {service.heroTitle}
            </h1>
            <p className="text-lg lg:text-xl text-white/80">{service.intro}</p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="https://cal.com/codezela/"
                target="_blank"
                className="px-5 py-3 bg-white text-black font-semibold rounded-xl hover:-translate-y-0.5 transition-transform duration-200"
              >
                Book a discovery call
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
          <div className="bg-white rounded-2xl p-6 lg:p-8 space-y-4 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.35)]">
            <h2 className="text-xl font-semibold text-neutral-900">
              What we deliver
            </h2>
            <ul className="space-y-3 text-neutral-800">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#22c55e]" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-14 grid lg:grid-cols-[1fr,0.8fr] gap-10">
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-neutral-100 shadow-[0_20px_120px_-60px_rgba(0,0,0,0.25)] space-y-6">
          <h2 className="text-2xl lg:text-3xl font-semibold">How it works</h2>
          <ol className="space-y-3 text-neutral-800">
            <li>
              <span className="font-semibold">01. Discovery</span> — align on
              goals, constraints, and success metrics.
            </li>
            <li>
              <span className="font-semibold">02. Strategy & concepts</span> —
              rapid options validated against audience and channel needs.
            </li>
            <li>
              <span className="font-semibold">03. Build & refine</span> — create
              assets, test, and tighten with clear checkpoints.
            </li>
            <li>
              <span className="font-semibold">04. Launch & handover</span> —
              governance, templates, and training so teams can run fast.
            </li>
          </ol>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 p-6 space-y-3">
              <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Focus Areas
              </h3>
              <ul className="space-y-2 text-neutral-800">
                {service.focus.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[#22c55e]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6 space-y-3">
              <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Why this works
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                We combine strategy, production rigor, and post-launch support
                so the work is not only beautiful but measurable and easy to
                reuse. That keeps your team moving without sacrificing craft.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 text-white rounded-3xl p-8 lg:p-12 space-y-6">
          <h2 className="text-2xl font-semibold">Typical deliverables</h2>
          <ul className="space-y-3 text-white/85">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#22c55e]" />
              Playbooks, guidelines, and template kits tailored to your team.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#22c55e]" />
              Ready-to-ship assets optimized for channel specs.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#22c55e]" />
              Measurement checkpoints with recommendations for iteration.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#22c55e]" />
              Training and handover so internal teams can scale confidently.
            </li>
          </ul>
          <div className="space-y-3">
            <h3 className="text-sm uppercase tracking-[0.2em] text-white/70">
              Need this service?
            </h3>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/#contact"
                className="px-5 py-3 bg-white text-black font-semibold rounded-xl hover:-translate-y-0.5 transition-transform duration-200"
              >
                Talk to us
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
