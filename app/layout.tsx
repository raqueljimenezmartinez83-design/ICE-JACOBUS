import type { Metadata, Viewport } from "next";
import { Nunito, Pixelify_Sans, Space_Mono } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import "./globals.css";

const pixel = Pixelify_Sans({ weight: ["500", "700"], subsets: ["latin"], variable: "--font-pixelify", display: "swap" });
const nunito = Nunito({ weight: ["400", "500", "700", "800"], subsets: ["latin"], variable: "--font-nunito", display: "swap" });
const mono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Jacous Ice Cream · Heladería artesana en Elda", template: "%s · Jacous Ice Cream" },
  description: "Helado artesano en Elda, construido bloque a bloque. Sabores recién minados.",
};

export const viewport: Viewport = { themeColor: "#1c1625" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${pixel.variable} ${nunito.variable} ${mono.variable}`}>
      <body>
        <a href="#contenido" className="skip-link label">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
