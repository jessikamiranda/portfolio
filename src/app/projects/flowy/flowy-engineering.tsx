"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const layers = [
  {
    number: "01",
    label: "Product interface",
    title: "Reusable product patterns",
    description:
      "Tables, filters, forms, validation and feedback states were designed as reusable patterns rather than one-off implementations.",
    items: ["TanStack Table", "React Hook Form", "Zod", "shadcn/ui"],
    accent: "#F4B8CF",
  },
  {
    number: "02",
    label: "Frontend system",
    title: "Structure for consistency",
    description:
      "The frontend was built with typed components, reusable abstractions and clear separation between product flows and shared UI behavior.",
    items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"],
    accent: "#B9B0EF",
  },
  {
    number: "03",
    label: "Data & security",
    title: "A real backend, not mocked screens",
    description:
      "Authentication, persisted data and Row Level Security make Flowy behave like an actual application rather than a static prototype.",
    items: ["Supabase", "Authentication", "Row Level Security", "Real CRUD"],
    accent: "#D8FF64",
  },
  {
    number: "04",
    label: "Global product",
    title: "Built to scale beyond one language",
    description:
      "Internationalization is part of the product structure, with routes and interface content prepared for multiple locales.",
    items: ["next-intl", "Locale routing", "Reusable messages", "EN · PT · ES"],
    accent: "#F6DC83",
  },
];

export function FlowyEngineering() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["4%", "-10%"],
  );

  const lineScale = useTransform(scrollYProgress, [0.15, 0.75], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#141318] py-20 text-white md:-mt-14 md:rounded-t-[3.5rem] md:py-32 lg:py-40"
    >
      {/* background typography */}

      <motion.p
        aria-hidden="true"
        style={{ x: backgroundX }}
        className="pointer-events-none absolute left-[-4vw] top-[6%] whitespace-nowrap text-[20vw] font-semibold uppercase leading-none tracking-[-0.09em] text-white/[0.035]"
      >
        System
      </motion.p>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        {/* Intro */}

        <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-sm font-medium text-white/65">Engineering</p>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl md:text-7xl md:leading-[0.94] md:tracking-[-0.055em] lg:text-8xl">
              Built as a system,
              <br />
              not a collection
              <br />
              of pages.
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
              Flowy was structured around reusable product patterns, predictable
              data flows and clear boundaries between interface, application
              logic and persistence.
            </p>
          </div>
        </div>

        {/* Architecture */}

        <div className="mt-16 grid gap-12 md:mt-20 md:gap-16 lg:mt-32 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          {/* Sticky explanation */}

          <div>
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/60">
                Architecture
              </p>

              <p className="mt-5 max-w-sm text-xl leading-relaxed tracking-[-0.02em] text-white/70">
                Each layer solves a different part of the product while sharing
                the same design and engineering principles.
              </p>

              <div className="mt-10 hidden lg:block">
                <div className="h-40 w-px bg-white/10">
                  <motion.div
                    style={{
                      scaleY: shouldReduceMotion ? 1 : lineScale,
                      transformOrigin: "top",
                    }}
                    className="h-full w-px bg-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* System layers */}

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-6 top-0 hidden w-px bg-white/10 md:block"
            />

            <div className="space-y-8 md:space-y-10">
              {layers.map((layer, index) => (
                <motion.article
                  key={layer.number}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 30,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.35,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative md:pl-16"
                >
                  {/* timeline node */}

                  <div
                    aria-hidden="true"
                    className="absolute left-6 top-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-white/20 md:block"
                    style={{
                      backgroundColor: layer.accent,
                    }}
                  />

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm sm:rounded-[1.75rem] sm:p-6 md:p-8 lg:rounded-[2rem] lg:p-10">
                    <div className="flex items-start justify-between gap-8">
                      <div>
                        <div className="flex items-center gap-3">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{
                              backgroundColor: layer.accent,
                            }}
                          />

                          <p className="text-xs font-medium uppercase tracking-[0.13em] text-white/60">
                            {layer.label}
                          </p>
                        </div>

                        <h3 className="mt-4 max-w-2xl text-2xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-3xl md:mt-5 md:text-4xl md:leading-[1.05] md:tracking-[-0.04em]">
                          {layer.title}
                        </h3>
                      </div>

                      <span className="text-sm text-white/60">
                        {layer.number}
                      </span>
                    </div>

                    <div className="mt-8 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
                      <p className="max-w-xl leading-relaxed text-white/50">
                        {layer.description}
                      </p>

                      <div className="flex flex-wrap content-start gap-2">
                        {layer.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-xs text-white/55"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom statement */}

        <div className="mt-24 border-t border-white/10 pt-10 md:mt-32">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
            <p className="text-sm text-white/60">Engineering principle</p>

            <p className="max-w-4xl text-2xl font-medium leading-[1.35] tracking-[-0.03em] text-white/85 md:text-4xl">
              Reusability was treated as a product decision, not just a code
              cleanup exercise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
