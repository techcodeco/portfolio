"use client";

import LazySection from "@/components/layout/LazySection";
import Reveal from "@/components/ui/Reveal";
import Kicker from "@/components/ui/Kicker";
import Project from "@/components/sections/Project";

export default function ProjectsSection({ t, projects }) {
  return (
    <LazySection id="projects" minHeight={720}>
      <Reveal>
        <section className="section">
          <div className="container">
            <Kicker>{t.projK}</Kicker>
            <h2>{t.projT}</h2>
            <div className="projects">
              {projects.map((project, index) => (
                <Project key={project.title} p={project} i={index} label={t.view} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </LazySection>
  );
}
