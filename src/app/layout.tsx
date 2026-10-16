import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Acharya Defence Academy (ADAS), Sambalpur",
  description:
    "Premier coaching for Class V & VII aspirants aiming for Sainik Schools, RMS, and RIMC. Rooted in Sambalpur, Odisha.",
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
        {/* Floating Call Ring Action Button */}
        <a
          aria-label="Call Acharya Defence Academy"
          className="fixed bottom-28 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#d84315] via-[#ea580c] to-[#fe6332] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all group"
          href="tel:9149771961"
        >
          {/* Vibrating Phone Handset with Vibration Waves */}
          <span className="relative z-10 flex items-center justify-center">
            {/* Left vibration wave */}
            <svg
              className="w-2.5 h-4 text-white/90 animate-vibration-wave -mr-0.5"
              viewBox="0 0 8 16"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M6 2 C2 5.5, 2 10.5, 6 14"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            {/* Handset Icon */}
            <span className="animate-phone-vibrate flex items-center justify-center">
              <Icon name="call" className="text-[24px]" />
            </span>

            {/* Right vibration wave */}
            <svg
              className="w-2.5 h-4 text-white/90 animate-vibration-wave -ml-0.5"
              viewBox="0 0 8 16"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M2 2 C6 5.5, 6 10.5, 2 14"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>

          {/* Tooltip on Hover */}
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-primary/95 text-on-primary text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-white/10 flex items-center gap-1.5">
            <span>Call ADAS: 9149771961</span>
          </span>
        </a>

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
