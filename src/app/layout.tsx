import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbfaf7",
};

export const metadata: Metadata = {
  title: "Naime | Digital Marketing & Growth Specialist • Instructor",
  description: "NSDA Level-3 Certified Digital Marketer with 4+ years of industry experience, 100+ international clients, agency background, and classroom teaching expertise.",
  keywords: [
    "Digital Marketing Instructor",
    "Digital Marketing Trainer",
    "Growth Specialist",
    "NSDA Certified Marketer",
    "International Client Management",
    "Meta Ads Trainer",
    "Naime Digital Marketer",
    "Corporate Marketing Training Bangladesh",
  ],
  authors: [{ name: "Naime" }],
  openGraph: {
    title: "Naime | Digital Marketing & Growth Specialist • Instructor",
    description: "I turn real-world marketing experience into practical learning. NSDA Level-3 Certified with 100+ international clients.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${newsreader.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#fbfaf7] text-gray-900 font-sans selection:bg-blue-900 selection:text-white antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
