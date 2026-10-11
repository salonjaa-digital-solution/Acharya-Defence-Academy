"use client";

import { useState } from "react";

interface FacultyMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  icon: string;
  badge: string;
  badgeColorClass: string;
  experience: string;
  metricLabel: string;
  metricValue: string;
  bioStrategy: string;
  category: string; // for filtering: 'maths' | 'english' | 'reasoning' | 'gk' | 'regional'
  searchKeywords: string;
  imgSrc: string;
  dataAlt: string;
}

const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "faculty-1",
    name: "Maj. Sanjeev Mohanty (Retd.)",
    role: "Head of Discipline & Physical Conditioning",
    specialization: "Discipline & SSB Interview Prep",
    icon: "shield",
    badge: "Ex-Indian Army",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    experience: "20+ Yrs Defence Leadership • Ex-Army Training Command",
    metricLabel: "SSB Mentorship Record",
    metricValue: "100% Mock Clearance",
    bioStrategy:
      "Ex-Indian Army Officer with over two decades of distinguished service. Specializes in psychological resilience, officer-like qualities (OLQs), daily cadets cadence, and rigorous physical obstacle mastery for juvenile candidates.",
    category: "gk",
    searchKeywords:
      "Maj. Sanjeev Mohanty Retd Discipline Physical Conditioning SSB Interview Prep Indian Army",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSS_a0QLT_x7qSseya4ffueJeWBE6hKxK6NL2EE-lMslyz546eMkVuAdRfHw0-u_lZEqGKp_h8qt_4gXzkXO-JaIwRb1bI_v_pi64AVDh53hxaHBJrDLbu5-unKEX3J_c4lCoFSY1abvAXwlSvLjophyjfGY5Bh76-J9ckyK2SMs_U3Bd8yvFGbhPW4NJSIQFqlqWI5lyLaEKORiJ0-XsPG5Kv2z0ZF3TUXYZZWsoHIfdKI4tFGWPPDw",
    dataAlt:
      "Portrait of Major Sanjeev Mohanty Retd, Indian Army veteran in crisp formal shirt with military ribbons on pin, standing with confident disciplined smile in front of Sainik School Sambalpur grounds",
  },
  {
    id: "faculty-2",
    name: "Prof. Debashis Tripathy",
    role: "Senior Mathematics Lead & OMR Speed Trainer",
    specialization: "Mathematics & Speed OMR",
    icon: "calculate",
    badge: "14+ Yrs Prep",
    badgeColorClass: "bg-primary-container text-on-primary",
    experience: "M.Sc (Maths), Sambalpur Univ • 14+ Yrs Exam Prep",
    metricLabel: "Class Math Metric",
    metricValue: "98.2% Class Pass Rate",
    bioStrategy:
      "Specialist in 150-mark AISSEE Mathematics section. Known throughout Western Odisha for formula-less problem-solving, Vedic arithmetic shortcuts, and systematic OMR bubble-filling drills.",
    category: "maths",
    searchKeywords:
      "Prof. Debashis Tripathy Senior Mathematics Lead OMR Speed Trainer M.Sc Maths Sainik RMS",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9HV_T8nKHt_jQCEX6SrEDCeyWqi6p94-9nxfhA-GvwASv1pfrPGjOISICUYgGIxCaE2lxZXEwHjTgIkXcYZW7bgCXCnJOFBP0-e3nzi3w_w3MslHMbuEmu6egKagqUPUGqEbG3O3ak9CSt7l_t_uVc3qKTbSLQEC1h56u0Y5-kA8YYl9VK1TImCjvk5gq1VhwX2hcd9grC-4wzl6BcpBLi2KVuK6GI-gSDel_8j6jJQhvFqWwcwSDXw",
    dataAlt:
      "Portrait of Prof Debashis Tripathy, senior Indian mathematics professor with glasses holding mathematical stylus and tablet, warm academic smile, clean high-key studio lighting",
  },
  {
    id: "faculty-3",
    name: "Smt. Meenakshi Sahoo",
    role: "General Studies & Descriptive English Lead",
    specialization: "English & Verbal Ability",
    icon: "menu_book",
    badge: "11+ Yrs Coaching",
    badgeColorClass: "bg-secondary text-on-secondary",
    experience: "M.A. (English), B.Ed • 11+ Yrs Juvenile Pedagogy",
    metricLabel: "English Section Score",
    metricValue: "46/50 Avg. Student Score",
    bioStrategy:
      "Pioneered the ADAS Vocabulary Builder Deck that converts difficult grammar rules, idioms, and reading comprehension passages into intuitive visual flash cards for young candidates.",
    category: "english",
    searchKeywords:
      "Smt. Meenakshi Sahoo General Studies Descriptive English Lead MA BEd Competitive Entrance Coaching",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7fFIp49K2bFB8K-hW5Co31ssoS1wWVXkvXhxx66borlNmwpC-XF3Z6RjHpUC8hrdga1jCT0_PvfsK9yj_sGSU3EPgFgQnag07VSrMA1gSXzkBAcGDaU2dSyN4zNsU5_GFpEGaXoboDJiNQR0OGlwv_Iej9rTdLuLrYWQJk0jkWKj0bKyWSclv38hFQeF0zLd3oRxY23Hok65vop2ILwvUfn9G_ztrKqT9dRIbgsKZ3cG_TeCL87Ktgw",
    dataAlt:
      "Portrait of Smt Meenakshi Sahoo, dignified Indian female educator in elegant handloom saree standing in an academy library background with competitive entrance reference books",
  },
  {
    id: "faculty-4",
    name: "Er. Rakesh Kumar Nayak",
    role: "Intelligence & Non-Verbal Reasoning Specialist",
    specialization: "Intelligence & Reasoning",
    icon: "psychology",
    badge: "NIT Rourkela Alum",
    badgeColorClass: "bg-primary-container text-on-primary",
    experience: "B.Tech (NIT Rourkela) • 9+ Yrs Logical Aptitude Lead",
    metricLabel: "Top Performers",
    metricValue: "50+ Scored 140+",
    bioStrategy:
      "Engineer turned entrance strategist. Trains cadets to solve complex spatial analogies, pattern folding, mirror images, and syllogisms under tight countdown limits.",
    category: "reasoning",
    searchKeywords:
      "Er. Rakesh Kumar Nayak Intelligence Non-Verbal Reasoning Specialist B.Tech NIT Rourkela Logical Aptitude Mentor",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAREIMySZXRiMb-bcxjheZFKaCFCdcT1xrB4OWqNhLGHec58_ED7XtVyS0joBCSwQArR8zwOtVmbKu9sIwy_S1y7fuxbfnyyX8BS2BHcJUwmWD-IoPea775VaQinPwIw0VJW7TcB7tUn0Do2YosPjVyuScjJXGN5MsiYw4g29sBQzqc7MBvs2Ik6-db4uh9IrKavJAVt2I_G1i8EzJ_2aqPTz4tK3FejJVHzg8dPoT70V_ANilcliBJpg",
    dataAlt:
      "Portrait of Er Rakesh Kumar Nayak, young charismatic Indian engineering educator with modern glasses pointing at logical pattern diagram on interactive classroom screen",
  },
  {
    id: "faculty-5",
    name: "Col. Prabhat Ranjan Das (Retd.)",
    role: "Defence Interview Board Advisor & Cadet Moral Lead",
    specialization: "Interview Board & Etiquette",
    icon: "military_tech",
    badge: "Ex-SSB Board Panel",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    experience: "Ex-Armed Forces Selection Board (SSB) Advisor",
    metricLabel: "Interview Conversion",
    metricValue: "94% RIMC/RMS Final Selection",
    bioStrategy:
      "Conducts simulated SSB-style interview environments. Mentors students on speech clarity, personal presentation, moral integrity, and composure under questioning.",
    category: "gk",
    searchKeywords:
      "Col. Prabhat Ranjan Das Retd Defence Interview Board Advisor Cadet Moral Etiquette SSB Armed Forces Selection Board",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMhYbxGdNHsJxFS9jAxfCr_RZ4aovivzF2jXOIm9uilZzk1ghI5FljJ48J3LVfRDk_C3livHKelNARd3hHsx10qPXxdnkTP8hp8TMzhzWGK3gK0h8hyWQHrfpL_N2YuUUBnXdl1s4DEkgqTDH3uu8HTQOrZ7gTFVQZX1SS_nO0p-i3FOWsOZcpF8858ddDK3SR_YuejfxnspTBdS0Q0ByrdWVcebU5_sT_XSkIPrmMlwWxl3DD1sxITQ",
    dataAlt:
      "Portrait of Colonel Prabhat Ranjan Das Retd, distinguished senior veteran officer with white hair, upright military stance and warm authoritative expression in formal military dress",
  },
  {
    id: "faculty-6",
    name: "Dr. Smruti Rekha Mishra",
    role: "General Science & Indian Polity Faculty",
    specialization: "General Science & Polity",
    icon: "science",
    badge: "Ph.D. Academician",
    badgeColorClass: "bg-primary-container text-on-primary",
    experience: "Ph.D., M.Sc • 10+ Yrs Academic Rigour",
    metricLabel: "Syllabus Coverage",
    metricValue: "100% NCERT Integrated",
    bioStrategy:
      "Transforms dense NCERT science concepts into everyday visual experiments. Manages the Academy’s current events quiz league and static GK mnemonics workshop.",
    category: "gk",
    searchKeywords:
      "Dr. Smruti Rekha Mishra General Science Indian Polity Faculty PhD MSc Academic Rigour",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCP3mXqbRtfqBCHdWP4KcCF81-mjgl4AFqkGGSai3zdI65bQp2yFn85opVd3HNd8bkJeFo0yN4-j-hqi426CgrQGvd_gRDI_wOABDxfZFrUQPvytFuSUuxiQ36N40rENHfj4pN5MshUGRYDvXFvzCqET-deWX1ULQKxD6j3dhEH8ny9Autq_x_BULFVrENzmpYZI3j0mTcTjWn9Zb9XkR6BO0b5tqU1FkQk_jrdeIGC17v6WRXO4mtaIQ",
    dataAlt:
      "Portrait of Dr Smruti Rekha Mishra, senior female Indian academic scientist with gentle confident smile holding laboratory notes in modern academy laboratory",
  },
  {
    id: "faculty-7",
    name: "Shri Bibhuti Bhusan Pradhan",
    role: "Regional Language (Odia) & Navodaya Specialist",
    specialization: "Regional Language & Navodaya",
    icon: "translate",
    badge: "13+ Yrs JNVST",
    badgeColorClass: "bg-secondary-container text-on-secondary",
    experience: "M.A., M.Ed • 13+ Yrs Navodaya / OAVS Selection Coach",
    metricLabel: "Navodaya Conversion",
    metricValue: "110+ Selections",
    bioStrategy:
      "Dedicated specialist in Odia grammar, regional comprehensions, and Jawahar Navodaya Vidyalaya entrance mental ability patterns across Western Odisha districts.",
    category: "regional",
    searchKeywords:
      "Shri Bibhuti Bhusan Pradhan Regional Language Odia Navodaya JNVST Specialist MA MEd Navodaya OAVS selection coach",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAel1JQJuYTLEC65Ek0gdVtP5eYYGRPOzmfMEmxQ2zeEK8pIFmorsKPnBUNrQfScd9sDraGk7xnr-4W0uwsPqQ6WHToZJhSe_a4HeH_fNLaW_ZzIp8DmzkNTnvBQSP-YZSU6R07SS5ufSjOEpyABfWhd1I6oVeCtU-OEDjBcQEeK-3Ca9fuprGJj6FbaeUFRnw0ri35GtPZss36S9Q6rs6nVryTihA3OygZ2Vv1UEYX-D7l0Xp2kXWJCQ",
    dataAlt:
      "Portrait of Shri Bibhuti Bhusan Pradhan, experienced Indian educator wearing traditional Nehru jacket, smiling warmly in classroom filled with regional literature and school charts",
  },
  {
    id: "faculty-8",
    name: "Sub. Maj. Tarun K. Behera (Retd.)",
    role: "Chief Cadet PT, Cadence Drill & Obstacle Master",
    specialization: "Cadet Physical Conditioning",
    icon: "fitness_center",
    badge: "24 Yrs Army PTC",
    badgeColorClass: "bg-secondary text-on-secondary",
    experience: "24 Yrs Army Physical Training Corps (APTC)",
    metricLabel: "Medical Fitness Pass",
    metricValue: "99.4% Army Medicals",
    bioStrategy:
      "Leads dawn endurance runs, postural calibration, obstacle negotiation drills, and stamina building to ensure every cadet clears strict defence medical and endurance benchmarks.",
    category: "all",
    searchKeywords:
      "Subedar Major Tarun K Behera Retd Chief Cadet PT Cadence Drill Obstacle Course Master Army Physical Training Corps",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHO4Iw5Yh6xrMzsjzrzKIoyZWpfaXoiM-JOkn1qGWhpKUTglOGgHQqfA6hOicG_Msfv1Xu8emtA4LV7ZXjxqhwdg3nNrFZcFZR9X0Kd5ZXGc627s8LYtIuLLRhD7hZurrYftyF0Gh1_toGJ3xRCHoQvSJ-jmdlOjpZH0BMkwij8y-KoQInEJqCpHyWprGbttdcasx6THdV_F_ueavOd1fwl7GSwBEwJlR5kDlJqVX31mk9b8jGycpRSg",
    dataAlt:
      "Portrait of Subedar Major Tarun K Behera Retd in sports coaching uniform with whistle and timer on athletics track with morning mist in the background, confident disciplined smile",
  },
];

export default function FacultyPage() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Modals state
  const [bioModal, setBioModal] = useState<{
    isOpen: boolean;
    name: string;
    role: string;
    desc: string;
  }>({
    isOpen: false,
    name: "",
    role: "",
    desc: "",
  });

  const [directorConsultModalOpen, setDirectorConsultModalOpen] =
    useState(false);
  const [careersModalOpen, setCareersModalOpen] = useState(false);

  // Filter & Search Logic
  const filteredFaculty = FACULTY_MEMBERS.filter((member) => {
    const matchesCategory =
      currentFilter === "all" ||
      member.category === currentFilter ||
      member.category === "all";

    const query = searchQuery.toLowerCase().trim();
    const memberText =
      `${member.name} ${member.role} ${member.specialization} ${member.experience} ${member.searchKeywords}`.toLowerCase();
    const matchesSearch = !query || memberText.includes(query);

    return matchesCategory && matchesSearch;
  });

  const handleOpenBio = (name: string, role: string, desc: string) => {
    setBioModal({
      isOpen: true,
      name,
      role,
      desc,
    });
  };

  const handleCloseBio = () => {
    setBioModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleDirectorConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Consultation request registered! Director office will call within 24 hours."
    );
    setDirectorConsultModalOpen(false);
  };

  const handleCareersSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Your profile has been received. Our HR panel will reach out via WhatsApp."
    );
    setCareersModalOpen(false);
  };

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
            <div className="flex items-center -space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt="Senior Indian defence mathematics educator"
                  data-alt="Portrait of an experienced senior Indian defence mathematics educator in formal navy blazer against clean academic studio backdrop"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu1ck9ghXKQl9YtHV3oy2iUedhbKvxRv-PsXMv7tQ4gI8h_kLSSCYhSns16zvuLgZt9vaJrE088O_bZ9MIOscMOr7VSi7eS2qCnX5rF4oV-B8az_S-yleljkKcZs-NfHI1P_S4JE5kGvmHMVSIjmZX6qx68OZJQ7qqUGlzxM8thh1AJxv_wBxsvsozrOmw69VD4vHv5dtscaWEjGCpfX-NYk2eh5jzoK-QBw5YuaLrYJ3F6DIHbF2DFw"
                />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt="Retired Indian Armed Forces Army officer"
                  data-alt="Portrait of a retired Indian Armed Forces Army officer in olive formal attire smiling warmly with military poise"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc9atfD69t0OHVvyZpGmSAo9_RxtXnb2aTpFM0akY1IMuVj_MW-NC1Uxr3TdzeFw8brXrHogOjNyor8-RKKRtc2tI_J-GVZfxocSgpZnTAINOj20s0SiNsV0HlTyfaCk5sYTNMo_FyP2ZnHN6hsUPDYx22vO3qbT_TVKf1NqXIKHhMtj9h5L3DXYqt4V9Q0o8M4iFjnbxZKJy3ZEOPe_m4Be_N8EpLp0UrXymskiuEvSXtpnuR6nB8HQ"
                />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt="Indian woman scholar and verbal reasoning expert"
                  data-alt="Portrait of an Indian woman scholar and verbal reasoning expert in dignified academic attire"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWMAkN_rEqVPXPnby6L09WuvPpHbOxccVuuW9huXfexZaw1WQ8SpCmK-GNGBXEctCX1PPF3jiX47VcKjuRagNqviibsgPHQI1D82NzkxKoFt94eUmRGQPOE_9tA6DLF2f-lWLv4nKtdj5B_JDo629C_NK3l6EvnE6J7nZY-koVjRCrDCDockYW-Bgk_7-svQn-PXvk5FrL6LfmhZKRgkRZOiDu4-M0YV6X5G-tQMZQytJ7ZoA01ir57A"
                />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt="Engineering graduate reasoning educator"
                  data-alt="Portrait of an engineering graduate reasoning educator in smart casual teacher outfit"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnVcXQ-auDYuEdffPU3ZWMlus1g5DHnw4ibfyXZZelq65qVuvCD99oVHuU1lFrPC3LWwKYQlKtaswitSRYl0VIfusSCXW9DWE3Pxv-2lWzV6coSPtJTUmxaf80T7YvatvzD0QkcL8HYpqhkQmDJDGvuIH0-BQJlWgb9WZ-oiottmEaWKxbwZzSBKk_PAfyKGA6K2khEZi5THtCAOkDuCh7qUZLS9dN1l9RqOpgHnz41IzEhflXw4V6Xw"
                />
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary font-label-btn text-xs flex items-center justify-center shadow-lg font-bold">
                +14
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
            <div className="hidden md:flex items-center gap-2 text-on-surface-variant font-caption text-caption">
              <span className="material-symbols-outlined text-secondary-container text-[20px]">
                shield
              </span>
              <span>Official ADAS Sambalpur Pedagogical Council</span>
            </div>
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6NoalkK4cbk4wDSsGUfAVrdsj5nZPOATIauzTNrx4rp-L4Uex_oEymajn0ENpc5mlo5A1rhP4wPHyjnztdJHcyFDPCzmz33ctTU2x75e_YMRxKhRxS05e4ONb0s281Jp3TNc18-wTx3nFsfb0kpm4W59IkFnSLPVHSLQ5ljMJp5clbTOFJhq8QczFKxXSwQVPMbrlW-nMahMa1cdDZBLbYL8Eu2Fy4fvIT1dtIC1YsvIHJ4SkHuXfDw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary font-caption text-caption font-semibold shadow-md">
                      Ex-Defence Entrance Panelist • 16+ Yrs
                    </span>
                  </div>
                </div>
              </div>
              {/* Quick Micro Badge under Arch */}
              <div className="mt-6 flex items-center gap-2 text-primary font-caption text-caption font-semibold">
                <span className="material-symbols-outlined text-secondary-container text-[18px]">
                  workspace_premium
                </span>
                <span>
                  Founder &amp; Chief Academic Director, ADAS Sambalpur
                </span>
              </div>
            </div>
            {/* Right: Comprehensive Bio Details */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">
                    Himanshu Sekhar Acharya
                  </h3>
                  <span className="material-symbols-outlined text-secondary-container text-[22px]">
                    verified
                  </span>
                </div>
                <p className="font-title-md text-title-md text-secondary font-medium mb-space-sm">
                  Founder &amp; Academic Director | Specialization: AISSEE &amp;
                  RMS Mathematics &amp; Strategic Reasoning
                </p>
                {/* Qualifications Pill Row */}
                <div className="flex flex-wrap gap-2 mb-space-md">
                  <span className="px-3 py-1 rounded-md bg-surface-container text-on-surface-variant font-caption text-caption font-medium">
                    M.Sc (Mathematics)
                  </span>
                  <span className="px-3 py-1 rounded-md bg-surface-container text-on-surface-variant font-caption text-caption font-medium">
                    B.Ed (Pedagogical Sciences)
                  </span>
                  <span className="px-3 py-1 rounded-md bg-surface-container text-on-surface-variant font-caption text-caption font-medium">
                    Ex-National Defence Entrance Panelist
                  </span>
                  <span className="px-3 py-1 rounded-md bg-surface-container text-on-surface-variant font-caption text-caption font-medium">
                    Vedic Speed Calculation Pioneer
                  </span>
                </div>
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
                  <div className="p-3 bg-surface-container-low rounded-lg">
                    <span className="block font-headline-sm text-headline-sm text-primary font-bold">
                      1st Ed.
                    </span>
                    <span className="font-caption text-caption text-on-surface-variant">
                      Author: AISSEE Shortcut Mastery
                    </span>
                  </div>
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
                <button
                  type="button"
                  className="inline-flex items-center gap-2 bg-secondary-container hover:bg-secondary text-on-secondary font-label-btn text-label-btn px-6 py-3 rounded-full shadow-[0_6px_20px_0_rgba(241,90,41,0.35)] transition-all cursor-pointer"
                  onClick={() => setDirectorConsultModalOpen(true)}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    calendar_month
                  </span>
                  <span>Book Director Consultation</span>
                </button>
                <a
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary font-label-btn text-label-btn px-5 py-3 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors"
                  href="tel:9149771961"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    call
                  </span>
                  <span>Direct Academic Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SUBJECT FILTER TABS & SEARCH */}
      <section className="w-full bg-surface-container-low py-8 sticky top-16 z-30 shadow-sm backdrop-blur-md bg-surface-container-low/95">
        <div className="max-w-[1280px] mx-auto px-margin">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-space-md">
            {/* Horizontal Scrollable Filter Pills */}
            <div
              className="w-full lg:w-auto flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none"
              id="faculty-filters"
            >
              {[
                { label: "All Mentors (18)", value: "all" },
                { label: "Mathematics & Mental Ability (5)", value: "maths" },
                { label: "English & Comprehension (4)", value: "english" },
                { label: "Intelligence & Reasoning (3)", value: "reasoning" },
                { label: "GK & Current Affairs (3)", value: "gk" },
                { label: "Odia & Regional (3)", value: "regional" },
              ].map((filter) => {
                const isActive = currentFilter === filter.value;
                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setCurrentFilter(filter.value)}
                    className={`filter-btn px-4 py-2 rounded-full font-label-btn text-xs md:text-label-btn whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? "active-filter bg-primary text-on-primary shadow-sm"
                        : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container"
                    }`}
                    data-filter={filter.value}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
            {/* Quick Live Search Input */}
            <div className="w-full lg:w-72 relative shrink-0">
              <span className="material-symbols-outlined text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px]">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-surface-container-lowest text-on-surface text-body-sm font-body-sm outline-none shadow-sm focus:ring-2 focus:ring-secondary-container transition-all"
                id="faculty-search"
                placeholder="Search mentor by name, qualification..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPREHENSIVE FACULTY GRID (3 Columns Desktop) */}
      <section className="w-full bg-surface py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-margin">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/40 text-secondary font-label-eyebrow text-label-eyebrow uppercase tracking-widest mb-2">
              <span>THE ADAS COMMANDING FACULTY</span>
            </div>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight">
              Mentorship built on military precision &amp; pedagogy
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Click any faculty card to preview detailed pedagogical
              methodology, published notes, and weekly diagnostic routines.
            </p>
          </div>

          {/* 3-Column Bento Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg"
            id="faculty-cards-container"
          >
            {filteredFaculty.map((member) => (
              <div
                key={member.id}
                className="faculty-card bg-surface-container-lowest rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                data-category={`${member.category} all`}
                data-name={member.searchKeywords}
              >
                <div>
                  {/* Arch Photo Frame with Saffron Accent Offset */}
                  <div className="relative w-full aspect-[4/5] mb-6">
                    <div className="absolute inset-0 rounded-t-[100px] rounded-b-xl bg-secondary-container/20 translate-x-2.5 translate-y-2.5 group-hover:translate-x-3.5 group-hover:translate-y-3.5 transition-transform duration-300"></div>
                    <div className="relative w-full h-full rounded-t-[100px] rounded-b-xl overflow-hidden bg-primary shadow-inner">
                      <img
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        alt={member.name}
                        data-alt={member.dataAlt}
                        src={member.imgSrc}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
                      <div
                        className={`absolute top-3 right-3 px-3 py-1 rounded-full font-caption text-caption font-bold shadow-md ${member.badgeColorClass}`}
                      >
                        {member.badge}
                      </div>
                    </div>
                  </div>
                  {/* Subject Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container text-primary font-caption text-caption font-semibold mb-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary-container">
                      {member.icon}
                    </span>
                    <span>{member.specialization}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary-container transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-medium mt-0.5">
                    {member.role}
                  </p>
                  <p className="font-caption text-caption text-secondary mt-1 font-semibold">
                    {member.experience}
                  </p>
                  <div className="mt-4 p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
                    <span className="font-caption text-caption text-on-surface-variant">
                      {member.metricLabel}
                    </span>
                    <span className="font-title-md text-title-md text-primary font-bold">
                      {member.metricValue}
                    </span>
                  </div>
                </div>
                <div className="pt-5 mt-4">
                  <button
                    type="button"
                    className="w-full py-2.5 px-4 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-btn text-label-btn text-center transition-colors cursor-pointer flex items-center justify-center gap-2"
                    onClick={() =>
                      handleOpenBio(
                        member.name,
                        member.role,
                        member.bioStrategy
                      )
                    }
                  >
                    <span>View Full Bio &amp; Strategy</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredFaculty.length === 0 && (
            <div className="text-center py-16 bg-surface-container-low rounded-2xl">
              <span className="material-symbols-outlined text-[48px] text-outline mb-2">
                person_search
              </span>
              <p className="font-title-md text-title-md text-primary font-semibold">
                No mentors found matching your filter criteria
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Try selecting &quot;All Mentors&quot; or clearing your search
                term.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5: OUR TEACHING PHILOSOPHY STRIP */}
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
                onClick={() => setCareersModalOpen(true)}
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

      {/* INTERACTIVE MODAL: BIO & STRATEGY VIEW */}
      {bioModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/70 backdrop-blur-sm">
          <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              type="button"
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-1 rounded-full cursor-pointer"
              onClick={handleCloseBio}
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[24px]">
                close
              </span>
            </button>
            <div className="flex items-center gap-2 mb-2 text-secondary-container font-label-eyebrow text-label-eyebrow uppercase">
              <span className="material-symbols-outlined text-[16px]">
                school
              </span>
              <span>Faculty Profile &amp; Strategy</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold">
              {bioModal.name}
            </h3>
            <p className="font-title-md text-title-md text-secondary mt-1 font-semibold">
              {bioModal.role}
            </p>
            <div className="my-4 p-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md leading-relaxed">
              {bioModal.desc}
            </div>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                className="px-5 py-2.5 rounded-full bg-surface-container text-primary font-label-btn text-label-btn hover:bg-surface-container-high transition-colors cursor-pointer"
                onClick={handleCloseBio}
              >
                Close Preview
              </button>
              <a
                className="px-5 py-2.5 rounded-full bg-secondary-container text-on-secondary font-label-btn text-label-btn hover:bg-secondary transition-colors inline-flex items-center gap-1.5"
                href="tel:9149771961"
              >
                <span className="material-symbols-outlined text-[16px]">
                  call
                </span>
                <span>Contact Mentor</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE MODAL: DIRECTOR CONSULTATION */}
      {directorConsultModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/70 backdrop-blur-sm">
          <div className="bg-surface-container-lowest rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-1 rounded-full cursor-pointer"
              onClick={() => setDirectorConsultModalOpen(false)}
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
              <span>Direct Consultation Desk</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
              Book Slot with Director Acharya
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">
              Reserved for parents seeking 1-on-1 strategic diagnostic roadmaps
              for Sainik School &amp; RMS admissions.
            </p>
            <form className="space-y-3" onSubmit={handleDirectorConsultSubmit}>
              <div>
                <label className="block font-caption text-caption text-on-surface-variant mb-1 font-semibold">
                  Student&apos;s Current Class
                </label>
                <select className="w-full px-3 py-2.5 rounded-lg bg-surface-container text-on-surface text-body-sm outline-none">
                  <option>Class 4 (AISSEE Class 6 Foundation)</option>
                  <option>Class 5 (AISSEE Class 6 Target 2027)</option>
                  <option>Class 7 / 8 (AISSEE / RMS Class 9 Target)</option>
                </select>
              </div>
              <div>
                <label className="block font-caption text-caption text-on-surface-variant mb-1 font-semibold">
                  Parent / Guardian Phone Number
                </label>
                <input
                  className="w-full px-3 py-2.5 rounded-lg bg-surface-container text-on-surface text-body-sm outline-none"
                  placeholder="+91 91497 71961"
                  required
                  type="tel"
                />
              </div>
              <div>
                <label className="block font-caption text-caption text-on-surface-variant mb-1 font-semibold">
                  Preferred Consultation Mode
                </label>
                <div className="flex gap-4 pt-1 font-body-sm text-body-sm text-on-surface">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      defaultChecked
                      className="accent-primary"
                      name="mode"
                      type="radio"
                    />{" "}
                    Campus Sambalpur
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      className="accent-primary"
                      name="mode"
                      type="radio"
                    />{" "}
                    Phone / Video Call
                  </label>
                </div>
              </div>
              <div className="pt-2">
                <button
                  className="w-full py-3 rounded-full bg-secondary-container hover:bg-secondary text-on-secondary font-label-btn text-label-btn transition-colors cursor-pointer"
                  type="submit"
                >
                  Confirm Consultation Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* INTERACTIVE MODAL: CAREERS APPLY */}
      {careersModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/70 backdrop-blur-sm">
          <div className="bg-surface-container-lowest rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-1 rounded-full cursor-pointer"
              onClick={() => setCareersModalOpen(false)}
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[24px]">
                close
              </span>
            </button>
            <div className="flex items-center gap-2 mb-2 text-secondary-container font-label-eyebrow text-label-eyebrow uppercase">
              <span className="material-symbols-outlined text-[16px]">
                badge
              </span>
              <span>ADAS Faculty Recruitment</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
              Apply for Faculty Position
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">
              We offer leading compensation and residential facility benefits
              for committed defence entrance mentors in Sambalpur.
            </p>
            <form className="space-y-3" onSubmit={handleCareersSubmit}>
              <div>
                <label className="block font-caption text-caption text-on-surface-variant mb-1 font-semibold">
                  Full Name
                </label>
                <input
                  className="w-full px-3 py-2 rounded-lg bg-surface-container text-on-surface text-body-sm outline-none"
                  placeholder="e.g. Major (Retd) Rajesh Patnaik"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="block font-caption text-caption text-on-surface-variant mb-1 font-semibold">
                  Subject Specialization
                </label>
                <select className="w-full px-3 py-2 rounded-lg bg-surface-container text-on-surface text-body-sm outline-none">
                  <option>AISSEE / RMS Mathematics &amp; Vedic Tricks</option>
                  <option>
                    English Grammar &amp; Descriptive Comprehension
                  </option>
                  <option>Non-Verbal Intelligence &amp; Reasoning</option>
                  <option>
                    Defence Physical Conditioning &amp; SSB Guidance
                  </option>
                  <option>General Knowledge &amp; Static Current Affairs</option>
                </select>
              </div>
              <div>
                <label className="block font-caption text-caption text-on-surface-variant mb-1 font-semibold">
                  Contact Number / WhatsApp
                </label>
                <input
                  className="w-full px-3 py-2 rounded-lg bg-surface-container text-on-surface text-body-sm outline-none"
                  placeholder="+91 91497 71961"
                  required
                  type="tel"
                />
              </div>
              <div className="pt-2">
                <button
                  className="w-full py-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-btn text-label-btn transition-colors cursor-pointer"
                  type="submit"
                >
                  Submit Application Resume
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
