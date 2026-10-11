import type { Metadata } from "next";
import Link from "next/link";
import CampusVisitActions from "@/components/CampusVisitActions";

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
            <div className="lg:col-span-6 relative flex flex-col gap-space-md">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container">
                <img
                  className="w-full h-[380px] object-cover"
                  data-alt="Young Indian students in smart military school uniforms standing disciplined at morning assembly prayer with national pride in Sambalpur Odisha against clean academy building, warm golden morning sun, crisp editorial lighting"
                  alt="Cadets morning assembly at Parvati Vihar Campus"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwNo3IZy_h_VIAc5XHar06gRHFBRgEW_lyGz5aauFxrI93NPWH7odhFqa_fXBZ98hGTakScw3SBK_FHDXUZo7Q4_jS5ZeqDzaWUSgFZu5bq0sjEjTs6Fxi4l1qA2WpgJsHJKfCaVqLIm6fy3C4wCkCXi-5hJF-TTNSDJ3i1p17mKld-iB11MUNCfvlD1qucQ_He9NQzlrCv4z2CNxQLVR2fBorZOJyIhwFZUJAgA"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-primary-container/90 backdrop-blur-md p-space-sm rounded-xl text-on-primary flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">
                      verified
                    </span>
                    <div>
                      <p className="font-label-md text-label-md leading-tight text-on-primary">
                        Parvati Vihar Campus
                      </p>
                      <p className="font-body-sm text-body-sm text-primary-fixed-dim">
                        Dhankauda, Sambalpur
                      </p>
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm px-2.5 py-1 bg-surface-container-lowest/15 rounded-full text-on-primary">
                    Estd. 2018
                  </span>
                </div>
              </div>
              {/* Overlapping Secondary Asset */}
              <div className="grid grid-cols-2 gap-space-sm -mt-6 ml-4">
                <div className="rounded-xl overflow-hidden shadow-lg bg-surface-container-high">
                  <img
                    className="w-full h-36 object-cover"
                    data-alt="Indian youth cadets undergoing rigorous physical obstacle drill training on modern obstacle course field, coach observing in sports uniform, sunny afternoon in Odisha"
                    alt="Cadets physical drill training"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn7HHn1lpFvSTVk3ky74CdApIjcNV5a4TOYeqrVmD71z_ppGNatIOYr9loFQaloKoK-5_Df3-uorCvlhC8seb5Amnpy6ZFzTmQBjWBwwsykR_t-S8fXIHJwW44sBMBL7S1W5s6Zgb6Cg4kKk1Q0-SZnFcCpeAr1ySFuUo8S83SuEUNMyfTZf1E7Ae1HufMrAbdNYrsT1af-hAxK-XYH-Pqaa-WvYC-vvmOkJeZ0A"
                  />
                </div>
                <div className="bg-primary p-space-md rounded-xl text-on-primary shadow-lg flex flex-col justify-center">
                  <div className="flex items-center text-tertiary-fixed gap-1 mb-1">
                    <span className="material-symbols-outlined text-[18px]">star</span>
                    <span className="material-symbols-outlined text-[18px]">star</span>
                    <span className="material-symbols-outlined text-[18px]">star</span>
                    <span className="material-symbols-outlined text-[18px]">star</span>
                    <span className="material-symbols-outlined text-[18px]">star</span>
                  </div>
                  <p className="font-headline-sm text-headline-sm leading-tight text-on-primary">
                    Western Odisha&apos;s
                  </p>
                  <p className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">
                    Foremost Defence Academy
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm w-full pt-space-xs">
                <div className="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">
                    school
                  </span>
                  <div>
                    <p className="font-label-md text-label-md text-primary">
                      Uncompromising Pedagogy
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Daily OMR drills and micro-concept testing.
                    </p>
                  </div>
                </div>
                <div className="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">
                    shield
                  </span>
                  <div>
                    <p className="font-label-md text-label-md text-primary">
                      Safe Residential Campus
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Round-the-clock wardens, CCTV, and regimented hours.
                    </p>
                  </div>
                </div>
              </div>
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
            <div className="relative z-10">
              {/* Message & Philosophy */}
              <div className="flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-space-xs text-tertiary-fixed">
                  <span className="material-symbols-outlined text-[36px]">
                    format_quote
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim">
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
                {/*                 <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
                  Every parent who leaves their child at our Dhankauda boarding
                  house places sacred faith in us. We honor that faith by ensuring
                  no distraction enters their life, every mistake is treated as a
                  coaching diagnostic, and each cadet is nurtured into an upright
                  scholar ready to ace national boards with distinction.
                </p> */}
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-primary tracking-tight">
                    Himanshu Sekhar Acharya
                  </h3>
                  <p className="font-label-md text-label-md text-tertiary-fixed">
                    Founder &amp; Academic Director
                  </p>
                  <p className="font-body-sm text-body-sm text-primary-fixed-dim mt-1">
                    Acharya Defence Academy, Sambalpur
                  </p>
                </div>
                <div className="flex items-center gap-space-md pt-space-xs">
                  <div className="w-10 h-0.5 bg-tertiary-fixed"></div>
                  <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest">
                    Duty &bull; Honor &bull; Scholarship
                  </span>
                </div>
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
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Modern Indian preparatory smart classroom with digital interactive board, attentive young students sitting at desks in neat uniform uniforms, teacher instructing mathematics in Sambalpur academy"
                alt="Smart interactive classroom"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp2uQcmK5d5NQzgU7jREcWxMvGsZCzF5msq3etm7OZX9QeoyJqhaamTRdpaPyJQWixoCAkfb_WiLE6Z9-zsxmydnqXP_KjCKamLu0RrxD-1rfY8e1MnnE2CB4SgIwXLRzZ0aywoiOt4GUXxMt03_EdOijFjGsEvPC_Yf5HSRcViIslXrusmj-VRyFU8onu40rpz9TwK-fkpJBBmqOUpfOir-D8m6SufIeNC23yxA"
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
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Outdoor military obstacle drill ground with rope climbing, hurdles, running tracks and morning mist with young cadets training under guidance of retired drill master in Sambalpur"
                alt="Physical obstacle drill ground"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2TN9h7QEVmvXlKLVu99gy0yHjxoeqhvk4Z79Frnv4L83pNZ0k4MF6xVH03751wGz2s-pnWqFos79uwFcgyYm5Cq9rriOXSHVDxGjbY5EIDfW2JZZOQhnLHnyZgnX48cbmkJLXXeSWYZt5JerbauGzDn1wJRUexkqO62S0Dvb_1sL4hXmL7SYTDWUFJM-RljpzXHRfxnphdcQHeGR1uABzNFxQxRn1T1VdFa7_Jw"
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
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Quiet disciplined academy study hall and library with wooden desks, bookshelves filled with defence entrance prep books, cadets reading peacefully in warm lighting"
                alt="Reference library and study hall"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnCsEqavfi3fmLow617UvyPARMYYg2dZAKft5Ije6WfK1JBaOwG261OYFTfQvfPLVM2sVG7XoI5XsPxQ8P91twTNl3YS4b3SHTqIvBnOKV1XNrH8-aIeDDNM2opDlQtuJllJKAV5QjDXi6AGQEuVqRnuonWEJpXaC5XuIAqNfDd6rMlS-OH-LOf7a84wrE1NVrdI62w2dOwQfFDUoL8MNhqqOuhuZ23z0_Ld1G4A"
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
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Immaculate clean hostel dormitory room with neatly made military style bunk beds, cadet study desks, lockers, bright clean windows, residential boarding school interior in Odisha"
                alt="Supervised cadet dormitories"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIxJE9tU4O1n7_-vU7q7Q9BpnUguR210gns6IdJWrTI5J1bC6HymxfO3dIWasd00tH97tglfiyEtJnEq5szVFzupOgO5miUJGlRbcLjlbPmLIa_LU44suDw4jNAqQCRrW2-4b8CfvZwNllmbgUf-jIkVDVDF35OeeuxarMKO67HU_xCqSPTFBdxQjDsvfxPfu2mT3EDffXFRbM3bwgsdoLzMGQYMhIC1hsvd1xZw"
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

      {/* 8. CAMPUS VISIT CTA BAND */}
      <section className="w-full bg-primary-container text-on-primary py-space-xl lg:py-20 relative overflow-hidden">
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-surface-container-highest/10 blur-3xl pointer-events-none"></div>
        <div className="max-w-[1240px] mx-auto px-margin-sm lg:px-margin relative z-10">
          <div className="bg-surface-container-lowest/5 rounded-3xl p-space-lg lg:p-space-xl backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-gutter">
            <div className="space-y-space-sm max-w-2xl">
              <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-tertiary-container text-tertiary-fixed">
                <span className="material-symbols-outlined text-[18px]">
                  door_front
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider">
                  Open Door Policy for Parents
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
                Visit Our Sambalpur Campus
              </h2>
              <p className="font-body-lg text-body-lg text-primary-fixed-dim">
                Experience the disciplined environment firsthand. Walk through our
                classrooms, meet faculty mentors, and observe our daily cadet
                drill.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md text-primary-fixed-dim font-body-sm text-body-sm pt-space-xs">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">
                    location_on
                  </span>
                  <span>
                    Near City Railway Station, Parvati Vihar, Dhankauda,
                    Sambalpur, Odisha
                  </span>
                </div>
              </div>
            </div>
            <CampusVisitActions />
          </div>
        </div>
      </section>
    </div>
  );
}
