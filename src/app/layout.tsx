import LenisProvider from "@/providers/lenis-provider";
import type { Metadata } from "next";
import { Noto_Serif_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-noto-serif-display",
  display: "swap",
  axes: ["wdth"],
  preload: true,
  
});

const aileron = localFont({
  src: [
    {
      path: "../../public/fonts/aileron-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/aileron-semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/aileron-semibold-italic.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/aileron-bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aileron",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DYO Digitals - Custom Web Design & Branding for Creative Businesses",
    template: "%s | DYO Digitals"
  },
  description: "We create stunning, custom-coded websites and brands that feel exactly like you. Specializing in web design for creatives. From $999 USD.",
  keywords: [
    "web design",
    "custom website design",
    "branding",
    "photographer websites",
    "creative business websites",
    "custom coded websites",
    "web development",
    "brand identity",
    "NextJS websites",
    "responsive web design",
    "DYO Digitals"
  ],
  authors: [{ name: "DYO Digitals" }],
  creator: "DYO Digitals",
  publisher: "DYO Digitals",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dyodigitals.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dyodigitals.com", // Replace with your actual domain
    title: "DYO Digitals - Custom Web Design & Branding for Creative Businesses",
    description: "We create stunning, custom-coded websites and brands that feel exactly like you. Specializing in web design for photographers, coaches, and creative entrepreneurs.",
    siteName: "DYO Digitals",
    images: [
      {
        url: "/og-image.webp", // You'll need to create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: "DYO Digitals - Custom Web Design & Branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DYO Digitals - Custom Web Design & Branding for Creative Businesses",
    description: "We create stunning, custom-coded websites and brands that feel exactly like you. Starting from $999 USD.",
    images: ["/og-image.webp"], // Same image as OpenGraph
   
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
  verification: {
    // Add these when you set up Google Search Console, Bing, etc.
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better performance and SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fffde4" />
        <meta name="color-scheme" content="light" />
        
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DYO Digitals",
              "description": "Custom web design and branding for creative businesses",
              "url": "https://dyodigitals.com", // Replace with your actual domain
              "logo": "https://dyodigitals.com/logo-light.svg", // Replace with your actual domain
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "dyodigitals@gmail.com",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.instagram.com/dyo.digitals/"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "UK" // Update with your actual country
              },
              "priceRange": "$999-$2999+",
              "serviceArea": {
                "@type": "Place",
                "name": "Worldwide"
              }
            })
          }}
        />
      </head>
      <body
        className={`${aileron.variable} ${notoSerifDisplay.variable} antialiased`}
      >
        <LenisProvider>
          <main className="max-w-[1920px] mx-auto">{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
