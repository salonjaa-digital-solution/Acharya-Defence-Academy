"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

export default function CallbackCard() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    alert("Thank you! Our admission counsellor will contact you shortly.");
  };

  return (
    <div className="lg:col-span-5 bg-gradient-to-br from-primary via-primary-container to-tertiary text-on-primary rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      <div className="space-y-space-xs mb-6">
        <span className="bg-secondary-container text-on-secondary text-caption font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
          Fast Response Desk
        </span>
        <h3 className="font-headline-md text-headline-md text-on-primary">
          Request a Free Call Back
        </h3>
        <p className="font-body-sm text-body-sm text-on-primary-container">
          Our academic directors will call you within 2 business hours with complete prospectus details.
        </p>
      </div>

      {formSubmitted ? (
        <div className="bg-surface-container-lowest/10 border border-secondary-container/40 p-6 rounded-2xl text-center space-y-3">
          <Icon name="check_circle" className="text-secondary-container text-4xl" />
          <h4 className="font-title-lg text-title-lg font-bold text-on-primary">
            Request Received!
          </h4>
          <p className="font-body-sm text-body-sm text-on-primary-container">
            Our team will call you at your preferred time. For immediate guidance, please call{" "}
            <a className="text-secondary-fixed underline" href="tel:9149771961">
              +91 9149771961
            </a>
            .
          </p>
        </div>
      ) : (
        <form className="space-y-space-md" onSubmit={handleFormSubmit}>
          <div>
            <label className="block font-caption text-caption text-secondary-fixed mb-1 font-semibold uppercase">
              Parent Full Name
            </label>
            <input
              className="w-full h-12 px-4 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary-container"
              placeholder="e.g. Ramesh Kumar Dash"
              required
              type="text"
            />
          </div>

          <div>
            <label className="block font-caption text-caption text-secondary-fixed mb-1 font-semibold uppercase">
              Mobile Number (WhatsApp Preferred)
            </label>
            <input
              className="w-full h-12 px-4 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary-container"
              placeholder="e.g. 9149771961"
              required
              type="tel"
            />
          </div>

          <div className="grid grid-cols-2 gap-space-sm">
            <div>
              <label className="block font-caption text-caption text-secondary-fixed mb-1 font-semibold uppercase">
                Student Grade
              </label>
              <select
                defaultValue="Class 5th"
                className="w-full h-12 px-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary-container"
              >
                <option>Class 4th</option>
                <option>Class 5th</option>
                <option>Class 6th</option>
                <option>Class 7th</option>
                <option>Class 8th</option>
              </select>
            </div>

            <div>
              <label className="block font-caption text-caption text-secondary-fixed mb-1 font-semibold uppercase">
                Target Exam
              </label>
              <select
                defaultValue="AISSEE (Sainik)"
                className="w-full h-12 px-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary-container"
              >
                <option>AISSEE (Sainik)</option>
                <option>RMS Military</option>
                <option>RIMC </option>
                <option>JNV Navodaya</option>
                <option>OAV Odisha</option>
              </select>
            </div>
          </div>

          <button
            className="w-full bg-gradient-to-r from-secondary-container to-secondary text-on-secondary font-label-btn text-label-btn py-4 rounded-full shadow-[0_6px_20px_0_rgba(254,99,50,0.45)] hover:shadow-[0_8px_25px_0_rgba(254,99,50,0.6)] transition-all flex items-center justify-center gap-space-xs cursor-pointer"
            type="submit"
          >
            <span>Get Instant Free Call Back</span>
            <Icon name="phone_in_talk" className="text-[18px]" />
          </button>

          <p className="font-caption text-caption text-center text-on-primary-container">
            🔒 Your information is confidential. No spam guaranteed.
          </p>
        </form>
      )}
    </div>
  );
}
