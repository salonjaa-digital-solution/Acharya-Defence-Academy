"use client";

import { useState } from "react";
import Link from "next/link";

interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "classrooms" | "hostel" | "obstacle" | "ceremonies" | "library";
  categoryLabel: string;
  facilityTag: string;
  description: string;
  imgSrc: string;
  badge: string;
  badgeColorClass: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Vedic Math & OMR Speed Laboratory",
    category: "classrooms",
    categoryLabel: "Classrooms & Labs",
    facilityTag: "Academic Wing • Hall 01",
    description:
      "Acoustically insulated smart classrooms equipped with countdown OMR biometric timers and digital demonstration displays for formula-less problem solving.",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6NoalkK4cbk4wDSsGUfAVrdsj5nZPOATIauzTNrx4rp-L4Uex_oEymajn0ENpc5mlo5A1rhP4wPHyjnztdJHcyFDPCzmz33ctTU2x75e_YMRxKhRxS05e4ONb0s281Jp3TNc18-wTx3nFsfb0kpm4W59IkFnSLPVHSLQ5ljMJp5clbTOFJhq8QczFKxXSwQVPMbrlW-nMahMa1cdDZBLbYL8Eu2Fy4fvIT1dtIC1YsvIHJ4SkHuXfDw",
    badge: "Smart Lecture Hall",
    badgeColorClass: "bg-primary text-on-primary",
  },
  {
    id: "gal-2",
    title: "Dawn Cadet PT & 400m Athletics Track",
    category: "obstacle",
    categoryLabel: "Obstacle & PT Grounds",
    facilityTag: "Parade Ground • Sambalpur",
    description:
      "Where future officers build cardiovascular stamina under retired Army PT instructors before morning academic sessions commence at 06:00 AM.",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHO4Iw5Yh6xrMzsjzrzKIoyZWpfaXoiM-JOkn1qGWhpKUTglOGgHQqfA6hOicG_Msfv1Xu8emtA4LV7ZXjxqhwdg3nNrFZcFZR9X0Kd5ZXGc627s8LYtIuLLRhD7hZurrYftyF0Gh1_toGJ3xRCHoQvSJ-jmdlOjpZH0BMkwij8y-KoQInEJqCpHyWprGbttdcasx6THdV_F_ueavOd1fwl7GSwBEwJlR5kDlJqVX31mk9b8jGycpRSg",
    badge: "Military Cadence",
    badgeColorClass: "bg-secondary-container text-on-secondary",
  },
  {
    id: "gal-3",
    title: "Disciplined Residential Dormitories",
    category: "hostel",
    categoryLabel: "Hostel & Living",
    facilityTag: "Cadet Barracks • Block A & B",
    description:
      "Immaculately maintained hostel wings with individual study nooks, strict bed-making decorum, 24/7 warden supervision, and secure biometric access.",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCqskGakbYxGwOPoCPl5YqAcjpXGWWTGdQeJPgN_bby5LQe4PkS7-mcpO61IQiQnq5IC0GQqRHH4L6_mwsQUTzJ0h4oMfCF_LeB3iKHerArQetoRMslWOmzgQJWXEkZACV6gQQZi9Prj1sWUdbkdisJgShZ81GdR_wTssp5F6bb2Yu7PG5HDCeDLox9VsR0Mp65jEPEOXxbQaS8H9PBru1bDYCDe_g-ef6pTQ5xGmNefvrFiUMHTC2BQ",
    badge: "24/7 Supervised",
    badgeColorClass: "bg-secondary-fixed text-on-secondary-fixed",
  },
  {
    id: "gal-4",
    title: "SSB Mock Interview & Personality Chamber",
    category: "library",
    categoryLabel: "SSB & Library",
    facilityTag: "Officers Assessment Suite",
    description:
      "Dedicated psychological assessment center simulating Service Selection Board environments with one-on-one mirror feedback and posture calibration.",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMhYbxGdNHsJxFS9jAxfCr_RZ4aovivzF2jXOIm9uilZzk1ghI5FljJ48J3LVfRDk_C3livHKelNARd3hHsx10qPXxdnkTP8hp8TMzhzWGK3gK0h8hyWQHrfpL_N2YuUUBnXdl1s4DEkgqTDH3uu8HTQOrZ7gTFVQZX1SS_nO0p-i3FOWsOZcpF8858ddDK3SR_YuejfxnspTBdS0Q0ByrdWVcebU5_sT_XSkIPrmMlwWxl3DD1sxITQ",
    badge: "SSB Simulation",
    badgeColorClass: "bg-primary-container text-on-primary",
  },
  {
    id: "gal-5",
    title: "Annual Merit Felicitation Ceremony",
    category: "ceremonies",
    categoryLabel: "Ceremonies & Victories",
    facilityTag: "Main Auditorium • Sambalpur",
    description:
      "Proud families and mentors gather annually to honor cadets who conquered All-India Ranks and earned uniforms in Sainik School and RMS campuses.",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWfj0yM2qjygCoMT7GxNq71hWZx2P70hdcfYbVFGpFRHuibjIxNJ8ZVVffB3trG-NlD-MLBBvXZbAR7YUXE3qkTlapO2LvU-smpClZK1mMAHJD5xenBM9hDTc9NfIKxZgWvxqhLjP7u7U31IsFd5B4jbWV8BFTQIPHbYPjfuTgRPYZ-VXzKM3g-pJ2ayaVR4sdE89maiLuMrxtaWEIJ-vw8eEGQ8Vg-JmkwChytqO4s-LqYKZlHttkOw",
    badge: "Victory Roll",
    badgeColorClass: "bg-secondary-container text-on-secondary",
  },
  {
    id: "gal-6",
    title: "Central Defence Reference Library",
    category: "library",
    categoryLabel: "SSB & Library",
    facilityTag: "Knowledge Resource Wing",
    description:
      "Housing 4,500+ volumes of competitive juvenile exam archives, static GK compendiums, NCERT reference guides, and silent study cubicles.",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7fFIp49K2bFB8K-hW5Co31ssoS1wWVXkvXhxx66borlNmwpC-XF3Z6RjHpUC8hrdga1jCT0_PvfsK9yj_sGSU3EPgFgQnag07VSrMA1gSXzkBAcGDaU2dSyN4zNsU5_GFpEGaXoboDJiNQR0OGlwv_Iej9rTdLuLrYWQJk0jkWKj0bKyWSclv38hFQeF0zLd3oRxY23Hok65vop2ILwvUfn9G_ztrKqT9dRIbgsKZ3cG_TeCL87Ktgw",
    badge: "Curated Archives",
    badgeColorClass: "bg-secondary text-on-secondary",
  },
  {
    id: "gal-7",
    title: "Tactical Obstacle Course & Rope Climbing",
    category: "obstacle",
    categoryLabel: "Obstacle & PT Grounds",
    facilityTag: "Outdoor Agility Field",
    description:
      "Engineered to replicate military academy juvenile obstacle negotiation tests: 6-foot wooden walls, vertical rope climbing, balancing beams, and crawl trenches.",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSS_a0QLT_x7qSseya4ffueJeWBE6hKxK6NL2EE-lMslyz546eMkVuAdRfHw0-u_lZEqGKp_h8qt_4gXzkXO-JaIwRb1bI_v_pi64AVDh53hxaHBJrDLbu5-unKEX3J_c4lCoFSY1abvAXwlSvLjophyjfGY5Bh76-J9ckyK2SMs_U3Bd8yvFGbhPW4NJSIQFqlqWI5lyLaEKORiJ0-XsPG5Kv2z0ZF3TUXYZZWsoHIfdKI4tFGWPPDw",
    badge: "Obstacle Course",
    badgeColorClass: "bg-primary text-on-primary",
  },
  {
    id: "gal-8",
    title: "Nutritious Cadet Mess & Dining Hall",
    category: "hostel",
    categoryLabel: "Hostel & Living",
    facilityTag: "Annapurna Dining Complex",
    description:
      "Wholesome, diet-conscious vegetarian nutrition planned with medical dietitians. Pure cow milk, almonds, sprouts, and freshly cooked regional cuisine daily.",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqFOIhDuhSxhXyM11cmxSpRNNm8_0oThBdK1gzArvIP5-tkrVKg58P-6JxLGK4j5KPs0giauVbzv5J8en1OMLnuPHwvO2ywnkpmcQ_jF_F2u-rU3bZTpe4tMJ3PLEj1UiPsqTigCZxyeD8EpUhPoiltMSZfpilHS-ihh23LM_afQFSEwouyvost-wGPeITlh3fFy4d2VC3eGpS3NKhPHWmv-eBlFfYJ_fl7K4NjSMuGartip5AE3pTrg",
    badge: "Hygienic Dining",
    badgeColorClass: "bg-secondary-container text-on-secondary",
  },
  {
    id: "gal-9",
    title: "Regional Language (Odia) Learning Forum",
    category: "classrooms",
    categoryLabel: "Classrooms & Labs",
    facilityTag: "Language Laboratory",
    description:
      "Specialized vernacular instruction wing ensuring rural and semi-urban candidates from Western Odisha master grammar and comprehension seamlessly.",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAel1JQJuYTLEC65Ek0gdVtP5eYYGRPOzmfMEmxQ2zeEK8pIFmorsKPnBUNrQfScd9sDraGk7xnr-4W0uwsPqQ6WHToZJhSe_a4HeH_fNLaW_ZzIp8DmzkNTnvBQSP-YZSU6R07SS5ufSjOEpyABfWhd1I6oVeCtU-OEDjBcQEeK-3Ca9fuprGJj6FbaeUFRnw0ri35GtPZss36S9Q6rs6nVryTihA3OygZ2Vv1UEYX-D7l0Xp2kXWJCQ",
    badge: "Regional Pedagogy",
    badgeColorClass: "bg-primary-container text-on-primary",
  },
  {
    id: "gal-10",
    title: "Interactive Reasoning & Spatial Matrix Studio",
    category: "classrooms",
    categoryLabel: "Classrooms & Labs",
    facilityTag: "Aptitude Studio • Hall 03",
    description:
      "Equipped with physical 3D block models, mirror symmetry projectors, and paper-folding demonstration kits for intelligence test mastery.",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAREIMySZXRiMb-bcxjheZFKaCFCdcT1xrB4OWqNhLGHec58_ED7XtVyS0joBCSwQArR8zwOtVmbKu9sIwy_S1y7fuxbfnyyX8BS2BHcJUwmWD-IoPea775VaQinPwIw0VJW7TcB7tUn0Do2YosPjVyuScjJXGN5MsiYw4g29sBQzqc7MBvs2Ik6-db4uh9IrKavJAVt2I_G1i8EzJ_2aqPTz4tK3FejJVHzg8dPoT70V_ANilcliBJpg",
    badge: "Intelligence Lab",
    badgeColorClass: "bg-secondary text-on-secondary",
  },
  {
    id: "gal-11",
    title: "Girls Wing Dormitory & Study Center",
    category: "hostel",
    categoryLabel: "Hostel & Living",
    facilityTag: "Ahilyabai Cadet Block",
    description:
      "Private, gated residential wing with dedicated lady wardens and round-the-clock CCTV security, catering to female Sainik School and Navodaya aspirants.",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVQPC9KagNN_sYX1oAJpjTknIR_lhqyynaXbqSwoWBxEURC9WjPYjsXCvVGMFw1Z_yQ1l4Swxyynd39fZvUH6irM4xwPUxu_jvsJ7_0EzsC73cHwdaqtQw9gZM8ynCO8VR4_LaoWZfmQfebqCpY7ecNjtXsAOr9X3SMM21qKipc0o9dGviQl97g63oUr5zxBM5Mm2seApKkK1rjJnA55_gbv5t8BnYbB8hW7LHxPkUv6HyQiJDgLjF4g",
    badge: "Safe Sanctuary",
    badgeColorClass: "bg-secondary-container text-on-secondary",
  },
  {
    id: "gal-12",
    title: "National Cadet Day Ceremonial Parade",
    category: "ceremonies",
    categoryLabel: "Ceremonies & Victories",
    facilityTag: "Parade Ground Central",
    description:
      "Cadets marching with military drill precision under the tricolor flag during solemn national celebrations, instilling pride and patriot duty.",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8Pj1J0Dp1gY9GR42KG5QMR9R2-flMobtlnsLUoD0oiTNs10EzE5aO8jxCv8ZfayyULvLDDSN6gKdfmirxjppNZ0sXpRUMboYHHtIZML2zh_IFCrm44lkALHb5CmwineEvvhslFYGgGID3lOSALiCZ2Sb6T4FYZCBgNejUJuCuWm9D3gvUKOXhyGYHNzO1Dq9UVD6IgJlxCcXRQCdVdAvnaIlmMYLabRVUSwWvcnWXmvEI_Gj5eAEVHA",
    badge: "Discipline Parade",
    badgeColorClass: "bg-primary text-on-primary",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    return activeCategory === "all" || item.category === activeCategory;
  });

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Campus tour request scheduled! Our Sambalpur reception team will coordinate timing with you.");
    setIsVisitModalOpen(false);
  };

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

        <div className="relative max-w-[1280px] mx-auto px-margin py-space-lg flex flex-col justify-center flex-1">
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md lg:gap-space-lg pt-space-lg mt-space-sm max-w-5xl mx-auto">
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

      {/* 2. FILTER PILLS & ACTION BAR */}
      <section className="w-full bg-surface-container-low py-6 sticky top-16 z-30 shadow-sm backdrop-blur-md bg-surface-container-low/95">
        <div className="max-w-[1280px] mx-auto px-margin flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {[
              { label: "All Facilities (12)", value: "all" },
              { label: "Classrooms & Labs (3)", value: "classrooms" },
              { label: "Hostel & Living (3)", value: "hostel" },
              { label: "Obstacle & Grounds (2)", value: "obstacle" },
              { label: "Ceremonies & Parades (2)", value: "ceremonies" },
              { label: "SSB & Library (2)", value: "library" },
            ].map((tab) => {
              const isActive = activeCategory === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveCategory(tab.value)}
                  className={`px-4 py-2 rounded-full font-label-btn text-xs md:text-label-btn whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-primary text-on-primary shadow-sm"
                      : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsVisitModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary-container hover:bg-secondary text-on-secondary font-label-btn text-xs md:text-label-btn shadow-md transition-all cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">
              calendar_month
            </span>
            <span>Schedule Campus Visit</span>
          </button>
        </div>
      </section>

      {/* 3. BENTO PHOTO GRID */}
      <section className="w-full bg-surface py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-surface-variant/40"
                onClick={() => setSelectedImage(item)}
              >
                <div>
                  {/* Photo Frame with Saffron Accent Arch Offset */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-primary">
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div
                      className={`absolute top-3 right-3 px-3 py-1 rounded-full font-caption text-caption font-bold shadow-md ${item.badgeColorClass}`}
                    >
                      {item.badge}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-on-primary">
                      <span className="font-caption text-caption bg-primary/70 backdrop-blur-sm px-2.5 py-1 rounded-md text-primary-fixed-dim">
                        {item.facilityTag}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-surface-container-lowest/20 backdrop-blur-md flex items-center justify-center group-hover:bg-secondary-container transition-colors">
                        <span className="material-symbols-outlined text-[18px] text-white">
                          zoom_in
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-title-lg text-title-lg text-primary font-bold group-hover:text-secondary-container transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <div className="pt-3 border-t border-surface-variant/30 flex items-center justify-between text-caption font-caption text-outline">
                    <span>{item.categoryLabel}</span>
                    <span className="text-secondary font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                      <span>View Detail</span>
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAMPUS TOUR CTA BAND */}
      <section className="relative bg-gradient-to-r from-primary via-primary-container to-primary text-on-primary py-16 px-margin overflow-hidden">
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-secondary-container/40 rounded-t-full blur-3xl pointer-events-none"></div>
        <div className="relative max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-secondary-fixed/20 text-secondary-fixed-dim text-caption font-caption uppercase tracking-wider font-bold mb-3 inline-block">
              Open Campus Assessments 2027–28
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tight text-on-primary">
              Experience Western Odisha&apos;s premier defence academy in person.
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container mt-2">
              Parents are welcome to inspect hostel amenities, observe dawn PT sessions, and sit for a free cadet aptitude assessment.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 justify-center shrink-0">
            <button
              type="button"
              onClick={() => setIsVisitModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-secondary-container hover:bg-secondary text-on-secondary font-label-btn text-label-btn shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
            >
              Book In-Person Tour
            </button>
            <a
              href="tel:9149771961"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary font-label-btn text-label-btn backdrop-blur-md transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Call Campus Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-surface-container-lowest rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-primary/70 text-on-primary flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[20px]">
                close
              </span>
            </button>

            <div className="relative aspect-video w-full bg-primary overflow-hidden">
              <img
                src={selectedImage.imgSrc}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full font-caption text-caption font-bold shadow-md ${selectedImage.badgeColorClass}`}
                >
                  {selectedImage.badge}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2 text-secondary font-caption text-caption font-semibold">
                <span className="material-symbols-outlined text-[16px]">
                  location_on
                </span>
                <span>{selectedImage.facilityTag}</span>
                <span className="text-outline">•</span>
                <span>{selectedImage.categoryLabel}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                {selectedImage.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                {selectedImage.description}
              </p>
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-surface-variant/30">
                <span className="font-caption text-caption text-outline">
                  Acharya Defence Academy (ADAS), Sambalpur
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="px-5 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-label-btn text-xs transition-colors"
                >
                  Close View
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SCHEDULE CAMPUS VISIT MODAL */}
      {isVisitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-surface-container-lowest rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-1 rounded-full cursor-pointer"
              onClick={() => setIsVisitModalOpen(false)}
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[24px]">
                close
              </span>
            </button>
            <div className="flex items-center gap-2 mb-2 text-secondary-container font-label-eyebrow text-label-eyebrow uppercase">
              <span className="material-symbols-outlined text-[16px]">
                calendar_month
              </span>
              <span>Campus Reception</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
              Schedule In-Person Campus Visit
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">
              Visit our Parvati Vihar, Dhankauda campus. Tour hostels, classrooms, and meet our senior faculty.
            </p>

            <form className="space-y-3" onSubmit={handleVisitSubmit}>
              <div>
                <label className="block font-caption text-caption text-on-surface-variant mb-1 font-semibold">
                  Parent / Guardian Name
                </label>
                <input
                  className="w-full px-3 py-2 rounded-lg bg-surface-container text-on-surface text-body-sm outline-none"
                  placeholder="e.g. Sri Ramesh Dash"
                  required
                  type="text"
                />
              </div>

              <div>
                <label className="block font-caption text-caption text-on-surface-variant mb-1 font-semibold">
                  Contact Phone / WhatsApp
                </label>
                <input
                  className="w-full px-3 py-2 rounded-lg bg-surface-container text-on-surface text-body-sm outline-none"
                  placeholder="+91 91497 71961"
                  required
                  type="tel"
                />
              </div>

              <div>
                <label className="block font-caption text-caption text-on-surface-variant mb-1 font-semibold">
                  Student&apos;s Current Class
                </label>
                <select className="w-full px-3 py-2 rounded-lg bg-surface-container text-on-surface text-body-sm outline-none">
                  <option>Class 3 or 4 (Foundation Cadets)</option>
                  <option>Class 5 (AISSEE / RMS Class 6 Target)</option>
                  <option>Class 7 or 8 (Class 9 Entrance Target)</option>
                </select>
              </div>

              <div>
                <label className="block font-caption text-caption text-on-surface-variant mb-1 font-semibold">
                  Preferred Visit Day
                </label>
                <div className="flex gap-4 pt-1 font-body-sm text-body-sm text-on-surface">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      defaultChecked
                      className="accent-primary"
                      name="day"
                      type="radio"
                    />{" "}
                    Saturday / Sunday
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      className="accent-primary"
                      name="day"
                      type="radio"
                    />{" "}
                    Weekday Morning
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <button
                  className="w-full py-3 rounded-full bg-secondary-container hover:bg-secondary text-on-secondary font-label-btn text-label-btn transition-colors cursor-pointer"
                  type="submit"
                >
                  Confirm Campus Tour Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
