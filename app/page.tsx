import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { Now } from "@/components/sections/Now";
import { FounderDashboard } from "@/components/sections/FounderDashboard";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { LearningJourney } from "@/components/sections/LearningJourney";
import { GithubStats } from "@/components/sections/GithubStats";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full selection:bg-[var(--color-coral)]/30 selection:text-white">
      <Navbar />
      <HeroSection />
      <Now />
      <FounderDashboard />
      <FeaturedProject />
      <Skills />
      <Timeline />
      <LearningJourney />
      <GithubStats />
      <Contact />
      <Footer />
    </main>
  );
}
