import { BRAND_NAME, SITE_NAME, SITE_URL, SOCIAL_PROFILES } from "@/lib/site-config";

export default function StructuredData({ locale = "en" }) {
  const isPersian = locale === "fa";
  const profileUrl = isPersian ? `${SITE_URL}/fa` : SITE_URL;
  const description = isPersian
    ? "محمد افروزه، برنامه‌نویس و توسعه‌دهنده فول‌استک با تمرکز بر توسعه وب، اپلیکیشن‌های مقیاس‌پذیر، API و معماری بک‌اند."
    : "Mohammad Afrouzeh is a full-stack developer focused on web development, scalable applications, backend APIs and software architecture.";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        alternateName: [BRAND_NAME, "TechCode"],
        inLanguage: ["en", "fa"],
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${profileUrl}/#profilepage`,
        url: profileUrl,
        name: isPersian
          ? "پروفایل محمد افروزه | برنامه‌نویس فول‌استک"
          : "Mohammad Afrouzeh | Full-Stack Developer Profile",
        inLanguage: isPersian ? "fa-IR" : "en-US",
        mainEntity: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        alternateName: ["محمد افروزه"],
        url: SITE_URL,
        description,
        jobTitle: "Full-Stack Developer and Backend Engineer",
        brand: {
          "@type": "Brand",
          name: BRAND_NAME,
          alternateName: "TechCode",
        },
        knowsAbout: [
          "Software Development",
          "Programming",
          "Full-Stack Development",
          "Web Development",
          "Frontend Development",
          "Backend Development",
          "JavaScript",
          "TypeScript",
          "React",
          "Node.js",
          "Bun",
          "React Native",
          "REST API Design",
          "Redis",
          "MongoDB",
          "BullMQ",
          "Docker",
          "Linux",
          "Scalable Web Applications",
          "Modular Backend Architecture",
        ],
        sameAs: SOCIAL_PROFILES,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
