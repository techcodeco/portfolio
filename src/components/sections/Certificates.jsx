"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, Award } from "lucide-react";
import Kicker from "@/components/ui/Kicker";
import Reveal from "@/components/ui/Reveal";
import { CERTIFICATES } from "@/data/portfolio-data";

export default function Certificates({ lang = "en" }) {
  const fa = lang === "fa";
  const labels = fa
    ? {
        kicker: "گواهی‌نامه‌ها",
        title: "گواهی‌های حرفه‌ای",
        subtitle: "مهارت‌های تخصصی و یادگیری مستمر در فناوری‌های مدرن",
        unavailable: "لینک اعتبارسنجی ارائه نشده",
        certificates: "گواهی‌نامه‌ها",
        technologies: "فناوری‌ها",
        learning: "یادگیری مستمر",
      }
    : {
        kicker: "🏆 CERTIFICATIONS",
        title: "Professional Certificates",
        subtitle: "Validated skills & continuous learning in modern technologies",
        unavailable: "Verification link not provided",
        certificates: "Certifications",
        technologies: "Technologies",
        learning: "Continuous Learning",
      };

  return (
    <section className="section certificates-section">
      <div className="container">
        <Reveal>
          <div className="cert-header">
            <Kicker>{labels.kicker}</Kicker>
            <h2>{labels.title}</h2>
            <p className="cert-subtitle">{labels.subtitle}</p>
          </div>
        </Reveal>

        <div className="cert-grid">
          {CERTIFICATES.map((cert, i) => (
            <Reveal key={cert.id}>
              <motion.div
                className="cert-card glass"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="cert-icon" style={{ color: cert.color }}>
                  <cert.icon />
                </div>

                <div className="cert-body">
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>

                  <div className="cert-meta">
                    <span className="cert-date">
                      <Calendar size={12} />
                      {cert.date}
                    </span>
                    <span className="cert-credential">
                      <Award size={12} />
                      {cert.credential}
                    </span>
                  </div>

                  {cert.link && cert.link !== "#" ? (
                    <motion.a
                      href={cert.link}
                      className="cert-link"
                      whileHover={{ x: 4 }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {fa ? "اعتبارسنجی گواهی" : "Verify Certificate"} <ExternalLink size={14} />
                    </motion.a>
                  ) : (
                    <span className="cert-link" aria-label={labels.unavailable}>
                      {labels.unavailable}
                    </span>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* آمار گواهی‌ها */}
        <div className="cert-stats">
          <motion.div
            className="cert-stat"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="cert-stat-number">{CERTIFICATES.length}+</span>
            <span className="cert-stat-label">{labels.certificates}</span>
          </motion.div>
          <motion.div
            className="cert-stat"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="cert-stat-number">4+</span>
            <span className="cert-stat-label">{labels.technologies}</span>
          </motion.div>
          <motion.div
            className="cert-stat"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span className="cert-stat-number">2023-2024</span>
            <span className="cert-stat-label">{labels.learning}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
