"use client";

import Link from "next/link";
import Icon from "@/components/Icon";
import CallbackCard from "@/components/CallbackCard";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-gradient-to-b from-primary via-primary-container to-primary text-on-primary overflow-hidden pt-12 pb-24 md:pb-32 min-h-[calc(100vh-4rem)]">
        {/* Faded Giant Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
          <span className="font-display text-[90px] sm:text-[130px] md:text-[180px] font-extrabold tracking-widest text-on-primary whitespace-nowrap uppercase">
            CONNECT
          </span>
        </div>

        {/* Radiant Sunrise Vector Motif */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-secondary-container/20 to-transparent blur-3xl pointer-events-none rounded-full"></div>

        <div className="relative max-w-[1280px] mx-auto px-margin py-space-lg flex flex-col justify-center flex-1">
          {/* Saffron Eyebrow Pill */}
          <div className="flex justify-center mb-space-lg">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed/15 text-secondary-container font-label-eyebrow text-label-eyebrow tracking-widest uppercase shadow-sm">
              <span className="material-symbols-outlined text-[15px] text-secondary-container">
                military_tech
              </span>
              <span>★ ADMISSION DESK &amp; CAMPUS ENQUIRIES ★</span>
              <span className="material-symbols-outlined text-[15px] text-secondary-container">
                military_tech
              </span>
            </div>
          </div>

          {/* Main Heading with Editorial Saffron Accent Wave */}
          <div className="text-center max-w-4xl mx-auto mb-space-xl">
            <h1 className="font-headline-lg md:font-display text-headline-lg-mobile md:text-display text-on-primary tracking-tight leading-tight">
              Begin your child&apos;s journey to{" "}
              <span className="text-secondary-container relative inline-block whitespace-nowrap">
                uniformed victory
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
              Reach out to Acharya Defence Academy in Sambalpur. We provide one-on-one diagnostic assessments, hostel admissions guidance, and disciplined preparation roadmaps for India&apos;s premier defence academies.
            </p>
          </div>

          {/* 4 Contact Highlight Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md lg:gap-space-lg pt-space-lg mt-space-sm max-w-5xl mx-auto">
            <a
              href="tel:9149771961"
              className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">call</span>
              </div>
              <span className="font-headline-sm text-headline-sm text-on-primary tracking-tight">
                +91 9149771961
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                Admission Hotline
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Mon - Sat: 9:00 AM - 9:00 PM
              </span>
            </a>

            <a
              href="mailto:hsasbp@gmail.com"
              className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">mail</span>
              </div>
              <span className="font-headline-sm text-headline-sm text-on-primary tracking-tight">
                hsasbp@gmail.com
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                Official Email
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Direct Administrative Desk
              </span>
            </a>

            <div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  location_on
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm text-on-primary tracking-tight">
                Sambalpur, Odisha
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                Campus Location
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Near City Railway Station
              </span>
            </div>

            <div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  schedule
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm text-on-primary tracking-tight">
                6 Days a Week
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                In-Person Desk
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Sundays by Appointment
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAMPUS CONTACT DESKS */}
      <section className="w-full bg-surface py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            {/* Left: Callback Form */}
            <CallbackCard />
            {/* Right: Campus Directives & Location */}
            <div className="lg:col-span-7 space-y-6">
              {/* Direct Desks Card */}
              <div className="bg-primary text-on-primary rounded-3xl p-8 shadow-md">
                <span className="font-label-eyebrow text-label-eyebrow text-secondary-fixed-dim uppercase tracking-widest font-bold block mb-2">
                  DIRECT PHONE LINES
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-primary">
                  Immediate Academic Assistance
                </h4>
                <p className="font-body-sm text-body-sm text-on-primary-container mt-2">
                  Speak directly with our Chief Academic Counselor or Hostel Administrator.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="p-3 rounded-xl bg-primary-container/80 flex items-center justify-between">
                    <div>
                      <span className="block font-caption text-caption text-secondary-fixed">
                        Main Reception &amp; Admissions
                      </span>
                      <span className="font-title-md text-title-md text-on-primary font-bold">
                        +91 9149771961
                      </span>
                    </div>
                    <a
                      href="tel:9149771961"
                      className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        call
                      </span>
                    </a>
                  </div>

                  <div className="p-3 rounded-xl bg-primary-container/80 flex items-center justify-between">
                    <div>
                      <span className="block font-caption text-caption text-secondary-fixed">
                        Director Himanshu Acharya Desk
                      </span>
                      <span className="font-title-md text-title-md text-on-primary font-bold">
                        hsasbp@gmail.com
                      </span>
                    </div>
                    <a
                      href="mailto:hsasbp@gmail.com"
                      className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        mail
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION BAND */}
      <section className="relative bg-gradient-to-r from-primary via-primary-container to-primary text-on-primary py-16 px-margin overflow-hidden">
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-secondary-container/40 rounded-t-full blur-3xl pointer-events-none"></div>
        <div className="relative max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-secondary-fixed/20 text-secondary-fixed-dim text-caption font-caption uppercase tracking-wider font-bold mb-3 inline-block">
              Admissions Open 2027–2028 Batches
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tight text-on-primary">
              Give your child the winning edge for Sainik School &amp; RMS.
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container mt-2">
              Visit us at Dhankauda, Sambalpur or arrange a direct telephonic strategy session.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 justify-center shrink-0">
            <a
              href="tel:9149771961"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-secondary-container hover:bg-secondary text-on-secondary font-label-btn text-label-btn shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Call +91 9149771961
            </a>
            {/* <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary font-label-btn text-label-btn backdrop-blur-md transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">
                photo_library
              </span>
              <span>Tour Campus Gallery</span>
            </Link> */}
          </div>
        </div>
      </section>

      {/* LOCATION & DIRECTIONS */}
      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-[1280px] mx-auto px-margin">
          <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              {/* Left: Styled Campus Map Visual */}
              <div className="lg:col-span-7 relative">
                <div
                  className="w-full h-80 sm:h-96 rounded-2xl shadow-inner bg-cover bg-center relative overflow-hidden"
                  data-location="Parvati Vihar, Dhankauda, Sambalpur, Odisha, India"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDo_ZZN8z_Q8EbAirvNEgUdqBrV_kkcM4TIZXYLKZpU0WzRKdXfE5BlrS16PzcuXtp09wEpp0OB25xAopfMTYYe5tPjtElXFMyEHKWshkludxFA3VU4O1dDweyQI7gHy3Y0Gy49B6bm4Yb--2BvJojHhR7CtajBG4bHOec_uKFzFWZ7pG3_-rVFm-65DL3fHFOcEKJHjkoay6Zm-d7JNbDSIAIgkV74nZkIcpSAl3SV')",
                  }}
                >
                  <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>

                  {/* Custom Marker Pin overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-on-secondary px-4 py-2 rounded-full shadow-2xl flex items-center gap-2">
                    <Icon name="military_tech" className="text-lg" />
                    <span className="font-caption text-caption font-bold">
                      ADAS Academy Campus
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between font-caption text-caption text-on-surface-variant">
                  <span>📍 400m from Sambalpur City Railway Station</span>
                  <span>Easily accessible from Bargarh &amp; Jharsuguda via NH-53</span>
                </div>
              </div>

              {/* Right: Campus Details & Direct Action */}
              <div className="lg:col-span-5 space-y-space-md">
                <div className="space-y-space-xs">
                  <span className="bg-secondary-fixed text-secondary px-3.5 py-1 rounded-full font-label-eyebrow text-label-eyebrow uppercase tracking-widest inline-block">
                    Visit Campus
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Walk In for In-Person Counselling
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Parents are welcome to tour our classrooms, review study material, and meet faculty members anytime during visiting hours.
                  </p>
                </div>

                <div className="space-y-space-sm font-body-sm text-body-sm">
                  <div className="flex items-start gap-space-xs">
                    <Icon name="location_on" className="text-secondary text-[20px] mt-0.5 shrink-0" />
                    <p className="text-on-surface">
                      <strong>Address:</strong> Near City Railway Station, Parvati Vihar, Dhankauda, Sambalpur, Odisha 768006
                    </p>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <Icon name="schedule" className="text-secondary text-[20px] shrink-0" />
                    <p className="text-on-surface">
                      <strong>Visiting Hours:</strong> Mon - Sat: 9:00 AM – 9:00 PM
                    </p>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <Icon name="call" className="text-secondary text-[20px] shrink-0" />
                    <p className="text-on-surface">
                      <strong>Direct Line:</strong> +91 9149771961
                    </p>
                  </div>
                </div>

                <div className="pt-space-xs flex flex-wrap gap-space-sm">
                  <a
                    className="inline-flex items-center gap-space-xs bg-primary text-on-primary font-label-btn text-label-btn px-6 py-3 rounded-full shadow hover:bg-primary-container transition-colors"
                    href="https://maps.google.com/?q=Acharya+Defence+Academy+Sambalpur"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon name="near_me" className="text-[18px]" />
                    <span>Get Directions</span>
                  </a>
                  <a
                    className="inline-flex items-center gap-space-xs bg-secondary-fixed text-secondary font-label-btn text-label-btn px-6 py-3 rounded-full hover:bg-secondary-fixed-dim transition-colors"
                    href="https://wa.me/919149771961"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon name="chat" className="text-[18px]" />
                    <span>WhatsApp Desk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
