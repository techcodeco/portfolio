"use client";

import LazySection from "@/components/layout/LazySection";
import Reveal from "@/components/ui/Reveal";
import Certificates from "@/components/sections/Certificates";

export default function CertificatesSection({ lang = "en" }) {
  return (
    <LazySection id="certificates" minHeight={700}>
      <Reveal>
        <Certificates lang={lang} />
      </Reveal>
    </LazySection>
  );
}
