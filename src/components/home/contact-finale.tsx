"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

export function ContactFinale() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundTextX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["8%", "-18%"],
  );

  const circleY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["20%", "-35%"],
  );

  const circleRotate = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-12, 18],
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [30, 0, -25],
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="
    relative
    z-10
    -mt-8
    overflow-hidden
    rounded-t-[2.5rem]
    bg-[var(--foreground)]
    text-[var(--background)]

    md:-mt-12
    md:rounded-t-[3.5rem]
  "
    >
      <div className="relative min-h-[100svh]">
        {/* Giant moving background typography */}

        <motion.p
          aria-hidden="true"
          style={{
            x: backgroundTextX,
          }}
          className="pointer-events-none absolute left-[-5vw] top-[12%] whitespace-nowrap text-[clamp(8rem,22vw,22rem)] font-semibold uppercase leading-none tracking-[-0.085em] text-white/[0.045]"
        >
          Let&apos;s build
        </motion.p>

        {/* Decorative pastel shape */}

        <motion.div
          aria-hidden="true"
          style={{
            y: circleY,
            rotate: circleRotate,
          }}
          className="
  absolute
  -right-24
  top-[28%]
  h-40
  w-40
  rounded-[32%]
  bg-[var(--pink)]

  md:right-[4%]
  md:top-[22%]
  md:h-80
  md:w-80
"
        />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col px-6 py-10 md:px-10 lg:px-16">
          {/* Top */}

          <div className="flex items-start justify-between border-b border-white/15 pb-6 text-xs font-medium uppercase tracking-[0.12em] text-white/60">
            <p>Get in touch</p>

            <p>São Paulo · Brazil</p>
          </div>

          {/* Main */}

          <motion.div
            style={{
              y: contentY,
            }}
            className="my-auto py-14 md:py-20"
          >
            <p className="mb-6 text-sm font-medium text-white/65">
              Open to international frontend opportunities
            </p>

            <h2 className="max-w-6xl text-[clamp(2.9rem,12.5vw,4rem)] font-semibold leading-[0.9] tracking-[-0.055em] md:text-[clamp(4.2rem,9vw,8.5rem)] md:leading-[0.86] md:tracking-[-0.065em]">
              Let&apos;s make
              <br />
              complex things
              <br />
              feel simple.
            </h2>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <p className="max-w-xl text-lg leading-relaxed text-white/55 md:text-xl">
                I&apos;m interested in teams building thoughtful digital
                products where frontend engineering, architecture and product
                experience matter.
              </p>

              <div className="flex flex-col gap-5 lg:items-end">
                <a
                  href="mailto:jeessika.miranda@gmail.com"
                  className="group inline-flex min-w-0 max-w-full items-center gap-3 text-base font-medium tracking-[-0.02em] sm:text-xl md:text-2xl"
                >
                  <span className="border-b border-white/30 pb-1 transition-colors [overflow-wrap:anywhere] group-hover:border-white">
                    jeessika.miranda@gmail.com
                  </span>

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    ↗
                  </span>
                </a>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <a
                    href="https://www.linkedin.com/in/jessika-miranda/"
                    target="_blank"
                    rel="noreferrer"
                    className="ui-button border border-white/20 hover:bg-white hover:text-black"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/jessikamiranda"
                    target="_blank"
                    rel="noreferrer"
                    className="ui-button border border-white/20 hover:bg-white hover:text-black"
                  >
                    GitHub
                  </a>

                  <a
                    href="/Jessika_Miranda_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="ui-button border border-white/20 hover:bg-white hover:text-black"
                  >
                    Résumé
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer */}

          <footer className="flex flex-col gap-5 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-medium text-white">Jessika Miranda</p>

              <p className="mt-1">Frontend Software Engineer</p>
            </div>

            <p>React · Next.js · TypeScript</p>

            <p>© {new Date().getFullYear()}</p>
          </footer>
        </div>
      </div>
    </section>
  );
}
