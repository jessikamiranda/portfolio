"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const experiences = [
  {
    number: "01",
    company: "Collab Holding",
    role: "Senior Frontend Engineer",
    period: "2026 — Present",
    location: "São Paulo · Remote",
    description:
      "Owning the frontend of a greenfield enterprise platform from architecture to delivery, working as the sole Frontend Engineer alongside the backend team.",
    accent: "#B9B0EF",
    foreground: "#171717",
    highlights: [
      "Frontend architecture",
      "Authentication & RBAC",
      "Internationalization",
      "Complex business workflows",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    number: "02",
    company: "idworks",
    role: "Lead Frontend Engineer",
    previousRole: "Previously Frontend Engineer · 2024 — 2025",
    period: "2025 — 2026",
    location: "São Paulo · Hybrid",
    description:
      "Led frontend development across a multi-tenant ERP ecosystem, combining architecture, product development and team leadership.",
    accent: "#F4B8CF",
    foreground: "#171717",
    metrics: [
      {
        value: "4",
        label: "Frontend Engineers led",
      },
      {
        value: "650+",
        label: "Active companies",
      },
      {
        value: "~75%",
        label: "Main screens modernized",
      },
      {
        value: "6",
        label: "Products worked across",
      },
    ],
    stack: ["React", "JavaScript", "ERP", "WMS", "POS", "ZPL"],
  },
  {
    number: "03",
    company: "TC | Sencon",
    role: "Frontend Engineer",
    period: "2022 — 2023",
    location: "Brazil · Remote",
    description:
      "Worked on the migration of Sencon's platform from Angular to React and TypeScript after its acquisition by TC, combining frontend development with interface and workflow design.",
    accent: "#F6DC83",
    foreground: "#171717",
    highlights: [
      "Angular → React migration",
      "TypeScript",
      "REST API integrations",
      "100% of screens redesigned in Figma",
    ],
    stack: ["React", "TypeScript", "Figma", "REST APIs"],
  },
];

type Experience = (typeof experiences)[number];

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yearY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [50, 0, -70],
  );

  return (
    <motion.article
      ref={ref}
      style={
        {
          backgroundColor: experience.accent,
          color: experience.foreground,
          "--card-top": `${96 + index * 18}px`,
        } as React.CSSProperties
      }
      className="
    relative
    mb-6
    min-h-0
    overflow-hidden
    rounded-[2rem]
    border
    border-black/10
    px-6
    py-8
    shadow-[0_24px_80px_rgba(0,0,0,0.12)]

    md:px-10
    md:py-10

    lg:sticky
    lg:top-[var(--card-top)]
    lg:mb-[22vh]
    lg:min-h-[70svh]
    lg:px-14
    lg:py-12
  "
    >
      {/* giant decorative year */}

      <motion.p
        aria-hidden="true"
        style={{ y: yearY }}
        className="pointer-events-none absolute -bottom-[0.18em] -right-[0.02em] select-none text-[clamp(10rem,24vw,24rem)] font-semibold leading-none tracking-[-0.09em] text-black/[0.055]"
      >
        {experience.period.slice(0, 4)}
      </motion.p>

      <div className="relative z-10 flex min-h-0 flex-col lg:min-h-[calc(70svh-6rem)]">
        {/* top */}

        <div className="flex items-start justify-between text-xs font-medium uppercase tracking-[0.12em] text-black/70">
          <p>Experience · {experience.number}</p>

          <p>{experience.period}</p>
        </div>

        {/* content */}

        <div className="grid gap-10 py-10 lg:my-auto lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-16">
          <div>
            <h3 className="text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              {experience.company}
            </h3>

            <p className="mt-6 text-xl font-medium tracking-[-0.02em]">
              {experience.role}
            </p>

            {experience.previousRole && (
              <p className="mt-2 text-sm text-black/70">
                {experience.previousRole}
              </p>
            )}

            <div className="mt-8 text-sm leading-relaxed text-black/70">
              <p>{experience.location}</p>
            </div>
          </div>

          <div>
            <p className="max-w-3xl text-xl leading-relaxed tracking-[-0.015em] text-black/70 md:text-2xl">
              {experience.description}
            </p>

            {experience.metrics && (
              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 lg:mt-12 lg:grid-cols-4">
                {experience.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="border-t border-black/20 pt-4"
                  >
                    <p className="text-4xl font-semibold tracking-[-0.055em] md:text-5xl">
                      {metric.value}
                    </p>

                    <p className="mt-2 max-w-[10rem] text-sm leading-snug text-black/70">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {experience.highlights && (
              <div className="mt-12 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {experience.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="border-t border-black/20 pt-4 text-sm font-medium"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* bottom */}

        <div className="flex flex-col gap-5 border-t border-black/15 pt-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {experience.stack.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-black/20 px-3 py-1.5 text-xs font-medium"
              >
                {technology}
              </span>
            ))}
          </div>

          <p className="hidden text-xs uppercase tracking-[0.12em] text-black/45 lg:block">
            Scroll to continue ↓
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="
    relative
    z-10
    -mt-8
    rounded-t-[2.5rem]
    bg-[var(--background)]
    py-24
    md:-mt-12
    md:rounded-t-[3.5rem]
    md:py-32
  "
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        {/* intro */}

        <div className="mb-20 grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <div>
            <p className="text-sm font-medium text-[var(--muted)]">
              Experience
            </p>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
              From product development to frontend architecture and team
              leadership.
            </p>
          </div>

          <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl lg:text-8xl">
            Building products.
            <br />
            Modernizing systems.
            <br />
            Leading teams.
          </h2>
        </div>

        {/* cards */}

        <div>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* additional */}

        <div className="mt-10 flex flex-col gap-5 border-t border-[var(--border)] pt-8 md:flex-row md:items-center md:justify-between lg:mt-[-8vh]">
          <p className="text-[var(--muted)]">Additional experience</p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span className="font-medium">Telecom Analyst · Delfia</span>

            <span className="text-[var(--muted)]">Dec 2023 — Oct 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}
