import type { Metadata } from "next";
import { Bebas_Neue, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${playfairDisplay.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
