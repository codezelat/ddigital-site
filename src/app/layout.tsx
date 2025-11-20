import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
// import MaintenanceSection from "./components/maintenance-section/maintenance-section";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ddigital.lk"),
  title: {
    default: "Ddigital - Premier Digital Media Hub in Sri Lanka",
    template: "%s | Ddigital",
  },
  description:
    "Ddigital is Sri Lanka's leading digital media agency specializing in creative design, photography, videography, and innovative digital solutions. Based in Colombo, we empower brands with exceptional media services.",
  keywords: [
    "ddigital",
    "digital media Sri Lanka",
    "creative agency Sri Lanka",
    "photography Sri Lanka",
    "videography Sri Lanka",
    "digital design",
    "media production",
    "Colombo digital agency",
    "Sri Lanka digital services",
    "Colombo 08",
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
    siteName: "Ddigital - Digital Media Hub",
    title: "Ddigital - Premier Digital Media Hub in Sri Lanka",
    description:
      "Ddigital is Sri Lanka's leading digital media agency specializing in creative design, photography, videography, and innovative digital solutions. Based in Colombo, we empower brands with exceptional media services.",
    images: [
      {
        url: "/img/brand/banner.jpg",
        width: 2000,
        height: 350,
        alt: "Ddigital - Premier Digital Media Hub in Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ddigital - Premier Digital Media Hub in Sri Lanka",
    description:
      "Ddigital is Sri Lanka's leading digital media agency specializing in creative design, photography, videography, and innovative digital solutions. Based in Colombo.",
    images: ["/img/brand/banner.jpg"],
    site: "@ddigital_lk",
    creator: "@ddigital_lk",
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
      streetAddress: "345/35, RIT Alles Mw",
      addressLocality: "Colombo 08",
      postalCode: "00800",
      addressCountry: "LK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+94-72-733-3577",
      contactType: "customer service",
      email: "ddigital.lk@gmail.com",
      availableLanguage: ["English", "Sinhala"],
    },
    sameAs: [
      "https://ddigital.lk",
      "https://www.instagram.com/ddigital.lk/",
      "https://www.facebook.com/ddigital.lk/",
      "https://www.tiktok.com/@ddigital.lk/",
      "https://www.youtube.com/@ddigital_lk/",
      "https://twitter.com/ddigital_lk/",
      "https://www.threads.net/@ddigital.lk",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "6",
    },
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
    telephone: "+94-72-733-3577",
    email: "ddigital.lk@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "345/35, RIT Alles Mw",
      addressLocality: "Colombo 08",
      postalCode: "00800",
      addressCountry: "LK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.9120",
      longitude: "79.8770",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "6",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ddigital.lk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://ddigital.lk/#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Services",
        item: "https://ddigital.lk/#services",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Work",
        item: "https://ddigital.lk/#work",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Testimonials",
        item: "https://ddigital.lk/#testimonials",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Contact",
        item: "https://ddigital.lk/#contact",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://ddigital.lk/#service",
    serviceType: "Digital Media Services",
    provider: {
      "@id": "https://ddigital.lk/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Media Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Photography Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Professional Photography",
                description:
                  "High-quality photography services for businesses and events",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Videography Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Professional Videography",
                description: "Creative video production and editing services",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Digital Design Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Digital Design",
                description:
                  "Creative digital design solutions for brands and businesses",
              },
            },
          ],
        },
      ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
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
