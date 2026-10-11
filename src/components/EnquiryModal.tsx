"use client";

import { useEffect } from "react";
import Icon from "@/components/Icon";
import CallbackCard from "@/components/CallbackCard";

export default function EnquiryModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Admission enquiry form"
    >
      <div
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-surface-container-lowest/15 hover:bg-surface-container-lowest/30 text-on-primary transition-colors cursor-pointer"
        >
          <Icon name="close" className="text-[20px]" />
        </button>
        <CallbackCard />
      </div>
    </div>
  );
}
