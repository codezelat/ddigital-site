import Header from "./components/section/header";
import "./globals.css";
import Footer from "./components/section/footer";

export const metadata = {
  title: "DDigital",
  description: "Created By Codezela Technologies",
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
        {/* <Drawer/> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
