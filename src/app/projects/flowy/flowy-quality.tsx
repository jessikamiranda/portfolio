"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const qualityLayers = [
  {
    number: "01",
    type: "Unit",
    tool: "Vitest",
    description:
      "Focused tests for individual pieces of application logic and reusable behavior.",
    accent: "#F6DC83",
  },
  {
    number: "02",
    type: "Component",
    tool: "React Testing Library",
    description:
      "Component behavior tested through the way users interact with the interface.",
    accent: "#F4B8CF",
  },
  {
    number: "03",
    type: "End-to-end",
    tool: "Playwright",
    description:
      "Critical product flows tested across the application from the user’s perspective.",
    accent: "#B9B0EF",
  },
  {
    number: "04",
    type: "Accessibility",
    tool: "axe-core",
    description:
      "Automated accessibility checks added alongside the rest of the testing workflow.",
    accent: "#B9D8B4",
  },
];

export function FlowyQuality() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const wordX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-4%", "8%"],
  );

  const panelY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [35, 0, -20],
  );

  return (
    <section
      ref={sectionRef}
      className="
  relative
  z-10
  -mt-10
  overflow-hidden
  rounded-t-[2.5rem]
  bg-[#ECECE7] py-20 md:py-32 lg:py-40
  text-[#171717]

  md:-mt-14
  md:rounded-t-[3.5rem]
"
    >
      {/* Giant background word */}

      <motion.p
        aria-hidden="true"
        style={{ x: wordX }}
        className="pointer-events-none absolute left-[-2vw] top-[4%] whitespace-nowrap text-[20vw] font-semibold uppercase leading-none tracking-[-0.09em] text-black/[0.035]"
      >
        Quality
      </motion.p>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        {/* Intro */}

        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-sm font-medium text-black/65">Quality</p>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl md:text-7xl md:leading-[0.94] md:tracking-[-0.055em] lg:text-8xl">
              Testing became part
              <br />
              of the product,
              <br />
              not an afterthought.
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl">
              Flowy was the first project where I intentionally combined
              multiple testing layers instead of treating quality as something
              to check only after implementation.
            </p>
          </div>
        </div>

        {/* Quality console */}

        <motion.div
          style={{ y: panelY }}
          className="mt-16 overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#171717] text-white shadow-[0_35px_100px_rgba(0,0,0,0.16)] sm:rounded-[1.8rem] md:mt-28 md:rounded-[2.2rem]"
        >
          {/* Console header */}

          <div className="flex flex-col gap-5 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
            <div className="flex items-center gap-3">
              <div
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-[#F4B8CF]"
              />
              <div
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-[#F6DC83]"
              />
              <div
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-[#B9D8B4]"
              />

              <p className="ml-2 text-xs uppercase tracking-[0.13em] text-white/60">
                Quality system
              </p>
            </div>

            <p className="text-xs uppercase tracking-[0.13em] text-white/60">
              Automated checks · Flowy
            </p>
          </div>

          {/* Status */}

          <div className="grid border-b border-white/10 md:grid-cols-[80px_0.8fr_0.8fr_1.4fr]">
            {/* Label */}
            <div className="border-b border-white/10 px-5 py-4 md:border-b-0 md:border-r md:px-5 md:py-8">
              <p className="text-xs uppercase tracking-[0.13em] text-white/60">
                Status
              </p>
            </div>

            {/* Status value */}
            <div className="flex items-center border-b border-white/10 px-5 py-4 md:border-b-0 md:border-r md:px-6 md:py-8">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3 shrink-0">
                  {!shouldReduceMotion && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B9D8B4] opacity-40" />
                  )}

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#B9D8B4]" />
                </span>

                <p className="text-lg font-medium tracking-[-0.02em] md:text-xl">
                  Quality checks integrated
                </p>
              </div>
            </div>

            {/* Explanation */}
            <div className="flex items-center px-5 py-4 md:col-span-2 md:px-6 md:py-8">
              <p className="max-w-2xl text-base leading-relaxed text-white/50">
                Different testing layers protect different parts of the
                experience, from isolated logic to complete user journeys and
                accessibility.
              </p>
            </div>
          </div>

          {/* Testing layers */}

          <div>
            {qualityLayers.map((layer, index) => (
              <motion.article
                key={layer.type}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 18,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.45,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
  group
  grid
  grid-cols-[44px_1fr]
  border-b
  border-white/10

  md:grid-cols-[80px_0.8fr_0.8fr_1.4fr]
"
              >
                <div className="row-span-3 flex items-start justify-center border-r border-white/10 px-2 py-5 md:row-span-1 md:items-center md:px-5 md:py-6">
                  <span className="text-sm text-white/60">{layer.number}</span>
                </div>

                <div className="flex items-center gap-3 border-white/10 px-5 pb-2 pt-5 md:border-r md:px-6 md:py-6">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: layer.accent,
                    }}
                  />

                  <h3 className="text-lg font-medium tracking-[-0.025em] md:text-2xl">
                    {layer.type}
                  </h3>
                </div>

                <div className="border-white/10 px-5 pb-3 text-sm text-white/65 md:flex md:items-center md:border-r md:px-6 md:py-6">
                  {layer.tool}
                </div>

                <div className="px-5 pb-5 md:flex md:items-center md:px-6 md:py-6">
                  <p className="max-w-xl text-sm leading-relaxed text-white/50 transition-colors duration-300 group-hover:text-white/75 md:text-base">
                    {layer.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Closing statement */}

        <div className="mt-20 grid gap-8 border-t border-black/10 pt-10 lg:grid-cols-[0.65fr_1.35fr]">
          <p className="text-sm text-black/65">The takeaway</p>

          <p className="max-w-4xl text-2xl font-medium leading-[1.35] tracking-[-0.03em] md:text-4xl">
            Building Flowy changed testing from something I knew I should do
            into a deliberate part of how I build products.
          </p>
        </div>
      </div>
    </section>
  );
}
