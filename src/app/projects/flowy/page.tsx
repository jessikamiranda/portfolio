import { Metadata } from "next";

import { FlowyEngineering } from "./flowy-engineering";
import { FlowyFinale } from "./flowy-finale";
import { FlowyHero } from "./flowy-hero";
import { FlowyOverview } from "./flowy-overview";
import { FlowyQuality } from "./flowy-quality";

export const metadata: Metadata = {
  title: "Flowy Case Study",

  description:
    "Flowy is a full-stack client operations workspace designed and built with Next.js, React, TypeScript and Supabase.",

  alternates: {
    canonical: "/projects/flowy",
  },

  openGraph: {
    title: "Flowy Case Study | Jessika Miranda",
    description:
      "A full-stack workspace for managing clients, projects and tasks, designed and developed with Next.js, React, TypeScript and Supabase.",
    url: "/projects/flowy",
  },
};

export default function FlowyCaseStudy() {
  return (
    <main id="main-content">
      <article>
        <FlowyHero />

        <FlowyOverview />

        <FlowyEngineering />

        <FlowyQuality />

        <FlowyFinale />
      </article>
    </main>
  );
}
