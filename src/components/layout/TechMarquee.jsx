"use client";

import LazySection from "@/components/layout/LazySection";
import Marquee from "@/components/sections/Marquee";

export default function TechMarquee({ items, reverse = false, minHeight = 110 }) {
  return (
    <LazySection minHeight={minHeight}>
      <Marquee items={items} reverse={reverse} />
    </LazySection>
  );
}
