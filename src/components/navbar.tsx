"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  {
    id: "projects",
    label: "Work",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

const darkSections = ["projects", "contact"];

export function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    let ticking = false;

    const updateNavigation = () => {
      setIsScrolled(window.scrollY > 16);

      /*
       * Detect which background is currently behind the navbar.
       */
      const navProbe = 68;

      const dark = darkSections.some((id) => {
        const element = document.getElementById(id);

        if (!element) {
          return false;
        }

        const rect = element.getBoundingClientRect();

        return rect.top <= navProbe && rect.bottom > navProbe;
      });

      setIsDark(dark);

      /*
       * Detect the current section.
       */
      const sectionProbe = Math.min(window.innerHeight * 0.35, 320);

      let currentSection: string | null = null;

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();

        if (rect.top <= sectionProbe && rect.bottom > sectionProbe) {
          currentSection = section.id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;

      window.requestAnimationFrame(() => {
        updateNavigation();
        ticking = false;
      });
    };

    updateNavigation();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateNavigation);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateNavigation);
    };
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="
  sr-only
  z-[100]
  rounded-full
  bg-[#171717]
  px-4
  py-2
  text-sm
  font-medium
  text-white

  focus:not-sr-only
  focus:fixed
  focus:left-4
  focus:top-4
"
      >
        Skip to main content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-500 ${
          isDark ? "text-white" : "text-[var(--foreground)]"
        }`}
      >
        {/* Background */}

        <div
          aria-hidden="true"
          className={`absolute inset-0 border-b backdrop-blur-xl transition-all duration-500 ${
            isScrolled
              ? isDark
                ? "border-white/10 bg-[#141318]/80"
                : "border-black/[0.07] bg-[#F7F7F4]/80"
              : "border-transparent bg-transparent"
          }`}
        />

        <nav
          aria-label="Primary navigation"
          className="relative mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-16"
        >
          {/* Brand */}

          <Link
            href="/"
            className="group flex items-center gap-2.5 text-sm font-medium"
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[var(--pink)] transition-transform duration-300 group-hover:scale-125"
            />
            Jessika Miranda
          </Link>

          {/* Desktop navigation */}

          <div className="hidden items-center gap-8 md:flex">
            {sections.map((section) => {
              const active = activeSection === section.id;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  aria-current={active ? "location" : undefined}
                  className={`relative text-sm transition-opacity duration-300 ${
                    active ? "opacity-100" : "opacity-55 hover:opacity-100"
                  }`}
                >
                  {section.label}

                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full transition-all duration-300 ${
                      isDark ? "bg-white" : "bg-[var(--foreground)]"
                    } ${
                      active ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                  />
                </a>
              );
            })}

            <a
              href="/Jessika_Miranda_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isDark
                  ? "border-white/20 hover:bg-white hover:text-black"
                  : "border-black/15 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
              }`}
            >
              Résumé ↗
            </a>
          </div>

          {/* Mobile */}

          <a
            href="#contact"
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors md:hidden ${
              isDark ? "border-white/20" : "border-black/15"
            }`}
          >
            Contact
          </a>
        </nav>
      </header>
    </>
  );
}
