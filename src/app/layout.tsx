import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pitch Black Cyber | Cybersecurity & Compliance Consulting",
  description: "Approachable, expert cybersecurity and compliance consulting for local SMBs, healthcare clinics, and defense contractors in Northern Utah.",
  openGraph: {
    title: "Pitch Black Cyber | Cybersecurity & Compliance Consulting",
    description: "Approachable, expert cybersecurity and compliance consulting for local SMBs, healthcare clinics, and defense contractors in Northern Utah.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-void text-text-primary relative font-sans overflow-x-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan focus:text-void focus:font-bold focus:rounded-md">
          Skip to main content
        </a>
        
        {/* Subtle noise texture for premium tactile feel */}
        <div className="noise-overlay"></div>
        
        {/* Subtle ambient background glow */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(24,190,227,0.03),transparent_70%)]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(236,25,144,0.02),transparent_70%)]"></div>
        </div>

        <Navigation />
        
        <main id="main-content" className="flex-1 flex flex-col w-full">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
