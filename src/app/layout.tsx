import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Acharya Defence Academy (ADAS), Sambalpur",
  description:
    "Premier coaching for Class V & VII aspirants aiming for Sainik Schools, RMS, and RIMC. Rooted in Sambalpur, Western Odisha.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className="min-h-screen scroll-smooth antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@600;700;800&family=Montserrat:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-background text-on-surface antialiased min-h-screen flex flex-col"
      >
        <ScrollProgressBar />
        <Navbar />
        <main className="w-full pt-16 bg-background min-h-screen flex-1">
          {children}
        </main>
        {/* WhatsApp Floating Action Button */}
        <a
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white shadow-xl hover:scale-105 transition-transform group"
          href="https://wa.me/919149771961"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none"></span>
          <Icon name="chat" className="text-[30px] relative z-10" />
        </a>
        <Footer />
      </body>
    </html>
  );
}
