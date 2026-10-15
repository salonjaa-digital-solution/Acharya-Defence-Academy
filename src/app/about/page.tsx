import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import directorImg from "@/assets/Director-ADAS.png";
import smartClassroom from "@/assets/smart.jpeg";
import obstacleGround from "@/assets/obstacle-ground.webp";
import libraryStudyHall from "@/assets/library-study-hall.webp";
import cadetDormitory from "@/assets/cadet-dormitory.webp";
import genesisCampus from "@/assets/genesis-campus.webp";

export const metadata: Metadata = {
  title: "About Us | Acharya Defence Academy (ADAS), Sambalpur",
  description:
    "Building disciplined, confident future officers in Western Odisha through military decorum, high-rigor academics, and character fortification.",
};

export default function AboutPage() {
  return (
    <div className="about-theme flex flex-col w-full">
      {/* 1. HERO HEADER SECTION */}
      <section className="relative w-full bg-gradient-to-b from-primary via-primary-container to-primary text-on-primary overflow-hidden pt-12 pb-24 md:pb-32 min-h-[calc(100vh-4rem)]">
        {/* Faded Giant Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
          <span className="font-display text-[140px] md:text-[240px] font-extrabold tracking-widest text-on-primary whitespace-nowrap uppercase">
            VALOUR
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
              <span>★ LEGACY OF VALOUR &amp; DISCIPLINE ★</span>
              <span className="material-symbols-outlined text-[15px] text-secondary-container">
                military_tech
              </span>
            </div>
          </div>

          {/* Main Heading with Editorial Saffron Accent Wave */}
          <div className="text-center max-w-4xl mx-auto mb-space-xl">
            <h1 className="font-headline-lg md:font-display text-headline-lg-mobile md:text-display text-on-primary tracking-tight leading-tight">
              Forging future leaders with{" "}
              <span className="text-secondary-container relative inline-block whitespace-nowrap">
                military discipline
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
              Western Odisha&apos;s premier defence academy. Building disciplined,
              confident future officers through military decorum, high-rigor
              academics, physical stamina, and character fortification.
            </p>
          </div>

          {/* Glassmorphic Stats Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md pt-space-md max-w-5xl mx-auto">
            <div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  groups
                </span>
              </div>
              <span className="font-display text-headline-lg md:text-headline-lg text-on-primary tracking-tight">
                1,200+
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                Cadets Mentored
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Western Odisha Aspirants
              </span>
            </div>

            <div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  workspace_premium
                </span>
              </div>
              <span className="font-display text-headline-lg md:text-headline-lg text-secondary-container tracking-tight">
                94.6%
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                Selection Rate
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Highest in Sambalpur District
              </span>
            </div>

            <div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  military_tech
                </span>
              </div>
              <span className="font-display text-headline-lg md:text-headline-lg text-on-primary tracking-tight">
                06+
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                Years of Rigor
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Dedicated Defence Coaching
              </span>
            </div>

            <div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  shield_person
                </span>
              </div>
              <span className="font-display text-headline-lg md:text-headline-lg text-on-primary tracking-tight">
                100%
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                Residential Focus
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Hostel, PT &amp; Daily Study
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="w-full bg-surface py-space-xl lg:py-24">
        <div className="max-w-[1240px] mx-auto px-margin-sm lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative pb-6 lg:pb-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container aspect-[4/3] sm:h-[400px]">
                <Image
                  src={genesisCampus}
                  alt="Cadets assembly in front of academy campus in Sambalpur with Indian flag"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-3 left-3 bg-primary/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-on-primary flex items-center gap-2 border border-white/10 shadow-lg">
                  <span className="material-symbols-outlined text-secondary-container text-[16px]">
                    verified
                  </span>
                  <span className="font-caption text-caption text-on-primary font-semibold">
                    Dhankauda Campus • Estd. 2018
                  </span>
                </div>
              </div>

              {/* Floating Small Badge */}
              <div className="absolute -bottom-4 sm:-bottom-5 left-4 sm:left-6 bg-surface-container-lowest/95 backdrop-blur-md text-on-surface p-3 rounded-xl shadow-xl border border-secondary-container/20 flex items-center gap-space-sm max-w-[220px] z-10">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">
                    workspace_premium
                  </span>
                </div>
                <div>
                  <p className="font-title-md text-title-md font-bold text-primary leading-tight">
                    148+ Cadets
                  </p>
                  <p className="font-caption text-caption text-on-surface-variant leading-tight">
                    Selected into AISSEE &amp; RMS
                  </p>
                </div>
              </div>
            </div>
            {/* Narrative Column */}
            <div className="lg:col-span-6 flex flex-col items-start gap-space-md mt-6 lg:mt-0">
              <div className="space-y-space-xs">
                <span className="font-label-sm text-label-sm text-on-tertiary-container tracking-widest uppercase font-bold">
                  Genesis of Excellence
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Bridging the Frontier of National Defence for Odisha&apos;s Youth
                </h2>
                <div className="w-12 h-1 bg-on-tertiary-container rounded-full"></div>
              </div>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                Founded with a solemn mandate near Sambalpur City Railway Station,
                Acharya Defence Academy (ADAS) resolved an acute regional
                disparity: rural and semi-urban students of Western Odisha possessed
                exceptional resilience, patriotic spirit, and intellect, yet lacked
                institutional preparatory guidance for premier national entrance
                gateways like{" "}
                <strong>
                  Sainik Schools (AISSEE), Rashtriya Military Schools (RMS), and
                  RIMC
                </strong>
                .
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                From humble beginnings with an inaugural batch of nineteen dedicated
                boys, ADAS has matured into an authoritative residential hub. We
                systematically fuse state-of-the-art classroom pedagogy with the
                time-tested discipline of Indian military culture—training not just
                candidate examinees, but the future officers of our Armed Forces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="w-full bg-surface-container-low py-space-xl lg:py-24">
        <div className="max-w-[1240px] mx-auto px-margin-sm lg:px-margin flex flex-col gap-space-lg">
          <div className="text-center max-w-2xl mx-auto space-y-space-xs">
            <span className="font-label-sm text-label-sm text-on-tertiary-container tracking-widest uppercase font-bold">
              Institutional Mandate
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Our Vision &amp; Mission
            </h2>
            <div className="w-12 h-1 bg-on-tertiary-container rounded-full mx-auto"></div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Guiding every cadet along the strict pathway connecting humble
              ambition to commissioning in the service of India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Vision Card */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary"></div>
              <div className="space-y-space-md">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">flag</span>
                </div>
                <div className="space-y-space-xs">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                    The Horizon Ahead
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Our Vision
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  To be eastern India&apos;s most dependable military cradle,
                  shaping humble school-age aspirants into intellectually
                  brilliant, morally steadfast, and physically indomitable cadets
                  prepared to qualify into Sainik Schools, RMS, RIMC, and
                  ultimately command the Armed Forces of India.
                </p>
              </div>
              <div className="pt-space-md mt-space-md flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                <span className="material-symbols-outlined text-[20px]">
                  workspace_premium
                </span>
                <span>National Standard Leadership</span>
              </div>
            </div>
            {/* Mission Card */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-on-tertiary-container"></div>
              <div className="space-y-space-md">
                <div className="w-12 h-12 rounded-xl bg-tertiary-container text-tertiary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">radar</span>
                </div>
                <div className="space-y-space-xs">
                  <span className="font-label-sm text-label-sm text-on-tertiary-container uppercase tracking-wider">
                    The Everyday Code
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Our Mission
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  To maintain an unbroken regimen of dawn-to-dusk discipline,
                  personalized bilingual instruction, daily speed-accuracy
                  metrics, physical conditioning, and value cultivation, leaving no
                  educational or emotional gap unbridged for every young boarder
                  entrusted to our care.
                </p>
              </div>
              <div className="pt-space-md mt-space-md flex items-center gap-space-xs text-on-tertiary-container font-label-md text-label-md">
                <span className="material-symbols-outlined text-[20px]">
                  alarm_on
                </span>
                <span>Uncompromising Daily Rigor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER'S MESSAGE */}
      <section className="w-full bg-surface py-space-xl lg:py-24">
        <div className="max-w-[1240px] mx-auto px-margin-sm lg:px-margin">
          <div className="bg-primary rounded-3xl text-on-primary p-space-lg lg:p-space-xl shadow-xl overflow-hidden relative">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-surface-container-highest/10 blur-3xl pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Founder Image & Credentials (Left Side) */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-primary-container">
                  <Image
                    src={directorImg}
                    alt="Himanshu Sekhar Acharya - Founder & Academic Director"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 320px"
                    priority
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="font-headline-sm text-headline-sm text-on-primary font-bold tracking-tight">
                    Himanshu Sekhar Acharya
                  </h3>
                  <p className="font-label-md text-label-md text-tertiary-fixed font-semibold">
                    Founder &amp; Academic Director
                  </p>
                  <p className="font-body-sm text-body-sm text-primary-fixed-dim">
                    Acharya Defence Academy, Sambalpur
                  </p>
                </div>
              </div>

              {/* Message & Philosophy (Right Side) */}
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-space-xs text-tertiary-fixed">
                  <span className="material-symbols-outlined text-[36px]">
                    format_quote
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim font-bold">
                    From the Desk of the Director
                  </span>
                </div>
                <blockquote className="font-headline-sm text-headline-sm text-on-primary font-medium leading-relaxed italic">
                  &ldquo;Discipline is never a punishment; it is the ultimate
                  freedom from confusion. When a 10-year-old child wakes at 5:00
                  AM, folds their own linen, sits through focused mathematical
                  reasoning, and braves the evening obstacle course, they cease
                  being ordinary pupils. They become the vanguard of national
                  pride.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 6-YEAR JOURNEY TIMELINE */}
      <section className="w-full bg-surface-container-low py-space-xl lg:py-24">
        <div className="max-w-[1240px] mx-auto px-margin-sm lg:px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
            <div className="space-y-space-xs">
              <span className="font-label-sm text-label-sm text-on-tertiary-container tracking-widest uppercase font-bold">
                Unbroken Progression
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Our 6-Year Historic Journey
              </h2>
              <div className="w-12 h-1 bg-on-tertiary-container rounded-full"></div>
            </div>
            {/* <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              A persistent trajectory of institutional growth from an ambitious
              classroom in Sambalpur to Western Odisha&apos;s premier residential
              defence institution.
            </p> */}
          </div>
          {/* Horizontal Milestone Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative">
            {/* Milestone 1 */}
            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-headline-md text-headline-md text-on-tertiary-container">
                    Year 1
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container rounded-full font-label-sm text-label-sm text-secondary">
                    2018
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                  Humble Inception
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Inaugurated with a single classroom and 19 students in
                  Sambalpur, established solely to crack Sainik School Entrance
                  Exams.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm text-secondary flex items-center gap-1 font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">
                  check_circle
                </span>
                <span>Foundational Classrooms</span>
              </div>
            </div>
            {/* Milestone 2 */}
            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-headline-md text-headline-md text-on-tertiary-container">
                    Year 3
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container rounded-full font-label-sm text-label-sm text-secondary">
                    2020
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                  State Top Ranks
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Recorded our first landmark AISSEE All-India Top-100 ranks,
                  expanding curricula to include RMS and Navodaya Vidyalaya
                  batches.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm text-secondary flex items-center gap-1 font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">
                  military_tech
                </span>
                <span>AISSEE Top-100 Benchmark</span>
              </div>
            </div>
            {/* Milestone 3 */}
            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-headline-md text-headline-md text-on-tertiary-container">
                    Year 5
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container rounded-full font-label-sm text-label-sm text-secondary">
                    2022
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                  Residential Campus
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Commissioned the full-scale Parvati Vihar residential wing at
                  Dhankauda with obstacle drill grounds and smart test labs.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm text-secondary flex items-center gap-1 font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">
                  apartment
                </span>
                <span>Integrated Hostel Complex</span>
              </div>
            </div>
            {/* Milestone 4 */}
            <div className="bg-primary text-on-primary p-space-md rounded-2xl shadow-md flex flex-col justify-between group hover:shadow-lg transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-headline-md text-headline-md text-tertiary-fixed">
                    Year 6
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container-lowest/20 rounded-full font-label-sm text-label-sm text-on-primary">
                    Present
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-primary mb-space-xs">
                  1,200+ Trained
                </h4>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim">
                  Celebrated over 1,200 disciplined cadets trained across Western
                  Odisha, holding prime selections in Sainik School Koraput,
                  Bhubaneswar, and RMS.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm text-tertiary-fixed flex items-center gap-1 font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">stars</span>
                <span>Benchmark of Western Odisha</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CORE VALUES */}
      <section className="w-full bg-surface py-space-xl lg:py-24">
        <div className="max-w-[1240px] mx-auto px-margin-sm lg:px-margin flex flex-col gap-space-lg">
          <div className="text-center max-w-2xl mx-auto space-y-space-xs">
            <span className="font-label-sm text-label-sm text-on-tertiary-container tracking-widest uppercase font-bold">
              Uncompromising Creed
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Our Four Pillars of Character
            </h2>
            <div className="w-12 h-1 bg-on-tertiary-container rounded-full mx-auto"></div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Military education begins with internal resolve. Every student
              internalizes these four bedrock values.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Value 1 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col items-start gap-space-md hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">
                  schedule
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                  Discipline
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Regimented routines starting at 05:00 AM, punctuality in every
                  session, and an orderly hostel life that instills self-reliance.
                </p>
              </div>
            </div>
            {/* Value 2 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col items-start gap-space-md hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">
                  menu_book
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                  Dedication
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Hyper-focused, entrance-mapped curriculum crafted by seasoned
                  faculty targeting every scoring section of the exams.
                </p>
              </div>
            </div>
            {/* Value 3 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col items-start gap-space-md hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">
                  handshake
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                  Integrity
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Transparent assessment logs, candid parent communication, and
                  strict adherence to honor and moral fortitude.
                </p>
              </div>
            </div>
            {/* Value 4 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col items-start gap-space-md hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">
                  military_tech
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                  Excellence
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Top-tier faculty, exhaustive question banks, and simulated OMR
                  drills aimed at producing high-merit selections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CAMPUS & INFRASTRUCTURE BENTO */}
      <section className="w-full bg-surface-container-low py-space-xl lg:py-24">
        <div className="max-w-[1240px] mx-auto px-margin-sm lg:px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
            <div className="space-y-space-xs">
              <span className="font-label-sm text-label-sm text-on-tertiary-container tracking-widest uppercase font-bold">
                World-Class Facilities
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Campus &amp; Infrastructure
              </h2>
              <div className="w-12 h-1 bg-on-tertiary-container rounded-full"></div>
            </div>
            {/* <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              A secure, self-contained preparatory ecosystem engineered to promote
              academic focus and physical resilience.
            </p> */}
          </div>
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
            {/* Feature 1: Smart Classrooms (Large tile) */}
            <div className="md:col-span-2 lg:col-span-2 relative rounded-2xl overflow-hidden shadow-sm group min-h-[300px]">
              <Image
                src={smartClassroom}
                alt="Smart Interactive Classrooms"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent p-space-md flex flex-col justify-end">
                <span className="font-label-sm text-label-sm text-tertiary-fixed uppercase tracking-wider">
                  Acoustic &amp; Multimedia
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-primary">
                  Smart Interactive Classrooms
                </h3>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim line-clamp-2">
                  Equipped with digital projection, instant diagnostic clickers,
                  and comprehensive subject visualizers.
                </p>
              </div>
            </div>
            {/* Feature 2: Obstacle Ground */}
            <div className="md:col-span-1 lg:col-span-2 relative rounded-2xl overflow-hidden shadow-sm group min-h-[300px]">
              <Image
                src={obstacleGround}
                alt="Physical Obstacle Drill Ground"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent p-space-md flex flex-col justify-end">
                <span className="font-label-sm text-label-sm text-tertiary-fixed uppercase tracking-wider">
                  Physical Conditioning
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-primary">
                  Physical Obstacle Drill Ground
                </h3>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim line-clamp-2">
                  Built to standard cadet specifications to prepare candidates
                  for RMS and RIMC physical screening.
                </p>
              </div>
            </div>
            {/* Feature 3: Library & Study Hall */}
            <div className="md:col-span-1 lg:col-span-2 relative rounded-2xl overflow-hidden shadow-sm group min-h-[260px]">
              <Image
                src={libraryStudyHall}
                alt="Reference Library & Study Hall"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent p-space-md flex flex-col justify-end">
                <span className="font-label-sm text-label-sm text-tertiary-fixed uppercase tracking-wider">
                  Silent Self-Study
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-primary">
                  Reference Library &amp; Study Hall
                </h3>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim line-clamp-2">
                  Over 3,000 entrance reference manuals and past 15 years&apos;
                  solved papers with round-the-clock proctors.
                </p>
              </div>
            </div>
            {/* Feature 4: Safe Residential Hostel */}
            <div className="md:col-span-2 lg:col-span-2 relative rounded-2xl overflow-hidden shadow-sm group min-h-[260px]">
              <Image
                src={cadetDormitory}
                alt="Supervised Cadet Dormitories"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent p-space-md flex flex-col justify-end">
                <span className="font-label-sm text-label-sm text-tertiary-fixed uppercase tracking-wider">
                  24x7 Residential Security
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-primary">
                  Supervised Cadet Dormitories
                </h3>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim line-clamp-2">
                  Hygienic dining serving nutritious balanced diets, live CCTV
                  perimeter, and on-call medical supervision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
