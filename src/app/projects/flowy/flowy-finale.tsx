"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const stack = [
  {
    group: "Core",
    items: ["Next.js 16", "React 19", "TypeScript"],
  },
  {
    group: "Interface",
    items: ["Tailwind CSS", "shadcn/ui", "TanStack Table"],
  },
  {
    group: "Forms & data",
    items: ["React Hook Form", "Zod", "Supabase"],
  },
  {
    group: "Product",
    items: ["next-intl", "Authentication", "Row Level Security"],
  },
  {
    group: "Quality",
    items: ["Vitest", "React Testing Library", "Playwright", "axe-core"],
  },
];

export function FlowyFinale() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const stackWordX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["5%", "-8%"],
  );

  const finaleWordX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["10%", "-16%"],
  );

  const purpleY = useTransform(
    scrollYProgress,
    [0.45, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["18%", "-22%"],
  );

  const limeY = useTransform(
    scrollYProgress,
    [0.45, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "-55%"],
  );

  return (
    <section ref={sectionRef}>
      {/* STACK */}

      <div className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)] py-20 md:py-32 lg:py-40">
        <motion.p
          aria-hidden="true"
          style={{ x: stackWordX }}
          className="hidden md:block pointer-events-none absolute left-[-3vw] top-[2%] whitespace-nowrap text-[21vw] font-semibold uppercase leading-none tracking-[-0.09em] text-black/[0.03]"
        >
          Stack
        </motion.p>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-sm font-medium text-[var(--muted)]">
                Technology
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl md:text-7xl md:leading-[0.94] md:tracking-[-0.055em] lg:text-8xl">
                The tools behind
                <br />
                the product.
              </h2>

              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
                The stack was chosen around product needs: reusable interfaces,
                typed data, real persistence, internationalization and automated
                quality checks.
              </p>
            </div>
          </div>

          {/* Stack rows */}

          <div className="mt-16 border-t border-[var(--border)] md:mt-28">
            {stack.map((category, index) => (
              <motion.div
                key={category.group}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 15,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid gap-3 border-b border-[var(--border)] py-5 sm:gap-4 md:grid-cols-[0.65fr_1.35fr] md:items-center md:gap-5 md:py-7"
              >
                <p className="text-lg font-medium tracking-[-0.02em] sm:text-xl md:text-2xl md:tracking-[-0.025em]">
                  {category.group}
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-xl font-medium tracking-[-0.025em] md:text-2xl"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Reflection */}

          <div className="mt-16 md:mt-24 grid gap-10 border-t border-[var(--border)] pt-10 lg:grid-cols-[0.65fr_1.35fr]">
            <p className="text-sm text-[var(--muted)]">What I took from it</p>

            <div>
              <p className="max-w-5xl text-3xl font-medium leading-[1.25] tracking-[-0.035em] md:text-5xl">
                Flowy pushed me to think beyond individual screens and treat
                frontend as part of the product architecture.
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
                Building the product end to end meant making decisions about
                structure, consistency, data, security, testing and user
                experience together instead of treating them as separate
                concerns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FINALE */}

      <div
        className="
    relative
    z-10
    -mt-8
    min-h-[100svh]
    overflow-hidden
    rounded-t-[2.5rem]
    bg-[#141318]
    text-white

    md:-mt-12
    md:rounded-t-[3.5rem]
  "
      >
        {/* giant background text */}

        <motion.p
          aria-hidden="true"
          style={{ x: finaleWordX }}
          className="pointer-events-none absolute left-[-5vw] top-[7%] whitespace-nowrap text-[21vw] font-semibold uppercase leading-none tracking-[-0.09em] text-white/[0.04]"
        >
          Flowy
        </motion.p>

        {/* Flowy shapes */}

        <motion.div
          aria-hidden="true"
          style={{
            y: purpleY,
          }}
          className="
    absolute
    -right-16
    top-[11%]
    h-36
    w-36
    rounded-[30%]
    bg-[#5B4FD8]/55

    md:-right-[8%]
    md:top-[12%]
    md:h-[38vw]
    md:max-h-[560px]
    md:w-[38vw]
    md:max-w-[560px]
  "
        />

        <motion.div
          aria-hidden="true"
          style={{
            y: limeY,
          }}
          className="
  absolute
  -right-8
  bottom-20
  h-16
  w-16
  rounded-full
  bg-[#D8FF64]

  sm:-right-6
  sm:bottom-24
  sm:h-20
  sm:w-20

  md:left-[8%]
  md:right-auto
  md:bottom-[14%]
  md:h-32
  md:w-32
"
        />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col px-5 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-16">
          {/* Top */}

          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5 text-[10px] font-medium uppercase tracking-[0.11em] text-white/60 sm:text-xs sm:tracking-[0.13em]">
            <p>End of case study</p>

            <p>Flowy · 2026</p>
          </div>

          {/* Main */}

          <div className="my-auto py-12 md:py-20">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#B9B0EF]">
              See the product
            </p>

            <h2 className="mt-6 max-w-6xl text-[clamp(2.8rem,12vw,4rem)] font-semibold leading-[0.88] tracking-[-0.06em] md:text-[clamp(4.2rem,10vw,9.5rem)] md:leading-[0.82] md:tracking-[-0.075em]">
              Built from
              <br />
              idea to
              <br />
              implementation.
            </h2>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
              <p className="max-w-xl text-base leading-relaxed text-white/55 sm:text-lg md:text-xl">
                Explore the live product or dig into the source code to see how
                the experience was built.
              </p>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                <a
                  href="https://flowy-black.vercel.app/en"
                  target="_blank"
                  rel="noreferrer"
                  className="ui-button w-full bg-[#D8FF64] text-[#171717] sm:w-auto"
                >
                  View live project
                  <span className="ui-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>

                <a
                  href="https://github.com/jessikamiranda/flowy"
                  target="_blank"
                  rel="noreferrer"
                  className="ui-button w-full border border-white/20 hover:bg-white hover:text-black sm:w-auto"
                >
                  View source
                  <span className="ui-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom navigation */}

          <div className="flex flex-col gap-5 border-t border-white/10 pb-2 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 text-sm font-medium"
            >
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-[var(--ease-premium)] group-hover:-translate-x-1"
              >
                ←
              </span>

              <span className="ui-link">Back to portfolio</span>
            </Link>

            <p className="max-w-[16rem] text-sm leading-relaxed text-white/60 sm:max-w-none">
              Jessika Miranda · Frontend Software Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
