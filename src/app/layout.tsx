import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ProgressBar from "@/components/ui/ProgressBar";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://convergedigitals.com"),
  title: {
    template: "%s | Converge Digitals",
    default: "Converge Digitals | Luxury Branding & AI Photography",
  },
  description:
    "Converge Digitals is a luxury creative agency specializing in high-end brand identity and AI-powered fashion photography for ambitious brands.",
  keywords: [
    "luxury branding",
    "AI fashion photography",
    "brand identity",
    "creative agency",
    "AI shoots",
    "fashion photography Mumbai",
    "luxury brand design",
  ],
  authors: [{ name: "Converge Digitals" }],
  creator: "Converge Digitals",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://convergedigitals.com",
    siteName: "Converge Digitals",
    title: "Converge Digitals | Luxury Branding & AI Photography",
    description:
      "A luxury creative agency specializing in branding and AI fashion photography.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Converge Digitals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Converge Digitals",
    description: "Luxury branding and AI fashion photography.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Converge Digitals",
  url: "https://convergedigitals.com",
  logo: "https://convergedigitals.com/logo.png",
  description:
    "Luxury creative agency specializing in high-end brand identity and AI-powered fashion photography.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Level 5, Creative Park, BKC",
    addressLocality: "Mumbai",
    postalCode: "400051",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-22-4900-2100",
    contactType: "customer service",
  },
  sameAs: [
    "https://instagram.com/convergedigitals",
    "https://linkedin.com/company/convergedigitals",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <link rel="canonical" href="https://convergedigitals.com" />
        <meta name="theme-color" content="#E84141" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-dm antialiased bg-background text-textWhite">
        <CustomCursor />
        <ProgressBar />
        <Nav />
        <main className="pt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
