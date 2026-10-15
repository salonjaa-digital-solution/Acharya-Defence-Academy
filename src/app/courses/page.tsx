"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EnquiryModal from "@/components/EnquiryModal";
import courseSainik from "@/assets/course-sainik.webp";
import courseRms from "@/assets/course-rms.webp";
import courseRimc from "@/assets/course-rimc.webp";
import courseJnvst from "@/assets/course-jnvst.webp";
import courseOavs from "@/assets/course-oavs.webp";
import courseCbse from "@/assets/course-cbse.webp";

type CourseCategory = "all" | "defence" | "gov" | "cbse";

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState<CourseCategory>("all");
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const isVisible = (category: CourseCategory) => {
    return activeFilter === "all" || activeFilter === category;
  };

  return (
    <div className="about-theme flex flex-col w-full">
      {/* 1. TOP BANNER / HERO SECTION */}
      <section className="relative w-full bg-gradient-to-b from-primary via-primary-container to-primary text-on-primary overflow-hidden pt-12 pb-24 md:pb-32 min-h-[calc(100vh-4rem)]">
        {/* Faded Giant Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
          <span className="font-display text-[90px] sm:text-[125px] md:text-[175px] font-extrabold tracking-widest text-on-primary whitespace-nowrap uppercase">
            PROGRAMS
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
              <span>★ ELITE DEFENCE &amp; RESIDENTIAL ENTRANCE PREP ★</span>
              <span className="material-symbols-outlined text-[15px] text-secondary-container">
                military_tech
              </span>
            </div>
          </div>

          {/* Main Heading with Editorial Saffron Accent Wave */}
          <div className="text-center max-w-4xl mx-auto mb-space-xl">
            <h1 className="font-headline-lg md:font-display text-headline-lg-mobile md:text-display text-on-primary tracking-tight leading-tight">
              Specialized programs for{" "}
              <span className="text-secondary-container relative inline-block whitespace-nowrap">
                cadet success
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
              Regimented entrance coaching for India&apos;s prestigious defence institutes
              and elite government boarding schools. Structured for academic mastery,
              officer-like qualities, and resolute character.
            </p>
          </div>

          {/* Glassmorphic Trust & Programs Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md lg:gap-space-lg pt-space-lg mt-space-sm max-w-5xl mx-auto">
            <div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  school
                </span>
              </div>
              <span className="font-display text-headline-lg md:text-headline-lg text-on-primary tracking-tight">
                AISSEE
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                Sainik School
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Class VI &amp; IX Complete Prep
              </span>
            </div>

            <div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  military_tech
                </span>
              </div>
              <span className="font-display text-headline-lg md:text-headline-lg text-secondary-container tracking-tight">
                RMS
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                Military Schools
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                5 Elite Military Campuses
              </span>
            </div>

            <div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  workspace_premium
                </span>
              </div>
              <span className="font-display text-headline-lg md:text-headline-lg text-on-primary tracking-tight">
                RIMC
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                Entry
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Written &amp; SSB Guidance
              </span>
            </div>

            <div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  verified
                </span>
              </div>
              <span className="font-display text-headline-lg md:text-headline-lg text-on-primary tracking-tight">
                JNVST
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                Navodaya / OAVS
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                100% Free Govt Boarding
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER BAR */}
      <section className="w-full bg-surface-container-low py-space-md shadow-sm">
        <div className="max-w-[1240px] mx-auto px-margin-sm lg:px-margin">
          <div
            className="flex items-center gap-space-sm overflow-x-auto pb-1 no-scrollbar"
            id="course-filter-container"
          >
            <button
              onClick={() => setActiveFilter("all")}
              className={`filter-btn whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all ${activeFilter === "all"
                ? "bg-primary-container text-on-primary shadow-sm"
                : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-high"
                }`}
              data-filter="all"
            >
              All Courses (6)
            </button>
            <button
              onClick={() => setActiveFilter("defence")}
              className={`filter-btn whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all ${activeFilter === "defence"
                ? "bg-primary-container text-on-primary shadow-sm"
                : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-high"
                }`}
              data-filter="defence"
            >
              Defence Schools (AISSEE, RMS, RIMC)
            </button>
            <button
              onClick={() => setActiveFilter("gov")}
              className={`filter-btn whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all ${activeFilter === "gov"
                ? "bg-primary-container text-on-primary shadow-sm"
                : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-high"
                }`}
              data-filter="gov"
            >
              Navodaya &amp; Adarsha (JNVST, OAVS)
            </button>
            <button
              onClick={() => setActiveFilter("cbse")}
              className={`filter-btn whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all ${activeFilter === "cbse"
                ? "bg-primary-container text-on-primary shadow-sm"
                : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-high"
                }`}
              data-filter="cbse"
            >
              CBSE Foundation (Class V to X)
            </button>
          </div>
        </div>
      </section>

      {/* 3. COURSE GRID SECTION */}
      <section className="w-full bg-background py-space-xl">
        <div className="max-w-[1240px] mx-auto px-margin-sm lg:px-margin space-y-space-xl">
          {/* Featured Course: Sainik School (AISSEE) */}
          {isVisible("defence") && (
            <article
              className="course-card w-full bg-surface-container-lowest rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              data-category="defence"
            >
              <div className="h-2 bg-on-tertiary-container w-full"></div>
              <div className="p-space-lg lg:p-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                <div className="lg:col-span-5 relative rounded-xl overflow-hidden shadow-sm h-64 lg:h-full min-h-[260px]">
                  <Image
                    className="w-full h-full object-cover"
                    alt="Sainik School Cadets at Acharya Defence Academy"
                    src={courseSainik}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  {/* <div className="absolute top-space-sm left-space-sm bg-tertiary-container text-on-tertiary font-label-sm text-label-sm px-space-sm py-space-xs rounded-full uppercase tracking-wider shadow">
                    Flagship Batch
                  </div> */}
                  {/* <div className="absolute bottom-space-sm left-space-sm right-space-sm bg-primary-container/85 backdrop-blur-sm text-on-primary p-space-sm rounded-lg flex items-center justify-between">
                    <span className="font-label-sm text-label-sm">
                      Selection Ratio: 1 in 4 Enrolled
                    </span>
                    <span className="font-label-sm text-label-sm text-tertiary-fixed font-bold">
                      Class VI &amp; IX
                    </span>
                  </div> */}
                </div>
                <div className="lg:col-span-7 flex flex-col justify-between space-y-space-md">
                  <div>
                    <div className="flex flex-wrap items-center gap-space-xs mb-space-xs">
                      <span className="bg-tertiary-container text-on-tertiary font-label-sm text-label-sm px-space-sm py-0.5 rounded-full">
                        Most Popular &amp; High Selection
                      </span>
                      {/* <span className="bg-surface-container-high text-on-secondary-container font-label-sm text-label-sm px-space-sm py-0.5 rounded-full">
                        AISSEE Target 2025-26
                      </span> */}
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                      Sainik School Coaching (AISSEE)
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                      Comprehensive full-year residential &amp; day-scholar training module
                      specifically engineered for the All India Sainik Schools Entrance
                      Examination. Combines rigorous syllabus mastery with regimental
                      stamina drills.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm py-space-xs">
                    <div className="bg-surface-container-low p-space-sm rounded-lg space-y-1">
                      <div className="flex items-center gap-1 text-primary">
                        <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                          history_edu
                        </span>
                        <span className="font-label-md text-label-md font-bold">
                          Daily OMR Mocks
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Real exam conditions &amp; negative marking analytics.
                      </p>
                    </div>
                    <div className="bg-surface-container-low p-space-sm rounded-lg space-y-1">
                      <div className="flex items-center gap-1 text-primary">
                        <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                          calculate
                        </span>
                        <span className="font-label-md text-label-md font-bold">
                          Maths Mastery
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Focus on high-weightage arithmetic &amp; reasoning puzzles.
                      </p>
                    </div>
                    <div className="bg-surface-container-low p-space-sm rounded-lg space-y-1">
                      <div className="flex items-center gap-1 text-primary">
                        <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                          fitness_center
                        </span>
                        <span className="font-label-md text-label-md font-bold">
                          Physical Fitness
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Early morning PT, posture &amp; medical interview guidance.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
                    <div className="space-y-0.5">
                      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Format &amp; Duration
                      </div>
                      <div className="font-headline-sm text-headline-sm text-primary font-bold">
                        1 Year Intensive / Residential
                      </div>
                    </div>
                    <div className="flex items-center gap-space-sm">
                      {/* <button
                        onClick={() => setEnquiryOpen(true)}
                        className="px-space-md py-space-sm bg-surface-container text-primary font-label-md text-label-md rounded-xl hover:bg-surface-container-high transition-colors"
                      >
                        View Syllabus
                      </button> */}
                      <button
                        onClick={() => setEnquiryOpen(true)}
                        className="px-space-lg py-space-sm bg-tertiary-container text-on-tertiary font-label-md text-label-md rounded-xl hover:bg-tertiary transition-all shadow-sm"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* 5 Regular Course Cards (Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Course 2: RMS */}
            {isVisible("defence") && (
              <article
                className="course-card flex flex-col justify-between bg-surface-container-lowest rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                data-category="defence"
              >
                <div className="h-1 bg-primary-container w-full"></div>
                <div className="p-space-lg space-y-space-md flex-1">
                  <div className="relative h-44 rounded-lg overflow-hidden shadow-sm">
                    <Image
                      className="w-full h-full object-cover"
                      alt="Rashtriya Military Schools Campus"
                      src={courseRms}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* <span className="absolute top-2 left-2 bg-primary-container text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded">
                      Target
                    </span> */}
                  </div>
                  <div>
                    <div className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                      Rashtriya Military Schools
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mt-1">
                      RMS Common Entrance
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                      Dedicated training for admission into Chail, Ajmer, Belgaum,
                      Bengaluru, and Dholpur Military Schools for Class VI &amp; IX.
                    </p>
                  </div>
                  <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                        check_circle
                      </span>
                      Rigorous English, GK, Maths &amp; Intelligence
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                        check_circle
                      </span>
                      Structured Interview &amp; Viva-Voce Coaching
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                        check_circle
                      </span>
                      Previous 10 Years Question Bank Analysis
                    </li>
                  </ul>
                </div>
                <div className="p-space-lg pt-0 flex items-center justify-between bg-surface-container-low/50">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      Eligibility
                    </span>
                    <span className="font-label-md text-label-md text-primary font-bold">
                      Class VI &amp; IX
                    </span>
                  </div>
                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="px-space-md py-space-xs bg-primary-container text-on-primary rounded-xl font-label-sm text-label-sm hover:bg-primary transition-colors"
                  >
                    Enquire RMS
                  </button>
                </div>
              </article>
            )}

            {/* Course 3: RIMC  */}
            {isVisible("defence") && (
              <article
                className="course-card flex flex-col justify-between bg-surface-container-lowest rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                data-category="defence"
              >
                <div className="h-1 bg-tertiary-container w-full"></div>
                <div className="p-space-lg space-y-space-md flex-1">
                  <div className="relative h-44 rounded-lg overflow-hidden shadow-sm">
                    <Image
                      className="w-full h-full object-cover"
                      alt="RIMC Prep Student"
                      src={courseRimc}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* <span className="absolute top-2 left-2 bg-tertiary-container text-on-tertiary font-label-sm text-label-sm px-2 py-0.5 rounded">
                      Elite Tier
                    </span> */}
                  </div>
                  <div>
                    <div className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                      Premier Leadership Track
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mt-1">
                      RIMC  Special Batch
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                      Ultra-selective preparation for entry into Rashtriya Indian
                      Military College,  (Class VIII entry) with specialized
                      faculty.
                    </p>
                  </div>
                  <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                        check_circle
                      </span>
                      Subjective Maths, English writing &amp; GK
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                        check_circle
                      </span>
                      Personality Development &amp; Officer Ethics
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                        check_circle
                      </span>
                      State-level Quota Centric Mentorship
                    </li>
                  </ul>
                </div>
                <div className="p-space-lg pt-0 flex items-center justify-between bg-surface-container-low/50">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      Eligibility
                    </span>
                    <span className="font-label-md text-label-md text-primary font-bold">
                      Class VIII Only
                    </span>
                  </div>
                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="px-space-md py-space-xs bg-primary-container text-on-primary rounded-xl font-label-sm text-label-sm hover:bg-primary transition-colors"
                  >
                    Enquire RIMC
                  </button>
                </div>
              </article>
            )}

            {/* Course 4: JNVST */}
            {isVisible("gov") && (
              <article
                className="course-card flex flex-col justify-between bg-surface-container-lowest rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                data-category="gov"
              >
                <div className="h-1 bg-secondary w-full"></div>
                <div className="p-space-lg space-y-space-md flex-1">
                  <div className="relative h-44 rounded-lg overflow-hidden shadow-sm">
                    <Image
                      className="w-full h-full object-cover"
                      alt="JNVST Group Study Session"
                      src={courseJnvst}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* <span className="absolute top-2 left-2 bg-secondary text-on-secondary font-label-sm text-label-sm px-2 py-0.5 rounded">
                      Government School
                    </span> */}
                  </div>
                  <div>
                    <div className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                      Jawahar Navodaya Vidyalaya
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mt-1">
                      JNVST Entrance (Class VI &amp; IX)
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                      Focused coaching for free residential education across Navodaya
                      Vidyalayas, with emphasis on mental ability and arithmetic
                      speed.
                    </p>
                  </div>
                  <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                        check_circle
                      </span>
                      50-mark Non-Verbal Mental Ability Drills
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                        check_circle
                      </span>
                      Language Comprehension &amp; Speed Reading
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                        check_circle
                      </span>
                      Targeted Sambalpur &amp; Western Odisha Quotas
                    </li>
                  </ul>
                </div>
                <div className="p-space-lg pt-0 flex items-center justify-between bg-surface-container-low/50">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      Eligibility
                    </span>
                    <span className="font-label-md text-label-md text-primary font-bold">
                      Class VI &amp; IX
                    </span>
                  </div>
                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="px-space-md py-space-xs bg-primary-container text-on-primary rounded-xl font-label-sm text-label-sm hover:bg-primary transition-colors"
                  >
                    Enquire JNVST
                  </button>
                </div>
              </article>
            )}

            {/* Course 5: OAVS */}
            {isVisible("gov") && (
              <article
                className="course-card flex flex-col justify-between bg-surface-container-lowest rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                data-category="gov"
              >
                <div className="h-1 bg-surface-tint w-full"></div>
                <div className="p-space-lg space-y-space-md flex-1">
                  <div className="relative h-44 rounded-lg overflow-hidden shadow-sm">
                    <Image
                      className="w-full h-full object-cover"
                      alt="OAVS Foundation Class"
                      src={courseOavs}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* <span className="absolute top-2 left-2 bg-surface-tint text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded">
                      Odisha State
                    </span> */}
                  </div>
                  <div>
                    <div className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                      Odisha Adarsha Vidyalaya
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mt-1">
                      OAVS Foundation &amp; Entrance
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                      English-medium curriculum preparation for model schools under
                      the Department of School and Mass Education, Govt of Odisha.
                    </p>
                  </div>
                  <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                        check_circle
                      </span>
                      English Grammar &amp; Spoken Communication
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                        check_circle
                      </span>
                      Science &amp; Mathematics NCERT Base
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                        check_circle
                      </span>
                      Bilingual Doubt Resolution (English/Odia)
                    </li>
                  </ul>
                </div>
                <div className="p-space-lg pt-0 flex items-center justify-between bg-surface-container-low/50">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      Eligibility
                    </span>
                    <span className="font-label-md text-label-md text-primary font-bold">
                      Class VI Entry
                    </span>
                  </div>
                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="px-space-md py-space-xs bg-primary-container text-on-primary rounded-xl font-label-sm text-label-sm hover:bg-primary transition-colors"
                  >
                    Enquire OAVS
                  </button>
                </div>
              </article>
            )}

            {/* Course 6: CBSE Foundation */}
            {isVisible("cbse") && (
              <article
                className="course-card flex flex-col justify-between bg-surface-container-lowest rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                data-category="cbse"
              >
                <div className="h-1 bg-primary w-full"></div>
                <div className="p-space-lg space-y-space-md flex-1">
                  <div className="relative h-44 rounded-lg overflow-hidden shadow-sm">
                    <Image
                      className="w-full h-full object-cover"
                      alt="CBSE Foundation and Olympiad"
                      src={courseCbse}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* <span className="absolute top-2 left-2 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded">
                      Academics
                    </span> */}
                  </div>
                  <div>
                    <div className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                      Foundation &amp; Olympiad
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mt-1">
                      CBSE Classes V to X Program
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                      Ironclad school academic foundation combined with IMO, NSO,
                      and NTSE mentorship to secure top ranks early.
                    </p>
                  </div>
                  <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                        check_circle
                      </span>
                      Concept-First Mathematics &amp; Sciences
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                        check_circle
                      </span>
                      Weekly Subjective &amp; Objective Assessments
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                        check_circle
                      </span>
                      Critical Thinking &amp; Problem-Solving Lab
                    </li>
                  </ul>
                </div>
                <div className="p-space-lg pt-0 flex items-center justify-between bg-surface-container-low/50">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      Eligibility
                    </span>
                    <span className="font-label-md text-label-md text-primary font-bold">
                      Class V to X
                    </span>
                  </div>
                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="px-space-md py-space-xs bg-primary-container text-on-primary rounded-xl font-label-sm text-label-sm hover:bg-primary transition-colors"
                  >
                    Enquire CBSE
                  </button>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      {/* 5. HIGH-IMPACT COUNSELLING CTA BAND */}
      <section className="w-full bg-primary-container text-on-primary py-space-xl relative overflow-hidden shadow-xl">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary/30 to-transparent pointer-events-none"></div>
        <div className="relative max-w-[1240px] mx-auto px-margin-sm lg:px-margin flex flex-col lg:flex-row items-center justify-between gap-space-xl">
          <div className="space-y-space-sm max-w-[680px] text-center lg:text-left">
            <div className="inline-flex items-center gap-space-xs bg-surface-container-lowest/10 px-space-md py-1 rounded-full text-tertiary-fixed font-label-sm text-label-sm backdrop-blur-sm">
              <span className="material-symbols-outlined text-[16px]">school</span>
              Expert Admission Guidance Desk
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
              Not sure which course is right for your child?
            </h2>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim">
              Talk to our senior academic counsellor for a free candidate assessment, age
              eligibility verification, and personalized preparation roadmap.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm w-full lg:w-auto shrink-0">
            {/* WhatsApp */}
            <a
              className="flex items-center justify-center gap-space-xs bg-[#25D366] text-on-primary font-label-lg text-label-lg px-space-lg py-space-md rounded-xl transition-all shadow-[0_4px_14px_rgba(37,211,102,0.30)] hover:scale-105 active:scale-95 text-center"
              href="https://wa.me/919149771961"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[22px]">chat</span>
              WhatsApp Counsellor
            </a>
            {/* Direct Helpline */}
            <a
              className="flex items-center justify-center gap-space-xs bg-surface-container-lowest text-primary font-label-lg text-label-lg px-space-lg py-space-md rounded-xl transition-all shadow-md hover:bg-surface-container-low active:scale-95 text-center"
              href="tel:9149771961"
            >
              <span className="material-symbols-outlined text-[22px] text-on-tertiary-container">
                call
              </span>
              +91 9149771961
            </a>
            {/* Request Callback Modal Trigger */}
            <button
              onClick={() => setEnquiryOpen(true)}
              className="flex items-center justify-center gap-space-xs bg-tertiary-container text-on-tertiary font-label-lg text-label-lg px-space-lg py-space-md rounded-xl transition-all hover:bg-tertiary active:scale-95 text-center shadow-md"
            >
              <span className="material-symbols-outlined text-[22px]">support_agent</span>
              Request Callback
            </button>
          </div>
        </div>
      </section>

      {/* 6. ENQUIRY MODAL */}
      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
