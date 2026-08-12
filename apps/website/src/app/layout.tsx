import type { Metadata } from "next";
import { Playfair_Display, Libre_Franklin } from "next/font/google";
import { getOrganizationSchema } from "@/lib/seo/schema";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fortheloveofcolor.com"),
  title: {
    default: "4 The Love of Color Painting | Lakewood Ranch & Sarasota, FL",
    template: "%s | 4 The Love of Color Painting",
  },
  description:
    "Family-owned interior and exterior painting for homes and businesses across Lakewood Ranch, Sarasota, and the Suncoast of Florida. Color, finish, and detail work.",
  keywords: [
    "Lakewood Ranch painters",
    "Sarasota house painting",
    "interior painting Florida",
    "exterior painting Sarasota",
    "cabinet refinishing Lakewood Ranch",
    "commercial painting Suncoast",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "4 The Love of Color Painting | Lakewood Ranch & Sarasota, FL",
    description:
      "Family-owned interior and exterior painting for homes and businesses across Lakewood Ranch, Sarasota, and the Suncoast of Florida.",
    url: "https://www.fortheloveofcolor.com",
    siteName: "4 The Love of Color Painting",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "4 The Love of Color Painting Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "4 The Love of Color Painting | Lakewood Ranch & Sarasota, FL",
    description:
      "Family-owned interior and exterior painting for homes and businesses across Lakewood Ranch, Sarasota, and the Suncoast of Florida.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationSchema();

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${libreFranklin.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#faf3e9] text-[#211711] selection:bg-[#c2592e] selection:text-white">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
