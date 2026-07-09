import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Valentine Omonya | Software Engineer",
    template: "%s | Valentine Omonya"
  },
  description: "Valentine Omonya is a Software Engineer based in Kenya specializing in frontend and full-stack development, building robust business solutions and enterprise applications.",
  keywords: ["Valentine Omonya", "Software Engineer", "Full Stack Developer", "Kenya", "React", "Next.js", "NestJS", "Portfolio"],
  authors: [{ name: "Valentine Omonya" }],
  creator: "Valentine Omonya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://valentinee.dev",
    title: "Valentine Omonya | Software Engineer",
    description: "Valentine Omonya is a Software Engineer based in Kenya specializing in frontend and full-stack development.",
    siteName: "Valentine Omonya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentine Omonya | Software Engineer",
    description: "Valentine Omonya is a Software Engineer based in Kenya specializing in frontend and full-stack development.",
    creator: "@devalentine_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
