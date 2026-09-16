"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const stories = [
  {
    number: "01",
    eyebrow: "Product foundation",
    title: "Built to behave like a real product.",
    description:
      "Flowy started as an exercise in going beyond polished screens. I designed the product structure, implemented the frontend, connected a real backend and built the core workflows end to end.",
    image: "/projects/flowy/landing.png",
    alt: "Flowy landing page introducing the client operations platform",
    background: "#B9B0EF",
  },
  {
    number: "02",
    eyebrow: "Operational data",
    title: "Dense information, made easier to work with.",
    description:
      "Client management combines reusable data tables, filtering, sorting and structured information without turning the interface into a wall of controls.",
    image: "/projects/flowy/clients.png",
    alt: "Flowy client management table with structured customer information",
    background: "#F6DC83",
  },
  {
    number: "03",
    eyebrow: "Reusable workflows",
    title: "Forms designed as systems, not isolated screens.",
    description:
      "Project creation uses reusable form patterns, validation and relationships between entities so the same interaction logic can scale throughout the product.",
    image: "/projects/flowy/project-form.png",
    alt: "Flowy project creation form showing structured project information",
    background: "#F4B8CF",
  },
];

type Story = (typeof stories)[number];

function StoryCard({ story }: { story: Story }) {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [allowParallax, setAllowParallax] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const update = () => {
      setAllowParallax(mediaQuery.matches);
    };

    update();

    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  const disableParallax = shouldReduceMotion || !allowParallax;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    disableParallax ? [0, 0] : [24, -24],
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    disableParallax ? [1, 1, 1] : [0.975, 1, 0.99],
  );

  return (
    <article ref={ref} className="border-t border-[var(--border)] pt-6">
      <div className="mb-6 flex items-start justify-between gap-4 md:mb-8 md:gap-6">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: story.background }}
            />

            <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
              {story.eyebrow}
            </p>
          </div>

          <h3 className="mt-4 max-w-xl text-2xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-3xl md:text-4xl md:leading-[1.05] md:tracking-[-0.04em]">
            {story.title}
          </h3>
        </div>

        <span className="text-sm text-[var(--muted)]">{story.number}</span>
      </div>

      <p className="mb-8 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:mb-10 md:text-lg">
        {story.description}
      </p>

      <div
        className="overflow-hidden rounded-[1.5rem] border border-black/10 p-1.5 sm:rounded-[1.75rem] sm:p-2 md:rounded-[2rem]"
        style={{ backgroundColor: story.background }}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.15rem] bg-white sm:rounded-[1.4rem] md:rounded-[1.55rem]">
          <motion.div
            style={{
              y: imageY,
              scale: imageScale,
            }}
            className="absolute inset-0"
          >
            <Image
              src={story.image}
              alt={story.alt}
              fill
              sizes="
    (max-width: 767px) calc(100vw - 40px),
    (max-width: 1023px) calc(100vw - 80px),
    60vw
  "
              className="object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
    </article>
  );
}

export function FlowyOverview() {
  return (
    <section
      className="
    relative
    z-10
    -mt-10
    rounded-t-[2.5rem]
    bg-[var(--background)]
    py-20

    md:-mt-14
    md:rounded-t-[3.5rem]
    md:py-32

    lg:py-40
  "
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        {/* Project metadata */}

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-b border-[var(--border)] pb-10 md:grid-cols-4 md:pb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
              Role
            </p>

            <p className="mt-2 text-sm font-medium leading-snug sm:text-base">
              Product Design & Development
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
              Scope
            </p>

            <p className="mt-2 text-sm font-medium leading-snug sm:text-base">
              Full-stack application
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
              Year
            </p>

            <p className="mt-2 text-sm font-medium leading-snug sm:text-base">
              2026
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
              Status
            </p>

            <p className="mt-2 text-sm font-medium leading-snug sm:text-base">
              Live
            </p>
          </div>
        </div>

        {/* Story */}

        <div className="mt-16 grid gap-16 md:mt-20 lg:mt-24 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          {/* Sticky intro */}

          <div>
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-medium text-[var(--muted)]">
                Overview
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[0.97] tracking-[-0.05em] sm:text-5xl md:text-6xl md:leading-[0.95] md:tracking-[-0.055em]">
                Building beyond the interface.
              </h2>

              <p className="mt-7 max-w-md text-base leading-relaxed text-[var(--muted)] sm:mt-8 sm:text-lg">
                I created Flowy to explore what happens when a portfolio project
                is treated like a real product rather than a collection of
                polished screens.
              </p>

              <p className="mt-5 max-w-md leading-relaxed text-[var(--muted)]">
                That meant making decisions about product structure, data,
                reusable patterns, backend integration and quality, not only
                visual design.
              </p>

              <div className="mt-10 hidden items-center gap-3 text-xs uppercase tracking-[0.12em] text-[var(--muted)] lg:flex">
                <span className="h-px w-10 bg-[var(--border)]" />
                Scroll through the product
              </div>
            </div>
          </div>

          {/* Screens */}

          <div className="space-y-16 md:space-y-24 lg:space-y-32">
            {stories.map((story) => (
              <StoryCard key={story.number} story={story} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
