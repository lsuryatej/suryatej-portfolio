import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Suryatej Lalam | ML Engineer",
  description:
    "Machine Learning Engineer building intelligent systems and data pipelines. Based in Hyderabad, India.",
  keywords: ["ML Engineer", "Machine Learning", "Data Engineering", "GCP", "BigQuery", "AI"],
  authors: [{ name: "Suryatej Lalam" }],
  openGraph: {
    title: "Suryatej Lalam | ML Engineer",
    description: "Building intelligent systems. Occasionally, creative ones.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${plusJakartaSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased noise`}
      >
        {children}
      </body>
    </html>
  );
}
