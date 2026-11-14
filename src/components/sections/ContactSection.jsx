"use client";

import { Github, Instagram, Mail, Send } from "lucide-react";
import LazySection from "@/components/layout/LazySection";
import Reveal from "@/components/ui/Reveal";
import Kicker from "@/components/ui/Kicker";
import Social from "@/components/sections/Social";

export default function ContactSection({ t }) {
  return (
    <LazySection id="contact" minHeight={420}>
      <Reveal>
        <section className="section contact">
          <div className="container contactbox glass">
            <div>
              <Kicker>{t.contactK}</Kicker>
              <h2>{t.contactT}</h2>
              <p>{t.contactP}</p>
            </div>
            <div className="socials">
              <Social icon={<Github />} label="GitHub" href="https://github.com/techcodeco" />
              <Social icon={<Instagram />} label="Instagram" href="https://instagram.com/techcodeco" />
              <Social icon={<Send />} label="Telegram" href="https://t.me/techcodeco" />
              <Social icon={<Mail />} label="Email" href="mailto:hello@techcodeco.dev" />
            </div>
          </div>
        </section>
      </Reveal>
    </LazySection>
  );
}
