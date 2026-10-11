"use client";

import { useState } from "react";
import EnquiryModal from "@/components/EnquiryModal";

export default function CampusVisitActions() {
  const [visitOpen, setVisitOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-space-sm w-full lg:w-auto shrink-0">
      <button
        type="button"
        onClick={() => setVisitOpen(true)}
        className="w-full sm:w-auto lg:w-full text-center bg-tertiary-container hover:bg-tertiary text-on-tertiary font-label-md text-label-md px-space-lg py-3.5 rounded-xl transition-all shadow-lg hover:shadow-none flex items-center justify-center gap-space-xs cursor-pointer"
        data-path="admissions-enquiry"
      >
        <span className="material-symbols-outlined text-[20px]">
          calendar_month
        </span>
        <span>Book a Campus Visit</span>
      </button>
      <a
        className="w-full sm:w-auto lg:w-full text-center bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-md text-label-md px-space-lg py-3 rounded-xl transition-colors flex items-center justify-center gap-space-xs"
        href="https://maps.google.com/?q=Sambalpur+Odisha"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-[20px]">
          directions
        </span>
        <span>Get Directions</span>
      </a>
      <EnquiryModal open={visitOpen} onClose={() => setVisitOpen(false)} />
    </div>
  );
}
