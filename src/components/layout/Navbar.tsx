"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/adas.jpg";
import Icon from "@/components/Icon";
import EnquiryModal from "@/components/EnquiryModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setEnquiryOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isCourses = pathname === "/courses";
  const isResult = pathname === "/result";
  const isFaculty = pathname === "/faculty";
  const isGallery = pathname === "/gallery";
  const isContact = pathname === "/contact";

  const navItems = [
    { label: "Home", href: "/", path: "home", active: isHome },
    { label: "About", href: "/about", path: "about", active: isAbout },
    { label: "Courses", href: "/courses", path: "courses", active: isCourses },
    { label: "Results", href: "/result", path: "results", active: isResult },
    { label: "Faculty", href: "/faculty", path: "faculty", active: isFaculty },
    { label: "Gallery", href: "/gallery", path: "gallery", active: isGallery },
    { label: "Contact", href: "/contact", path: "contact", active: isContact },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <header
        className={`w-full transition-all duration-300 ${scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-surface-variant/40 shadow-[0_4px_24px_rgba(7,44,84,0.08)]"
            : "bg-white/95 backdrop-blur-md border-b border-surface-container/60 shadow-[0_2px_12px_rgba(7,44,84,0.04)]"
          }`}
      >
        <div className="h-16 max-w-[1280px] mx-auto px-3 sm:px-margin-sm lg:px-margin flex items-center justify-between gap-2 sm:gap-space-md">
          {/* Brand Logo & Title */}
          <Link
            className="flex items-center gap-2 sm:gap-2.5 group shrink-0 focus:outline-none"
            data-path="home"
            href="/"
            aria-label="ADAS Sambalpur — Home"
          >
            <div className="relative h-12 sm:h-14 w-auto flex items-center">
              <Image
                alt="Acharya Defence Academy logo"
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                src={logo}
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-xs sm:text-sm text-primary font-bold tracking-tight leading-none group-hover:text-secondary transition-colors">
                ADA
              </span>
              <span className="font-label-sm text-[8px] sm:text-[9px] text-secondary font-bold uppercase tracking-widest leading-normal">
                Sambalpur
              </span>
            </div>
          </Link>

          {/* Modern Capsule Navigation Bar (Desktop) */}
          <nav
            className="hidden xl:flex items-center gap-1 p-1.5 bg-surface-container-low/80 backdrop-blur-sm rounded-full border border-surface-variant/40 shadow-xs"
            data-active-classes="text-on-tertiary-container font-semibold"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                data-path={item.path}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${item.active
                    ? "bg-white text-primary shadow-xs ring-1 ring-black/5"
                    : "text-on-surface-variant hover:text-primary hover:bg-white/60"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone Quick Call Pill */}
            <a
              className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low/90 hover:bg-surface-container text-primary hover:text-secondary transition-all border border-surface-variant/40 text-xs font-semibold group shadow-xs"
              href="tel:9149771961"
            >
              <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                <Icon name="call" className="text-[13px]" />
              </span>
              <span className="font-label-btn text-xs tracking-wide">
                +91 9149771961
              </span>
            </a>

            {/* Modern Enquire Button */}
            <button
              type="button"
              onClick={() => setEnquiryOpen(true)}
              className="inline-flex items-center gap-1 sm:gap-1.5 bg-primary hover:bg-primary-container text-white font-semibold text-[11px] sm:text-xs uppercase tracking-wider px-2.5 sm:px-4 py-2 rounded-xl transition-all shadow-[0_2px_8px_rgba(7,44,84,0.18)] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shrink-0 whitespace-nowrap"
              data-path="admissions-enquiry"
            >
              <span>Enquire Now</span>
              <Icon name="east" className="text-[12px] sm:text-[13px]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-surface-container-low hover:bg-surface-container border border-surface-variant/40 text-primary transition-all focus:outline-none shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              <Icon
                name={mobileMenuOpen ? "close" : "menu"}
                className="text-[22px]"
              />
            </button>
          </div>
        </div>

        {/* Modern Mobile Drawer / Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white/95 backdrop-blur-xl border-t border-surface-variant/40 px-margin-sm py-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  data-path={item.path}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${item.active
                      ? "bg-surface-container-low text-primary font-bold border-l-4 border-primary"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-lowest"
                    }`}
                >
                  <span>{item.label}</span>
                  <Icon
                    name="east"
                    className="text-[14px] opacity-40 hover:opacity-100"
                  />
                </Link>
              ))}

              <div className="mt-3 pt-3 border-t border-surface-variant/30 flex flex-col gap-2">
                <a
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-container-low text-primary text-xs font-semibold border border-surface-variant/40"
                  href="tel:9149771961"
                >
                  <Icon name="call" className="text-[16px] text-secondary" />
                  <span>Call: +91 9149771961</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Enquiry Modal with Callback Card */}
      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
