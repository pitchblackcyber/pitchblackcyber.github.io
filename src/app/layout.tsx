import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pitch Black Cyber - Cybersecurity Consulting",
  description: "Cybersecurity Consulting and Implementation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-deep-space text-text-primary relative font-sans">
        {/* We can add a background image here as a fixed div to keep it simple */}
        <div className="fixed inset-0 z-[-1] bg-[url('/images/background-image.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
        <Navigation />
        <main className="flex-1 flex flex-col max-w-[1100px] w-full mx-auto px-4 mt-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
