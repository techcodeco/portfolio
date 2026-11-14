"use client";

import LazySection from "@/components/layout/LazySection";
import Reveal from "@/components/ui/Reveal";
import Kicker from "@/components/ui/Kicker";
import SystemDiagram from "@/components/sections/SystemDiagram";

export default function ArchitectureSection({ t, lang = "en" }) {
  return (
    <LazySection id="architecture" minHeight={650}>
      <Reveal>
        <section className="section">
          <div className="container">
            <div className="heading">
              <div>
                <Kicker>{t.archK}</Kicker>
                <h2>{t.archT}</h2>
              </div>
              <p>{t.archP}</p>
            </div>
            <SystemDiagram lang={lang} />
          </div>
        </section>
      </Reveal>
    </LazySection>
  );
}
