"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

export function FlowyHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const screenScale = useTransform(
    scrollYProgress,
    [0, 0.28, 0.68, 1],
    [0.68, 0.68, 0.87, 0.97],
    { clamp: true },
  );

  const screenY = useTransform(
    scrollYProgress,
    [0, 0.28, 0.7, 1],
    ["14%", "14%", "5%", "1%"],
    { clamp: true },
  );

  const screenRotate = useTransform(
    scrollYProgress,
    [0, 0.28, 0.72, 1],
    [-4, -4, -1.5, 0],
    { clamp: true },
  );

  const titleX = useTransform(scrollYProgress, [0, 1], ["2%", "-12%"]);

  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    [0.16, 0.08, 0.025],
  );

  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.3, 1],
    [1, 1, 0, 0],
    { clamp: true },
  );

  const introY = useTransform(
    scrollYProgress,
    [0, 0.16, 0.3, 1],
    [0, 0, -28, -28],
    { clamp: true },
  );

  const purpleY = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);

  const limeY = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const metadataOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.34, 1],
    [1, 1, 0, 0],
    { clamp: true },
  );

  const scrollLabelOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 1],
    [1, 1, 0, 0],
    { clamp: true },
  );

  const screenX = useTransform(
    scrollYProgress,
    [0, 0.28, 0.72, 1],
    ["14%", "14%", "3%", "0%"],
    { clamp: true },
  );

  return (
    <>
      {/* Mobile */}
      <section className="bg-[#141318] text-white lg:hidden">
        <div className="px-5 pb-14 pt-6 sm:px-6 sm:pb-16 sm:pt-8 md:px-10 md:pb-20">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="text-sm text-white/55 transition-colors hover:text-white"
            >
              ← Portfolio
            </Link>

            <p className="text-xs uppercase tracking-[0.14em] text-white/60">
              Case study · 2026
            </p>
          </div>

          <div className="mt-14 sm:mt-16 md:mt-20">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#B9B0EF]">
              Client operations platform
            </p>

            <h1 className="mt-4 text-[clamp(4.5rem,24vw,6.5rem)] font-semibold leading-[0.8] tracking-[-0.07em] sm:text-[7.5rem] md:text-[9rem]">
              Flowy
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70 sm:mt-8 sm:text-xl">
              A full-stack workspace for managing clients, projects and tasks
              through clear, structured operational workflows.
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 p-2 sm:mt-12 sm:rounded-[1.8rem]">
            <Image
              src="/projects/flowy/cover.png"
              alt="Flowy dashboard showing workload, clients, projects and upcoming tasks"
              width={2028}
              height={1226}
              sizes="(max-width: 1023px) calc(100vw - 40px), 90vw"
              fetchPriority="high"
              loading="eager"
              className="h-auto w-full rounded-[1.35rem]"
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {["Next.js", "React", "TypeScript", "Supabase"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/55"
                >
                  {technology}
                </span>
              ),
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
            <a
              href="https://flowy-black.vercel.app/en"
              target="_blank"
              rel="noreferrer"
              className="ui-link"
            >
              Live project
              <span className="ui-arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            <a
              href="https://github.com/jessikamiranda/flowy"
              target="_blank"
              rel="noreferrer"
              className="ui-link"
            >
              Source
              <span className="ui-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Desktop */}
      <section
        ref={sectionRef}
        className="relative hidden h-[210svh] bg-[#141318] text-white lg:block"
      >
        <div className="sticky top-0 h-svh overflow-hidden">
          {/* Background art */}

          <motion.div
            aria-hidden="true"
            style={{
              y: shouldReduceMotion ? 0 : purpleY,
            }}
            className="absolute -right-[8vw] top-[5vh] h-[32vw] max-h-[520px] w-[32vw] max-w-[520px] rounded-[32%] bg-[#5B4FD8]/45 blur-[1px]"
          />

          <motion.div
            aria-hidden="true"
            style={{
              y: shouldReduceMotion ? 0 : limeY,
            }}
            className="absolute left-[31vw] top-[19vh] h-24 w-24 rounded-full bg-[#D8FF64]/85"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[48vw] bg-gradient-to-r from-[#141318] via-[#141318]/75 to-transparent"
          />

          {/* Giant title */}

          <motion.p
            aria-hidden="true"
            style={{
              x: shouldReduceMotion ? 0 : titleX,
              scale: shouldReduceMotion ? 1 : titleScale,
              opacity: shouldReduceMotion ? 0.16 : titleOpacity,
            }}
            className="pointer-events-none absolute left-[-3vw] top-[9vh] z-0 whitespace-nowrap text-[22vw] font-semibold uppercase leading-none tracking-[-0.09em]"
          >
            Flowy
          </motion.p>

          {/* Top navigation */}

          <div className="absolute left-16 right-16 top-8 z-40 flex items-center justify-between text-sm">
            <Link
              href="/"
              className="text-white/55 transition-colors hover:text-white"
            >
              ← Back to portfolio
            </Link>

            <div className="flex items-center gap-6">
              <a
                href="https://flowy-black.vercel.app/en"
                target="_blank"
                rel="noreferrer"
                className="text-white/55 transition-colors hover:text-white"
              >
                Live project ↗
              </a>

              <a
                href="https://github.com/jessikamiranda/flowy"
                target="_blank"
                rel="noreferrer"
                className="text-white/55 transition-colors hover:text-white"
              >
                Source code ↗
              </a>
            </div>
          </div>

          {/* Intro */}

          <motion.div
            style={{
              opacity: shouldReduceMotion ? 1 : introOpacity,
              y: shouldReduceMotion ? 0 : introY,
            }}
            className="absolute left-16 top-[22vh] z-30 max-w-[540px]"
          >
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#B9B0EF]">
              Client operations platform · 2026
            </p>

            <h1 className="sr-only">Flowy</h1>

            <p className="mt-5 text-3xl font-medium leading-[1.12] tracking-[-0.035em]">
              From product concept
              <br />
              to working system.
            </p>

            <p className="mt-6 max-w-[460px] text-base leading-relaxed text-white/70">
              A full-stack workspace for managing clients, projects and tasks
              through clear, structured operational workflows.
            </p>
          </motion.div>

          {/* Product screen */}

          <motion.div
            style={{
              scale: shouldReduceMotion ? 0.94 : screenScale,
              x: shouldReduceMotion ? 0 : screenX,
              y: shouldReduceMotion ? 0 : screenY,
              rotate: shouldReduceMotion ? 0 : screenRotate,
            }}
            className="absolute inset-x-[8vw] bottom-[7vh] z-20 mx-auto aspect-[16/9] max-h-[72vh] max-w-[1420px] origin-bottom-right overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#ecebe5] p-2 shadow-[0_50px_180px_rgba(0,0,0,0.65)]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[1.8rem]">
              <Image
                src="/projects/flowy/cover.png"
                alt="Flowy dashboard showing workload, clients, projects and upcoming tasks"
                fill
                fetchPriority="high"
                sizes="(min-width: 1440px) 1420px, 84vw"
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Metadata */}

          <motion.div
            style={{
              opacity: shouldReduceMotion ? 1 : metadataOpacity,
            }}
            className="absolute bottom-8 left-16 z-40 flex gap-2"
          >
            {["Next.js", "React", "TypeScript", "Supabase"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/15 bg-black/10 px-3 py-1.5 text-xs text-white/65 backdrop-blur"
                >
                  {technology}
                </span>
              ),
            )}
          </motion.div>

          {/* Scroll indicator */}

          <div className="absolute right-7 top-1/2 z-40 h-[38vh] w-px -translate-y-1/2 bg-white/10">
            <motion.div
              style={{
                scaleY: shouldReduceMotion ? 1 : progressScale,
                transformOrigin: "top",
              }}
              className="h-full w-px bg-white"
            />
          </div>

          <motion.p
            style={{
              opacity: shouldReduceMotion ? 1 : scrollLabelOpacity,
            }}
            className="absolute bottom-8 right-16 z-40 text-xs uppercase tracking-[0.14em] text-white/60"
          >
            Scroll to enter ↓
          </motion.p>
        </div>
      </section>
    </>
  );
}
