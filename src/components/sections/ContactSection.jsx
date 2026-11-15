"use client";

import { Github, Linkedin, Mail, Instagram, Send, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
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
              <Social icon={<Linkedin />} label="LinkedIn" href="https://www.linkedin.com/in/mohammad-afrouzeh" />
              <Social icon={<Mail />} label="Email" href="mailto:mafrwzh4@gmail.com" />
              <Social icon={<Instagram />} label="Instagram" href="https://www.instagram.com/techcode_tech/" />
              <Social icon={<Send />} label="Telegram" href="https://t.me/TechCodeDevPv" />
              <Social icon={<SiWhatsapp />} label="WhatsApp" href="https://wa.me/989918500342" />
              <Social icon={<Phone />} label={t.call} href="tel:+989918500342" />
            </div>
          </div>
        </section>
      </Reveal>
    </LazySection>
  );
}
