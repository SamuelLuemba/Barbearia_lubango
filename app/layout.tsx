/**
 * Layout raiz da aplicação
 * - Define fontes globais (Montserrat + Inter)
 * - Aplica estrutura base
 * - SEO básico
 */

import "./globals.css";
import { Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-title",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-text",
});

export const metadata = {
  title: "Barbearia Premium Lubango | Cortes Modernos e Estilo",
  description:
    "Barbearia premium em Luanda. Cortes modernos, degradê, barba e atendimento de alto nível. Agende já pelo WhatsApp.",
  keywords:
    "barbearia luanda, corte de cabelo angola, barbearia premium, degradê luanda",
  openGraph: {
    title: "Barbearia Premium Lubango",
    description: "Estilo, presença e confiança em cada corte.",
    type: "website",
     images: [
      {
        url: "/barber-owner.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body  className={`${montserrat.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
