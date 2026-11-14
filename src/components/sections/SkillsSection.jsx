"use client";

import LazySection from "@/components/layout/LazySection";
import Reveal from "@/components/ui/Reveal";
import Kicker from "@/components/ui/Kicker";
import TechCard from "@/components/sections/TechCard";

export default function SkillsSection({ t, tech }) {
  return (
    <LazySection id="stack" minHeight={720}>
      <Reveal>
        <section className="section">
          <div className="container">
            <Kicker>{t.stackK}</Kicker>
            <h2>{t.stackT}</h2>
            <div className="techgrid">
              {tech.map((item, index) => (
                <TechCard key={item.name} x={item} i={index} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </LazySection>
  );
}
