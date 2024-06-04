import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "@/app/scss/main.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flowers",
  description: "Created by Ayanda Kinyambo",
  openGraph: {
    title: "Flowers",
    description: "Created by Ayanda Kinyambo",
    url: "https://flowers-beta-roan.vercel.app/",
    siteName: "Flowers",
    images: [
      {
        url: "https://flowers-beta-roan.vercel.app/images/og.png",
        width: 800,
        height: 600,
        alt: "Flowers",
      },
    ],
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: "Flowers",
    description: "Created by Ayanda Kinyambo",
    card: "summary_large_image",
    images: "https://flowers-beta-roan.vercel.app/images/og.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
        </body>
    </html>
  );
}
