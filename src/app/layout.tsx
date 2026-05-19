import type { Metadata } from "next";
import { Playfair_Display, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Suryatej Lalam | ML Engineer",
  description:
    "Machine Learning Engineer building intelligent systems and data pipelines. Based in Hyderabad, India.",
  keywords: ["ML Engineer", "Machine Learning", "Data Engineering", "GCP", "BigQuery", "AI"],
  authors: [{ name: "Suryatej Lalam" }],
  openGraph: {
    title: "Suryatej Lalam | ML Engineer",
    description: "Building production ML systems. Fraud models, ETL pipelines, knowledge graphs.",
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
        className={`${playfairDisplay.variable} ${geistMono.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
