import Header from "./components/section/header";
import Footer from "./components/section/footer";
import "./globals.css";

export const metadata = {
  title: "DDigital",
  description: "Developed By Codezela Technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
