"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";
import heroCadet from "@/assets/hero-cadet.webp";
import whyChooseUs from "@/assets/why-choose-us.webp";
import student1 from "@/assets/student1.webp";
import student2 from "@/assets/student2.webp";
import student3 from "@/assets/student3.webp";
import student4 from "@/assets/student4.webp";
import smartClassroom from "@/assets/smart.jpeg";
import certificateClassplus from "@/assets/certificate-classplus.jpg";
import ParentVoicesCarousel from "@/components/ParentVoicesCarousel";
import CallbackCard from "@/components/CallbackCard";
import EnquiryModal from "@/components/EnquiryModal";
import VideoModal from "@/components/VideoModal";
import CourseDetailModal from "@/components/CourseDetailModal";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [heroEnquiryOpen, setHeroEnquiryOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      if (hash === "testimonials" || hash === "parent-voices") {
        const timer = setTimeout(() => {
          const el = document.getElementById(hash) || document.getElementById("testimonials");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-primary via-primary-container to-tertiary text-on-primary overflow-hidden pt-12 pb-24 md:pb-32 min-h-[calc(100vh-4rem)]">
        {/* Radiating Sunrise Illustration SVG */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-20">
          <svg
            className="w-full h-full text-secondary-container"
            fill="none"
            viewBox="0 0 800 400"
          >
            <circle
              cx="400"
              cy="400"
              fill="currentColor"
              fillOpacity="0.3"
              r="160"
            />
            <g stroke="currentColor" strokeDasharray="4 6" strokeWidth="2">
              <line x1="400" x2="80" y1="400" y2="120" />
              <line x1="400" x2="180" y1="400" y2="60" />
              <line x1="400" x2="300" y1="400" y2="20" />
              <line x1="400" x2="400" y1="400" y2="10" />
              <line x1="400" x2="500" y1="400" y2="20" />
              <line x1="400" x2="620" y1="400" y2="60" />
              <line x1="400" x2="720" y1="400" y2="120" />
            </g>
          </svg>
        </div>

        <div className="max-w-[1280px] mx-auto px-margin relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Left: 55% Content */}
            <div className="lg:col-span-7 space-y-space-lg text-left">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-space-xs bg-secondary-container/20 text-secondary-container px-4 py-1.5 rounded-full backdrop-blur-md">
                <Icon name="military_tech" className="text-sm" />
                <span className="font-label-eyebrow text-label-eyebrow tracking-widest uppercase">
                  ★ ACHARYA DEFENCE ACADEMY ★
                </span>
              </div>

              <h1 className="font-display text-display text-on-primary font-extrabold tracking-tight leading-tight">
                Gateway to <br className="hidden sm:inline" />
                <span className="text-secondary-container underline decoration-secondary-container decoration-wavy underline-offset-8">
                  Sainik School
                </span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl">
                Welcome to our institute, where learning is exciting and everyone thrives. With passionate teachers, top facilities, and cutting-edge tech, we support personal and academic growth. Embracing diversity, we value each unique perspective. Through partnerships, we offer hands-on experiences bridging classroom learning with the real world. Join us in this journey of exploration and empowerment, unlocking endless opportunities for success and positive impact.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <button
                  type="button"
                  onClick={() => setHeroEnquiryOpen(true)}
                  className="inline-flex items-center gap-space-xs bg-gradient-to-r from-secondary-container to-secondary text-on-secondary font-label-btn text-label-btn px-8 py-4 rounded-full shadow-[0_6px_25px_0_rgba(254,99,50,0.45)] hover:shadow-[0_8px_30px_0_rgba(254,99,50,0.6)] hover:translate-x-1 transition-all cursor-pointer"
                  data-path="contact"
                >
                  <span>Enquire for Admission</span>
                  <Icon name="arrow_forward" className="text-[18px]" />
                </button>
                <button
                  type="button"
                  onClick={() => setHeroEnquiryOpen(true)}
                  className="inline-flex items-center gap-space-xs bg-surface-container-highest/10 hover:bg-surface-container-highest/20 text-on-primary font-label-btn text-label-btn px-7 py-4 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
                >
                  <Icon name="download" className="text-[20px] text-secondary-fixed" />
                  <span>Download Brochure</span>
                </button>
              </div>

              {/* Trust Stack */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-caption shadow-sm">
                    SP
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-caption shadow-sm">
                    MK
                  </div>
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-bold text-caption shadow-sm">
                    RD
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary flex items-center justify-center font-bold text-caption shadow-sm">
                    +500
                  </div>
                </div>
                <div>
                  <div className="flex items-center text-secondary-container">
                    <Icon name="star" className="text-[18px]" />
                    <Icon name="star" className="text-[18px]" />
                    <Icon name="star" className="text-[18px]" />
                    <Icon name="star" className="text-[18px]" />
                    <Icon name="star" className="text-[18px]" />
                    <span className="ml-2 font-caption text-caption text-on-primary font-bold">
                      4.9 / 5
                    </span>
                  </div>
                  <p className="font-caption text-caption text-on-primary-container">
                    500+ Families Trust ADAS Across Odisha
                  </p>
                </div>
              </div>
            </div>

            {/* Right: 45% Cadet Visual with Arch Frame & Floating Micro-cards */}
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Ambient Halo Behind Arch */}
              <div className="absolute -top-10 w-72 h-72 bg-secondary-container/25 rounded-full blur-3xl pointer-events-none"></div>

              {/* Architectural Arch Structure */}
              <div className="relative w-full max-w-[380px]">
                {/* Decorative Backing Offset Layer */}
                <div className="absolute -top-3 -right-3 w-full h-full rounded-t-[190px] rounded-b-xl bg-secondary-container/20 pointer-events-none"></div>

                {/* Main Arch Container */}
                <div className="relative w-full h-[510px] rounded-t-[190px] rounded-b-xl overflow-hidden shadow-2xl bg-primary-container">
                  <Image
                    className="w-full h-full object-cover object-top"
                    alt="Disciplined Indian student cadet in smart khaki and blue military academy school uniform standing at attention"
                    src={heroCadet}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    {/* <span className="inline-block bg-primary/80 backdrop-blur-md px-3 py-1 rounded-full text-secondary-fixed font-caption text-caption uppercase tracking-wider">
                      Adarsh Sahu • Sainik School Qualified
                    </span> */}
                  </div>
                </div>

                {/* Rotating Admissions Open Badge */}
                <div
                  className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-secondary text-on-secondary shadow-lg flex items-center justify-center p-2 text-center animate-spin"
                  style={{ animationDuration: "18s" }}
                >
                  <svg className="w-full h-full fill-current" viewBox="0 0 100 100">
                    <path
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                      id="textCircle"
                    />
                    <text className="text-[9.5px] uppercase font-bold tracking-widest fill-on-secondary">
                      <textPath href="#textCircle">
                        AISSEE • RMS • RIMC • ADA SAMBALPUR •
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Floating Frosted Glass Chips */}
                <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest/90 backdrop-blur-md text-on-surface p-3 rounded-xl shadow-xl flex items-center gap-space-sm max-w-[210px]">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center shrink-0">
                    <Icon name="workspace_premium" className="text-[22px]" />
                  </div>
                  <div>
                    <p className="font-title-md text-title-md font-bold text-primary leading-tight">
                      200+ Cadets
                    </p>
                    <p className="font-caption text-caption text-on-surface-variant leading-tight">
                      Selected into AISSEE &amp; RMS
                    </p>
                  </div>
                </div>

                <div className="absolute top-1/3 -right-6 bg-primary/90 backdrop-blur-md text-on-primary p-3 rounded-xl shadow-xl flex items-center gap-space-sm max-w-[190px]">
                  <Icon name="verified" className="text-secondary-container text-[24px]" />
                  <div>
                    <p className="font-caption text-caption text-secondary-fixed uppercase font-bold">
                      Heritage
                    </p>
                    <p className="font-body-sm text-body-sm font-semibold leading-tight">
                      6+ Yrs Discipline
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXAM MARQUEE TICKER */}
      <div className="w-full bg-surface-container-lowest py-3.5 overflow-hidden shadow-sm">
        <div className="flex items-center gap-space-xl whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-space-lg text-primary font-title-md text-title-md uppercase font-bold tracking-wide">
            <span>Sainik School (AISSEE)</span>
            <span className="text-secondary-container">★</span>
            <span>Rashtriya Military Schools (RMS)</span>
            <span className="text-secondary-container">★</span>
            <span>RIMC</span>
            <span className="text-secondary-container">★</span>
            <span>Jawahar Navodaya Vidyalaya (JNV)</span>
            <span className="text-secondary-container">★</span>
            <span>Odisha Adarsh Vidyalaya (OAV)</span>
            <span className="text-secondary-container">★</span>
            <span>CBSE Foundation Class V to X</span>
            <span className="text-secondary-container">★</span>
          </div>
          <div
            aria-hidden="true"
            className="flex items-center gap-space-lg text-primary font-title-md text-title-md uppercase font-bold tracking-wide"
          >
            <span>Sainik School (AISSEE)</span>
            <span className="text-secondary-container">★</span>
            <span>Rashtriya Military Schools (RMS)</span>
            <span className="text-secondary-container">★</span>
            <span>RIMC </span>
            <span className="text-secondary-container">★</span>
            <span>Jawahar Navodaya Vidyalaya (JNV)</span>
            <span className="text-secondary-container">★</span>
            <span>Odisha Adarsh Vidyalaya (OAV)</span>
            <span className="text-secondary-container">★</span>
            <span>CBSE Foundation Class V to X</span>
            <span className="text-secondary-container">★</span>
          </div>
        </div>
      </div>

      {/* 3. STATS BAND */}
      <section className="max-w-[1280px] mx-auto px-margin mt-12 relative z-20 w-full mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {/* Stat 1 */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-xl flex items-center gap-space-md hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
              <Icon name="military_tech" className="text-[32px]" />
            </div>
            <div>
              <span className="font-display text-headline-md text-primary font-extrabold tracking-tight">
                200+
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                AISSEE &amp; RMS Selections
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-xl flex items-center gap-space-md hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0">
              <Icon name="school" className="text-[32px]" />
            </div>
            <div>
              <span className="font-display text-headline-md text-primary font-extrabold tracking-tight">
                1,200+
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                Students Mentored
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-xl flex items-center gap-space-md hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
              <Icon name="history_edu" className="text-[32px]" />
            </div>
            <div>
              <span className="font-display text-headline-md text-primary font-extrabold tracking-tight">
                6+ Years
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                Sambalpur Institutional Trust
              </p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-xl flex items-center gap-space-md hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
              <Icon name="verified_user" className="text-[32px]" />
            </div>
            <div>
              <span className="font-display text-headline-md text-primary font-extrabold tracking-tight">
                100%
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                OMR &amp; Syllabus Drill
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COURSES BENTO GRID */}
      <section id="courses" className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-[1280px] mx-auto px-margin space-y-space-lg">
          <div className="text-center max-w-2xl mx-auto space-y-space-xs">
            <div className="inline-flex items-center gap-1 bg-secondary-fixed text-secondary px-3.5 py-1 rounded-full font-label-eyebrow text-label-eyebrow uppercase tracking-widest">
              Academic Offerings
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Choose Your Child&apos;s <span className="text-secondary-container">Path to Glory</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Specialized curricula designed to build supreme cognitive stamina, mathematical speed, and exam temperament.
            </p>
          </div>

          {/* Bento Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md items-stretch">
            {/* Hero Card (Spanning 2 rows on Desktop) */}
            <div
              onClick={() => setSelectedCourse("aissee")}
              className="lg:row-span-2 bg-gradient-to-br from-primary via-primary-container to-tertiary text-on-primary rounded-3xl p-space-lg shadow-xl relative overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-all"
            >
              <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none"></div>
              <div className="space-y-space-md relative z-10">
                <div className="flex items-center justify-between">
                  <span className="bg-secondary-container text-on-secondary px-3 py-1 rounded-full font-caption text-caption font-bold tracking-wide uppercase">
                    Most Popular
                  </span>
                  <Icon name="shield" className="text-secondary-fixed text-3xl" />
                </div>
                <div className="space-y-space-xs">
                  <span className="font-caption text-caption text-secondary-fixed uppercase font-semibold">
                    Flagship Course
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-primary">
                    Sainik School Entrance (AISSEE)
                  </h3>
                  <p className="font-body-md text-body-md text-on-primary-container">
                    Comprehensive, intensive preparation for AISSEE Class VI and Class IX admission. Rigorous Mathematics, Intelligence, English, and General Knowledge modules.
                  </p>
                </div>

                {/* Program highlights */}
                <ul className="space-y-space-sm pt-space-xs">
                  <li className="flex items-center gap-space-sm font-body-sm text-body-sm text-surface-container">
                    <Icon name="check_circle" className="text-secondary-container text-lg" />
                    Daily 3-hour subject mastery sessions
                  </li>
                  <li className="flex items-center gap-space-sm font-body-sm text-body-sm text-surface-container">
                    <Icon name="check_circle" className="text-secondary-container text-lg" />
                    50+ full-length authentic OMR sheet mock drills
                  </li>
                  <li className="flex items-center gap-space-sm font-body-sm text-body-sm text-surface-container">
                    <Icon name="check_circle" className="text-secondary-container text-lg" />
                    Interview &amp; medical examination orientation
                  </li>
                  <li className="flex items-center gap-space-sm font-body-sm text-body-sm text-surface-container">
                    <Icon name="check_circle" className="text-secondary-container text-lg" />
                    Class VI (Age 10-12) &amp; Class IX (Age 13-15)
                  </li>
                </ul>
              </div>

              <div className="pt-space-lg relative z-10">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCourse("aissee");
                  }}
                  className="w-full inline-flex items-center justify-center gap-space-xs bg-secondary-container hover:bg-secondary text-on-secondary font-label-btn text-label-btn py-3.5 px-6 rounded-full shadow-md transition-all cursor-pointer"
                  data-path="courses"
                >
                  <span>Explore AISSEE Details</span>
                  <Icon name="arrow_forward" className="text-[18px]" />
                </button>
              </div>
            </div>

            {/* Card 2: RMS Coaching */}
            <div
              onClick={() => setSelectedCourse("rms")}
              className="bg-surface-container-lowest rounded-3xl p-space-md shadow-md hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-secondary-fixed text-secondary flex items-center justify-center">
                    <Icon name="star_half" className="text-2xl" />
                  </div>
                  <span className="text-caption font-caption bg-surface-container text-primary font-bold px-3 py-1 rounded-full">
                    Class VI &amp; IX
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary group-hover:text-secondary transition-colors">
                  Rashtriya Military Schools (RMS )
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Precision coaching for Chail, Ajmer, Belgaum, Bengaluru, and Dholpur RMS campuses with heavy focus on rapid reasoning.
                </p>
              </div>
              <div className="pt-space-md flex items-center justify-between">
                <span className="font-caption text-caption text-secondary font-bold">
                  1-Year &amp; Crash Batches
                </span>
                <div className="w-10 h-10 rounded-full bg-surface-container text-primary flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary transition-colors">
                  <Icon name="arrow_forward" className="text-sm" />
                </div>
              </div>
            </div>

            {/* Card 3: RIMC  */}
            <div
              onClick={() => setSelectedCourse("rimc")}
              className="bg-surface-container-lowest rounded-3xl p-space-md shadow-md hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-primary-fixed text-primary flex items-center justify-center">
                    <Icon name="military_tech" className="text-2xl" />
                  </div>
                  <span className="text-caption font-caption bg-surface-container text-primary font-bold px-3 py-1 rounded-full">
                    Class VIII Intake
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary group-hover:text-secondary transition-colors">
                  RIMC  Entrance
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  The pinnacle of defence school entrance. Elite 1-on-1 mentorship for Odisha state selection quota with descriptive paper drills.
                </p>
              </div>
              <div className="pt-space-md flex items-center justify-between">
                <span className="font-caption text-caption text-secondary font-bold">
                  Elite Batch (15 Seats)
                </span>
                <div className="w-10 h-10 rounded-full bg-surface-container text-primary flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary transition-colors">
                  <Icon name="arrow_forward" className="text-sm" />
                </div>
              </div>
            </div>

            {/* Card 4: Jawahar Navodaya Vidyalaya (JNV) */}
            <div
              onClick={() => setSelectedCourse("jnvst")}
              className="bg-surface-container-lowest rounded-3xl p-space-md shadow-md hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-highest text-primary-container flex items-center justify-center">
                    <Icon name="menu_book" className="text-2xl" />
                  </div>
                  <span className="text-caption font-caption bg-surface-container text-primary font-bold px-3 py-1 rounded-full">
                    Class VI &amp; IX
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary group-hover:text-secondary transition-colors">
                  Navodaya Selection (JNVST)
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Specialized coaching for mental ability test, arithmetic logic, and language comprehension for Western Odisha Navodaya schools.
                </p>
              </div>
              <div className="pt-space-md flex items-center justify-between">
                <span className="font-caption text-caption text-secondary font-bold">
                  Comprehensive Mentorship
                </span>
                <div className="w-10 h-10 rounded-full bg-surface-container text-primary flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary transition-colors">
                  <Icon name="arrow_forward" className="text-sm" />
                </div>
              </div>
            </div>

            {/* Card 5: Odisha Adarsh Vidyalaya (OAV) & CBSE */}
            <div
              onClick={() => setSelectedCourse("oav-cbse")}
              className="bg-surface-container-lowest rounded-3xl p-space-md shadow-md hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-secondary-fixed text-secondary flex items-center justify-center">
                    <Icon name="auto_stories" className="text-2xl" />
                  </div>
                  <span className="text-caption font-caption bg-surface-container text-primary font-bold px-3 py-1 rounded-full">
                    Class VI - X
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary group-hover:text-secondary transition-colors">
                  OAV &amp; CBSE Foundation
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Dual-track syllabus reinforcing school examinations while laying the foundational bedrock for Olympiads, NDA, and defence aspirations.
                </p>
              </div>
              <div className="pt-space-md flex items-center justify-between">
                <span className="font-caption text-caption text-secondary font-bold">
                  Annual Day Scholars
                </span>
                <div className="w-10 h-10 rounded-full bg-surface-container text-primary flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary transition-colors">
                  <Icon name="arrow_forward" className="text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY ADAS */}
      <section id="why-adas" className="w-full bg-surface py-space-xl">
        <div className="max-w-[1280px] mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Left Arch Visual with offset saffron line */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[360px]">
                {/* Saffron architectural shadow layer */}
                <div className="absolute -bottom-4 -left-4 w-full h-full rounded-t-[180px] rounded-b-2xl bg-secondary-fixed pointer-events-none"></div>
                <div className="relative w-full h-[480px] rounded-t-[180px] rounded-b-2xl overflow-hidden shadow-xl bg-surface-container-high">
                  <Image
                    className="w-full h-full object-cover"
                    alt="Experienced Indian senior defence mentor in olive-tinted formal blazer guiding young boy and girl students"
                    src={whyChooseUs}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                    <p className="font-headline-sm text-headline-sm font-bold leading-tight">
                      Uncompromising Standards
                    </p>
                    <p className="font-caption text-caption text-surface-container">
                      Every Cadet Trained with Utmost Devotion
                    </p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-1/2 -right-6 bg-surface-container-lowest p-4 rounded-2xl shadow-xl border-l-4 border-secondary max-w-[180px]">
                  <span className="font-headline-md text-headline-md text-secondary font-black">
                    94%
                  </span>
                  <p className="font-caption text-caption text-on-surface-variant font-medium">
                    Entrance clearing confidence index
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Content & 2x3 features */}
            <div className="lg:col-span-7 space-y-space-md">
              <div className="space-y-space-xs">
                <span className="bg-secondary-fixed text-secondary px-3.5 py-1 rounded-full font-label-eyebrow text-label-eyebrow uppercase tracking-widest inline-block">
                  Why Parents Choose Us
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
                  Where Discipline Meets{" "}
                  <span className="text-secondary-container">Academic Excellence</span>
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Acharya Defence Academy (ADAS) is Sambalpur’s premier institution nurturing the intellectual acumen, moral uprightness, and physical grit needed to excel in national military school exams.
                </p>
              </div>

              {/* 2x3 Grid of features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                <div className="bg-surface-container-low p-5 rounded-2xl space-y-space-xs">
                  <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center">
                    <Icon name="badge" className="text-[20px]" />
                  </div>
                  <h3 className="font-title-md text-title-md text-primary">
                    Ex-Defence &amp; Expert Mentors
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Guidance directly influenced by officers and specialized entrance educators.
                  </p>
                </div>

                <div className="bg-surface-container-low p-5 rounded-2xl space-y-space-xs">
                  <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary flex items-center justify-center">
                    <Icon name="assignment" className="text-[20px]" />
                  </div>
                  <h3 className="font-title-md text-title-md text-primary">
                    Weekly OMR Sheet Drills
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Time-pressured simulated exams ensuring zero negative marking anxiety.
                  </p>
                </div>

                <div className="bg-surface-container-low p-5 rounded-2xl space-y-space-xs">
                  <div className="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary flex items-center justify-center">
                    <Icon name="groups" className="text-[20px]" />
                  </div>
                  <h3 className="font-title-md text-title-md text-primary">
                    Small Batches (Max 25)
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Every student is observed daily. No child gets lost in an overcrowded hall.
                  </p>
                </div>

                <div className="bg-surface-container-low p-5 rounded-2xl space-y-space-xs">
                  <div className="w-10 h-10 rounded-xl bg-secondary text-on-secondary flex items-center justify-center">
                    <Icon name="support_agent" className="text-[20px]" />
                  </div>
                  <h3 className="font-title-md text-title-md text-primary">
                    Individual Doubt Clinics
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Dedicated post-class remedial counters for Mathematics and English logic.
                  </p>
                </div>

                <div className="bg-surface-container-low p-5 rounded-2xl space-y-space-xs">
                  <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
                    <Icon name="sports_martial_arts" className="text-[20px]" />
                  </div>
                  <h3 className="font-title-md text-title-md text-primary">
                    Military Values &amp; Routine
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Morning PT, self-reliance, spotless etiquette, and punctuality instillations.
                  </p>
                </div>

                <div className="bg-surface-container-low p-5 rounded-2xl space-y-space-xs">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-highest text-primary flex items-center justify-center">
                    <Icon name="hotel" className="text-[20px]" />
                  </div>
                  <h3 className="font-title-md text-title-md text-primary">
                    Dedicated Hostel Facility
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Safe, disciplined residential facility with nutritious food for outstation cadets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5. NATIONAL RECOGNITION: CLASSPLUS & SOURAV GANGULY PARTNER CERTIFICATE */}
      <section
        id="recognition"
        className="w-full bg-gradient-to-b from-primary via-[#031b37] to-tertiary text-on-primary py-20 relative overflow-hidden"
      >
        {/* Ambient Sunrise Glow & Orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-primary-container/40 blur-3xl pointer-events-none"></div>

        {/* Faded Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.03]">
          <span className="font-display text-[120px] md:text-[200px] font-extrabold tracking-widest text-white whitespace-nowrap">
            CERTIFIED
          </span>
        </div>

        <div className="relative max-w-[1280px] mx-auto px-margin z-10">
          {/* Eyebrow & Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed/20 text-secondary-container font-label-eyebrow text-label-eyebrow tracking-widest uppercase mb-4 shadow-sm">
              <Icon name="verified" className="text-[16px] text-secondary-container" />
              <span>★ NATIONWIDE PRESTIGE &amp; RECOGNITION ★</span>
            </div>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-primary tracking-tight font-bold">
              Classplus Certified Partner — Endorsed by{" "}
              <span className="text-secondary-container relative inline-block whitespace-nowrap">
                Sourav Ganguly
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
              Acharya Defence Academy (ADAS) is officially certified and appreciated by educational technology leader Classplus and former Indian Cricket Team Captain Sourav Ganguly for innovative defence entrance coaching.
            </p>
          </div>

          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Luxury Framed Certificate Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[360px] md:max-w-[380px]">
                {/* Outer Ambient Glow */}
                <div className="absolute -inset-4 bg-secondary-container/20 blur-2xl rounded-3xl opacity-60"></div>

                {/* Wooden / Gold Framed Canvas */}
                <div className="relative rounded-2xl p-3 bg-gradient-to-br from-[#c89b3c] via-[#ecd89a] to-[#9a7228] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_25px_rgba(254,99,50,0.25)]">
                  {/* Inner Dark Matting Border */}
                  <div className="rounded-xl overflow-hidden bg-white p-1.5 shadow-inner relative">
                    {/* Top Ribbon Seal Badge */}
                    <div className="absolute top-3 right-3 z-20 bg-primary/95 text-secondary-container text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 uppercase tracking-wider border border-secondary-container/30">
                      <Icon name="workspace_premium" className="text-[14px] text-secondary-container" />
                      <span>Certified Partner</span>
                    </div>

                    {/* Certificate Image */}
                    <Image
                      src={certificateClassplus}
                      alt="Certificate of Association awarded to ADAS (Gateway to Sainik School) by Classplus and Sourav Ganguly"
                      className="w-full h-auto object-contain rounded-lg block max-h-[480px]"
                      priority
                    />

                    {/* Subtle Sheen / Glass Reflection Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Endorsement Details & Credibility Points */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                {/* Meta Badge Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-md bg-secondary-container/20 text-secondary-container border border-secondary-container/30 text-xs font-bold tracking-wide uppercase">
                    Classplus Certified Partner
                  </span>
                  <span className="px-3 py-1 rounded-md bg-primary-container text-on-primary-container border border-white/10 text-xs font-semibold">
                    Strategic Endorsement
                  </span>
                  <span className="px-3 py-1 rounded-md bg-primary-container text-on-primary-container border border-white/10 text-xs font-semibold">
                    Digital Pedagogy Leader
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md text-white font-bold mb-3">
                  Recognized for Educational Transformation &amp; Innovation
                </h3>

                {/* Quote Box from Certificate */}
                <div className="relative bg-primary-container/70 border-l-4 border-secondary-container rounded-r-xl p-5 shadow-md backdrop-blur">
                  <span className="material-symbols-outlined text-secondary-container/30 text-3xl absolute top-2 right-2 pointer-events-none">
                    format_quote
                  </span>
                  <p className="font-body-md text-body-md text-on-primary italic leading-relaxed">
                    &quot;This is to proudly appreciate <strong className="text-secondary-container font-semibold not-italic">ADAS (Gateway to Sainik School)</strong> for dedication to transforming education and empowering learners through innovation. We deeply appreciate your efforts and celebrate your journey.&quot;
                  </p>
                  <div className="mt-3 flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-white/10">
                    <span className="text-xs font-medium text-on-primary-container flex items-center gap-1">
                      <Icon name="military_tech" className="text-secondary-container text-sm" />
                      Signatories: <strong>Sourav Ganguly</strong>
                    </span>

                  </div>
                </div>
              </div>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-primary-container/40 border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-secondary-container/20 text-secondary-container flex items-center justify-center mb-2">
                    <Icon name="workspace_premium" className="text-[20px]" />
                  </div>
                  <h4 className="font-title-sm text-title-sm text-white font-bold mb-1">
                    Cricket Legend&apos;s Seal
                  </h4>
                  <p className="font-body-sm text-xs text-on-primary-container leading-relaxed">
                    Endorsed by former Team India Captain Sourav Ganguly as a model juvenile coaching academy.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-primary-container/40 border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-secondary-container/20 text-secondary-container flex items-center justify-center mb-2">
                    <span className="material-symbols-outlined text-[20px] text-secondary-container">psychology</span>
                  </div>
                  <h4 className="font-title-sm text-title-sm text-white font-bold mb-1">
                    Smart Learning
                  </h4>
                  <p className="font-body-sm text-xs text-on-primary-container leading-relaxed">
                    Powered by cutting-edge digital test series, OMR analytics, and live remedial doubt tracking.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-primary-container/40 border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-secondary-container/20 text-secondary-container flex items-center justify-center mb-2">
                    <Icon name="school" className="text-[20px]" />
                  </div>
                  <h4 className="font-title-sm text-title-sm text-white font-bold mb-1">
                    Odisha Pride
                  </h4>
                  <p className="font-body-sm text-xs text-on-primary-container leading-relaxed">
                    Bringing metro-calibre entrance prep and military discipline right to Sambalpur.
                  </p>
                </div>
              </div>

              {/* Actions & Links */}
              {/* <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setHeroEnquiryOpen(true)}
                  className="inline-flex items-center gap-2 bg-secondary-container hover:bg-secondary text-on-secondary font-label-btn text-label-btn px-7 py-3.5 rounded-full shadow-[0_6px_20px_0_rgba(241,90,41,0.35)] transition-all cursor-pointer font-bold"
                >
                  <span>Enquire for Admission</span>
                  <Icon name="arrow_forward" className="text-[18px]" />
                </button>
                <button
                  type="button"
                  onClick={() => setCertificateModalOpen(true)}
                  className="inline-flex items-center gap-2 text-white hover:text-secondary-container font-label-btn text-label-btn px-6 py-3.5 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 backdrop-blur transition-colors border border-white/15 cursor-pointer"
                >
                  <Icon name="auto_stories" className="text-[18px]" />
                  <span>View Full Certificate</span>
                </button>
                <a
                  className="inline-flex items-center gap-2 text-on-primary-container hover:text-white font-label-btn text-xs px-4 py-3 rounded-full hover:bg-white/5 transition-colors"
                  href="tel:9149771961"
                >
                  <Icon name="call" className="text-[16px]" />
                  <span>Helpline: 9149771961</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>

      </section>

      {/* 6. HOW IT WORKS / ADMISSION ROADMAP */}
      <section className="w-full bg-surface-container py-space-xl">
        <div className="max-w-[1280px] mx-auto px-margin space-y-space-xl">
          <div className="text-center max-w-2xl mx-auto space-y-space-xs">
            <span className="bg-secondary-fixed text-secondary px-3.5 py-1 rounded-full font-label-eyebrow text-label-eyebrow uppercase tracking-widest inline-block">
              Admission Journey
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Simple 4-Step Pathway to{" "}
              <span className="text-secondary-container">Enrolment</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We believe in transparent evaluation and welcoming families into a disciplined, encouraging culture.
            </p>
          </div>

          {/* Steps row with oversized numerals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
            {/* Step 1 */}
            <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between">
              <span className="text-[72px] font-display font-extrabold text-surface-container absolute -top-4 right-4 pointer-events-none select-none">
                01
              </span>
              <div className="space-y-space-sm relative z-10 pt-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="font-title-lg text-title-lg text-primary">
                  Enquire &amp; Register
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Submit your child&apos;s current grade and DOB online or call our helpline to confirm exam age criteria.
                </p>
              </div>
              <div className="mt-6 pt-3 text-secondary font-caption text-caption font-bold">
                Takes less than 2 mins
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between">
              <span className="text-[72px] font-display font-extrabold text-surface-container absolute -top-4 right-4 pointer-events-none select-none">
                02
              </span>
              <div className="space-y-space-sm relative z-10 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="font-title-lg text-title-lg text-primary">
                  Free Counselling
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Meet academic mentors at our Sambalpur campus for a roadmap tailored to the cadet’s strengths and weaknesses.
                </p>
              </div>
              <div className="mt-6 pt-3 text-primary font-caption text-caption font-bold">
                In-person or Telephonic
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between">
              <span className="text-[72px] font-display font-extrabold text-surface-container absolute -top-4 right-4 pointer-events-none select-none">
                03
              </span>
              <div className="space-y-space-sm relative z-10 pt-4">
                <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="font-title-lg text-title-lg text-primary">
                  2-Day Live Demos
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Let your child experience the real classroom atmosphere, teaching methodology, and interaction firsthand.
                </p>
              </div>
              <div className="mt-6 pt-3 text-secondary font-caption text-caption font-bold">
                Zero Obligation Trial
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between">
              <span className="text-[72px] font-display font-extrabold text-surface-container absolute -top-4 right-4 pointer-events-none select-none">
                04
              </span>
              <div className="space-y-space-sm relative z-10 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold">
                  4
                </div>
                <h3 className="font-title-lg text-title-lg text-primary">
                  Induction &amp; Kit
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Formal enrollment, issuance of ADAS study modules, academy uniform allocation, and batch schedule induction.
                </p>
              </div>
              <div className="mt-6 pt-3 text-primary font-caption text-caption font-bold">
                Begin Cadet Routine
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ACHIEVERS & TOPPERS (Deep Navy Curved Section) */}
      <section
        id="toppers"
        className="w-full bg-primary text-on-primary py-space-xl relative overflow-hidden"
      >
        <div className="max-w-[1280px] mx-auto px-margin space-y-space-xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="space-y-space-xs max-w-xl">
              <span className="bg-secondary-container/20 text-secondary-container px-3.5 py-1 rounded-full font-label-eyebrow text-label-eyebrow uppercase tracking-widest inline-block">
                Hall of Fame
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-primary">
                Our Proud{" "}
                <span className="text-secondary-container">Achievers</span>
              </h2>
              <p className="font-body-md text-body-md text-on-primary-container">
                These courageous youngsters transformed their aspirations into selections at India&apos;s most prestigious military academies.
              </p>
            </div>
            <div>
              <a
                className="inline-flex items-center gap-space-xs text-secondary-fixed hover:text-on-secondary transition-colors font-label-btn text-label-btn"
                data-path="result"
                href="/result"
              >
                <span>View All Results</span>
                <Icon name="east" className="text-[18px]" />
              </a>
            </div>
          </div>

          {/* Achiever Cards Carousel Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Cadet 1 */}
            <div className="bg-primary-container rounded-3xl p-6 shadow-lg flex flex-col items-center text-center relative group hover:-translate-y-1.5 transition-transform">
              <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-4 relative bg-tertiary mx-auto border-4 border-secondary-container/20 shadow-md">
                <Image
                  src={student1}
                  alt="Cadet Baibhav - Selection in New Sainik School Raipur"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="font-title-lg text-title-lg text-on-primary mt-1 font-bold">
                Baibhav
              </h3>
              <p className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Selected at New Sainik School Raipur
              </p>
            </div>

            {/* Cadet 2 */}
            <div className="bg-primary-container rounded-3xl p-6 shadow-lg flex flex-col items-center text-center relative group hover:-translate-y-1.5 transition-transform">
              <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-4 relative bg-tertiary mx-auto border-4 border-secondary-container/20 shadow-md">
                <Image
                  src={student2}
                  alt="Cadet Aryan - Selection in Sainik School Bhubaneswar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="font-title-lg text-title-lg text-on-primary mt-1 font-bold">
                Aryan
              </h3>
              <p className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Selected at Sainik School Bhubaneswar
              </p>
            </div>

            {/* Cadet 3 */}
            <div className="bg-primary-container rounded-3xl p-6 shadow-lg flex flex-col items-center text-center relative group hover:-translate-y-1.5 transition-transform">
              <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-4 relative bg-tertiary mx-auto border-4 border-secondary-container/20 shadow-md">
                <Image
                  src={student3}
                  alt="Cadet Rishab - Selection in Sainik School Sambalpur"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="font-title-lg text-title-lg text-on-primary mt-1 font-bold">
                Rishab
              </h3>
              <p className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Selected at Sainik School Sambalpur
              </p>
            </div>

            {/* Cadet 4 */}
            <div className="bg-primary-container rounded-3xl p-6 shadow-lg flex flex-col items-center text-center relative group hover:-translate-y-1.5 transition-transform">
              <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-4 relative bg-tertiary mx-auto border-4 border-secondary-container/20 shadow-md">
                <Image
                  src={student4}
                  alt="Cadet Manish - Selection in Sainik School Sambalpur"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="font-title-lg text-title-lg text-on-primary mt-1 font-bold">
                Manish
              </h3>
              <p className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Selected at Sainik School Sambalpur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. VIDEO & CAMPUS SHOWCASE */}
      <section id="campus" className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-[1280px] mx-auto px-margin space-y-space-lg">
          <div className="text-center max-w-2xl mx-auto space-y-space-xs">
            <span className="bg-secondary-fixed text-secondary px-3.5 py-1 rounded-full font-label-eyebrow text-label-eyebrow uppercase tracking-widest inline-block">
              Campus Life
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              See ADAS <span className="text-secondary-container">in Action</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Take a look inside our high-focus classrooms, early morning physical training drills, and peer study environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-stretch">
            {/* Main 16:9 Video Presentation Frame */}
            <div
              className="lg:col-span-8 bg-surface-container-lowest rounded-3xl overflow-hidden shadow-xl relative min-h-[360px] sm:min-h-[420px] flex items-center justify-center group cursor-pointer"
              onClick={() => setVideoModalOpen(true)}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/assets/herovideo.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-primary/40 backdrop-blur-[1px]"></div>

              {/* Play Trigger Button */}
              <button
                type="button"
                className="relative z-10 w-20 h-20 rounded-full bg-secondary-container hover:bg-secondary text-on-secondary shadow-[0_6px_25px_0_rgba(254,99,50,0.5)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-label="Play Campus Tour Video"
              >
                <Icon name="play_arrow" className="text-[36px] ml-1" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-on-primary pointer-events-none">
                <div>
                  <p className="font-title-md text-title-md font-bold">
                    A Day in the Life of an ADAS Cadet
                  </p>
                  <p className="font-caption text-caption text-surface-container-highest">
                    Watch campus tour, drill sessions, and teacher reviews
                  </p>
                </div>
              </div>
            </div>

            {/* 2 Stacked Lateral Campus Cards */}
            <div className="lg:col-span-4 flex flex-col gap-space-md">
              <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-md flex-1 relative group">
                <Image
                  src={smartClassroom}
                  alt="Students attending an interactive smart classroom session at Acharya Defence Academy"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-5 space-y-1">
                  <span className="font-caption text-caption text-secondary font-bold uppercase tracking-wider">
                    Academic Rigour
                  </span>
                  <h4 className="font-title-md text-title-md text-primary font-bold">
                    Smart Classrooms &amp; OMR Labs
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Equipped with digital testing terminals and timed exam environments.
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-md flex-1 relative group">
                <img
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Clean and disciplined boarding hostel rooms with organized study desks"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5UuVZvhQef6CPm3dDvdrJ3o6iw527myI3Np5lOkvTJ2bgMp7BBtua7YB2T5aIziVP8cu_1AFgUzCbnhSHwIvMgCYI5P6OcC9gMurFoKzMR9qjOtvJrDv85KpOj-CqmNqBDNjNbIya8jhKMp7qZpgQ3YjwAWHdue31Kh6aIJ6iK9Aa1VA4ArZkHU-TxweCZZwXu6yo4BwALxcyzZxdpK-hSP2ItHUVLgkcNV1ds-Qi"
                />
                <div className="p-5 space-y-1">
                  <span className="font-caption text-caption text-secondary font-bold uppercase tracking-wider">
                    Campus Living
                  </span>
                  <h4 className="font-title-md text-title-md text-primary font-bold">
                    Secure Residential Quarters
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    24x7 warden oversight, clean mess nutrition, and structured self-study hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS / PARENT VOICES */}
      <section
        id="testimonials"
        className="w-full bg-secondary-fixed/20 py-space-xl overflow-hidden scroll-mt-20"
      >
        <span id="parent-voices" className="scroll-mt-20" />
        <div className="max-w-[1280px] mx-auto px-margin space-y-space-lg">
          <div className="text-center max-w-2xl mx-auto space-y-space-xs">
            <span className="bg-secondary-fixed text-secondary px-3.5 py-1 rounded-full font-label-eyebrow text-label-eyebrow uppercase tracking-widest inline-block shadow-xs">
              Parent Voices
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Parents Love <span className="text-secondary-container">ADAS</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Hear directly from guardians whose children cleared national defence schools through Acharya Defence Academy.
            </p>

            {/* Google Rating Trust Badge */}
            {/* <div className="pt-2 flex items-center justify-center gap-2 text-sm text-on-surface-variant font-medium">
              <div className="flex text-[#fe6332]">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Icon key={star} name="star" className="text-sm fill-current" />
                ))}
              </div>
              <span className="font-bold text-primary">4.9 / 5</span>
              <span>•</span>
              <span>120+ Verified Reviews on Google</span>
            </div> */}
          </div>

          {/* Testimonials 3D Carousel with 15s Auto-scroll */}
          <ParentVoicesCarousel />
        </div>
      </section>

      {/* 10. FAQ & RAPID ENQUIRY */}
      <section id="contact" className="w-full bg-surface py-space-xl">
        <div className="max-w-[1280px] mx-auto px-margin">
          <div className="text-center max-w-2xl mx-auto space-y-space-xs mb-space-lg">
            <span className="bg-secondary-fixed text-secondary px-3.5 py-1 rounded-full font-label-eyebrow text-label-eyebrow uppercase tracking-widest inline-block">
              Frequently Asked Questions
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Got Questions? <span className="text-secondary-container">We Have Answers</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Everything you need to know about eligibility, dates, and coaching methodology.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-space-md">

            {/* FAQ Items */}
            <div className="space-y-space-sm" id="faqAccordion">
              {/* FAQ 1 */}
              <details
                className="group bg-surface-container-low rounded-2xl p-5 cursor-pointer shadow-sm"
                open={openFaq === 0}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(0);
                }}
              >
                <summary className="flex items-center justify-between font-title-md text-title-md text-primary font-semibold list-none">
                  <span>What is the eligibility age for Sainik School (AISSEE) Class VI?</span>
                  <Icon name="expand_more" className={`text-secondary transition-transform duration-200 ${openFaq === 0 ? "rotate-180" : ""
                    }`} />
                </summary>
                {openFaq === 0 && (
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                    Candidates must be between 10 and 12 years of age as of March 31st of the admission year. Both boys and girls are eligible to apply for Class VI admission across all Sainik Schools nationwide.
                  </p>
                )}
              </details>

              {/* FAQ 2 */}
              <details
                className="group bg-surface-container-low rounded-2xl p-5 cursor-pointer shadow-sm"
                open={openFaq === 1}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(1);
                }}
              >
                <summary className="flex items-center justify-between font-title-md text-title-md text-primary font-semibold list-none">
                  <span>Do you offer safe hostel accommodation for outstation students?</span>
                  <Icon name="expand_more" className={`text-secondary transition-transform duration-200 ${openFaq === 1 ? "rotate-180" : ""
                    }`} />
                </summary>
                {openFaq === 1 && (
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                    Yes. ADAS provides fully disciplined hostel facilities with nutritious meals, round-the-clock wardens, mandatory morning physical fitness sessions, and structured evening self-study hours under teacher supervision.
                  </p>
                )}
              </details>

              {/* FAQ 3 */}
              <details
                className="group bg-surface-container-low rounded-2xl p-5 cursor-pointer shadow-sm"
                open={openFaq === 2}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(2);
                }}
              >
                <summary className="flex items-center justify-between font-title-md text-title-md text-primary font-semibold list-none">
                  <span>What is the medium of instruction at Acharya Defence Academy?</span>
                  <Icon name="expand_more" className={`text-secondary transition-transform duration-200 ${openFaq === 2 ? "rotate-180" : ""
                    }`} />
                </summary>
                {openFaq === 2 && (
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                    Instruction is bilingual in English and Odia/Hindi to make foundational concepts crystal clear, while test materials and mock exams follow the strictly standardized English medium exam format.
                  </p>
                )}
              </details>

              {/* FAQ 4 */}
              <details
                className="group bg-surface-container-low rounded-2xl p-5 cursor-pointer shadow-sm"
                open={openFaq === 3}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(3);
                }}
              >
                <summary className="flex items-center justify-between font-title-md text-title-md text-primary font-semibold list-none">
                  <span>Is there an admission scholarship test at ADA Sambalpur?</span>
                  <Icon name="expand_more" className={`text-secondary transition-transform duration-200 ${openFaq === 3 ? "rotate-180" : ""
                    }`} />
                </summary>
                {openFaq === 3 && (
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                    Yes! We conduct the ADAS Talent Hunt &amp; Diagnostic Test periodically. Meritorious students and children of defence/police personnel receive up to 50% tuition fee concessions.
                  </p>
                )}
              </details>

              {/* FAQ 5 */}
              <details
                className="group bg-surface-container-low rounded-2xl p-5 cursor-pointer shadow-sm"
                open={openFaq === 4}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(4);
                }}
              >
                <summary className="flex items-center justify-between font-title-md text-title-md text-primary font-semibold list-none">
                  <span>How many mock tests are conducted before the real AISSEE/RMS exam?</span>
                  <Icon name="expand_more" className={`text-secondary transition-transform duration-200 ${openFaq === 4 ? "rotate-180" : ""
                    }`} />
                </summary>
                {openFaq === 4 && (
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                    We conduct over 45 full-syllabus mock tests with authentic carbon-copy OMR sheets, followed by immediate error analysis sheets so students continuously overcome timing mistakes.
                  </p>
                )}
              </details>
            </div>

            {/* Right 5 Cols: Floating High-Conversion Navy Card */}
            {/* <CallbackCard /> */}
          </div>
        </div>
      </section>
      <CourseDetailModal
        courseId={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnquire={() => setHeroEnquiryOpen(true)}
      />
      <EnquiryModal open={heroEnquiryOpen} onClose={() => setHeroEnquiryOpen(false)} />
      <VideoModal
        open={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoSrc="/assets/herovideo.mp4"
      />
    </div>
  );
}
