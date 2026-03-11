import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Head from "next/head";

import { ThemeProvider } from "@/app/components/theme-provider";

export const metadata: Metadata = {
  title: "Tayyab Fayyaz | Portfolio",
  description:
    "I am Tayyab Fayyaz, a passionate Artificial Intelligence and Machine Learning developer. I specialize in creating intelligent solutions using Python, TypeScript, and Next.js. Explore my portfolio to see how I blend code, design, and AI to build innovative applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>Tayyab Fayyaz | Portfolio</Head>
      <body
        className={`antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
