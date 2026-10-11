"use client";

import { useState, useEffect, useRef } from "react";
import Icon from "@/components/Icon";

export interface Testimonial {
  id: number;
  name: string;
  initials: string;
  role: string;
  quote: string;
  avatarBg: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Guna Sekhar",
    initials: "GS",
    role: "Father of Cadet Tarun • Sambalpur",
    quote:
      "I had a wonderful experience at ADAS Academy. The trainers explain concepts patiently and clearly. The institute atmosphere motivates students to learn more and achieve excellence in defence school exams.",
    avatarBg: "bg-gradient-to-tr from-[#e53935] to-[#ff5722]",
  },
  {
    id: 2,
    name: "Ashok Vangallu",
    initials: "AV",
    role: "Father of Cadet Anmol • Bargarh",
    quote:
      "ADAS Academy in Sambalpur gave my son the premier entrance learning experience! The disciplined mock test training and OMR drills removed all exam fear. Teachers give dedicated personal guidance even after hours.",
    avatarBg: "bg-gradient-to-tr from-[#ea580c] to-[#f97316]",
  },
  {
    id: 3,
    name: "Priyamini Gurrala",
    initials: "PG",
    role: "Mother of Cadet Swati • Jharsuguda",
    quote:
      "ADAS is a perfect place for quality learning and discipline. The mentors are very supportive and explain all topics with unyielding clarity. I am completely satisfied with my daughter's transformation.",
    avatarBg: "bg-gradient-to-tr from-[#dc2626] to-[#f87171]",
  },
  {
    id: 4,
    name: "Bikash Panda",
    initials: "BP",
    role: "Father of Cadet Anmol • Sambalpur",
    quote:
      "My son cracked Sainik School Bhubaneswar in his first attempt. The mock test schedules and OMR drills at ADAS removed all his examination fear. Teachers give personal attention even after hours.",
    avatarBg: "bg-gradient-to-tr from-[#d97706] to-[#fb923c]",
  },
  {
    id: 5,
    name: "Sunita Meher",
    initials: "SM",
    role: "Mother of Cadet Swati • Bargarh",
    quote:
      "We enrolled our daughter into the residential hostel batch. The discipline, safety, and healthy routine transformed her confidence completely. Highly recommended for all defence aspirants across Odisha.",
    avatarBg: "bg-gradient-to-tr from-[#ef4444] to-[#fb923c]",
  },
];

export default function ParentVoicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonials.length;

  // Advance right to left
  const slideNext = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
      setIsSliding(false);
    }, 700);
  };

  // 15 seconds auto-scroll timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      slideNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, isSliding]);

  // Determine the 4 active card items:
  // - left (pos -1 before slide, pos -2 during slide)
  // - center (pos 0 before slide, pos -1 during slide)
  // - right (pos 1 before slide, pos 0 during slide)
  // - incoming (pos 2 before slide, pos 1 during slide)
  const leftItem = testimonials[(currentIndex - 1 + total) % total];
  const centerItem = testimonials[currentIndex];
  const rightItem = testimonials[(currentIndex + 1) % total];
  const incomingItem = testimonials[(currentIndex + 2) % total];

  const cards = [
    { item: leftItem, pos: isSliding ? -2 : -1, key: "card-left" },
    { item: centerItem, pos: isSliding ? -1 : 0, key: "card-center" },
    { item: rightItem, pos: isSliding ? 0 : 1, key: "card-right" },
    { item: incomingItem, pos: isSliding ? 1 : 2, key: "card-incoming" },
  ];

  const getCardStyle = (pos: number) => {
    // Desktop offsets: 380px per step
    // On small screens, percentage offsets
    switch (pos) {
      case 0:
        return {
          transform: "translate(-50%, 0) scale(1)",
          opacity: 1,
          zIndex: 30,
          filter: "none",
          pointerEvents: "auto" as const,
        };
      case 1:
        return {
          transform: "translate(calc(-50% + min(380px, 88vw)), 0) scale(0.92)",
          opacity: 0.5,
          zIndex: 10,
          filter: "blur(0.2px)",
          pointerEvents: "auto" as const,
        };
      case -1:
        return {
          transform: "translate(calc(-50% - min(380px, 88vw)), 0) scale(0.92)",
          opacity: 0.5,
          zIndex: 10,
          filter: "blur(0.2px)",
          pointerEvents: "auto" as const,
        };
      case 2:
        return {
          transform: "translate(calc(-50% + min(760px, 176vw)), 0) scale(0.85)",
          opacity: 0,
          zIndex: 0,
          filter: "none",
          pointerEvents: "none" as const,
        };
      case -2:
      default:
        return {
          transform: "translate(calc(-50% - min(760px, 176vw)), 0) scale(0.85)",
          opacity: 0,
          zIndex: 0,
          filter: "none",
          pointerEvents: "none" as const,
        };
    }
  };

  return (
    <div
      className="relative w-full py-6 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Stage Container */}
      <div className="relative w-full min-h-[350px] sm:min-h-[380px] flex items-center justify-center overflow-hidden">
        {cards.map(({ item, pos, key }) => {
          const style = getCardStyle(pos);
          const isCenter = pos === 0;

          return (
            <div
              key={key}
              onClick={() => {
                if (pos === 1) slideNext();
              }}
              style={style}
              className={`absolute top-0 left-1/2 w-[330px] sm:w-[420px] md:w-[460px] max-w-[88vw] ${isSliding
                ? "transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                : "transition-none"
                }`}
            >
              {/* Card Surface */}
              <div
                className={`w-full bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between ${isCenter
                  ? "shadow-[0_22px_60px_-15px_rgba(7,44,84,0.18)] border border-slate-100 ring-1 ring-black/5"
                  : "shadow-[0_12px_32px_-8px_rgba(7,44,84,0.08)] border border-slate-100 cursor-pointer hover:opacity-75 transition-opacity"
                  }`}
              >
                <div>
                  {/* Header Row: 5 Solid Orange Stars + Quotation Mark */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#fe6332]">
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Icon
                          key={star}
                          name="star"
                          className="text-[20px] fill-current"
                        />
                      ))}
                    </div>

                    {/* Giant Light Gray Quotation Mark */}
                    <svg
                      className="w-10 h-10 text-slate-200 fill-current select-none shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Review Quote Body */}
                  <p className="text-slate-600 font-normal text-sm sm:text-base leading-relaxed mb-6 min-h-[4.5rem]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Row */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100/80">
                  <div
                    className={`w-11 h-11 rounded-full ${item.avatarBg} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm`}
                  >
                    {item.initials}
                  </div>
                  <div className="min-w-0 text-left">
                    <h4 className="font-bold text-slate-900 text-base leading-tight truncate">
                      {item.name}
                    </h4>
                    <p className="text-caption font-caption text-slate-500 leading-tight mt-0.5 truncate">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
