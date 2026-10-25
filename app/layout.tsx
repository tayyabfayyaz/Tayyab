import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

import { ThemeProvider } from "@/app/components/theme-provider";
import { SITE_URL } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Tayyab Fayyaz | AI Agent Engineer, IotaDev";
const description =
  "I build multi-agent AI systems that run real business workflows — orchestrator-worker architectures, MCP integrations, and production deployments. AI Agent Engineer at IotaDev.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Tayyab Fayyaz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Respects prefers-reduced-motion for every Framer Motion
              animation in the app (hero diagram included) without each
              component branching on it manually — branching per-component
              caused server/client hydration mismatches, since the real
              preference is only knowable on the client. */}
          <MotionConfig reducedMotion="user">
            <Header />

            {children}
            <Footer />
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
