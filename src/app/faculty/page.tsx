"use client";

import { useState } from "react";
import EnquiryModal from "@/components/EnquiryModal";
import founderImg from "@/assets/founder.jpeg";
import founderBook from "@/assets/founder-book.jpg";
import founderBookFront from "@/assets/founder-book-front.jpg";

export default function FacultyPage() {
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [bookViewMode, setBookViewMode] = useState<"front" | "spread">("front");

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative w-full bg-gradient-to-b from-primary-container via-primary to-tertiary text-on-primary overflow-hidden pt-12 pb-24 md:pb-32 min-h-[calc(100vh-4rem)]">
        {/* Faded Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
          <span className="font-display text-[140px] md:text-[240px] font-extrabold tracking-widest text-on-primary whitespace-nowrap">
            MENTORS
          </span>
        </div>
        {/* Radiant Sunrise Vector Motif */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-secondary-container/20 to-transparent blur-3xl pointer-events-none rounded-full"></div>
        <div className="relative max-w-[1280px] mx-auto px-margin py-space-lg flex flex-col justify-center flex-1">
          {/* Eyebrow Pill */}
          <div className="flex justify-center mb-space-lg">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed/15 text-secondary-container font-label-eyebrow text-label-eyebrow tracking-widest uppercase shadow-sm">
              <span className="material-symbols-outlined text-[15px] text-secondary-container">
                military_tech
              </span>
              <span>★ EX-DEFENCE SCHOLARS &amp; ENTRANCE SPECIALISTS ★</span>
              <span className="material-symbols-outlined text-[15px] text-secondary-container">
                military_tech
              </span>
            </div>
          </div>
          {/* Main Heading */}
          <div className="text-center max-w-4xl mx-auto mb-space-xl">
            <h1 className="font-headline-lg md:font-display text-headline-lg-mobile md:text-display text-on-primary tracking-tight">
              Meet the mentors behind every{" "}
              <span className="text-secondary-container relative inline-block whitespace-nowrap">
                success
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
              Western Odisha&apos;s most experienced defence academy faculty. Led
              by retired armed forces officers and veteran juvenile competitive
              entrance specialists who have mentored 140+ Sainik &amp; RMS
              selections.
            </p>
          </div>
          {/* Overlapping Avatar Showcase & Nav Pill */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-lg mb-space-xl pt-space-lg mt-space-sm">
            {/* Initials Avatar Stack */}
            <div className="flex items-center -space-x-3">
              {/* SP — peach/salmon */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-[3px] border-primary font-bold text-[14px] z-10"
                style={{ background: "#f4b8a0", color: "#5a2a1a" }}
              >
                SP
              </div>
              {/* MK — soft blue */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-[3px] border-primary font-bold text-[14px] z-20"
                style={{ background: "#c8daf7", color: "#1a3a6a" }}
              >
                MK
              </div>
              {/* RD — soft blue */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-[3px] border-primary font-bold text-[14px] z-30"
                style={{ background: "#c8daf7", color: "#1a3a6a" }}
              >
                RD
              </div>
              {/* +500 — vivid orange */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-[3px] border-primary font-bold text-[13px] text-white z-40"
                style={{ background: "#fe6332" }}
              >
                +500
              </div>
            </div>
            <a
              className="inline-flex items-center gap-space-xs font-label-btn text-label-btn bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary px-6 py-3 rounded-full backdrop-blur transition-all"
              href="#director-spotlight"
            >
              <span>Meet Our Director &amp; Founders</span>
              <span className="material-symbols-outlined text-[18px]">
                south
              </span>
            </a>
          </div>
          {/* Quick Trust Counters Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md pt-space-md">
            <div className="bg-primary-container/60 backdrop-blur rounded-xl p-space-md flex flex-col items-center text-center">
              <div className="flex items-center gap-1 text-secondary-container mb-1">
                <span className="material-symbols-outlined text-[20px]">
                  school
                </span>
              </div>
              <span className="font-headline-md text-headline-md font-bold text-on-primary">
                18+
              </span>
              <span className="font-caption text-caption text-on-primary-container uppercase tracking-wider mt-1">
                Permanent Faculty Members
              </span>
            </div>
            <div className="bg-primary-container/60 backdrop-blur rounded-xl p-space-md flex flex-col items-center text-center">
              <div className="flex items-center gap-1 text-secondary-container mb-1">
                <span className="material-symbols-outlined text-[20px]">
                  military_tech
                </span>
              </div>
              <span className="font-headline-md text-headline-md font-bold text-on-primary">
                14+ Years
              </span>
              <span className="font-caption text-caption text-on-primary-container uppercase tracking-wider mt-1">
                Avg. Teaching Experience
              </span>
            </div>
            <div className="bg-primary-container/60 backdrop-blur rounded-xl p-space-md flex flex-col items-center text-center">
              <div className="flex items-center gap-1 text-secondary-container mb-1">
                <span className="material-symbols-outlined text-[20px]">
                  verified
                </span>
              </div>
              <span className="font-headline-md text-headline-md font-bold text-on-primary">
                100%
              </span>
              <span className="font-caption text-caption text-on-primary-container uppercase tracking-wider mt-1">
                SSB &amp; Written Mentorship
              </span>
            </div>
            <div className="bg-primary-container/60 backdrop-blur rounded-xl p-space-md flex flex-col items-center text-center">
              <div className="flex items-center gap-1 text-secondary-container mb-1">
                <span className="material-symbols-outlined text-[20px]">
                  groups
                </span>
              </div>
              <span className="font-headline-md text-headline-md font-bold text-on-primary">
                1 : 15
              </span>
              <span className="font-caption text-caption text-on-primary-container uppercase tracking-wider mt-1">
                Mentor-Student Ratio
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FOUNDER & DIRECTOR SPOTLIGHT */}
      <section
        className="w-full bg-surface py-20 relative scroll-mt-20"
        id="director-spotlight"
      >
        <div className="max-w-[1280px] mx-auto px-margin">
          {/* Section Tagline */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-space-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-fixed/40 text-secondary font-label-eyebrow text-label-eyebrow tracking-widest uppercase mb-2">
                <span>CHIEF ACADEMIC ARCHITECT</span>
              </div>
              <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight">
                Director&apos;s Institutional Vision
              </h2>
            </div>
            {/* <div className="hidden md:flex items-center gap-2 text-on-surface-variant font-caption text-caption">
              <span className="material-symbols-outlined text-secondary-container text-[20px]">
                shield
              </span>
              <span>Official ADA Sambalpur Pedagogical Council</span>
            </div> */}
          </div>
          {/* Grand Spotlight Card */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
            {/* Accent decorative stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary-container via-secondary to-primary-container"></div>
            {/* Left: Architectural Arch Photo Column */}
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col items-center justify-center bg-surface-container-low/60 relative">
              {/* Ambient Sunrise Glow */}
              <div className="absolute w-72 h-72 rounded-full bg-secondary-container/15 blur-2xl pointer-events-none"></div>
              {/* Arch Frame with Saffron Offset Line */}
              <div className="relative w-full max-w-[320px] aspect-[3/4]">
                {/* Saffron Offset Box Motif */}
                <div className="absolute inset-0 rounded-t-[140px] rounded-b-2xl bg-secondary-container/25 translate-x-3 translate-y-3 pointer-events-none"></div>
                {/* Foreground Arch with Image */}
                <div className="relative w-full h-full rounded-t-[140px] rounded-b-2xl overflow-hidden shadow-2xl bg-primary">
                  <img
                    className="w-full h-full object-cover object-top"
                    alt="Director Himanshu Sekhar Acharya"
                    data-alt="Director Himanshu Sekhar Acharya in formal defence academy navy suit standing with confident, inspiring posture in front of an academic blackboard filled with mathematical theorems and Sainik School syllabus diagrams, warm lighting"
                    src={founderImg.src}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    {/* <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary font-caption text-caption font-semibold shadow-md">
                      Ex-Defence Entrance Panelist • 16+ Yrs
                    </span> */}
                  </div>
                </div>
              </div>
              {/* Quick Micro Badge under Arch */}
              <div className="mt-6 flex items-center gap-2 text-primary font-caption text-caption font-semibold">
                <span className="material-symbols-outlined text-secondary-container text-[18px]">
                  workspace_premium
                </span>
                <span>
                  Founder &amp; Chief Academic Director, ADA Sambalpur
                </span>
              </div>
            </div>
            {/* Right: Comprehensive Bio Details */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">
                    Himanshu Sekhar Acharya
                  </h3>
                  <span className="material-symbols-outlined text-secondary-container text-[22px]">
                    verified
                  </span>
                </div>
                <p className="font-title-md text-title-md text-secondary font-medium mb-space-sm">
                  Founder &amp; Chief Academic Director, ADA Sambalpur
                </p>

                {/* Director's Mission Quote */}
                <div className="relative bg-surface-container-low p-space-md rounded-xl mb-space-lg">
                  <span className="material-symbols-outlined text-secondary-container/30 text-4xl absolute top-2 right-2 pointer-events-none">
                    format_quote
                  </span>
                  <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                    &quot;Every child has the spark of a cadet officer; they
                    only need the unyielding discipline, speed-accuracy habit,
                    and mentorship that standard schooling cannot provide. At
                    ADAS, our mission is to ensure Western Odisha&apos;s bright
                    minds enter the country&apos;s finest defence cradles with
                    All-India Ranks.&quot;
                  </p>
                </div>
                {/* Key Milestones Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm mb-space-lg">
                  <div className="p-3 bg-surface-container-low rounded-lg">
                    <span className="block font-headline-sm text-headline-sm text-primary font-bold">
                      142+
                    </span>
                    <span className="font-caption text-caption text-on-surface-variant">
                      Sainik School &amp; RMS Qualifiers
                    </span>
                  </div>
                  <a
                    href="#founder-book"
                    className="p-3 bg-surface-container-low hover:bg-secondary-fixed/40 transition-colors rounded-lg group block cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="block font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">
                        AISSEE 2026
                      </span>
                      <span className="material-symbols-outlined text-[18px] text-secondary-container">
                        auto_stories
                      </span>
                    </div>
                    <span className="font-caption text-caption text-on-surface-variant group-hover:text-primary transition-colors flex items-center gap-1">
                      Author: Class 6th Study Guide →
                    </span>
                  </a>
                  <div className="p-3 bg-surface-container-low rounded-lg">
                    <span className="block font-headline-sm text-headline-sm text-primary font-bold">
                      3,500+
                    </span>
                    <span className="font-caption text-caption text-on-surface-variant">
                      Odisha Aspirants Mentored
                    </span>
                  </div>
                </div>
              </div>
              {/* Actions & Links */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                <a
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary font-label-btn text-label-btn px-5 py-3 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors"
                  href="tel:9149771961"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    call
                  </span>
                  <span>Direct Academic Desk</span>
                </a>
                <a
                  className="inline-flex items-center gap-2 text-on-secondary font-label-btn text-label-btn px-5 py-3 rounded-full bg-secondary-container hover:bg-secondary transition-colors shadow-sm"
                  href="#founder-book"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    auto_stories
                  </span>
                  <span>View Founder&apos;s Book</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FOUNDER'S AUTHORSHIP & AISSEE STUDY GUIDE */}
      <section
        className="w-full bg-gradient-to-b from-primary via-[#041c38] to-primary text-on-primary py-20 relative overflow-hidden scroll-mt-16"
        id="founder-book"
      >
        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-primary-container/40 blur-3xl pointer-events-none"></div>

        {/* Faded Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.03]">
          <span className="font-display text-[120px] md:text-[220px] font-extrabold tracking-widest text-white whitespace-nowrap">
            AISSEE 2026
          </span>
        </div>

        <div className="relative max-w-[1280px] mx-auto px-margin">
          {/* Eyebrow & Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed/20 text-secondary-container font-label-eyebrow text-label-eyebrow tracking-widest uppercase mb-4 shadow-sm">
              <span className="material-symbols-outlined text-[16px] text-secondary-container">
                auto_stories
              </span>
              <span>★ NATIONALLY PUBLISHED AUTHORSHIP ★</span>
            </div>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-primary tracking-tight font-bold">
              The Official All India Sainik School{" "}
              <span className="text-secondary-container relative inline-block whitespace-nowrap">
                Study Guide
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2.5"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 12"
                >
                  <path
                    d="M0,9 Q50,1 100,7"
                    fill="none"
                    stroke="#fe6332"
                    strokeLinecap="round"
                    strokeWidth="4"
                  ></path>
                </svg>
              </span>
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container mt-4 leading-relaxed max-w-2xl mx-auto">
              Written &amp; conceptualized by ADAS Founder Himanshu Sekhar Acharya in collaboration with Agrawal Examcart — engineered specifically for Class 6th AISSEE, RMS &amp; RIMC entrance aspirants.
            </p>
          </div>

          {/* Main Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: 3D Book Interactive Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center">
              {/* View Mode Switcher */}
              <div className="inline-flex items-center p-1 rounded-full bg-primary-container/80 backdrop-blur border border-white/10 mb-6 shadow-inner">
                <button
                  type="button"
                  onClick={() => setBookViewMode("front")}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${bookViewMode === "front"
                    ? "bg-secondary-container text-on-secondary shadow-md"
                    : "text-on-primary-container hover:text-white"
                    }`}
                >
                  <span className="material-symbols-outlined text-[15px]">menu_book</span>
                  <span>Front Cover</span>
                </button>
                <button
                  type="button"
                  onClick={() => setBookViewMode("spread")}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${bookViewMode === "spread"
                    ? "bg-secondary-container text-on-secondary shadow-md"
                    : "text-on-primary-container hover:text-white"
                    }`}
                >
                  <span className="material-symbols-outlined text-[15px]">splitscreen</span>
                  <span>Full Jacket Spread</span>
                </button>
              </div>

              {/* Book Stage Container */}
              <div className="relative w-full max-w-[360px] md:max-w-[420px] flex flex-col items-center justify-center">
                {bookViewMode === "front" ? (
                  /* 3D Front Cover View */
                  <div className="relative w-full max-w-[340px]">
                    {/* Realistic 3D Book Glow */}
                    <div className="absolute -inset-4 bg-secondary-container/20 blur-2xl rounded-2xl opacity-60"></div>

                    {/* Book Mockup with 3D edge */}
                    <div className="relative rounded-r-xl rounded-l-sm overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_20px_rgba(254,99,50,0.2)] border-t border-b border-r border-white/20 bg-[#1a0f08]">
                      {/* Left Spine Effect */}
                      <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/60 via-white/10 to-transparent z-20 pointer-events-none"></div>

                      {/* Top Ribbon Badge */}
                      <div className="absolute top-3 right-3 z-20 bg-secondary-container text-on-secondary text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 uppercase tracking-wider">
                        <span className="material-symbols-outlined text-[13px]">verified</span>
                        <span>AISSEE 2026</span>
                      </div>

                      <img
                        src={founderBookFront.src}
                        alt="AISSEE 2026 Study Guide by Founder Himanshu Sekhar Acharya"
                        className="w-full h-auto object-contain block max-h-[480px]"
                      />

                      {/* Subtle Cover Sheen / Light Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none"></div>
                    </div>

                    {/* Book Thickness / Pages Edge Effect underneath */}
                    <div className="h-2.5 mx-2 bg-gradient-to-b from-[#d8cebe] to-[#b0a490] rounded-b shadow-md border-x border-b border-black/30"></div>
                  </div>
                ) : (
                  /* Full Jacket Spread View */
                  <div className="relative w-full">
                    <div className="absolute -inset-3 bg-secondary-container/20 blur-2xl rounded-2xl opacity-60"></div>
                    <div className="relative rounded-xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/20 bg-[#1a0f08]">
                      {/* Ribbon */}
                      <div className="absolute top-3 right-3 z-20 bg-secondary-container text-on-secondary text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 uppercase tracking-wider">
                        <span className="material-symbols-outlined text-[13px]">visibility</span>
                        <span>Complete Jacket</span>
                      </div>
                      <img
                        src={founderBook.src}
                        alt="Complete AISSEE 2026 Book Jacket by Founder Himanshu Sekhar Acharya"
                        className="w-full h-auto object-contain block max-h-[440px]"
                      />
                    </div>
                  </div>
                )}

                {/* Subtext under book */}
                {/* <div className="mt-4 flex items-center gap-2 text-on-primary-container text-xs">
                  <span className="material-symbols-outlined text-[16px] text-secondary-container">info</span>
                  <span>Click book to inspect high-definition cover spread</span>
                </div> */}
              </div>
            </div>

            {/* Right Column: Book Highlights & Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Book Meta Tag Pills */}
                {/* <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-md bg-secondary-container/20 text-secondary-container border border-secondary-container/30 text-xs font-bold tracking-wide uppercase">
                    Class 6th AISSEE 2026
                  </span>
                  <span className="px-3 py-1 rounded-md bg-primary-container text-on-primary-container border border-white/10 text-xs font-semibold">
                    ISBN: 978-93-6054-563-5
                  </span>
                  <span className="px-3 py-1 rounded-md bg-primary-container text-on-primary-container border border-white/10 text-xs font-semibold">
                    Publisher: Agrawal Examcart
                  </span>
                </div> */}

                <h3 className="font-headline-md text-headline-md text-white font-bold mb-2">
                  Complete New Syllabus-Wise Study Guide
                </h3>
                <p className="font-title-md text-title-md text-secondary-container font-medium mb-5">
                  Authored by Founder Himanshu Sekhar Acharya (ADAS — Gateway to Sainik School)
                </p>

                {/* Founder's Inscribed Quote */}
                <div className="relative bg-primary-container/70 border-l-4 border-secondary-container rounded-r-xl p-4 mb-6 shadow-md backdrop-blur">
                  <span className="material-symbols-outlined text-secondary-container/30 text-3xl absolute top-2 right-2 pointer-events-none">
                    format_quote
                  </span>
                  <p className="font-body-md text-body-md text-on-primary italic leading-relaxed">
                    &quot;The key to success is to focus on goals, not obstacles.&quot;
                  </p>
                  <span className="block mt-1 font-caption text-caption text-secondary-container font-semibold">
                    — Inscription from the Author &amp; ADAS Founder
                  </span>
                </div>

                {/* 4 Pillars of the Book (From Book Cover) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {/* Pillar 1 */}
                  <div className="p-3.5 rounded-xl bg-primary-container/40 border border-white/10 hover:border-secondary-container/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-6 rounded-md bg-secondary-container text-on-secondary text-xs font-bold flex items-center justify-center shrink-0">
                        1
                      </span>
                      <h4 className="font-title-sm text-title-sm text-white font-bold">
                        Theory strictly as per Sainik Syllabus
                      </h4>
                    </div>
                    <p className="font-body-sm text-xs text-on-primary-container pl-8 leading-relaxed">
                      Class 6th exam syllabus covering all essential points from NCERT textbooks and previous years&apos; questions.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="p-3.5 rounded-xl bg-primary-container/40 border border-white/10 hover:border-secondary-container/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-6 rounded-md bg-secondary-container text-on-secondary text-xs font-bold flex items-center justify-center shrink-0">
                        2
                      </span>
                      <h4 className="font-title-sm text-title-sm text-white font-bold">
                        3,200+ Practice Questions
                      </h4>
                    </div>
                    <p className="font-body-sm text-xs text-on-primary-container pl-8 leading-relaxed">
                      Chapter-wise segregated questions to thoroughly test your knowledge and eliminate conceptual doubts.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="p-3.5 rounded-xl bg-primary-container/40 border border-white/10 hover:border-secondary-container/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-6 rounded-md bg-secondary-container text-on-secondary text-xs font-bold flex items-center justify-center shrink-0">
                        3
                      </span>
                      <h4 className="font-title-sm text-title-sm text-white font-bold">
                        Solved Entrance Paper
                      </h4>
                    </div>
                    <p className="font-body-sm text-xs text-on-primary-container pl-8 leading-relaxed">
                      Year 2024 full exam paper with detailed step-by-step working and scoring solutions.
                    </p>
                  </div>

                  {/* Pillar 4 */}
                  <div className="p-3.5 rounded-xl bg-primary-container/40 border border-white/10 hover:border-secondary-container/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-6 rounded-md bg-secondary-container text-on-secondary text-xs font-bold flex items-center justify-center shrink-0">
                        4
                      </span>
                      <h4 className="font-title-sm text-title-sm text-white font-bold">
                        Maximum Selection Blueprint
                      </h4>
                    </div>
                    <p className="font-body-sm text-xs text-on-primary-container pl-8 leading-relaxed">
                      Proven speed-accuracy tactics with direct access to exam question breakdowns.
                    </p>
                  </div>
                </div>

                {/* 4 Subjects Covered Strip */}
                <div className="p-4 rounded-xl bg-primary-container/50 border border-white/10 mb-6">
                  <span className="block font-caption text-caption text-secondary-container uppercase tracking-wider font-bold mb-2">
                    Comprehensive 4-Subject Coverage Included:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="flex items-center gap-2 text-xs text-white">
                      <span className="material-symbols-outlined text-secondary-container text-[16px]">calculate</span>
                      <span>Mathematics</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white">
                      <span className="material-symbols-outlined text-secondary-container text-[16px]">psychology</span>
                      <span>Intelligence Test</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white">
                      <span className="material-symbols-outlined text-secondary-container text-[16px]">public</span>
                      <span>General Knowledge</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white">
                      <span className="material-symbols-outlined text-secondary-container text-[16px]">spellcheck</span>
                      <span>English Language</span>
                    </div>
                  </div>
                </div>

                {/* Applicable Institutions */}
                <div className="flex items-center gap-2 text-xs text-on-primary-container mb-6 flex-wrap">
                  <span className="font-semibold text-white">Target Schools:</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white">Sainik School</span>
                  {/* <span className="px-2 py-0.5 rounded bg-white/10 text-white">Military School (RMS)</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white">RIMC</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white">Navodaya Vidyalaya (JNVST)</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white">Adarsh Vidyalaya (OAVS)</span> */}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setCallbackModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-secondary-container hover:bg-secondary text-on-secondary font-label-btn text-label-btn px-6 py-3.5 rounded-full shadow-[0_6px_20px_0_rgba(241,90,41,0.35)] transition-all cursor-pointer font-bold"
                >
                  <span className="material-symbols-outlined text-[20px]">menu_book</span>
                  <span>Enquire / Request Guide for Cadet</span>
                </button>
                <a
                  className="inline-flex items-center gap-2 text-white hover:text-secondary-container font-label-btn text-label-btn px-5 py-3 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 backdrop-blur transition-colors border border-white/15"
                  href="tel:9149771961"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>Direct Desk: 9149771961</span>
                </a>
                {/* <button
                  type="button"
                  onClick={() => setBookModalOpen(true)}
                  className="inline-flex items-center gap-2 text-on-primary-container hover:text-white font-label-btn text-xs px-4 py-3 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                  <span>View High-Res Jacket</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* SECTION 3: ACADEMY FACULTY SERVICES & MENTORSHIP PROVISIONS (IMAGE-FREE) */}
      <section className="w-full bg-surface py-20 relative">
        <div className="max-w-[1280px] mx-auto px-margin">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-fixed/40 text-secondary font-label-eyebrow text-label-eyebrow uppercase tracking-widest mb-3">
              <span className="material-symbols-outlined text-[15px]">military_tech</span>
              <span>ACADEMY FACULTY PROVISIONS</span>
            </div>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight font-bold">
              What our faculty &amp; mentors{" "}
              <span className="text-secondary-container">provide</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
              Every cadet at Acharya Defence Academy receives comprehensive, multi-tiered academic
              and physical coaching designed by veteran educators to guarantee complete entrance readiness.
            </p>
          </div>

          {/* 8 Faculty Services Cards Grid (No Images - Modern Iconography & Metrics) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: 1-on-1 Doubt Resolution Cell */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/20 hover:border-secondary-container/40 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-secondary-container"></div>
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container/10 text-secondary-container flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">support_agent</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-secondary-container/15 text-secondary font-caption text-caption font-bold">
                    Daily 2-Hr Cell
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary font-bold mb-2 group-hover:text-secondary-container transition-colors">
                  1-on-1 Doubt Resolution Cell
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Dedicated post-class clinics every evening where mentors walk through challenging mathematics &amp; reasoning problems step-by-step until concept clarity is 100%.
                </p>
                <div className="space-y-2 pt-2 border-t border-outline-variant/10">
                  <div className="flex items-center gap-2 text-on-surface font-caption text-caption">
                    <span className="material-symbols-outlined text-secondary-container text-[16px]">check_circle</span>
                    <span>Individual attention for every cadet</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface font-caption text-caption">
                    <span className="material-symbols-outlined text-secondary-container text-[16px]">check_circle</span>
                    <span>Zero backlogged doubts before bedtime</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="font-caption text-caption text-on-surface-variant">Daily Guarantee</span>
                <span className="font-title-sm text-title-sm text-primary font-bold">100% Concept Clear</span>
              </div>
            </div>

            {/* Card 2: Computerized OMR Speed Lab */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/20 hover:border-primary-container/40 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">timer</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-primary-container/15 text-primary font-caption text-caption font-bold">
                    Weekly OMR Drills
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary font-bold mb-2 group-hover:text-secondary-container transition-colors">
                  OMR Speed &amp; Accuracy Lab
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Weekly full-length mock drills simulating exact entrance conditions. Faculty trains cadets in 45-second bubble marking and tactical elimination to eliminate negative marks.
                </p>
                <div className="space-y-2 pt-2 border-t border-outline-variant/10">
                  <div className="flex items-center gap-2 text-on-surface font-caption text-caption">
                    <span className="material-symbols-outlined text-secondary-container text-[16px]">check_circle</span>
                    <span>Countdown pressure inoculation</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface font-caption text-caption">
                    <span className="material-symbols-outlined text-secondary-container text-[16px]">check_circle</span>
                    <span>Anti-guesswork disciplined habits</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="font-caption text-caption text-on-surface-variant">Exam Cadence</span>
                <span className="font-title-sm text-title-sm text-primary font-bold">Weekly 150-Q Tests</span>
              </div>
            </div>

            {/* Card 3: SSB Interview & OLQ Mentorship */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/20 hover:border-secondary-container/40 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-secondary-container"></div>
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container/10 text-secondary-container flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">military_tech</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-secondary-container/15 text-secondary font-caption text-caption font-bold">
                    Ex-Defence Guided
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary font-bold mb-2 group-hover:text-secondary-container transition-colors">
                  SSB Interview &amp; OLQ Desk
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Guided by armed forces veterans. Cadets undergo simulated SSB interview panels, extempore speech exercises, etiquette coaching, and psychological composure development.
                </p>
                <div className="space-y-2 pt-2 border-t border-outline-variant/10">
                  <div className="flex items-center gap-2 text-on-surface font-caption text-caption">
                    <span className="material-symbols-outlined text-secondary-container text-[16px]">check_circle</span>
                    <span>15 Officer Like Qualities (OLQ) roadmap</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface font-caption text-caption">
                    <span className="material-symbols-outlined text-secondary-container text-[16px]">check_circle</span>
                    <span>Speech clarity &amp; body language coaching</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="font-caption text-caption text-on-surface-variant">Selection Rate</span>
                <span className="font-title-sm text-title-sm text-primary font-bold">94% RIMC/RMS</span>
              </div>
            </div>

            {/* Card 4: Non-Verbal Reasoning & Logic Lab */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/20 hover:border-primary-container/40 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">psychology</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-primary-container/15 text-primary font-caption text-caption font-bold">
                    Formula-Free Logic
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary font-bold mb-2 group-hover:text-secondary-container transition-colors">
                  Spatial Reasoning &amp; Logic Lab
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Dedicated aptitude mentors train young cadets in pattern folding, mirror reflection logic, embedded figures, and visual analogies using rapid spatial recognition.
                </p>
                <div className="space-y-2 pt-2 border-t border-outline-variant/10">
                  <div className="flex items-center gap-2 text-on-surface font-caption text-caption">
                    <span className="material-symbols-outlined text-secondary-container text-[16px]">check_circle</span>
                    <span>50+ diagrammatic pattern variations</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface font-caption text-caption">
                    <span className="material-symbols-outlined text-secondary-container text-[16px]">check_circle</span>
                    <span>Speed elimination without memorization</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="font-caption text-caption text-on-surface-variant">Top Target</span>
                <span className="font-title-sm text-title-sm text-primary font-bold">50/50 Section Record</span>
              </div>
            </div>

            {/* Card 5: Descriptive English & Vocabulary Deck */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/20 hover:border-secondary-container/40 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-secondary-container"></div>
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container/10 text-secondary-container flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">menu_book</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-secondary-container/15 text-secondary font-caption text-caption font-bold">
                    Daily Vocab Deck
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary font-bold mb-2 group-hover:text-secondary-container transition-colors">
                  English Vocabulary &amp; Grammar
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Structured visual flashcard routines and comprehension sprints turning complex grammar rules, idiomatic phrases, and passages into effortless reflex memory.
                </p>
                <div className="space-y-2 pt-2 border-t border-outline-variant/10">
                  <div className="flex items-center gap-2 text-on-surface font-caption text-caption">
                    <span className="material-symbols-outlined text-secondary-container text-[16px]">check_circle</span>
                    <span>Daily 20-word flashcard decks</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface font-caption text-caption">
                    <span className="material-symbols-outlined text-secondary-container text-[16px]">check_circle</span>
                    <span>Reading speed &amp; comprehension drills</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="font-caption text-caption text-on-surface-variant">Class Average</span>
                <span className="font-title-sm text-title-sm text-primary font-bold">46/50 Avg. Score</span>
              </div>
            </div>

            {/* Card 6: Static GK & NCERT Science League */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/20 hover:border-primary-container/40 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">science</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-primary-container/15 text-primary font-caption text-caption font-bold">
                    Morning Briefs
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary font-bold mb-2 group-hover:text-secondary-container transition-colors">
                  Static GK &amp; Science League
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Daily morning news summaries, historical timelines, defence knowledge, and everyday science experiments transforming heavy syllabus into memorable mental anchors.
                </p>
                <div className="space-y-2 pt-2 border-t border-outline-variant/10">
                  <div className="flex items-center gap-2 text-on-surface font-caption text-caption">
                    <span className="material-symbols-outlined text-secondary-container text-[16px]">check_circle</span>
                    <span>Daily defence &amp; national affairs briefs</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface font-caption text-caption">
                    <span className="material-symbols-outlined text-secondary-container text-[16px]">check_circle</span>
                    <span>Visual mnemonics for rapid recall</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="font-caption text-caption text-on-surface-variant">Syllabus Match</span>
                <span className="font-title-sm text-title-sm text-primary font-bold">100% NCERT Aligned</span>
              </div>
            </div>

            {/* Card 7: Bilingual Odia & Regional Bridge */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/20 hover:border-secondary-container/40 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-secondary-container"></div>
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container/10 text-secondary-container flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">translate</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-secondary-container/15 text-secondary font-caption text-caption font-bold">
                    JNVST / OAVS
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary font-bold mb-2 group-hover:text-secondary-container transition-colors">
                  Regional Language &amp; Navodaya
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Specialized bilingual faculty bridging Odia-medium students into English competitive entrance formats, ensuring vernacular background is never a barrier to top ranking.
                </p>
                <div className="space-y-2 pt-2 border-t border-outline-variant/10">
                  <div className="flex items-center gap-2 text-on-surface font-caption text-caption">
                    <span className="material-symbols-outlined text-secondary-container text-[16px]">check_circle</span>
                    <span>Bilingual terminology &amp; math notes</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface font-caption text-caption">
                    <span className="material-symbols-outlined text-secondary-container text-[16px]">check_circle</span>
                    <span>Dedicated Navodaya (JNVST) coach</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="font-caption text-caption text-on-surface-variant">Proven Selections</span>
                <span className="font-title-sm text-title-sm text-primary font-bold">110+ Navodaya</span>
              </div>
            </div>

            {/* Card 8: Residential Cadet Cadence & Study Hours */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/20 hover:border-primary-container/40 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">hotel_class</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-primary-container/15 text-primary font-caption text-caption font-bold">
                    24/7 Hostel Care
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary font-bold mb-2 group-hover:text-secondary-container transition-colors">
                  Supervised Hostel Study Cadence
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Resident faculty mentors supervise early morning physical cadence, evening silent study halls, and disciplined bedtime routines, creating a distraction-free environment.
                </p>
                <div className="space-y-2 pt-2 border-t border-outline-variant/10">
                  <div className="flex items-center gap-2 text-on-surface font-caption text-caption">
                    <span className="material-symbols-outlined text-secondary-container text-[16px]">check_circle</span>
                    <span>Continuous resident mentor supervision</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface font-caption text-caption">
                    <span className="material-symbols-outlined text-secondary-container text-[16px]">check_circle</span>
                    <span>Bi-weekly parent progress updates</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="font-caption text-caption text-on-surface-variant">Mentor Ratio</span>
                <span className="font-title-sm text-title-sm text-primary font-bold">1 : 15 Cadets</span>
              </div>
            </div>
          </div>

          {/* Quick Consultation Callout Banner */}
          <div className="mt-12 p-6 md:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/15 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary flex items-center justify-center shrink-0 shadow-md">
                <span className="material-symbols-outlined text-[24px]">call</span>
              </div>
              <div>
                <h4 className="font-title-md text-title-md text-primary font-bold">
                  Want to learn more about our faculty mentorship routines?
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Speak directly with our academic coordinators for a personalized cadet roadmap.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-btn text-label-btn px-6 py-3 rounded-full transition-colors shadow-sm"
                href="tel:9149771961"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Call Academic Desk</span>
              </a>
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-secondary-container hover:bg-secondary text-on-secondary font-label-btn text-label-btn px-6 py-3 rounded-full transition-colors shadow-md cursor-pointer"
                onClick={() => setCallbackModalOpen(true)}
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR TEACHING PHILOSOPHY STRIP */}
      <section className="w-full bg-surface-container-low py-20 relative overflow-hidden">
        {/* Star Divider Decor */}
        <div className="flex items-center justify-center gap-3 text-secondary-container opacity-60 mb-space-md">
          <span className="text-xs">★</span>
          <span className="w-12 h-0.5 bg-secondary-container/40 rounded-full"></span>
          <span className="text-xs">★</span>
          <span className="w-12 h-0.5 bg-secondary-container/40 rounded-full"></span>
          <span className="text-xs">★</span>
        </div>
        <div className="max-w-[1280px] mx-auto px-margin">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-fixed/40 text-secondary font-label-eyebrow text-label-eyebrow tracking-widest uppercase mb-2">
              <span>★ THE ADAS PEDAGOGY ★</span>
            </div>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight">
              How our mentors forge{" "}
              <span className="text-secondary-container">cadet minds</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Cracking competitive juvenile entrance exams demands more than
              rote memorization; it requires structured stamina, tactical
              elimination, and transparent accountability.
            </p>
          </div>
          {/* 3 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {/* Feature 1 */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-md relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-secondary-container"></div>
              <div>
                <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors mb-6">
                  <span className="material-symbols-outlined text-[28px]">
                    lightbulb
                  </span>
                </div>
                <span className="font-caption text-caption text-secondary font-bold tracking-widest uppercase block mb-1">
                  PILLAR 01
                </span>
                <h3 className="font-title-lg text-title-lg text-primary mb-3 font-bold">
                  Concept First, Shortcut Second
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Solid theoretical grounding in arithmetic, fractions,
                  geometry, and logic before drilling 3-second OMR elimination
                  techniques. We eliminate blind formula memorization.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t-0 flex items-center gap-2 text-secondary-container font-label-btn text-xs font-semibold">
                <span>Root-Level Fundamentals</span>
                <span className="material-symbols-outlined text-[16px]">
                  check_circle
                </span>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-md relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
              <div>
                <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors mb-6">
                  <span className="material-symbols-outlined text-[28px]">
                    timer
                  </span>
                </div>
                <span className="font-caption text-caption text-secondary font-bold tracking-widest uppercase block mb-1">
                  PILLAR 02
                </span>
                <h3 className="font-title-lg text-title-lg text-primary mb-3 font-bold">
                  Zero Negative-Marking Habituation
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Weekly psychological mock drills training 10–12-year-olds to
                  resist erratic guesswork and stay composed under countdown
                  clock pressure in examination halls.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t-0 flex items-center gap-2 text-primary font-label-btn text-xs font-semibold">
                <span>Pressure Inoculation Drills</span>
                <span className="material-symbols-outlined text-[16px]">
                  check_circle
                </span>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-md relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-secondary-container"></div>
              <div>
                <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors mb-6">
                  <span className="material-symbols-outlined text-[28px]">
                    hub
                  </span>
                </div>
                <span className="font-caption text-caption text-secondary font-bold tracking-widest uppercase block mb-1">
                  PILLAR 03
                </span>
                <h3 className="font-title-lg text-title-lg text-primary mb-3 font-bold">
                  Parent-Teacher Direct Cadence
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Bi-weekly WhatsApp calls and transparent computerized
                  diagnostic progress cards shared directly with parents to
                  track speed gains and accuracy curves transparently.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t-0 flex items-center gap-2 text-secondary-container font-label-btn text-xs font-semibold">
                <span>Direct WhatsApp Updates</span>
                <span className="material-symbols-outlined text-[16px]">
                  check_circle
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: JOIN OUR TEACHING FACULTY CAREERS CTA STRIP */}
      <section className="w-full bg-gradient-to-r from-primary via-primary-container to-tertiary text-on-primary py-16 relative overflow-hidden">
        {/* Rising Sun Motif */}
        <div className="absolute -bottom-20 right-10 w-80 h-80 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-margin relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-space-lg">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary-container font-label-eyebrow text-label-eyebrow uppercase tracking-widest mb-3">
                <span>FACULTY RECRUITMENT 2027</span>
              </div>
              <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-primary mb-space-xs font-bold">
                Passionate about mentoring India&apos;s future defence leaders?
              </h2>
              <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                Join our elite faculty team at Sambalpur. We are actively
                inviting Ex-Defence Officers, Senior Maths Olympiad Mentors, and
                English Grammar Specialists with demonstrated juvenile entrance
                pedagogy.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-md shrink-0 justify-center">
              <button
                type="button"
                className="inline-flex items-center justify-center bg-secondary-container hover:bg-secondary text-on-secondary font-label-btn text-label-btn px-7 py-3.5 rounded-full shadow-[0_6px_20px_0_rgba(241,90,41,0.35)] transition-all cursor-pointer"
                onClick={() => setCallbackModalOpen(true)}
              >
                Explore Careers &amp; Apply →
              </button>
              <a
                className="inline-flex items-center justify-center bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-btn text-label-btn px-6 py-3.5 rounded-full backdrop-blur transition-all gap-space-xs"
                href="https://wa.me/919149771961?text=Hello%20Academic%20Dean%2C%20I%20am%20interested%20in%20joining%20ADAS%20Faculty"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">
                  chat
                </span>
                <span>WhatsApp Academic Dean</span>
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* CALLBACK CARD MODAL */}
      <EnquiryModal
        open={callbackModalOpen}
        onClose={() => setCallbackModalOpen(false)}
      />
    </div>
  );
}
