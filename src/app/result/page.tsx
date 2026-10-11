"use client";

import { useState } from "react";
import Link from "next/link";

interface Cadet {
  id: string;
  name: string;
  exam: string;
  year: string;
  badge: string;
  badgeColorClass: string;
  scoreBadge: string;
  school: string;
  batchInfo: string;
  marksInfo: string;
  imgSrc: string;
  imgAlt: string;
  dataAlt: string;
}

const CADETS: Cadet[] = [
  {
    id: "cadet-1",
    name: "Ananya Patel",
    exam: "aissee",
    year: "2026",
    badge: "AIR 14 (Girls)",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "Score: 279 / 300",
    school: "Sainik School Sambalpur",
    batchInfo: "Batch 2026 • AISSEE Class VI",
    marksInfo: "Maths: 146/150 | Lang: 48/50",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqFOIhDuhSxhXyM11cmxSpRNNm8_0oThBdK1gzArvIP5-tkrVKg58P-6JxLGK4j5KPs0giauVbzv5J8en1OMLnuPHwvO2ywnkpmcQ_jF_F2u-rU3bZTpe4tMJ3PLEj1UiPsqTigCZxyeD8EpUhPoiltMSZfpilHS-ihh23LM_afQFSEwouyvost-wGPeITlh3fFy4d2VC3eGpS3NKhPHWmv-eBlFfYJ_fl7K4NjSMuGartip5AE3pTrg",
    imgAlt: "Ananya Patel",
    dataAlt:
      "Young Indian schoolgirl cadet with hair neatly braided wearing smart formal defence academy uniform looking sharp and proud, clear natural lighting, soft navy and cream backdrop",
  },
  {
    id: "cadet-2",
    name: "Debabrata Nayak",
    exam: "rms",
    year: "2026",
    badge: "State Top Rank",
    badgeColorClass: "bg-primary text-on-primary",
    scoreBadge: "RMS  Qualified",
    school: "RMS Chail (Himachal)",
    batchInfo: "Batch 2026 • RMS ",
    marksInfo: "Interview: Outstanding Grade",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8Vh71nQr0r2PCPmztzpxhF1nFquz1vFB-t5zyRf_4pQ1oQvr6G660q-TVAotQr99d-0lQatCdkuECp39kzC8C3lgWFAewhtoO4ZpwgaujJjYCmnNpQw6KqvpGzcJ5boyL1c8WUECFIPQjM9WQPjpMo16wcl-6wXzl7P3lfTzeqFzRCbX-i_lYAs8zJItM5LnLceQe3W2ZjF5R19K7E53LarSIh8UOOuFEyGLDwuGXkGVizluXy0CT4w",
    imgAlt: "Debabrata Nayak",
    dataAlt:
      "Disciplined young Indian boy candidate in formal white collared shirt with smart posture and disciplined smile, studio lighting with warm saffron accents and deep blue background",
  },
  {
    id: "cadet-3",
    name: "Priyanshu Pradhan",
    exam: "jnvst",
    year: "2025",
    badge: "100% Scholarship",
    badgeColorClass: "bg-secondary-fixed text-on-secondary-fixed",
    scoreBadge: "JNVST Rank 1 Block",
    school: "JNV Gosala, Sambalpur",
    batchInfo: "Batch 2025 • Navodaya Selection",
    marksInfo: "Mental Ability: 50/50",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCqskGakbYxGwOPoCPl5YqAcjpXGWWTGdQeJPgN_bby5LQe4PkS7-mcpO61IQiQnq5IC0GQqRHH4L6_mwsQUTzJ0h4oMfCF_LeB3iKHerArQetoRMslWOmzgQJWXEkZACV6gQQZi9Prj1sWUdbkdisJgShZ81GdR_wTssp5F6bb2Yu7PG5HDCeDLox9VsR0Mp65jEPEOXxbQaS8H9PBru1bDYCDe_g-ef6pTQ5xGmNefvrFiUMHTC2BQ",
    imgAlt: "Priyanshu Pradhan",
    dataAlt:
      "Focused Indian rural student boy holding study books with bright confident smile, outdoor campus sunlight, warm earthen colors and institutional crest backdrop",
  },
  {
    id: "cadet-4",
    name: "Subhashree Barik",
    exam: "aissee",
    year: "2025",
    badge: "State Rank 5",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "Score: 275 / 300",
    school: "SS Bhubaneswar",
    batchInfo: "Batch 2025 • AISSEE Class VI",
    marksInfo: "Intelligence Test: 48/50",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBq4xikn6gEaBb_6Qy-cgDjjPGRcQsfEJgWO7nAuTBagJQuPGQ44xjv9blSdlDObpnQVOIrAQu8ClsjNb8-eX_Neeigmoa5hQvIoLV5KKXm29-JOQanDKRIPmITcitQbG7R0QdrtLjhLAxLZFJozs1s4aIo3KErRmXvidCLrj7vCU9diHJOsHA5e7Bhr7YkpKLTCmPc6_SENMyDamw5bdvtWoqm3OUh6anxTl4i-WHI4PQRZsbHRLnawA",
    imgAlt: "Subhashree Barik",
    dataAlt:
      "Smiling young Indian girl student wearing formal blue academy blazer, medal pinned to chest, bright inspiring gaze, soft studio gradient background",
  },
  {
    id: "cadet-5",
    name: "Rohan Pradhan",
    exam: "aissee",
    year: "2025",
    badge: "Class IX Entry",
    badgeColorClass: "bg-primary text-on-primary",
    scoreBadge: "Score: 362 / 400",
    school: "SS Korukonda (AP)",
    batchInfo: "Batch 2025 • AISSEE Class IX",
    marksInfo: "Maths: 184/200 | Science: 48/50",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8Pj1J0Dp1gY9GR42KG5QMR9R2-flMobtlnsLUoD0oiTNs10EzE5aO8jxCv8ZfayyULvLDDSN6gKdfmirxjppNZ0sXpRUMboYHHtIZML2zh_IFCrm44lkALHb5CmwineEvvhslFYGgGID3lOSALiCZ2Sb6T4FYZCBgNejUJuCuWm9D3gvUKOXhyGYHNzO1Dq9UVD6IgJlxCcXRQCdVdAvnaIlmMYLabRVUSwWvcnWXmvEI_Gj5eAEVHA",
    imgAlt: "Rohan Pradhan",
    dataAlt:
      "Teenage Indian boy cadet in crisp dress shirt with gold laurel badge, standing at attention, dignified look, deep blue and orange soft rim lighting",
  },
  {
    id: "cadet-6",
    name: "Swikriti Sahu",
    exam: "aissee",
    year: "2024",
    badge: "Odisha Girls Rank 2",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "Score: 271 / 300",
    school: "Sainik School Sambalpur",
    batchInfo: "Batch 2024 • AISSEE Class VI",
    marksInfo: "GK: 46/50 | Reasoning: 50/50",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVQPC9KagNN_sYX1oAJpjTknIR_lhqyynaXbqSwoWBxEURC9WjPYjsXCvVGMFw1Z_yQ1l4Swxyynd39fZvUH6irM4xwPUxu_jvsJ7_0EzsC73cHwdaqtQw9gZM8ynCO8VR4_LaoWZfmQfebqCpY7ecNjtXsAOr9X3SMM21qKipc0o9dGviQl97g63oUr5zxBM5Mm2seApKkK1rjJnA55_gbv5t8BnYbB8hW7LHxPkUv6HyQiJDgLjF4g",
    imgAlt: "Swikriti Sahu",
    dataAlt:
      "Young Indian female student wearing traditional tilak and academy scarf, confident determination, softly lit clean background",
  },
  {
    id: "cadet-7",
    name: "Ashutosh Meher",
    exam: "rms",
    year: "2024",
    badge: "RMS Selected",
    badgeColorClass: "bg-primary text-on-primary",
    scoreBadge: "Class VI Entry",
    school: "RMS Belgaum (Karnataka)",
    batchInfo: "Batch 2024 • RMS ",
    marksInfo: "Maths: 49/50 | Medical: Fit",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyd1bA1AqTchBf52ajPDUTZaWYfBQqKkhi6p3hN8TM74qMA9cAml1FKLtqZbu6ZwMtq3cAgaAsb5grJVze9gvzK1Yj75wCK2XP7d5hzhluCnZTqshIdz8IyTeG_2IY4U0tt4dvCUuBCmyTHczw94xMc27vXV5bpX5G5zsB_TYFC1wP6l4leNKq6faa7gdh97_StAihudu8QsskUNrI4YxCWW3_FS7NxrYWeYDVb0NV21ihvZYxNx7O1A",
    imgAlt: "Ashutosh Meher",
    dataAlt:
      "Young energetic Indian boy in polished cadet shirt looking straight into camera with quiet discipline and pride, warm glow illumination",
  },
  {
    id: "cadet-8",
    name: "Tanmay Hota",
    exam: "rimc",
    year: "2024",
    badge: "Odisha Quota",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "RIMC Written Qualifier",
    school: "RIMC  (Interview)",
    batchInfo: "Batch 2024 • RIMC Entrance",
    marksInfo: "English: 88/125 | Maths: 182/200",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAT3vHt8jbuOwk4GFvlMUuBDNzvFlBurJh5Tb_WJbOqNO26HGRbC_BKLAWpYAsWBez0_si9LSdO9zOtT5g7Ly47NGy1NL_geNVNtweGtF3ZRf1Z3k3dunMlOpcuknvo3H0yH-BP13b2Lk5ESbFTeBIy_A3j5ImtP69XSyDCrBVplZhxDkcCcrBtyJ4kWu2FkPFHEMUgmWDON0jEePJoR_kvCVa9HxeoDHu6pSHig3EdMMwq-p6VAZ0fdg",
    imgAlt: "Tanmay Hota",
    dataAlt:
      "Smart intellectual Indian boy student wearing crisp blazer with medal, proud posture, soft dramatic lighting with subtle Indian flag colors in deep background",
  },
];

const ADDITIONAL_CADETS: Cadet[] = [
  {
    id: "cadet-9",
    name: "Siddharth Mahapatra",
    exam: "aissee",
    year: "2026",
    badge: "State Rank 3",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "Score: 282 / 300",
    school: "Sainik School Sambalpur",
    batchInfo: "Batch 2026 • AISSEE Class VI",
    marksInfo: "Maths: 148/150 | GK: 48/50",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8Vh71nQr0r2PCPmztzpxhF1nFquz1vFB-t5zyRf_4pQ1oQvr6G660q-TVAotQr99d-0lQatCdkuECp39kzC8C3lgWFAewhtoO4ZpwgaujJjYCmnNpQw6KqvpGzcJ5boyL1c8WUECFIPQjM9WQPjpMo16wcl-6wXzl7P3lfTzeqFzRCbX-i_lYAs8zJItM5LnLceQe3W2ZjF5R19K7E53LarSIh8UOOuFEyGLDwuGXkGVizluXy0CT4w",
    imgAlt: "Siddharth Mahapatra",
    dataAlt: "Young Indian cadet boy with sharp posture and confident smile in uniform",
  },
  {
    id: "cadet-10",
    name: "Lipsa Rani Sahu",
    exam: "aissee",
    year: "2025",
    badge: "AIR 22 (Girls)",
    badgeColorClass: "bg-primary text-on-primary",
    scoreBadge: "Score: 274 / 300",
    school: "Sainik School Bhubaneswar",
    batchInfo: "Batch 2025 • AISSEE Class VI",
    marksInfo: "Reasoning: 50/50 | Lang: 46/50",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVQPC9KagNN_sYX1oAJpjTknIR_lhqyynaXbqSwoWBxEURC9WjPYjsXCvVGMFw1Z_yQ1l4Swxyynd39fZvUH6irM4xwPUxu_jvsJ7_0EzsC73cHwdaqtQw9gZM8ynCO8VR4_LaoWZfmQfebqCpY7ecNjtXsAOr9X3SMM21qKipc0o9dGviQl97g63oUr5zxBM5Mm2seApKkK1rjJnA55_gbv5t8BnYbB8hW7LHxPkUv6HyQiJDgLjF4g",
    imgAlt: "Lipsa Rani Sahu",
    dataAlt: "Young Indian schoolgirl cadet with medal",
  },
  {
    id: "cadet-11",
    name: "Aditya Narayan Bhoi",
    exam: "rms",
    year: "2025",
    badge: "RMS Selected",
    badgeColorClass: "bg-secondary-fixed text-on-secondary-fixed",
    scoreBadge: "RMS Bengaluru Allocated",
    school: "RMS Bengaluru (Karnataka)",
    batchInfo: "Batch 2025 • RMS ",
    marksInfo: "Maths: 48/50 | Intelligence: 48/50",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyd1bA1AqTchBf52ajPDUTZaWYfBQqKkhi6p3hN8TM74qMA9cAml1FKLtqZbu6ZwMtq3cAgaAsb5grJVze9gvzK1Yj75wCK2XP7d5hzhluCnZTqshIdz8IyTeG_2IY4U0tt4dvCUuBCmyTHczw94xMc27vXV5bpX5G5zsB_TYFC1wP6l4leNKq6faa7gdh97_StAihudu8QsskUNrI4YxCWW3_FS7NxrYWeYDVb0NV21ihvZYxNx7O1A",
    imgAlt: "Aditya Narayan Bhoi",
    dataAlt: "Young boy cadet candidate smiling confidently",
  },
  {
    id: "cadet-12",
    name: "Biswajit Panda",
    exam: "jnvst",
    year: "2024",
    badge: "JNV Merit Selected",
    badgeColorClass: "bg-primary text-on-primary",
    scoreBadge: "Rank 1 Block Jharsuguda",
    school: "JNV Gosala, Sambalpur",
    batchInfo: "Batch 2024 • Navodaya Selection",
    marksInfo: "Mental Ability: 49/50",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCqskGakbYxGwOPoCPl5YqAcjpXGWWTGdQeJPgN_bby5LQe4PkS7-mcpO61IQiQnq5IC0GQqRHH4L6_mwsQUTzJ0h4oMfCF_LeB3iKHerArQetoRMslWOmzgQJWXEkZACV6gQQZi9Prj1sWUdbkdisJgShZ81GdR_wTssp5F6bb2Yu7PG5HDCeDLox9VsR0Mp65jEPEOXxbQaS8H9PBru1bDYCDe_g-ef6pTQ5xGmNefvrFiUMHTC2BQ",
    imgAlt: "Biswajit Panda",
    dataAlt: "Cadet student with warm smile",
  },
];

export default function ResultPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentYear, setCurrentYear] = useState<string>("all");
  const [currentExam, setCurrentExam] = useState<string>("all");
  const [isLoadedMore, setIsLoadedMore] = useState(false);

  const allCadets = isLoadedMore ? [...CADETS, ...ADDITIONAL_CADETS] : CADETS;

  const filteredCadets = allCadets.filter((cadet) => {
    const matchYear = currentYear === "all" || cadet.year === currentYear;
    const matchExam = currentExam === "all" || cadet.exam === currentExam;

    const term = searchTerm.toLowerCase().trim();
    const cadetFullText = `${cadet.name} ${cadet.school} ${cadet.batchInfo} ${cadet.marksInfo} ${cadet.badge} ${cadet.scoreBadge}`.toLowerCase();
    const matchSearch = !term || cadetFullText.includes(term);

    return matchYear && matchExam && matchSearch;
  });

  const handleLoadMore = () => {
    setIsLoadedMore(true);
  };

  const handleGazetteDownload = () => {
    alert("Downloading ADAS Official 2024-2026 Merit Gazette (PDF)...");
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION: Monumental Institutional Arch & Victory Showcase */}
      <section className="relative bg-gradient-to-b from-primary via-primary-container to-primary text-on-primary overflow-hidden pt-12 pb-24 md:pb-32 px-margin min-h-[calc(100vh-4rem)]">
        {/* Architectural Subtle Ray Patterns & Giant Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-5 overflow-hidden">
          <span className="font-display text-[140px] md:text-[280px] font-extrabold tracking-widest text-on-primary uppercase">
            VICTORY
          </span>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-secondary-container/20 via-transparent to-transparent blur-3xl pointer-events-none"></div>
        <div className="relative max-w-[1280px] mx-auto flex flex-col items-center text-center">
          {/* Eyebrow Pill */}
          <div className="flex justify-center mb-space-lg">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed/15 text-secondary-container font-label-eyebrow text-label-eyebrow tracking-widest uppercase shadow-sm">
              <span className="material-symbols-outlined text-[15px] text-secondary-container">
                military_tech
              </span>
              <span>★ ODISHA&apos;S PROVEN TRACK RECORD ★</span>
              <span className="material-symbols-outlined text-[15px] text-secondary-container">
                military_tech
              </span>
            </div>
          </div>

          {/* Main Heading with Editorial Saffron Accent Wave */}
          <h1 className="font-display text-headline-lg-mobile md:text-display text-on-primary max-w-4xl tracking-tight leading-tight mb-6">
            Results that{" "}
            <span className="text-secondary-container relative inline-block">
              speak
              <svg
                className="absolute -bottom-2 left-0 w-full h-3"
                preserveAspectRatio="none"
                viewBox="0 0 100 12"
              >
                <path
                  d="M0 9 Q 50 1 100 9"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="4"
                ></path>
              </svg>
            </span>{" "}
            for themselves
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mb-12">
            Celebrating western Odisha’s brightest cadets who cleared AISSEE, RMS
            , and RIMC to earn their uniforms at India’s premier defence
            academies.
          </p>

          {/* Glassmorphic Stats Trio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {/* Card 1 */}
            <div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  workspace_premium
                </span>
              </div>
              <span className="font-display text-headline-lg md:text-headline-lg text-on-primary tracking-tight">
                142+
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                Cadets Selected
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Total Selections in AISSEE &amp; RMS
              </span>
            </div>

            {/* Card 2 */}
            <div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  military_tech
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

            {/* Card 3 */}
            <div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center text-center group hover:bg-surface-container-lowest/15 transition-all">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  shield_person
                </span>
              </div>
              <span className="font-display text-headline-lg md:text-headline-lg text-on-primary tracking-tight">
                Top 10
              </span>
              <span className="font-title-md text-title-md text-secondary-fixed mt-1">
                State Merit Ranks
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                Statewide AISSEE 2024–2026 Batches
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING SEARCH & CATEGORY FILTER BAR */}
      <div className="relative -mt-8 z-30 px-margin w-full max-w-[1280px] mx-auto">
        <div className="bg-surface-container-lowest shadow-xl rounded-2xl p-4 md:p-6 flex flex-col gap-5">
          {/* Search & Main Selectors */}
          <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
            <div className="relative flex-1 w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[22px]">
                search
              </span>
              <input
                className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low rounded-xl text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest transition-all"
                id="cadetSearchInput"
                placeholder="Search cadet by name, roll no, or allocated school..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Batch Year Selector Buttons */}
            <div
              className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none"
              id="yearFilterGroup"
            >
              {[
                { label: "All Years", value: "all" },
                { label: "2026 Batch (New)", value: "2026" },
                { label: "2025 Batch", value: "2025" },
                { label: "2024 Batch", value: "2024" },
              ].map((year) => {
                const isActive = currentYear === year.value;
                return (
                  <button
                    key={year.value}
                    type="button"
                    onClick={() => setCurrentYear(year.value)}
                    className={`px-4 py-2.5 rounded-full font-label-btn text-label-btn whitespace-nowrap transition-all cursor-pointer ${isActive
                      ? "bg-primary text-on-primary shadow-sm"
                      : "bg-surface-container-high text-on-surface-variant hover:text-on-surface"
                      }`}
                    data-year={year.value}
                  >
                    {year.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Exam Sub-Filter Pills */}
          <div
            className="flex items-center gap-2 overflow-x-auto pt-2 scrollbar-none"
            id="examFilterGroup"
          >
            <span className="text-caption font-caption text-outline uppercase tracking-wider mr-2 hidden sm:inline">
              Exams:
            </span>
            {[
              { label: "All Exams", value: "all" },
              { label: "AISSEE (Sainik School)", value: "aissee" },
              { label: "RMS ", value: "rms" },
              { label: "RIMC ", value: "rimc" },
              { label: "Navodaya (JNVST)", value: "jnvst" },
            ].map((exam) => {
              const isActive = currentExam === exam.value;
              return (
                <button
                  key={exam.value}
                  type="button"
                  onClick={() => setCurrentExam(exam.value)}
                  className={`px-3.5 py-1.5 rounded-full text-caption font-caption font-semibold transition-all cursor-pointer ${isActive
                    ? "bg-secondary-container text-on-secondary shadow-sm"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                    }`}
                  data-exam={exam.value}
                >
                  {exam.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 3: TOPPER OF THE YEAR (FLAGSHIP SPOTLIGHT CARD) */}
      <section className="max-w-[1280px] mx-auto px-margin py-16 w-full">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-1 bg-secondary-container rounded-full"></span>
          <h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-wide">
            Spotlight of the Year
          </h2>
        </div>
        <div className="relative bg-surface-container-lowest rounded-3xl shadow-xl overflow-hidden p-6 md:p-10">
          {/* Glow ambient back drop */}
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Architectural Arch Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                {/* Offset decorative saffron arch contour */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-[120px] rounded-b-2xl bg-secondary-container/20 pointer-events-none transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
                {/* Arch Card Body */}
                <div className="relative w-72 md:w-80 h-[430px] rounded-t-[120px] rounded-b-2xl bg-gradient-to-b from-primary-container to-primary overflow-hidden shadow-2xl flex flex-col justify-end p-4">
                  {/* Radiant sunrise glow in arch head */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-secondary-container/30 rounded-full blur-2xl"></div>
                  <img
                    alt="Cadet Soumya Ranjan Dash"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    data-alt="Proud young Indian cadet boy in crisp smart khaki military academy uniform with gold medal around neck, chest pins and epaulets, looking confident with bright radiant sun flare background, studio portrait with deep navy and saffron tones"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWfj0yM2qjygCoMT7GxNq71hWZx2P70hdcfYbVFGpFRHuibjIxNJ8ZVVffB3trG-NlD-MLBBvXZbAR7YUXE3qkTlapO2LvU-smpClZK1mMAHJD5xenBM9hDTc9NfIKxZgWvxqhLjP7u7U31IsFd5B4jbWV8BFTQIPHbYPjfuTgRPYZ-VXzKM3g-pJ2ayaVR4sdE89maiLuMrxtaWEIJ-vw8eEGQ8Vg-JmkwChytqO4s-LqYKZlHttkOw"
                  />
                  {/* Subtle bottom gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
                  {/* Overlaid Laurel Rank Badge */}
                  <div className="relative z-10 bg-surface-container-lowest/90 backdrop-blur-md rounded-xl p-3 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary-container text-[24px]">
                        military_tech
                      </span>
                      <div>
                        <span className="block font-title-md text-title-md text-primary leading-tight">
                          AIR 14
                        </span>
                        <span className="block font-caption text-caption text-outline">
                          District Rank 1
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary font-label-eyebrow text-label-eyebrow">
                      SELECTED
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Story, Scorecard & Testimonial */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-caption text-caption font-bold tracking-wide uppercase">
                  ★ AISSEE 2026 Western Odisha Topper
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-caption text-caption">
                  Class VI Entry
                </span>
              </div>
              <div>
                <h3 className="font-display text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
                  Cadet Soumya Ranjan Dash
                </h3>
                <p className="font-title-lg text-title-lg text-secondary font-semibold mt-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">
                    school
                  </span>
                  Allotted: Sainik School Sambalpur
                </p>
              </div>

              {/* Score Breakdown Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-surface-container-low rounded-xl p-3.5">
                  <span className="block font-caption text-caption text-outline uppercase tracking-wider">
                    Total Score
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary">
                    284{" "}
                    <span className="font-body-sm text-body-sm text-outline">
                      / 300
                    </span>
                  </span>
                </div>
                <div className="bg-surface-container-low rounded-xl p-3.5">
                  <span className="block font-caption text-caption text-outline uppercase tracking-wider">
                    Mathematics
                  </span>
                  <span className="font-headline-sm text-headline-sm text-secondary-container">
                    150{" "}
                    <span className="font-body-sm text-body-sm text-outline">
                      / 150
                    </span>
                  </span>
                </div>
                <div className="bg-surface-container-low rounded-xl p-3.5 col-span-2 sm:col-span-1">
                  <span className="block font-caption text-caption text-outline uppercase tracking-wider">
                    GK &amp; Reasoning
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary">
                    134{" "}
                    <span className="font-body-sm text-body-sm text-outline">
                      / 150
                    </span>
                  </span>
                </div>
              </div>

              {/* Cadet Quote */}
              <div className="relative bg-surface-container-low/60 rounded-2xl p-5">
                <span className="material-symbols-outlined text-secondary-fixed-dim text-[36px] absolute top-3 right-4 select-none opacity-40">
                  format_quote
                </span>
                <p className="font-body-md text-body-md text-on-surface italic relative z-10 leading-relaxed">
                  &quot;ADAS taught me mental speed and disciplined OMR accuracy.
                  The daily 4-hour supervised test sessions turned my dream of
                  entering Sainik School into reality.&quot;
                </p>
              </div>

              {/* Father's Endorsement Note */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-caption">
                  RD
                </div>
                <div>
                  <span className="block font-title-md text-title-md text-primary">
                    Sri Rabindra Dash (Father)
                  </span>
                  <span className="block font-caption text-caption text-outline">
                    Dhankauda, Sambalpur • &quot;The personalized care by mentors
                    made all the difference.&quot;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ACHIEVERS HALL OF FAME GRID (4-COLUMN RESPONSIVE) */}
      <section className="max-w-[1280px] mx-auto px-margin py-12 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-secondary-container text-[20px]">
                military_tech
              </span>
              <span className="font-label-eyebrow text-label-eyebrow uppercase text-secondary tracking-widest font-bold">
                Pride of ADAS Sambalpur
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
              Hall of Fame Cadets
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Verified results of our dedicated students who conquered India’s
            toughest juvenile competitive examinations.
          </p>
        </div>

        {/* Cadets Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          id="achieversGrid"
        >
          {filteredCadets.map((cadet) => (
            <div
              key={cadet.id}
              className="group bg-surface-container-lowest rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              data-exam={cadet.exam}
              data-year={cadet.year}
            >
              <div>
                {/* Arch Image Wrapper */}
                <div className="relative w-full h-64 rounded-t-[70px] rounded-b-xl overflow-hidden bg-primary-container mb-4">
                  <img
                    alt={cadet.imgAlt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    data-alt={cadet.dataAlt}
                    src={cadet.imgSrc}
                  />
                  <div
                    className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-caption font-caption font-bold shadow-md ${cadet.badgeColorClass}`}
                  >
                    {cadet.badge}
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 bg-primary/80 backdrop-blur-sm text-on-primary rounded-lg py-1 px-2.5 text-center text-caption font-caption">
                    {cadet.scoreBadge}
                  </div>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary tracking-tight">
                  {cadet.name}
                </h3>
                <span className="block font-caption text-caption text-secondary font-semibold mt-0.5">
                  {cadet.school}
                </span>
              </div>
              <div className="mt-4 pt-3 bg-surface-container-low rounded-xl p-2.5 text-center">
                <span className="font-caption text-caption text-outline block">
                  {cadet.batchInfo}
                </span>
                <span className="font-body-sm text-body-sm font-semibold text-primary">
                  {cadet.marksInfo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredCadets.length === 0 && (
          <div className="text-center py-16 bg-surface-container-low rounded-2xl">
            <span className="material-symbols-outlined text-[48px] text-outline mb-2">
              search_off
            </span>
            <p className="font-title-md text-title-md text-primary font-semibold">
              No cadets found matching your filter criteria
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Try adjusting the year or exam filter, or clearing your search term.
            </p>
          </div>
        )}

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button
            type="button"
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-btn text-label-btn transition-all shadow-sm hover:shadow-md cursor-pointer ${isLoadedMore ? "opacity-75 cursor-default" : ""
              }`}
            id="loadMoreBtn"
            disabled={isLoadedMore}
            onClick={handleLoadMore}
          >
            <span>
              {isLoadedMore
                ? "All 142 Verified Cadets Loaded"
                : "Load More Achievers (Showing 8 of 142+)"}
            </span>
            {!isLoadedMore && (
              <span className="material-symbols-outlined text-[18px]">
                expand_more
              </span>
            )}
          </button>
        </div>
      </section>

      {/* SECTION 5: PRESTIGIOUS ALLOTTED INSTITUTIONS TICKER */}
      <section className="w-full bg-primary py-8 overflow-hidden text-on-primary">
        <div className="max-w-[1280px] mx-auto px-margin mb-3 text-center">
          <span className="font-label-eyebrow text-label-eyebrow text-secondary-fixed-dim uppercase tracking-widest">
            Our Cadets Now Serve In Premier Institutions Across India
          </span>
        </div>
        {/* Seamless Marquee Track */}
        <div className="relative w-full overflow-hidden flex">
          <div className="flex gap-8 whitespace-nowrap animate-pulse py-2 text-title-md font-title-md text-on-primary-container">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
              Sainik School Sambalpur
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
              Sainik School Bhubaneswar
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
              Sainik School Korukonda
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
              Sainik School Kazhakootam
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
              RMS Chail (HP)
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
              RMS Dholpur
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
              RMS Belgaum
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
              RMS Bengaluru
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
              RIMC
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
              Jawahar Navodaya Vidyalaya Gosala
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 6: VERIFIED PARENT & CADET TESTIMONIALS STRIP */}
      <section className="bg-secondary-fixed/15 py-16 px-margin">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1 text-secondary-container mb-2">
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
              Words from Proud Odisha Families
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Genuine experiences of parents whose children earned life-changing
              selections from Sambalpur, Bargarh, Jharsuguda, and Rourkela.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-secondary-container text-[32px] select-none">
                  format_quote
                </span>
                <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                  &quot;Coming from Bargarh, we were worried about hostel
                  discipline. But ADAS mentors treated my son like family. The
                  daily speed math drills gave him the confidence to crack
                  AISSEE with 279 marks.&quot;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 mt-6 border-t-0 bg-surface-container-low rounded-xl p-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary flex items-center justify-center font-bold text-caption">
                  BP
                </div>
                <div>
                  <span className="font-title-md text-title-md text-primary block leading-tight">
                    Bhabani S. Patel
                  </span>
                  <span className="font-caption text-caption text-outline block">
                    Father of Ananya • Bargarh, Odisha
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-secondary-container text-[32px] select-none">
                  format_quote
                </span>
                <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                  &quot;No other coaching in Western Odisha has this kind of
                  mock-test discipline. They conducted 45 full-length OMR exams
                  before the real test. My son didn’t panic even for a
                  second.&quot;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 mt-6 border-t-0 bg-surface-container-low rounded-xl p-3">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-caption">
                  KN
                </div>
                <div>
                  <span className="font-title-md text-title-md text-primary block leading-tight">
                    Kamal Lochan Nayak
                  </span>
                  <span className="font-caption text-caption text-outline block">
                    Father of Debabrata • Jharsuguda
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-secondary-container text-[32px] select-none">
                  format_quote
                </span>
                <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                  &quot;The faculty in Sambalpur gave extra attention to reasoning
                  and interview grooming. Getting into RMS Chail was a distant
                  dream until ADAS provided the exact roadmap.&quot;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 mt-6 border-t-0 bg-surface-container-low rounded-xl p-3">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-caption">
                  SM
                </div>
                <div>
                  <span className="font-title-md text-title-md text-primary block leading-tight">
                    Suresh Chandra Meher
                  </span>
                  <span className="font-caption text-caption text-outline block">
                    Father of Ashutosh • Sambalpur
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CALL TO ACTION BAND WITH RISING SUN MOTIF */}
      <section className="relative bg-gradient-to-r from-primary via-primary-container to-primary text-on-primary py-16 px-margin overflow-hidden">
        {/* Radiant sunrise graphic element */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-secondary-container/40 rounded-t-full blur-3xl pointer-events-none"></div>
        <div className="relative max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-secondary-fixed/20 text-secondary-fixed-dim text-caption font-caption uppercase tracking-wider font-bold mb-3 inline-block">
              Admissions Open For 2027–2028 Foundation Batches
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tight text-on-primary">
              Give your child the winning edge for Sainik School &amp; RMS.
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container mt-2">
              Attend an in-person assessment at our Sambalpur campus or get the
              official 3-year result gazette.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 justify-center shrink-0">
            <Link
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-secondary-container hover:bg-secondary text-on-secondary font-label-btn text-label-btn shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              data-path="contact"
              href="/#contact"
            >
              Book Free Diagnostic Test
            </Link>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary font-label-btn text-label-btn backdrop-blur-md transition-all cursor-pointer"
              id="gazetteBtn"
              onClick={handleGazetteDownload}
            >
              <span className="material-symbols-outlined text-[18px]">
                download
              </span>
              <span>Download 2024–26 Gazette PDF</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
