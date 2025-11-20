import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
// import MaintenanceSection from "./components/maintenance-section/maintenance-section";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ddigital.lk"),
  title: {
    default: "Ddigital - Premier Digital Media Hub in Sri Lanka",
    template: "%s | Ddigital",
  },
  description:
    "Ddigital is Sri Lanka's leading digital media agency specializing in creative design, photography, videography, and innovative digital solutions. Empowering brands with exceptional media services.",
  keywords: [
    "ddigital",
    "digital media Sri Lanka",
    "creative agency Sri Lanka",
    "photography Sri Lanka",
    "videography Sri Lanka",
    "digital design",
    "media production",
    "Colombo digital agency",
  ],
  authors: [
    { name: "Ddigital", url: "https://ddigital.lk" },
    { name: "Codezela Technologies", url: "https://codezela.com" },
  ],
  creator: "Ddigital",
  publisher: "Codezela Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ddigital.lk",
    siteName: "Ddigital",
    title: "Ddigital - Premier Digital Media Hub in Sri Lanka",
    description:
      "Ddigital is Sri Lanka's leading digital media agency specializing in creative design, photography, videography, and innovative digital solutions. Empowering brands with exceptional media services.",
    images: [
      {
        url: "/img/brand/banner.jpg",
        width: 2000,
        height: 350,
        alt: "Ddigital - Digital Media Agency in Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ddigital - Premier Digital Media Hub in Sri Lanka",
    description:
      "Ddigital is Sri Lanka's leading digital media agency specializing in creative design, photography, videography, and innovative digital solutions.",
    images: ["/img/brand/banner.jpg"],
  },
  alternates: {
    canonical: "https://ddigital.lk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://ddigital.lk/#organization",
    name: "Ddigital",
    legalName: "Ddigital - A Subsidiary of Codezela Technologies",
    url: "https://ddigital.lk",
    logo: "https://ddigital.lk/img/brand/banner.jpg",
    foundingDate: "2020",
    founder: {
      "@type": "Organization",
      name: "Codezela Technologies",
      url: "https://codezela.com",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
      addressLocality: "Sri Lanka",
    },
    sameAs: [
      "https://ddigital.lk",
    ],
    description:
      "Ddigital is Sri Lanka's leading digital media agency specializing in creative design, photography, videography, and innovative digital solutions.",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ddigital.lk/#localbusiness",
    name: "Ddigital",
    image: "https://ddigital.lk/img/brand/banner.jpg",
    url: "https://ddigital.lk",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
      addressLocality: "Sri Lanka",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "LK",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://ddigital.lk/#website",
    url: "https://ddigital.lk",
    name: "Ddigital",
    description:
      "Sri Lanka's leading digital media agency for creative design, photography, and videography.",
    publisher: {
      "@id": "https://ddigital.lk/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://ddigital.lk/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        {/* <MaintenanceSection /> */}
      </body>
    </html>
  );
}
