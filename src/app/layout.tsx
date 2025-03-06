import { Metadata } from "next";
import "./globals.css";

import Footer from "@/componnents/layout/Footer";
import Header from "@/componnents/layout/Header";

export const metadata: Metadata = {
  title: "Next.js TypeScript Base",
  description: "A well-structured Next.js 13+ base project with TypeScript and Tailwind CSS.",
  openGraph: {
    title: "Next.js TypeScript Base",
    description: "A well-structured Next.js 13+ base project with TypeScript and Tailwind CSS.",
    url: "https://yourdomain.com",
    siteName: "Next.js TS Base",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Header />
        {/* <main className="container mx-auto p-4">{children}</main> */}
        <main className="mx-auto ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
