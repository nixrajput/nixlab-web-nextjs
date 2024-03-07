import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import Script from "next/script";
import NavBar from "@/components/navbar/NavBar";
import ScrollToTop from "@/components/common/ScrollToTop";
import LocalConfig from "@/constants/config";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["devanagari", "latin"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

export const metadata: Metadata = {
  title: "NixLab Technologies - an Indian Software Development Company",
  description:
    "NixLab Technologies is a software development company based in the India.",
  keywords: [
    "NixLab",
    "nixlab",
    "nixlab technologies",
    "nixlab tech",
    "web development",
    "android app development",
    "iOS app development",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        rel: "icon",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        rel: "icon",
        sizes: "any",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: ["/icon.png"],
    apple: [
      { url: "/icon.png", type: "image/png" },
      { url: "/apple-icon.png", sizes: "144x144", type: "image/png" },
    ],
  },
  verification: {
    google: "j7ODdQNwjVQNYmNEX_5boI9PagNu3Uoiu2EL-yVpBI0",
  },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${LocalConfig.values.NEXT_PUBLIC_GTAG_ID}`}
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${LocalConfig.values.NEXT_PUBLIC_GTAG_ID}', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
      </head>

      <body
        className={
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }
      >
        <NavBar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
