"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const steps = [
  {
    number: "01",
    eyebrow: "Product overview",
    title: "From idea to working product.",
    description:
      "I took Flowy from concept and visual direction to a complete product for managing clients, projects and tasks.",
    image: "/projects/flowy/cover.png",
    alt: "Flowy dashboard showing workload, clients, projects and upcoming tasks",
    accent: "#F4B8CF",
  },
  {
    number: "02",
    eyebrow: "Data-heavy workflows",
    title: "Built around real operational data.",
    description:
      "Reusable tables, filtering, sorting and structured client information turn dense operational data into a clear interface.",
    image: "/projects/flowy/clients.png",
    alt: "Flowy client management table",
    accent: "#F6DC83",
  },
  {
    number: "03",
    eyebrow: "Structured interactions",
    title: "Complex workflows without complex UX.",
    description:
      "Forms, validation and relationships between entities were designed as reusable patterns instead of isolated screens.",
    image: "/projects/flowy/project-form.png",
    alt: "Flowy project creation workflow",
    accent: "#B9B0EF",
  },
  {
    number: "04",
    eyebrow: "Reusable product patterns",
    title: "One system, not a collection of screens.",
    description:
      "The same interaction patterns scale across clients, projects and tasks while preserving consistency throughout the product.",
    image: "/projects/flowy/tasks.png",
    alt: "Flowy task management interface",
    accent: "#B9D8B4",
  },
];

function ProjectLinks() {
  return (
    <div className="flex flex-wrap gap-5 text-sm font-medium">
      <Link href="/projects/flowy" className="ui-link">
        View case study →
      </Link>

      <a
        href="https://flowy-black.vercel.app/en"
        target="_blank"
        rel="noreferrer"
        className="ui-link"
      >
        Live project ↗
      </a>

      <a
        href="https://github.com/jessikamiranda/flowy"
        target="_blank"
        rel="noreferrer"
        className="ui-link"
      >
        Source code ↗
      </a>
    </div>
  );
}

function StaticProject() {
  return (
    <div className="bg-[var(--foreground)] py-24 text-[var(--background)] md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between text-sm text-white/50">
          <p>Selected work · 01</p>
          <p>2026</p>
        </div>

        <h2 className="mt-10 text-[clamp(4rem,14vw,11rem)] font-semibold leading-[0.78] tracking-[-0.07em]">
          Flowy
        </h2>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/60">
          A full-stack operations workspace for managing clients, projects and
          tasks.
        </p>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[2rem] bg-white/10">
          <Image
            src="/projects/flowy/cover.png"
            alt="Flowy dashboard showing clients, projects and upcoming tasks"
            fill
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-white/20 pt-5">
              <p className="text-sm text-white/60">{step.number}</p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                {step.title}
              </h3>

              <p className="mt-4 max-w-lg leading-relaxed text-white/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <ProjectLinks />
        </div>
      </div>
    </div>
  );
}

export function FeaturedProject() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const projectScale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.78, 1],
    [0.74, 0.84, 1, 1.04],
  );

  const projectY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.75, 1],
    ["10%", "5%", "0%", "-2%"],
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1.08, 1.02, 1],
  );

  const projectRadius = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["2.8rem", "1.8rem", "0.8rem"],
  );

  const titleX = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.9],
    [0.18, 0.1, 0.04],
  );

  const copyY = useTransform(scrollYProgress, [0, 0.2, 1], [40, 0, -20]);

  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let nextStep = 0;

    if (latest >= 0.72) {
      nextStep = 3;
    } else if (latest >= 0.5) {
      nextStep = 2;
    } else if (latest >= 0.28) {
      nextStep = 1;
    }

    setActiveStep((current) => (current === nextStep ? current : nextStep));
  });

  if (shouldReduceMotion) {
    return (
      <section id="projects">
        <StaticProject />
      </section>
    );
  }

  return (
    <section id="projects">
      {/* Mobile */}
      <div className="lg:hidden">
        <StaticProject />
      </div>

      {/* Desktop */}
      <div
        ref={sectionRef}
        className="relative hidden h-[420svh] bg-[var(--foreground)] text-[var(--background)] lg:block"
      >
        <div className="sticky top-0 h-svh overflow-hidden">
          {/* Giant background typography */}

          <motion.p
            aria-hidden="true"
            style={{
              x: titleX,
              opacity: titleOpacity,
            }}
            className="pointer-events-none absolute left-[-2vw] top-[9%] z-0 whitespace-nowrap text-[18vw] font-semibold uppercase leading-none tracking-[-0.08em]"
          >
            Flowy
          </motion.p>

          {/* Meta */}

          <div className="absolute left-16 right-16 top-10 z-30 flex justify-between text-xs font-medium uppercase tracking-[0.12em] text-white/60">
            <p>Selected work · 01</p>

            <p>Client operations platform · 2026</p>
          </div>

          {/* Product frame */}

          <motion.div
            style={{
              scale: projectScale,
              y: projectY,
              borderRadius: projectRadius,
            }}
            className="absolute inset-x-[5vw] top-[12vh] z-10 mx-auto aspect-[16/9] max-h-[72vh] max-w-[1400px] origin-center overflow-hidden border border-white/10 bg-[#edece6] shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
          >
            <motion.div
              style={{
                scale: imageScale,
              }}
              className="relative h-full w-full"
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={steps[activeStep].number}
                  initial={{
                    opacity: 0,
                    scale: 1.035,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.985,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={steps[activeStep].image}
                    alt={steps[activeStep].alt}
                    fill
                    sizes="90vw"
                    className="object-cover object-top"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Subtle readability gradient */}

            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent"
            />
          </motion.div>

          {/* Story copy */}

          <motion.div
            style={{
              y: copyY,
            }}
            className="absolute bottom-20 left-16 z-30 w-[440px]"
          >
            <div className="mb-5">
              <div className="mb-4 flex items-center gap-3">
                <motion.span
                  key={steps[activeStep].accent}
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ duration: 0.4 }}
                  className="h-2 rounded-full"
                  style={{
                    backgroundColor: steps[activeStep].accent,
                  }}
                />

                <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/65">
                  {steps[activeStep].eyebrow}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-white/60">
                  {steps[activeStep].number}
                </span>

                <div className="h-px flex-1 bg-white/20" />
              </div>
            </div>

            <div
              key={steps[activeStep].number}
              className="animate-[fadeProjectCopy_450ms_ease-out]"
            >
              <h3 className="text-3xl font-semibold leading-tight tracking-[-0.035em]">
                {steps[activeStep].title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-white/60">
                {steps[activeStep].description}
              </p>
            </div>
          </motion.div>

          {/* Stack */}

          {/* Stack */}

          <div className="absolute bottom-24 right-16 z-30 max-w-md text-right">
            <div className="flex flex-wrap justify-end gap-2">
              {["Next.js", "React", "TypeScript", "Supabase", "Playwright"].map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/20 bg-black/15 px-3 py-1.5 text-xs text-white/60 backdrop-blur"
                  >
                    {technology}
                  </span>
                ),
              )}
            </div>

            <div className="mt-5 text-white">
              <ProjectLinks />
            </div>
          </div>

          {/* Story progress */}

          <div className="absolute right-6 top-1/2 z-30 h-[36vh] w-px -translate-y-1/2 bg-white/15">
            <motion.div
              style={{
                scaleY: progressScale,
                transformOrigin: "top",
              }}
              className="h-full w-px bg-white"
            />

            {steps.map((step, index) => (
              <div
                key={step.number}
                style={{
                  top: `${(index / (steps.length - 1)) * 100}%`,
                }}
                className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-500 ${
                  index === activeStep
                    ? "h-4 w-4 border-white bg-white"
                    : index < activeStep
                      ? "h-2.5 w-2.5 border-white bg-white"
                      : "h-2.5 w-2.5 border-white/30 bg-[var(--foreground)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
