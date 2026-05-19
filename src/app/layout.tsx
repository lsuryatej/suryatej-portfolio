import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Suryatej Lalam — ML Engineer",
  description:
    "ML Engineer building production systems for fraud detection and financial intelligence. Based in Hyderabad, India.",
  keywords: ["ML Engineer", "Machine Learning", "Data Engineering", "GCP", "BigQuery", "AI", "Fraud Detection"],
  authors: [{ name: "Suryatej Lalam" }],
  openGraph: {
    title: "Suryatej Lalam — ML Engineer",
    description: "Production ML. Systems that ship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${dmMono.variable} ${instrumentSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
