"use client";

import MasonryGridDemo from "@/components/ui/demo";

export default function GalleryPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-gradient-to-b from-primary via-primary-container to-primary text-on-primary overflow-hidden pt-12 pb-24 md:pb-32 min-h-[calc(100vh-4rem)]">
        {/* Faded Giant Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
          <span className="font-display text-[90px] sm:text-[130px] md:text-[180px] font-extrabold tracking-widest text-on-primary whitespace-nowrap uppercase">
            CAMPUS
          </span>
        </div>

        {/* Radiant Sunrise Vector Motif */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-secondary-container/20 to-transparent blur-3xl pointer-events-none rounded-full"></div>

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin py-space-lg flex flex-col justify-center flex-1">
          {/* Saffron Eyebrow Pill */}
          <div className="flex justify-center mb-space-lg">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed/15 text-secondary-container font-label-eyebrow text-label-eyebrow tracking-widest uppercase shadow-sm">
              <span className="material-symbols-outlined text-[15px] text-secondary-container">
                military_tech
              </span>
              <span>★ ADAS INFRASTRUCTURE &amp; CADET LIFE ★</span>
              <span className="material-symbols-outlined text-[15px] text-secondary-container">
                military_tech
              </span>
            </div>
          </div>

          {/* Main Heading with Editorial Saffron Accent Wave */}
          <div className="text-center max-w-4xl mx-auto mb-space-xl">
            <h1 className="font-headline-lg md:font-display text-headline-lg-mobile md:text-display text-on-primary tracking-tight leading-tight">
              Life at the academy in{" "}
              <span className="text-secondary-container relative inline-block whitespace-nowrap">
                living color
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-3"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 12"
                >
                  <path
                    d="M0,9 Q50,1 100,7"
                    fill="none"
                    stroke="#fe6332"
                    strokeLinecap="round"
                    strokeWidth="4.5"
                  ></path>
                </svg>
              </span>
            </h1>
            <p className="mt-space-md font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto leading-relaxed">
              Explore Western Odisha&apos;s most disciplined residential defence campus. Where juvenile cadets live, train, and study with military punctuality to crack AISSEE, RMS, and RIMC.
            </p>
          </div>

          {/* Glassmorphic Highlights Quad */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md lg:gap-space-lg pt-space-lg mt-space-sm max-w-5xl mx-auto">
            <div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  domain
                </span>
              </div>
              <span className="font-display text-headline-lg md:text-headline-lg text-on-primary tracking-tight">
                12+ Acres
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                Dedicated Campus
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Dhankauda, Sambalpur
              </span>
            </div>

            <div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  hotel
                </span>
              </div>
              <span className="font-display text-headline-lg md:text-headline-lg text-secondary-container tracking-tight">
                24 / 7
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                Supervised Hostel
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Residential Mentors On-Site
              </span>
            </div>

            <div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  fitness_center
                </span>
              </div>
              <span className="font-display text-headline-lg md:text-headline-lg text-on-primary tracking-tight">
                50+
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                Obstacle Drills
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Army Physical Training Regimen
              </span>
            </div>

            <div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  security
                </span>
              </div>
              <span className="font-display text-headline-lg md:text-headline-lg text-on-primary tracking-tight">
                100%
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                CCTV Secured
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Safe Learning Sanctuary
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MASONRY GRID SECTION */}
      <MasonryGridDemo />
    </div>
  );
}
