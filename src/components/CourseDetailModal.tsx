"use client";

import { useEffect } from "react";
import Icon from "@/components/Icon";

export interface CourseData {
  id: string;
  badge: string;
  badgeType?: "popular" | "military" | "academic" | "govt";
  icon: string;
  title: string;
  targetTag: string;
  description: string;
  ageCriteria: {
    label: string;
    range: string;
    details: string;
  }[];
  prerequisites: string[];
  examPattern: {
    duration: string;
    totalMarks: string;
    mode: string;
    subjects: { name: string; marks: string }[];
  };
  batchOptions: string[];
  highlights: string[];
}

export const COURSES_DATA: Record<string, CourseData> = {
  aissee: {
    id: "aissee",
    badge: "Flagship Course • Most Popular",
    badgeType: "popular",
    icon: "shield",
    title: "Sainik School Entrance (AISSEE)",
    targetTag: "Class VI & IX Admission",
    description:
      "Comprehensive, regimented entrance coaching for admission into 33 All India Sainik Schools and newly approved Sainik Schools nationwide. Structured for top percentiles in Mathematics, Intelligence, Language, and General Knowledge.",
    ageCriteria: [
      {
        label: "Class VI Admission",
        range: "10 to 12 Years",
        details:
          "Candidate must be between 10 and 12 years of age as of 31st March of the year of admission. Open to both Boys & Girls.",
      },
      {
        label: "Class IX Admission",
        range: "13 to 15 Years",
        details:
          "Candidate must be between 13 and 15 years of age as of 31st March of the year of admission. Open to both Boys & Girls.",
      },
    ],
    prerequisites: [
      "For Class VI: Candidate must be studying in or have passed Class V from a recognized school.",
      "For Class IX: Candidate must be studying in or have passed Class VIII from a recognized school at the time of admission.",
      "Valid birth certificate issued by municipal authority or Gram Panchayat.",
      "Clear medical and physical fitness as per Sainik School Society regulations.",
    ],
    examPattern: {
      duration: "Class VI: 150 Mins | Class IX: 180 Mins",
      totalMarks: "Class VI: 300 Marks | Class IX: 400 Marks",
      mode: "Offline Pen & Paper (OMR Answer Sheet)",
      subjects: [
        { name: "Mathematics (Class VI / IX)", marks: "150 / 200 Marks" },
        { name: "Intelligence & Reasoning", marks: "50 / 50 Marks" },
        { name: "English / Regional Language", marks: "50 / 50 Marks" },
        { name: "General Knowledge / Science & SST", marks: "50 / 100 Marks" },
      ],
    },
    batchOptions: [
      "1-Year Full Residential Cadet Batch",
      "Annual Day-Scholar Intensive Batch",
      "100-Day Crash Course with OMR Drills",
      "Sunday Weekend Test Series & Doubts",
    ],
    highlights: [
      "Daily 3-hour dedicated subject mastery sessions",
      "50+ full-length authentic OMR sheet mock drills with negative marking simulation",
      "Special Vedic Maths shortcuts for lightning calculation speed",
      "Personal interview & military medical examination guidance",
      "Bi-weekly parent progress report cards",
    ],
  },
  rms: {
    id: "rms",
    badge: "5 Elite Campuses • Ministry of Defence",
    badgeType: "military",
    icon: "star_half",
    title: "Rashtriya Military Schools (RMS CET)",
    targetTag: "Class VI & IX Intake",
    description:
      "Precision preparation for the Common Entrance Test (CET) targeting the five prestigious Rashtriya Military Schools: Chail (HP), Ajmer, Belgaum, Bengaluru, and Dholpur. Known for grooming future military officers.",
    ageCriteria: [
      {
        label: "Class VI Admission",
        range: "10 to 12 Years",
        details:
          "Born between 1st April 2013 and 31st March 2015 (for upcoming session). Verified by official birth certificate.",
      },
      {
        label: "Class IX Admission",
        range: "13 to 15 Years",
        details:
          "Born between 1st April 2010 and 31st March 2012 (for upcoming session). Both boys and girls eligible.",
      },
    ],
    prerequisites: [
      "For Class VI: Must have passed Class V or currently studying in Class V.",
      "For Class IX: Must have passed Class VIII from a recognized government or private school.",
      "Meeting basic physical standards (height, weight, vision) required for defence boarding.",
      "Defence personnel wards & civilian quotas both coached with tailored cut-off strategies.",
    ],
    examPattern: {
      duration: "2 Hours 30 Minutes per paper",
      totalMarks: "Class VI: 200 Marks + 20 Viva | Class IX: 200 Marks + 50 Viva",
      mode: "OMR Based Written Test + Interview",
      subjects: [
        { name: "English (Class VI qualifying 35%)", marks: "50 Marks" },
        { name: "Mathematics & Arithmetic", marks: "50 / 100 Marks" },
        { name: "Intelligence & Logical Reasoning", marks: "50 Marks" },
        { name: "General Knowledge & Current Affairs", marks: "50 Marks" },
      ],
    },
    batchOptions: [
      "1-Year Comprehensive RMS Batch",
      "6-Month Fast-Track Entrance Batch",
      "Interview & Viva-Voce Grooming Camp",
    ],
    highlights: [
      "Previous 10 years RMS question papers thoroughly solved and analyzed",
      "High-speed reasoning techniques & mental arithmetic drills",
      "Comprehensive viva-voce and confidence building sessions",
      "Physical PT decorum, discipline, and stamina building",
    ],
  },
  rimc: {
    id: "rimc",
    badge: "Elite Super-Batch • Class VIII Intake",
    badgeType: "military",
    icon: "military_tech",
    title: "RIMC Entrance (Dehradun)",
    targetTag: "Class VIII Only (Bi-Annual Entry)",
    description:
      "The pinnacle of defence school entrance training. Rashtriya Indian Military College (Dehradun) is the premier feeder institute to the National Defence Academy (NDA) and Indian Naval Academy (NAVAC). Highly selective state-quota admission.",
    ageCriteria: [
      {
        label: "Class VIII Entry",
        range: "11½ to 13 Years",
        details:
          "Strict age bracket: Candidate must not be less than 11½ years and must not have attained the age of 13 years as of 1st January or 1st July of the admission term.",
      },
    ],
    prerequisites: [
      "Candidate must either be studying in Class VII or have passed Class VII from a recognized school at the time of joining RIMC.",
      "Resident of Odisha (or relevant home state) for state quota eligibility verification.",
      "High academic capability in subjective English writing and rigorous mathematics.",
      "Strict medical fitness under military medical board standards.",
    ],
    examPattern: {
      duration: "Full-day subjective written examination",
      totalMarks: "400 Marks Written + 50 Marks Viva-Voce",
      mode: "Descriptive / Subjective Pen & Paper",
      subjects: [
        { name: "Mathematics (Subjective Problem Solving)", marks: "200 Marks" },
        { name: "English (Essay, Letter, Grammar, Précis)", marks: "125 Marks" },
        { name: "General Knowledge & Static Current Affairs", marks: "75 Marks" },
        { name: "Viva-Voce / Personal Interview", marks: "50 Marks" },
      ],
    },
    batchOptions: [
      "Elite Super-15 Mentorship Batch",
      "Descriptive Answer Writing Boot Camp",
      "1-on-1 SSB & Interview Orientation",
    ],
    highlights: [
      "Intensive subjective answer writing drills for English & Mathematics",
      "Step-by-step mathematical reasoning without shortcut compromises",
      "Officer-Like Qualities (OLQ) personal interview guidance",
      "Dedicated state-quota competitive benchmarking",
    ],
  },
  jnvst: {
    id: "jnvst",
    badge: "100% Free Govt Residential • CBSE Board",
    badgeType: "govt",
    icon: "menu_book",
    title: "Navodaya Selection (JNVST)",
    targetTag: "Class VI & IX Entrance",
    description:
      "Targeted coaching for Jawahar Navodaya Vidyalayas (JNVs), offering 100% free quality modern residential education, boarding, and CBSE schooling. Special focus on Western Odisha district quotas.",
    ageCriteria: [
      {
        label: "Class VI Admission",
        range: "10 to 12 Years",
        details:
          "Candidate must be born within the prescribed cutoff window set by Navodaya Vidyalaya Samiti (NVS) for the corresponding academic year.",
      },
      {
        label: "Class IX Lateral Entry",
        range: "13 to 15 Years",
        details:
          "Age bracket 13-15 years as of 1st May of the admission year. Applicable for vacant seats across district JNVs.",
      },
    ],
    prerequisites: [
      "For Class VI: Must have studied continuously in Classes III, IV, and V from a government or government-recognized school in the same district.",
      "Candidate must not have repeated Class V or appeared in JNVST previously for Class VI.",
      "Rural reservation eligibility requires studying Classes III, IV, and V in rural area schools.",
      "For Class IX: Must be studying in Class VIII in a recognized school of the district.",
    ],
    examPattern: {
      duration: "2 Hours (11:30 AM to 01:30 PM)",
      totalMarks: "80 Questions • 100 Marks",
      mode: "OMR Based Objective Multiple Choice",
      subjects: [
        { name: "Mental Ability Test (Non-Verbal Puzzles)", marks: "50 Qs / 50 Marks" },
        { name: "Arithmetic Test (Maths Logic)", marks: "20 Qs / 25 Marks" },
        { name: "Language Test (Reading Comprehension)", marks: "20 Qs / 25 Marks" },
      ],
    },
    batchOptions: [
      "Annual JNV Foundation Batch",
      "Weekend Rural & Urban Scholar Batch",
      "60-Day Rapid OMR Speed Drills",
    ],
    highlights: [
      "Specialized 50-mark Non-Verbal Mental Ability speed drills",
      "Fast arithmetic computation shortcuts & elimination techniques",
      "Bilingual comprehension coaching (English & Odia)",
      "Targeted district-wise quota mock tests",
    ],
  },
  "oav-cbse": {
    id: "oav-cbse",
    badge: "School Excellence & Competitive Foundation",
    badgeType: "academic",
    icon: "auto_stories",
    title: "OAV & CBSE Foundation",
    targetTag: "Classes VI to X",
    description:
      "Dual-track academic mastery reinforcing school syllabus and board examinations while building an ironclad foundation for Olympiads (IMO, NSO), NTSE, and early preparation for defence careers (NDA, CDS).",
    ageCriteria: [
      {
        label: "Class VI Entry (OAV)",
        range: "10 to 12 Years",
        details:
          "For Odisha Adarsha Vidyalaya (OAVS) Class VI entrance: 10 to 12 years of age as per Odisha School & Mass Education Department rules.",
      },
      {
        label: "Classes VII to X (CBSE)",
        range: "11 to 16 Years",
        details:
          "Corresponding age criteria matching standard CBSE academic classes and board examination guidelines.",
      },
    ],
    prerequisites: [
      "For OAVS: Passed or currently studying in Class V in any recognized school of the respective block/district in Odisha.",
      "For CBSE Foundation: Currently enrolled in Classes VI, VII, VIII, IX, or X in CBSE / ICSE / Odisha State Board.",
      "A desire to excel in school topper list and develop advanced problem-solving temperament.",
    ],
    examPattern: {
      duration: "OAV Entrance: 2 Hours | CBSE: Regular Term Tests",
      totalMarks: "OAVS: 52 Marks Objective | CBSE: NCERT & Olympiad",
      mode: "Objective + Subjective Evaluation",
      subjects: [
        { name: "Mathematics (NCERT + Advanced Olympiad)", marks: "High Weightage" },
        { name: "Science (Physics, Chemistry, Biology)", marks: "Concept Labs" },
        { name: "English Grammar & Spoken Fluency", marks: "Communication" },
        { name: "Social Studies & Mental Ability", marks: "Foundation Track" },
      ],
    },
    batchOptions: [
      "Annual Day-Scholar Evening Program",
      "Weekend Olympiad & Foundation Accelerator",
      "Summer Science & Math Mastery Boot Camp",
    ],
    highlights: [
      "Ironclad concept-first teaching ensuring 90%+ in school board exams",
      "Early competitive edge for IMO, NSO, NTSE, and future defence entries",
      "Bilingual doubt clearing (English & Odia) with personal faculty mentors",
      "Weekly objective & subjective evaluations with detailed feedback",
    ],
  },
  oavs: {
    id: "oavs",
    badge: "Odisha State Model Schools • English Medium",
    badgeType: "govt",
    icon: "auto_stories",
    title: "Odisha Adarsha Vidyalaya (OAVS) Entrance",
    targetTag: "Class VI Entry (Free Govt Boarding)",
    description:
      "Targeted English-medium entrance coaching for Odisha Adarsha Vidyalayas under the Department of School & Mass Education, Govt of Odisha. Bringing world-class CBSE education to block toppers.",
    ageCriteria: [
      {
        label: "Class VI Admission",
        range: "10 to 12 Years",
        details:
          "Candidate must be between 10 and 12 years of age as on the prescribed cutoff date by the Department of School & Mass Education, Govt of Odisha.",
      },
    ],
    prerequisites: [
      "Candidate must be continuing in or have passed Class V from any government or recognized school of the respective block in Odisha.",
      "Resident of the concerned block/district with valid resident / nativity certificate.",
      "Strong foundation in elementary arithmetic, general science, and basic English grammar.",
    ],
    examPattern: {
      duration: "2 Hours (120 Minutes)",
      totalMarks: "52 Questions • 52 Marks",
      mode: "Offline Pen & Paper (OMR Multiple Choice)",
      subjects: [
        { name: "English Grammar & Comprehension", marks: "13 Marks" },
        { name: "Mathematics (NCERT / State Board)", marks: "13 Marks" },
        { name: "General Science Concepts", marks: "13 Marks" },
        { name: "Social Studies & Odisha Heritage", marks: "13 Marks" },
      ],
    },
    batchOptions: [
      "1-Year Block-Topper Comprehensive Batch",
      "Crash Course with 30+ Model Test Drills",
      "Weekend Dedicated Mentorship Batch",
    ],
    highlights: [
      "100% NCERT and Odisha syllabus aligned curriculum",
      "Bilingual doubt clearing (English & Odia) with expert faculty",
      "Daily 30-minute OMR bubble practice to eliminate filling errors",
      "Previous 5 years OAVS entrance question bank thoroughly solved",
    ],
  },
  cbse: {
    id: "cbse",
    badge: "Classes V to X • School Topper & Olympiad",
    badgeType: "academic",
    icon: "auto_stories",
    title: "CBSE Foundation & Olympiad Program",
    targetTag: "Classes V, VI, VII, VIII, IX & X",
    description:
      "Ironclad school academic foundation combined with IMO, NSO, and NTSE mentorship to secure top ranks early while laying the bedrock for future defence exams (NDA, CDS).",
    ageCriteria: [
      {
        label: "Classes V to VIII Entry",
        range: "10 to 14 Years",
        details:
          "Students currently enrolled in Classes 5th through 8th aiming for school academic supremacy and early competitive aptitude.",
      },
      {
        label: "Classes IX & X Pre-Foundation",
        range: "14 to 16 Years",
        details:
          "High-rigor preparation targeting 95%+ in CBSE Board exams and building foundation for NTSE and NDA entrance.",
      },
    ],
    prerequisites: [
      "Enrolled in any recognized CBSE, ICSE, or State Board affiliated school.",
      "Keen commitment towards disciplined daily self-study and conceptual problem solving.",
      "Basic arithmetic and science fundamentals at class level.",
    ],
    examPattern: {
      duration: "Weekly & Monthly Assessments",
      totalMarks: "100 Marks per Subject Assessment",
      mode: "Objective MCQs + Subjective Problem Solving",
      subjects: [
        { name: "Advanced Mathematics & Geometry", marks: "High Weightage" },
        { name: "Physics & Chemistry Concept Labs", marks: "Science Track" },
        { name: "Biology & Applied Sciences", marks: "Concept Mastery" },
        { name: "Logical Reasoning & Mental Ability", marks: "Olympiad Track" },
      ],
    },
    batchOptions: [
      "Annual Day-Scholar Evening Batch",
      "Weekend Olympiad & Competitive Accelerator",
      "Summer Math & Science Boot Camp",
    ],
    highlights: [
      "Concept-first teaching ensuring 90%+ in school exams",
      "IMO, NSO, and NSTSE Olympiad problem sheets",
      "Weekly error-analysis reports and individualized remediation",
      "Early foundation for NDA, JEE, and NEET aspirations",
    ],
  },
};

interface CourseDetailModalProps {
  courseId: string | null;
  onClose: () => void;
  onEnquire?: (courseName: string) => void;
}

export default function CourseDetailModal({
  courseId,
  onClose,
  onEnquire,
}: CourseDetailModalProps) {
  const course = courseId ? COURSES_DATA[courseId] : null;

  useEffect(() => {
    if (!course) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-[65] flex items-center justify-center p-3 sm:p-5 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/75 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-surface-container-lowest text-on-surface rounded-3xl shadow-2xl border border-surface-variant/40 z-10 flex flex-col focus:outline-none animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header Banner */}
        <div className="relative bg-gradient-to-r from-primary via-primary-container to-tertiary text-on-primary p-6 sm:p-8 rounded-t-3xl overflow-hidden shrink-0">
          <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none" />
          <div className="absolute right-6 bottom-4 opacity-10 pointer-events-none">
            <Icon name={course.icon} className="text-8xl text-white" />
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Course Details"
            className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all cursor-pointer shadow-md focus:outline-none"
          >
            <Icon name="close" className="text-[20px]" />
          </button>

          <div className="relative z-10 space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Icon name={course.icon} className="text-sm" />
              <span>{course.badge}</span>
            </div>
            <h2
              id="course-modal-title"
              className="font-headline-md sm:font-headline-lg text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight"
            >
              {course.title}
            </h2>
            <p className="text-sm sm:text-base text-primary-fixed-dim font-medium leading-relaxed">
              {course.targetTag} • {course.description}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 space-y-6 sm:space-y-7 flex-1">
          {/* SECTION 1: AGE CRITERIA */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary border-b border-surface-variant/40 pb-2">
              <span className="w-8 h-8 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center text-lg">
                <Icon name="badge" className="text-lg" />
              </span>
              <h3 className="font-title-lg text-lg sm:text-xl font-bold text-primary">
                Age Criteria &amp; Eligibility
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {course.ageCriteria.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-low/70 border border-surface-variant/50 rounded-2xl p-4 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-label-md text-xs uppercase font-bold text-secondary tracking-wider">
                      {item.label}
                    </span>
                    <span className="bg-primary text-white text-xs font-extrabold px-2.5 py-0.5 rounded-full">
                      {item.range}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: ACADEMIC PREREQUISITES */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary border-b border-surface-variant/40 pb-2">
              <span className="w-8 h-8 rounded-xl bg-primary-fixed text-primary flex items-center justify-center text-lg">
                <Icon name="school" className="text-lg" />
              </span>
              <h3 className="font-title-lg text-lg sm:text-xl font-bold text-primary">
                Academic Prerequisites
              </h3>
            </div>

            <ul className="grid grid-cols-1 gap-2.5 pt-1">
              {course.prerequisites.map((req, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 bg-surface-container-lowest border border-surface-variant/40 p-3.5 rounded-2xl shadow-xs"
                >
                  <Icon
                    name="check_circle"
                    className="text-secondary-container text-lg mt-0.5 shrink-0"
                  />
                  <span className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {req}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 3: EXAM PATTERN & SUBJECTS */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary border-b border-surface-variant/40 pb-2">
              <span className="w-8 h-8 rounded-xl bg-surface-container-highest text-primary-container flex items-center justify-center text-lg">
                <Icon name="assignment" className="text-lg" />
              </span>
              <h3 className="font-title-lg text-lg sm:text-xl font-bold text-primary">
                Examination Pattern &amp; Subjects
              </h3>
            </div>

            <div className="bg-surface-container-low/60 border border-surface-variant/50 rounded-2xl p-4 sm:p-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-3 border-b border-surface-variant/40 text-xs sm:text-sm">
                <div>
                  <span className="text-on-surface-variant block text-[11px] uppercase tracking-wider font-semibold">
                    Duration
                  </span>
                  <span className="font-bold text-primary">
                    {course.examPattern.duration}
                  </span>
                </div>
                <div>
                  <span className="text-on-surface-variant block text-[11px] uppercase tracking-wider font-semibold">
                    Total Marks
                  </span>
                  <span className="font-bold text-secondary">
                    {course.examPattern.totalMarks}
                  </span>
                </div>
                <div>
                  <span className="text-on-surface-variant block text-[11px] uppercase tracking-wider font-semibold">
                    Testing Mode
                  </span>
                  <span className="font-bold text-primary">
                    {course.examPattern.mode}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">
                  Key Subject Weightage:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {course.examPattern.subjects.map((sub, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-surface-variant/30 text-xs sm:text-sm shadow-xs"
                    >
                      <span className="font-medium text-primary">{sub.name}</span>
                      <span className="font-bold text-secondary shrink-0 pl-2">
                        {sub.marks}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: BATCH FORMATS & ADAS HIGHLIGHTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Batch Options */}
            <div className="bg-surface-container-low/60 border border-surface-variant/40 rounded-2xl p-4 space-y-2.5">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <Icon name="schedule" className="text-secondary text-base" />
                <span>Available Batches</span>
              </div>
              <ul className="space-y-1.5">
                {course.batchOptions.map((batch, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-on-surface-variant"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    <span>{batch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ADAS Advantage */}
            <div className="bg-surface-container-low/60 border border-surface-variant/40 rounded-2xl p-4 space-y-2.5">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <Icon name="workspace_premium" className="text-secondary text-base" />
                <span>ADAS Preparation Advantage</span>
              </div>
              <ul className="space-y-1.5">
                {course.highlights.slice(0, 4).map((high, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-on-surface-variant"
                  >
                    <Icon
                      name="check_circle"
                      className="text-secondary-container text-sm mt-0.5 shrink-0"
                    />
                    <span>{high}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sticky / Pinned Modal Footer */}
        <div className="p-4 sm:p-6 bg-surface-container-low border-t border-surface-variant/40 rounded-b-3xl flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-on-surface-variant">
            <Icon name="verified" className="text-secondary text-base" />
            <span>Admissions Open for 2025–26 Sessions</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-surface-variant/60 hover:bg-surface-container text-primary text-xs sm:text-sm font-semibold transition-all cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onEnquire) {
                  onEnquire(course.title);
                }
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-secondary-container hover:bg-secondary text-on-secondary px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              <span>Enquire for {course.title.split("(")[0].trim()}</span>
              <Icon name="arrow_forward" className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
