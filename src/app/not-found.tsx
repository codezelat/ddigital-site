import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-4 md:px-8 lg:px-12 pb-24">
      <section className="mt-36 lg:mt-40 bg-black text-white rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/75 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.2),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.12),transparent_28%)] mix-blend-screen" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
        <div className="relative p-8 lg:p-16 space-y-6 lg:space-y-8">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">
            404 / Page not found
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl">
            Looks like this page took a wrong turn.
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl">
            Don&rsquo;t worry, we can guide you back to the work, services, or a
            quick chat with the team. Use the links below to continue.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="px-5 py-3 bg-white text-black font-semibold rounded-xl hover:-translate-y-0.5 transition-transform duration-200"
            >
              Go home
            </Link>
            <Link
              href="/services"
              className="px-5 py-3 bg-[#22c55e] text-black font-semibold rounded-xl hover:-translate-y-0.5 transition-transform duration-200"
            >
              View services
            </Link>
            <a
              href="https://cal.com/codezela/"
              target="_blank"
              className="px-5 py-3 border border-white/30 text-white font-semibold rounded-xl hover:border-white transition-colors duration-200"
              rel="noreferrer"
            >
              Book a discovery call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
