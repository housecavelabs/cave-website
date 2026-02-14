import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Roboto_Mono } from "next/font/google";
import Footer from "./components/Footer";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "The Cave",
    template: "%s | The Cave",
  },
  description:
    "A community for the 1%. Training ground, culture, and home for impact-driven visionaries and change architects.",
  keywords: [
    "The Cave",
    "Elite Performance",
    "Visionaries",
    "Impact Driven",
    "Mastermind",
    "Discipline",
    "Growth",
    "House Cave",
  ],

  alternates: {
    canonical: "https://housecave.org",
  },

  metadataBase: new URL("https://housecave.org"),

  openGraph: {
    title: "The Cave",
    description:
      "A community for the 1%. Training ground, culture, and home for impact-driven visionaries.",
    url: "https://housecave.org",
    siteName: "The Cave",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "The Cave Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Cave",
    description: "A community for the 1%. Training ground for visionaries.",
    images: ["/icon.png"],
    creator: "@TheCave",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} ${robotoMono.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
