"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
   * Typography
   */

  const lineOneX = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    ["0%", "-4%", "-12%"],
  );

  const lineTwoX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "5%", "14%"],
  );

  const lineThreeX = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    ["0%", "-3%", "-9%"],
  );

  const lineFourX = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    ["0%", "2%", "7%"],
  );

  const headlineScale = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    [1, 0.98, 0.93],
  );

  const headlineOpacity = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [1, 1, 0.45],
  );

  /*
   * Decorative shapes
   */

  const pinkY = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  const pinkRotate = useTransform(scrollYProgress, [0, 1], [8, -18]);

  const yellowY = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  const yellowX = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);

  const lavenderX = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  const lavenderRotate = useTransform(scrollYProgress, [0, 1], [-7, 8]);

  const greenY = useTransform(scrollYProgress, [0, 1], ["0%", "-110%"]);

  /*
   * Supporting content
   */

  const detailsOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.88],
    [1, 1, 0],
  );

  const detailsY = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0, -35]);

  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[155svh] md:h-[190svh] lg:h-[220svh]"
      aria-labelledby="hero-title"
    >
      <div className="sticky top-16 h-[calc(100svh-4rem)] overflow-hidden">
        <div className="relative mx-auto flex h-full max-w-[1600px] flex-col px-5 pb-6 pt-5 sm:px-6 md:px-10 md:pb-8 md:pt-7 lg:px-16">
          {/* Top metadata */}

          <div className="relative z-30 flex items-start justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--muted)] sm:text-xs sm:tracking-[0.12em] md:text-sm">
            <div>
              <p>Jessika Miranda</p>
              <p className="mt-1 normal-case tracking-normal">
                Frontend Software Engineer
              </p>
            </div>

            <div className="text-right">
              <p>São Paulo · Brazil</p>

              <p className="mt-1 hidden normal-case tracking-normal sm:block">
                Portfolio · 2026
              </p>
            </div>
          </div>

          {/* Decorative art direction */}

          <motion.div
            aria-hidden="true"
            style={{
              y: shouldReduceMotion ? 0 : pinkY,
              rotate: shouldReduceMotion ? 8 : pinkRotate,
            }}
            className="
  absolute
  -right-10
  top-[16%]
  z-0
  h-36
  w-36
  rounded-[28%]
  bg-[var(--pink)]

  md:right-[4%]
  md:top-[12%]
  md:h-[22vw]
  md:max-h-[320px]
  md:min-h-[170px]
  md:w-[22vw]
  md:max-w-[320px]
  md:min-w-[170px]
"
          />

          <motion.div
            aria-hidden="true"
            style={{
              y: shouldReduceMotion ? 0 : yellowY,
              x: shouldReduceMotion ? 0 : yellowX,
            }}
            className="
  absolute
  -left-10
  bottom-[23%]
  z-0
  h-24
  w-24
  rounded-full
  bg-[var(--yellow)]

  md:-left-[3%]
  md:bottom-[19%]
  md:h-[14vw]
  md:max-h-[210px]
  md:min-h-[110px]
  md:w-[14vw]
  md:max-w-[210px]
  md:min-w-[110px]
"
          />

          <motion.div
            aria-hidden="true"
            style={{
              x: shouldReduceMotion ? 0 : lavenderX,
              rotate: shouldReduceMotion ? -7 : lavenderRotate,
            }}
            className="
  absolute
  -right-20
  bottom-[19%]
  z-0
  h-16
  w-64
  rounded-full
  bg-[var(--lavender)]

  md:-right-[4%]
  md:bottom-[16%]
  md:h-28
  md:w-[34vw]
  md:min-w-[260px]
  md:max-w-[520px]
"
          />

          <motion.div
            aria-hidden="true"
            style={{
              y: shouldReduceMotion ? 0 : greenY,
            }}
            className="absolute left-[53%] top-[16%] z-0 hidden h-36 w-14 rounded-full bg-[var(--green)] sm:block"
          />

          {/* Small floating label */}

          <motion.div
            aria-hidden="true"
            style={{
              y: shouldReduceMotion ? 0 : yellowY,
            }}
            className="absolute right-[8%] top-[43%] z-20 hidden rotate-[7deg] rounded-full bg-[var(--foreground)] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-[var(--background)] lg:block"
          >
            Product · Systems · UI
          </motion.div>

          {/* Main typography */}

          <motion.div
            style={{
              scale: shouldReduceMotion ? 1 : headlineScale,
              opacity: shouldReduceMotion ? 1 : headlineOpacity,
            }}
            className="relative z-10 flex flex-1 items-center py-10"
          >
            <h1
              id="hero-title"
              className="w-full text-[clamp(3rem,13.5vw,4.2rem)] font-semibold leading-[0.84] tracking-[-0.06em] md:text-[clamp(4.5rem,9.7vw,9.5rem)] md:leading-[0.78] md:tracking-[-0.065em]"
            >
              <span className="block overflow-visible">
                <motion.span
                  style={{
                    x: shouldReduceMotion ? 0 : lineOneX,
                  }}
                  className="block"
                >
                  I build
                </motion.span>
              </span>

              <span className="block overflow-visible">
                <motion.span
                  style={{
                    x: shouldReduceMotion ? 0 : lineTwoX,
                  }}
                  className="block md:whitespace-nowrap"
                >
                  scalable frontend
                </motion.span>
              </span>

              <span className="block overflow-visible">
                <motion.span
                  style={{
                    x: shouldReduceMotion ? 0 : lineThreeX,
                  }}
                  className="block"
                >
                  experiences
                </motion.span>
              </span>

              <span className="block overflow-visible">
                <motion.span
                  style={{
                    x: shouldReduceMotion ? 0 : lineFourX,
                  }}
                  className="block"
                >
                  for complex products.
                </motion.span>
              </span>
            </h1>
          </motion.div>

          {/* Bottom content */}

          <motion.div
            style={{
              opacity: shouldReduceMotion ? 1 : detailsOpacity,
              y: shouldReduceMotion ? 0 : detailsY,
            }}
            className="relative z-30 grid gap-5 border-t border-[var(--border)] pt-5 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-7 md:pt-6"
          >
            <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base md:text-lg">
              I work across engineering, product and interface design to turn
              complex workflows into clear, scalable digital products.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:justify-end">
              <a
                href="#projects"
                className="ui-button w-full bg-[var(--foreground)] text-[var(--background)] sm:w-auto"
              >
                Explore my work
              </a>

              <a
                href="/Jessika_Miranda_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="ui-button w-full border border-[var(--border)] bg-[color:var(--surface)/0.75] backdrop-blur sm:w-auto"
              >
                View résumé
              </a>
            </div>
          </motion.div>

          {/* Scroll progress */}

          <div
            aria-hidden="true"
            className="absolute bottom-8 right-2 top-8 hidden w-px bg-[var(--border)] xl:block"
          >
            <motion.div
              style={{
                scaleY: shouldReduceMotion ? 1 : progressScale,
                transformOrigin: "top",
              }}
              className="h-full w-px bg-[var(--foreground)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
