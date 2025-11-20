import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ddigital - Premier Digital Media Hub",
    short_name: "Ddigital",
    description:
      "Ddigital is Sri Lanka's leading digital media agency specializing in creative design, photography, videography, and innovative digital solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "business",
      "photography",
      "videography",
      "design",
      "marketing",
    ],
    lang: "en",
    dir: "ltr",
  };
}
