"use client";

import GrainHeroSection from "@/components/ui/grain-gradient-hero-section";
import AboutSection from "@/components/ui/about-section";
import ExperienceSection from "@/components/ui/experience-section";
import ProjectsSection from "@/components/ui/projects-section";
import SkillsSection from "@/components/ui/skills-section";
import ContactSection from "@/components/ui/contact-section";
import PageTransitionWrapper from "@/components/ui/page-transition-wrapper";

export default function Home() {
  const handleCtaClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <div id="home">
        <PageTransitionWrapper>
          <GrainHeroSection
            title="VIBHOR KOSHAL"
            subtitle="Final sem B.Tech student | AI/ML Engineer | Aspiring PM"
            ctaLabel="Explore My Work"
            onCtaClick={handleCtaClick}
          />
        </PageTransitionWrapper>
      </div>
      <div id="about">
        <PageTransitionWrapper>
          <AboutSection />
        </PageTransitionWrapper>
      </div>
      <div id="experience">
        <PageTransitionWrapper>
          <ExperienceSection />
        </PageTransitionWrapper>
      </div>
      <div id="projects">
        <PageTransitionWrapper>
          <ProjectsSection />
        </PageTransitionWrapper>
      </div>
      <div id="skills">
        <PageTransitionWrapper>
          <SkillsSection />
        </PageTransitionWrapper>
      </div>
      <div id="contact">
        <PageTransitionWrapper>
          <ContactSection />
        </PageTransitionWrapper>
      </div>
    </main>
  );
}
