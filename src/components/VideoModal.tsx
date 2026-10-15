"use client";

import { useEffect, useRef } from "react";
import Icon from "@/components/Icon";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  videoSrc: string;
}

export default function VideoModal({ open, onClose, videoSrc }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

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

  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else if (!open && videoRef.current) {
      videoRef.current.pause();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Campus Life Video"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Video"
          className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white transition-all cursor-pointer shadow-lg"
        >
          <Icon name="close" className="text-[22px]" />
        </button>

        <div className="w-full aspect-video bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            autoPlay
            muted
            playsInline
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
