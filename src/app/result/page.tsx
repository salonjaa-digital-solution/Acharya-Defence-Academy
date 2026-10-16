"use client";

import { useState } from "react";
import Link from "next/link";
import EnquiryModal from "@/components/EnquiryModal";
import {
  cadetSaksham,
  cadetAnshuman,
  cadetSaanidhya,
  cadetTanmay,
  cadetLokesh,
  cadetAnkit,
  cadetMayank,
  cadetSwati,
  cadetAdarsh,
  cadetAvneesh,
  cadetPruthiraj,
  cadetPrayag,
  cadetRudransh,
  cadetShivesh,
  student1,
  student2,
  student3,
  student4,
} from "@/assets";

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
    id: "cadet-saksham",
    name: "Saksham",
    exam: "aissee",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "SS Tira",
    school: "Selected at Sainik School Tira (HP)",
    batchInfo: "Batch 2026",
    marksInfo: "AISSEE Qualified",
    imgSrc: cadetSaksham.src,
    imgAlt: "Saksham",
    dataAlt: "Cadet Saksham selected at Sainik School Tira Himachal Pradesh",
  },
  {
    id: "cadet-anshuman",
    name: "Anshuman",
    exam: "aissee",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "SS Bhubaneswar",
    school: "Selected at Sainik School Bhubaneswar",
    batchInfo: "Batch 2026",
    marksInfo: "AISSEE Qualified",
    imgSrc: cadetAnshuman.src,
    imgAlt: "Anshuman",
    dataAlt: "Cadet Anshuman selected at Sainik School Bhubaneswar",
  },
  {
    id: "cadet-saanidhya",
    name: "Saanidhya",
    exam: "aissee",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "SS Sambalpur",
    school: "Selected at Sainik School Sambalpur",
    batchInfo: "Batch 2026",
    marksInfo: "AISSEE Qualified",
    imgSrc: cadetSaanidhya.src,
    imgAlt: "Saanidhya",
    dataAlt: "Cadet Saanidhya selected at Sainik School Sambalpur",
  },
  {
    id: "cadet-tanmay",
    name: "Tanmay",
    exam: "aissee",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "SS Sambalpur",
    school: "Selected at Sainik School Sambalpur",
    batchInfo: "Batch 2026",
    marksInfo: "AISSEE Qualified",
    imgSrc: cadetTanmay.src,
    imgAlt: "Tanmay",
    dataAlt: "Cadet Tanmay selected at Sainik School Sambalpur",
  },
  {
    id: "cadet-lokesh",
    name: "Lokesh",
    exam: "aissee",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "SS Sambalpur",
    school: "Selected at Sainik School Sambalpur",
    batchInfo: "Batch 2026",
    marksInfo: "AISSEE Qualified",
    imgSrc: cadetLokesh.src,
    imgAlt: "Lokesh",
    dataAlt: "Cadet Lokesh selected at Sainik School Sambalpur",
  },
  {
    id: "cadet-ankit",
    name: "Ankit",
    exam: "oavs",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "OAV Sambalpur",
    school: "Selected at Adarsh Vidyalaya Sambalpur",
    batchInfo: "Batch 2026",
    marksInfo: "OAVS Selection",
    imgSrc: cadetAnkit.src,
    imgAlt: "Ankit",
    dataAlt: "Cadet Ankit selected at Adarsh Vidyalaya Sambalpur",
  },
  {
    id: "cadet-mayank",
    name: "Mayank",
    exam: "oavs",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "OAV Sambalpur",
    school: "Selected at Adarsh Vidyalaya Sambalpur",
    batchInfo: "Batch 2026",
    marksInfo: "OAVS Selection",
    imgSrc: cadetMayank.src,
    imgAlt: "Mayank",
    dataAlt: "Cadet Mayank selected at Adarsh Vidyalaya Sambalpur",
  },
  {
    id: "cadet-swati",
    name: "Swati",
    exam: "oavs",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "OAV Jharsuguda",
    school: "Selected at Adarsh Vidyalaya Jharsuguda",
    batchInfo: "Batch 2026",
    marksInfo: "OAVS Selection",
    imgSrc: cadetSwati.src,
    imgAlt: "Swati",
    dataAlt: "Cadet Swati selected at Adarsh Vidyalaya Jharsuguda",
  },
  {
    id: "cadet-adarsh",
    name: "Akshar",
    exam: "aissee",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "SS Sambalpur",
    school: "Selected at Sainik School Sambalpur",
    batchInfo: "Batch 2026",
    marksInfo: "AISSEE Qualified",
    imgSrc: cadetAdarsh.src,
    imgAlt: "Adarsh",
    dataAlt: "Cadet Akshar selected at Sainik School Sambalpur",
  },
  {
    id: "cadet-avneesh",
    name: "Avneesh Panda",
    exam: "aissee",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "SS Sambalpur",
    school: "Selected at Sainik School Sambalpur",
    batchInfo: "Batch 2026",
    marksInfo: "AISSEE Qualified",
    imgSrc: cadetAvneesh.src,
    imgAlt: "Avneesh Panda",
    dataAlt: "Cadet Avneesh Panda selected at Sainik School Sambalpur",
  },
  {
    id: "cadet-pruthiraj",
    name: "Pruthiraj",
    exam: "aissee",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "SS Sambalpur",
    school: "Selected at Sainik School Sambalpur",
    batchInfo: "Batch 2026",
    marksInfo: "AISSEE Qualified",
    imgSrc: cadetPruthiraj.src,
    imgAlt: "Pruthiraj",
    dataAlt: "Cadet Pruthiraj selected at Sainik School Sambalpur",
  },
  {
    id: "cadet-prayag",
    name: "Prayag",
    exam: "aissee",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "SS Sambalpur",
    school: "Selected at Sainik School Sambalpur",
    batchInfo: "Batch 2026",
    marksInfo: "AISSEE Qualified",
    imgSrc: cadetPrayag.src,
    imgAlt: "Prayag",
    dataAlt: "Cadet Prayag selected at Sainik School Sambalpur",
  },
  {
    id: "cadet-rudransh",
    name: "Rudransh",
    exam: "aissee",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "SS Sambalpur",
    school: "Selected at Sainik School Sambalpur",
    batchInfo: "Batch 2026",
    marksInfo: "AISSEE Qualified",
    imgSrc: cadetRudransh.src,
    imgAlt: "Rudransh",
    dataAlt: "Cadet Rudransh selected at Sainik School Sambalpur",
  },
  {
    id: "cadet-shivesh",
    name: "Shivesh",
    exam: "aissee",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "SS Sambalpur",
    school: "Selected at Sainik School Sambalpur",
    batchInfo: "Batch 2026",
    marksInfo: "AISSEE Qualified",
    imgSrc: cadetShivesh.src,
    imgAlt: "Shivesh",
    dataAlt: "Cadet Shivesh selected at Sainik School Sambalpur",
  },
  {
    id: "cadet-baibhav",
    name: "Baibhav",
    exam: "aissee",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "New SS Raipur",
    school: "Selected at New Sainik School Raipur",
    batchInfo: "Batch 2026",
    marksInfo: "AISSEE Qualified",
    imgSrc: student1.src,
    imgAlt: "Baibhav",
    dataAlt: "Cadet Baibhav selected at New Sainik School Raipur",
  },
  {
    id: "cadet-aryan",
    name: "Aryan",
    exam: "aissee",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "SS Bhubaneswar",
    school: "Selected at Sainik School Bhubaneswar",
    batchInfo: "Batch 2026",
    marksInfo: "AISSEE Qualified",
    imgSrc: student2.src,
    imgAlt: "Aryan",
    dataAlt: "Cadet Aryan selected at Sainik School Bhubaneswar",
  },
  {
    id: "cadet-rishab",
    name: "Rishab",
    exam: "aissee",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "SS Sambalpur",
    school: "Selected at Sainik School Sambalpur",
    batchInfo: "Batch 2026",
    marksInfo: "AISSEE Qualified",
    imgSrc: student3.src,
    imgAlt: "Rishab",
    dataAlt: "Cadet Rishab selected at Sainik School Sambalpur",
  },
  {
    id: "cadet-manish",
    name: "Manish",
    exam: "aissee",
    year: "2026",
    badge: "Selected",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    scoreBadge: "SS Sambalpur",
    school: "Selected at Sainik School Sambalpur",
    batchInfo: "Batch 2026",
    marksInfo: "AISSEE Qualified",
    imgSrc: student4.src,
    imgAlt: "Manish",
    dataAlt: "Cadet Manish selected at Sainik School Sambalpur",
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

interface ReviewItem {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
}

const TOP_REVIEWS: ReviewItem[] = [
  {
    quote:
      "Coming from Bargarh, we were worried about hostel discipline. But ADAS mentors treated my son like family. The daily speed math drills gave him the confidence to crack AISSEE with 279 marks.",
    name: "Bhabani S. Patel",
    role: "Father of Ananya • Bargarh, Odisha",
    initials: "BP",
    avatarBg: "bg-secondary-container text-on-secondary",
  },
  {
    quote:
      "No other coaching in Western Odisha has this kind of mock-test discipline. They conducted 45 full-length OMR exams before the real test. My son didn’t panic even for a second.",
    name: "Kamal Lochan Nayak",
    role: "Father of Debabrata • Jharsuguda",
    initials: "KN",
    avatarBg: "bg-primary text-on-primary",
  },
  {
    quote:
      "ADAS Academy in Sambalpur gave my son the premier entrance learning experience! The disciplined mock test training and OMR drills removed all exam fear. Teachers give dedicated personal guidance.",
    name: "Ashok Vangallu",
    role: "Father of Cadet Anmol • Bargarh",
    initials: "AV",
    avatarBg: "bg-secondary text-on-secondary",
  },
  {
    quote:
      "ADAS is a perfect place for quality learning and discipline. The mentors are very supportive and explain all topics with unyielding clarity. I am completely satisfied with my daughter's transformation.",
    name: "Priyamini Gurrala",
    role: "Mother of Cadet Swati • Jharsuguda",
    initials: "PG",
    avatarBg: "bg-primary-container text-on-primary",
  },
  {
    quote:
      "Sending our child from Rourkela to Sambalpur was the best decision. The disciplined hostel routine and daily doubt-clearing sessions made all the difference in his AISSEE top-rank selection.",
    name: "Rajesh Mohanty",
    role: "Father of Cadet Soumya • Rourkela",
    initials: "RM",
    avatarBg: "bg-secondary-fixed-dim text-primary",
  },
];

const BOTTOM_REVIEWS: ReviewItem[] = [
  {
    quote:
      "The faculty in Sambalpur gave extra attention to reasoning and interview grooming. Getting into RMS Chail was a distant dream until ADAS provided the exact roadmap.",
    name: "Suresh Chandra Meher",
    role: "Father of Ashutosh • Sambalpur",
    initials: "SM",
    avatarBg: "bg-secondary-fixed text-on-secondary-fixed",
  },
  {
    quote:
      "I had a wonderful experience at ADAS Academy. The trainers explain concepts patiently and clearly. The institute atmosphere motivates students to learn more and achieve excellence in defence school exams.",
    name: "Guna Sekhar",
    role: "Father of Cadet Tarun • Sambalpur",
    initials: "GS",
    avatarBg: "bg-primary text-on-primary",
  },
  {
    quote:
      "My son cracked Sainik School Bhubaneswar in his first attempt. The mock test schedules and OMR drills at ADAS removed all his examination fear. Teachers give personal attention even after hours.",
    name: "Bikash Panda",
    role: "Father of Cadet Anmol • Sambalpur",
    initials: "BP",
    avatarBg: "bg-secondary-container text-on-secondary",
  },
  {
    quote:
      "We enrolled our daughter into the residential hostel batch. The discipline, safety, and healthy routine transformed her confidence completely. Highly recommended for all defence aspirants across Odisha.",
    name: "Sunita Meher",
    role: "Mother of Cadet Swati • Bargarh",
    initials: "SM",
    avatarBg: "bg-primary-container text-on-primary",
  },
  {
    quote:
      "The physical obstacle ground and military morning drills at ADAS built incredible mental grit in my son. He cleared the RMS medical and interview with flying colors.",
    name: "Dillip Kumar Sahu",
    role: "Father of Cadet Ayush • Sambalpur",
    initials: "DS",
    avatarBg: "bg-secondary text-on-secondary",
  },
];

function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between w-[320px] sm:w-[380px] md:w-[420px] flex-shrink-0 select-none">
      <div className="space-y-4">
        <span className="material-symbols-outlined text-secondary-container text-[32px] select-none">
          format_quote
        </span>
        <p className="font-body-md text-body-md text-on-surface italic leading-relaxed line-clamp-4">
          &quot;{review.quote}&quot;
        </p>
      </div>
      <div className="flex items-center gap-3 pt-6 mt-6 border-t-0 bg-surface-container-low rounded-xl p-3">
        <div
          className={`w-10 h-10 rounded-full ${review.avatarBg} flex items-center justify-center font-bold text-caption flex-shrink-0`}
        >
          {review.initials}
        </div>
        <div className="min-w-0">
          <span className="font-title-md text-title-md text-primary block leading-tight truncate">
            {review.name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ResultPage() {
  const [currentExam, setCurrentExam] = useState<string>("all");
  const [isLoadedMore, setIsLoadedMore] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const allCadets = isLoadedMore ? [...CADETS, ...ADDITIONAL_CADETS] : CADETS;

  const filteredCadets = allCadets.filter((cadet) => {
    const matchExam = currentExam === "all" || cadet.exam === currentExam;

    return matchExam;
  });

  const handleLoadMore = () => {
    setIsLoadedMore(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION: Monumental Institutional Arch & Victory Showcase */}
      <section className="relative bg-gradient-to-b from-primary via-primary-container to-primary text-on-primary overflow-hidden pt-12 pb-24 md:pb-32 px-4 sm:px-6 lg:px-margin min-h-[calc(100vh-4rem)]">
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
                200+
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

      {/* FLOATING CATEGORY FILTER BAR */}
      <div className="relative -mt-8 z-30 px-4 sm:px-6 lg:px-margin w-full max-w-[1280px] mx-auto">
        <div className="bg-surface-container-lowest shadow-xl rounded-2xl px-4 py-4 md:px-6 md:py-5 flex justify-center">
          {/* Exam Sub-Filter Pills */}
          <div
            className="flex flex-wrap justify-center items-center gap-2"
            id="examFilterGroup"
          >
            <span className="text-caption font-caption text-outline uppercase tracking-wider mr-1 shrink-0">
              Exams:
            </span>
            {[
              { label: "All Exams", value: "all" },
              { label: "AISSEE (Sainik School)", value: "aissee" },
              { label: "Adarsh Vidyalaya (OAVS)", value: "oavs" },
              { label: "RMS", value: "rms" },
              { label: "RIMC", value: "rimc" },
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

      {/* SECTION 4: ACHIEVERS HALL OF FAME GRID (4-COLUMN RESPONSIVE) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin py-12 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-secondary-container text-[20px]">
                military_tech
              </span>
              <span className="font-label-eyebrow text-label-eyebrow uppercase text-secondary tracking-widest font-bold">
                Pride of ADAS
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
              Hall of Fame Cadets
            </h2>
          </div>
          {/* <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Verified results of our dedicated students who conquered India’s
            toughest juvenile competitive examinations.
          </p> */}
        </div>

        {/* Cadets Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          id="achieversGrid"
        >
          {filteredCadets.map((cadet) => (
            <div
              key={cadet.id}
              className="relative bg-primary-container rounded-3xl overflow-hidden flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-2"
              style={{ boxShadow: "0 4px 32px 0 rgba(1,23,52,0.28), 0 1px 4px 0 rgba(254,99,50,0.08)" }}
              data-exam={cadet.exam}
              data-year={cadet.year}
            >
              {/* Top saffron-orange accent bar */}
              <div
                className="w-full h-1.5 flex-shrink-0"
                style={{ background: "linear-gradient(90deg, #fe6332 0%, #ffb59f 50%, #fe6332 100%)" }}
              />

              {/* Subtle radial glow blob at top */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-28 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(254,99,50,0.18) 0%, transparent 70%)" }}
              />

              <div className="flex flex-col items-center px-6 pb-7 pt-6 w-full relative">

                {/* Photo with themed conic-gradient glow ring */}
                <div className="relative mb-5 flex-shrink-0">
                  {/* Animated conic gradient ring using site colors */}
                  <div
                    className="absolute -inset-[3px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "conic-gradient(from 180deg, #fe6332, #ffb59f, #072c54, #fe6332)",
                      filter: "blur(2.5px)",
                    }}
                  />
                  {/* Separator so photo doesn't touch ring */}
                  <div className="absolute -inset-[1px] rounded-full bg-primary-container" />
                  {/* Actual photo */}
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-secondary-container/20">
                    <img
                      alt={cadet.imgAlt}
                      className="w-full h-full object-cover object-top"
                      style={{ transform: "scale(1)", transition: "transform 0.5s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                      data-alt={cadet.dataAlt}
                      src={cadet.imgSrc}
                    />
                  </div>

                </div>

                {/* Badge pill — themed orange glass */}
                <span
                  className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full font-label-eyebrow text-label-eyebrow tracking-widest uppercase mb-3 border"
                  style={{
                    background: "rgba(254,99,50,0.15)",
                    color: "#ffb59f",
                    borderColor: "rgba(254,99,50,0.28)",
                    fontSize: "10px",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "13px", fontVariationSettings: "'FILL' 1" }}>
                    military_tech
                  </span>
                  {cadet.scoreBadge}
                </span>

                {/* Student Name — white on navy */}
                <h3 className="font-title-lg text-title-lg text-on-primary font-bold leading-tight mt-0.5">
                  {cadet.name}
                </h3>

                {/* Saffron divider */}
                <div
                  className="w-10 h-[2px] rounded-full my-3"
                  style={{ background: "linear-gradient(90deg, #fe6332, #ffb59f)" }}
                />

                {/* School — muted theme text */}
                <p className="font-body-sm text-body-sm text-on-primary-container leading-snug">
                  {cadet.school}
                </p>

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
              Try adjusting the exam filter.
            </p>
          </div>
        )}


      </section>

      {/* SECTION 6: VERIFIED PARENT & CADET TESTIMONIALS STRIP */}
      <section className="bg-secondary-fixed/15 py-16 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden">
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
        </div>

        {/* Embedded Marquee Styles for Guaranteed Animation */}
        <style>{`
          @keyframes marqueeMoveRight {
            0% {
              transform: translate3d(-50%, 0, 0);
            }
            100% {
              transform: translate3d(0, 0, 0);
            }
          }
          @keyframes marqueeMoveLeft {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-50%, 0, 0);
            }
          }
          .marquee-track-right {
            display: flex !important;
            width: max-content !important;
            animation: marqueeMoveRight 35s linear infinite !important;
            will-change: transform;
          }
          .marquee-track-left {
            display: flex !important;
            width: max-content !important;
            animation: marqueeMoveLeft 35s linear infinite !important;
            will-change: transform;
          }
          .marquee-track-right:hover,
          .marquee-track-left:hover {
            animation-play-state: paused !important;
          }
        `}</style>

        {/* Dual Marquee Rows */}
        <div className="marquee-mask space-y-6 w-full max-w-[1360px] mx-auto overflow-hidden">
          {/* Top Review Cards: Move from left to right */}
          <div className="flex w-full overflow-hidden">
            <div className="marquee-track-right flex gap-6 pr-6">
              {[...TOP_REVIEWS, ...TOP_REVIEWS].map((review, idx) => (
                <ReviewCard key={`top-${idx}`} review={review} />
              ))}
            </div>
          </div>

          {/* Down Review Cards: Move from right to left */}
          <div className="flex w-full overflow-hidden">
            <div className="marquee-track-left flex gap-6 pr-6">
              {[...BOTTOM_REVIEWS, ...BOTTOM_REVIEWS].map((review, idx) => (
                <ReviewCard key={`bottom-${idx}`} review={review} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CALL TO ACTION BAND WITH RISING SUN MOTIF */}
      <section className="relative bg-gradient-to-r from-primary via-primary-container to-primary text-on-primary py-16 px-4 sm:px-6 lg:px-margin overflow-hidden">
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
          <div className="flex flex-wrap items-center gap-4 justify-center shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setEnquiryOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-secondary-container hover:bg-secondary text-on-secondary font-label-btn text-label-btn shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
            >
              Book Free Diagnostic Test
            </button>
            <a
              href="tel:9149771961"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary font-label-btn text-label-btn backdrop-blur-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                call
              </span>
              <span>Call Admissions Helpline</span>
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry / Callback Modal */}
      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
