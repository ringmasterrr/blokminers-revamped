import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script"; // Import next/script
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import Whatsapp from "@/components/shared/whatsapp";

const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blokminers",
  description: "BlokMiners is committed to spearheading innovative Blockchain solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* Add Weglot Script */}
        <Script src="https://cdn.weglot.com/weglot.min.js" strategy="afterInteractive" />
        <Script id="weglot-init" strategy="afterInteractive">
          {`
            Weglot.initialize({
              api_key: 'wg_21156c80e0e0b9d4ea8887a73387c4844'
            });
          `}
        </Script>

        {/* Website Components */}
        <Navbar />
        {children}
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
