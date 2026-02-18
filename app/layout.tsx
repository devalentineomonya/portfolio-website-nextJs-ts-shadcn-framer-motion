import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { MainDocker } from "@/components/common/navigation/main-dock";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { MainHeader } from "@/components/common/partials/header";
import { ParticlesProvider } from "@/providers/particles-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { rootMetaData as metadata } from "./metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-black dark:bg-black relative dark:text-white antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="w-full max-w-4xl mx-auto px-4 py-8 pb-24 relative z-0">
            <MainHeader />
            {children}
            <MainDocker />
          </main>
          <ParticlesProvider />
          <SmoothCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
