import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import SkipLink from "@/components/SkipLink";
import { Toaster } from "@/components/Toaster";
import { createMetadata, createStructuredData } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const metadata: Metadata = createMetadata({
  title: "Mfon Francis | Web & Mobile Developer",
  description: "Portfolio of Mfon Francis, a Web and Cross-Platform Mobile Developer specializing in modern web apps and mobile experiences.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = createStructuredData("Person");
  const portfolioStructuredData = createStructuredData("Portfolio");

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioStructuredData) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('portfolio-theme') || 'system';
                  const root = document.documentElement;
                  root.classList.remove('light', 'dark');
                  if (theme === 'system') {
                    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    root.classList.add(systemTheme);
                  } else {
                    root.classList.add(theme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body 
        className={`${inter.variable} ${poppins.variable} font-sans bg-background text-foreground antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <SkipLink />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
