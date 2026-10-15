"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import EnquiryModal from "@/components/EnquiryModal";

export default function Footer() {
  const [applyOpen, setApplyOpen] = useState(false);

  return (
    <footer className="w-full bg-primary text-on-primary relative overflow-hidden">
      {/* Decorative gradient top bar */}
      <div className="w-full h-3 bg-gradient-to-r from-secondary-container via-secondary to-primary-container relative opacity-90"></div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin py-space-xl">
        {/* Call to action card */}
        <div className="bg-primary-container rounded-xl p-space-lg md:p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-lg mb-space-xl">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-headline-md text-headline-md text-on-primary mb-space-xs">
              Ready to start your child&apos;s journey to Sainik School?
            </h3>
            <p className="font-body-md text-body-md text-on-primary-container">
              Enroll today at Acharya Defence Academy, Sambalpur for rigorous, disciplined preparation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-md shrink-0 justify-center w-full md:w-auto">
            <button
              type="button"
              onClick={() => setApplyOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-secondary-container hover:bg-secondary text-on-secondary font-label-btn text-label-btn px-6 py-3 rounded-full shadow-md transition-all cursor-pointer"
              data-path="apply-for-admission"
            >
              Apply for Admission
            </button>
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent text-on-primary font-label-btn text-label-btn px-6 py-3 rounded-full border border-surface-container-highest hover:bg-on-primary hover:text-primary transition-all gap-space-xs"
              href="tel:9149771961"
            >
              <Icon name="call" className="text-[18px]" />
              Call Now
            </a>
          </div>
        </div>

        {/* 4-column footer links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl">
          {/* Brand Info */}
          <div className="space-y-space-md">
            <div className="flex items-center gap-space-sm">
              {/* <img
                alt="Acharya Defence Academy Crest Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1ULKJzJOHT9R1kMJgWS94kd5pichAiEtXmYNyHq-Fva_Bsw1XYE5udlA3Se-eCtaM5Z4KfHoHvfKPT07mBtfdNCqkJTrL9fRcy7SNKzB9p1QU3tVDFYl1aFx4tnZkzZ-a1A0uHL5NTYEszRGUMEWSQFilFXTJ6BQ5dOISsX68F4FJm2TJDZQcqZ858AIRW405FbYdNuGfZ8dpPKGiBfN6xLyepcI6ywH53e6SSaFXW-WQ"
              /> */}
              <span className="font-title-lg text-title-lg text-on-primary">
                ADA Sambalpur
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
              Gateway to Sainik School • Future Victories Begin Here. Fostering institutional excellence and disciplined leadership.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <a
                className="w-9 h-9 rounded-full bg-primary-container text-on-primary hover:bg-secondary-container transition-colors flex items-center justify-center"
                href="https://www.facebook.com/p/Acharya-Defence-Academy-Sambalpur-61567984272726/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Icon name="facebook" className="text-[18px]" />
              </a>
              <a
                className="w-9 h-9 rounded-full bg-primary-container text-on-primary hover:bg-secondary-container transition-colors flex items-center justify-center"
                href="https://www.instagram.com/hsasbp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Icon name="instagram" className="text-[18px]" />
              </a>
              <a
                className="w-9 h-9 rounded-full bg-primary-container text-on-primary hover:bg-secondary-container transition-colors flex items-center justify-center"
                href="https://www.youtube.com/@adas_sainik_school"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Icon name="youtube" className="text-[18px]" />
              </a>
            </div>
          </div>

          {/* Courses Links */}
          <div>
            <h4 className="font-title-md text-title-md text-secondary-fixed mb-space-md uppercase tracking-wider">
              Courses
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-on-primary-container">
              <li className="hover:text-on-primary transition-colors">
                <Link data-path="courses" href="/courses">
                  Sainik School Entrance (AISSEE)
                </Link>
              </li>
              <li className="hover:text-on-primary transition-colors">
                <Link data-path="courses" href="/courses">
                  Rashtriya Military School (RMS)
                </Link>
              </li>
              <li className="hover:text-on-primary transition-colors">
                <Link data-path="courses" href="/courses">
                  RIMC
                </Link>
              </li>
              <li className="hover:text-on-primary transition-colors">
                <Link data-path="courses" href="/courses">
                  Jawahar Navodaya Vidyalaya
                </Link>
              </li>
              <li className="hover:text-on-primary transition-colors">
                <Link data-path="courses" href="/courses">
                  Odisha Adarsh Vidyalaya
                </Link>
              </li>
              <li className="hover:text-on-primary transition-colors">
                <Link data-path="courses" href="/courses">
                  CBSE Foundation (Class V-X)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-title-md text-title-md text-secondary-fixed mb-space-md uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-on-primary-container">
              <li className="hover:text-on-primary transition-colors">
                <Link data-path="about-us" href="/about">
                  About Us
                </Link>
              </li>
              <li className="hover:text-on-primary transition-colors">
                <Link data-path="results-and-toppers" href="/result">
                  Hall of Fame &amp; Results
                </Link>
              </li>
              <li className="hover:text-on-primary transition-colors">
                <Link data-path="faculty" href="/faculty">
                  Expert Faculty
                </Link>
              </li>
              <li className="hover:text-on-primary transition-colors">
                <Link data-path="gallery" href="/gallery">
                  Campus &amp; Hostel Gallery
                </Link>
              </li>
              <li className="hover:text-on-primary transition-colors">
                <a data-path="testimonials" href="/#testimonials">
                  Parent Testimonials
                </a>
              </li>
              <li className="hover:text-on-primary transition-colors">
                <Link data-path="contact" href="/contact">
                  Contact &amp; Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-title-md text-title-md text-secondary-fixed mb-space-md uppercase tracking-wider">
              Contact Details
            </h4>
            <div className="space-y-space-sm font-body-sm text-body-sm text-on-primary-container">
              <p className="flex items-start gap-space-xs">
                <Icon name="location_on" className="text-[18px] text-secondary-container mt-0.5 shrink-0" />
                <span>Near City Railway Station, Parvati Vihar, Dhankauda, Sambalpur, Odisha</span>
              </p>
              <p className="flex items-center gap-space-xs">
                <Icon name="call" className="text-[18px] text-secondary-container shrink-0" />
                <a className="hover:text-on-primary" href="tel:9149771961">
                  +91 9149771961
                </a>
              </p>
              <p className="flex items-center gap-space-xs">
                <Icon name="mail" className="text-[18px] text-secondary-container shrink-0" />
                <a className="hover:text-on-primary" href="mailto:hsasbp@gmail.com">
                  hsasbp@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-space-xs">
                <Icon name="schedule" className="text-[18px] text-secondary-container shrink-0" />
                <span>Mon - Sat: 9:00 AM - 9:00 PM</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-primary-container pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md text-center sm:text-left font-caption text-caption text-on-primary-container">
          <p>© Acharya Defence Academy (ADAS). All Rights Reserved.</p>
          <div className="flex items-center gap-space-md">
            <Link className="hover:text-on-primary transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-on-primary transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="hover:text-on-primary transition-colors" href="#">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
      <EnquiryModal open={applyOpen} onClose={() => setApplyOpen(false)} />
    </footer>
  );
}
