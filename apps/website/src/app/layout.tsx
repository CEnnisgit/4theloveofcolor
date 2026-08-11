import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "4 The Love of Color Painting | Lakewood Ranch & Sarasota, FL",
  description:
    "Family-owned interior and exterior painting for homes and businesses across Lakewood Ranch, Sarasota, and the Suncoast of Florida. Color, finish, and detail work.",
};

const sabSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "4 THE LOVE OF COLOR LLC",
  "alternateName": "4 The Love of Color Painting",
  "url": "https://www.fortheloveofcolor.com",
  "telephone": "+19175840069",
  "email": "4theloveofcolorpainting@gmail.com",
  "image": "https://www.fortheloveofcolor.com/images/logo.png",
  "areaServed": [
    {
      "@type": "City",
      "name": "Lakewood Ranch",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "City",
      "name": "Sarasota",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "City",
      "name": "Bradenton",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sabSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#faf3e9] text-[#211711] selection:bg-[#c2592e] selection:text-white">
        {children}
      </body>
    </html>
  );
}
