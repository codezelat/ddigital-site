import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ddigital",
  description: "A subsidiary of Codezela Technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`px-12 ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
