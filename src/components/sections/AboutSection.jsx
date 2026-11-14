"use client";

import LazySection from "@/components/layout/LazySection";
import Reveal from "@/components/ui/Reveal";
import Kicker from "@/components/ui/Kicker";
import Stat from "@/components/ui/Stat";

export default function AboutSection({ t }) {
  return (
    <LazySection id="about" minHeight={420}>
      <Reveal>
        <section className="section">
          <div className="container about">
            <div>
              <Kicker>{t.aboutK}</Kicker>
              <h2>{t.aboutT}</h2>
            </div>
            <div>
              <p className="lead">{t.aboutP}</p>
              <div className="stats">
                <Stat v="5+" l={t.years} />
                <Stat v="15" l={t.start} />
                <Stat v="∞" l={t.curiosity} />
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </LazySection>
  );
}
