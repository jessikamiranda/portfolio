"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const disciplines = [
  {
    number: "01",
    label: "Engineering",
    background: "#B9B0EF",
    description:
      "Scalable frontend architecture, reusable patterns and maintainable code.",
  },
  {
    number: "02",
    label: "Product",
    background: "#F6DC83",
    description:
      "Understanding business workflows and shaping solutions beyond individual screens.",
  },
  {
    number: "03",
    label: "Design",
    background: "#F4B8CF",
    description:
      "Turning complexity into interfaces that feel clear, intentional and easy to use.",
  },
];

export function AboutStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [allowHorizontalMotion, setAllowHorizontalMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const update = () => {
      setAllowHorizontalMotion(mediaQuery.matches);
    };

    update();

    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  const disableHorizontalMotion = shouldReduceMotion || !allowHorizontalMotion;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const engineeringX = useTransform(
    scrollYProgress,
    [0, 1],
    disableHorizontalMotion ? ["0%", "0%"] : ["-8%", "5%"],
  );

  const productX = useTransform(
    scrollYProgress,
    [0, 1],
    disableHorizontalMotion ? ["0%", "0%"] : ["7%", "-5%"],
  );

  const designX = useTransform(
    scrollYProgress,
    [0, 1],
    disableHorizontalMotion ? ["0%", "0%"] : ["-5%", "8%"],
  );

  const movement = [engineeringX, productX, designX];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="overflow-hidden border-t border-[var(--border)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Intro */}

        <div className="grid gap-10 px-6 md:px-10 lg:grid-cols-[0.55fr_1.45fr] lg:px-16">
          <div>
            <p className="text-sm font-medium text-[var(--muted)]">About</p>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
              Frontend Software Engineer based in São Paulo, Brazil.
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl md:text-7xl md:leading-[0.94] md:tracking-[-0.055em] lg:text-8xl">
              I work where code,
              <br />
              product and design
              <br />
              overlap.
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              I enjoy taking complex business problems and turning them into
              digital products that are structured well under the hood and
              simple to use on the surface.
            </p>
          </div>
        </div>

        {/* Kinetic disciplines */}

        <div className="mt-20 space-y-3 md:mt-28 md:space-y-4">
          {disciplines.map((discipline, index) => (
            <motion.div
              key={discipline.label}
              style={{
                x: movement[index],
              }}
              className="px-3 md:px-6"
            >
              <div
                style={{
                  backgroundColor: discipline.background,
                }}
                className="mx-auto flex min-h-[150px] max-w-[1500px] flex-col justify-between rounded-[2rem] px-6 py-6 text-[#171717] md:min-h-[190px] md:flex-row md:items-center md:px-10 lg:px-14"
              >
                <div className="flex items-start gap-5">
                  <span className="pt-2 text-xs font-medium uppercase tracking-[0.12em] text-black/65">
                    {discipline.number}
                  </span>

                  <h3 className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.85] tracking-[-0.065em]">
                    {discipline.label}
                  </h3>
                </div>

                <p className="mt-8 max-w-sm text-base leading-relaxed text-black/60 md:mt-0 md:text-right">
                  {discipline.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}

        <div className="mt-16 px-6 md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-[1400px] gap-12 border-t border-[var(--border)] pt-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-[var(--muted)]">
                How I think about frontend
              </p>
            </div>

            <div>
              <p className="max-w-4xl text-2xl font-medium leading-[1.35] tracking-[-0.025em] md:text-4xl">
                A good frontend is not a collection of polished screens. It is a
                system where architecture, interaction and product decisions
                reinforce each other.
              </p>

              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[var(--muted)]">
                <span>React</span>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
                <span>Supabase</span>
                <span>Playwright</span>
                <span>Vitest</span>
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
