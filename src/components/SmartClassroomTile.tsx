"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import {
  smartClassroomInteractive,
  smartClassroomDirector,
  smartClassroomSession,
} from "@/assets";

interface ClassroomSlide {
  image: StaticImageData;
  alt: string;
  tag: string;
}

const slides: ClassroomSlide[] = [
  {
    image: smartClassroomInteractive,
    alt: "Interactive Smart Board Teaching at Acharya Defence Academy",
    tag: "Interactive Smart Board",
  },
  {
    image: smartClassroomDirector,
    alt: "Director & Faculty Mentoring in Smart Classroom",
    tag: "Faculty Mentorship",
  },
  {
    image: smartClassroomSession,
    alt: "Acoustic & Multimedia Classroom in Session",
    tag: "Digital Projection & Audio",
  },
];

export default function SmartClassroomTile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="md:col-span-2 lg:col-span-2 relative rounded-2xl overflow-hidden shadow-sm group min-h-[300px] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides with Crossfade */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={idx === 0}
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}

      {/* Top Floating Badges & Slide Indicator */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white border border-white/15 text-[11px] font-medium tracking-wide">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{slides[currentIndex].tag}</span>
        </div>

        {/* Thumbnail / Dot Navigation */}
        <div className="flex items-center gap-1.5 pointer-events-auto bg-black/45 backdrop-blur-md px-2 py-1 rounded-full border border-white/15">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? "w-5 h-1.5 bg-[#fe6332]"
                  : "w-1.5 h-1.5 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Prev / Next Quick Controls (fade in on hover) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        aria-label="Previous classroom view"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/15"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        aria-label="Next classroom view"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/15"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom Content Overlay - Matches Bento Design System */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-t from-primary/95 via-primary/40 to-transparent p-space-md flex flex-col justify-end pointer-events-none">
        <span className="font-label-sm text-label-sm text-tertiary-fixed uppercase tracking-wider">
          Acoustic &amp; Multimedia
        </span>
        <h3 className="font-headline-sm text-headline-sm text-on-primary">
          Smart Interactive Classrooms
        </h3>
        <p className="font-body-sm text-body-sm text-primary-fixed-dim line-clamp-2">
          Equipped with digital projection, instant diagnostic clickers, and comprehensive subject visualizers.
        </p>
      </div>
    </div>
  );
}
