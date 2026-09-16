import { AboutStory } from "@/components/home/about-story";
import { ContactFinale } from "@/components/home/contact-finale";
import { ExperienceTimeline } from "@/components/home/experience-timeline";
import { FeaturedProject } from "@/components/home/featured-project";
import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />

        <FeaturedProject />

        <ExperienceTimeline />

        <AboutStory />

        <ContactFinale />
      </main>
    </>
  );
}
