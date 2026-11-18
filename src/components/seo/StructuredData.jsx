import {
  BRAND_NAME,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from "@/lib/site-config";

export default function StructuredData({ locale = "en" }) {
  const isPersian = locale === "fa";
  const profileUrl = isPersian ? `${SITE_URL}/fa` : SITE_URL;
  const description = isPersian
    ? "محمد افروزه، برنامه‌نویس وب، توسعه‌دهنده فول‌استک و مهندس بک‌اند با تمرکز بر طراحی API و معماری نرم‌افزار."
    : "Mohammad Afrouzeh is a software developer, Full-Stack Developer and Backend Engineer focused on web development, API design and modular software architecture.";

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
        "@id": `${profileUrl}/#webpage`,
        url: profileUrl,
        name: isPersian
          ? "پروفایل محمد افروزه | برنامه‌نویس فول‌استک"
          : "Mohammad Afrouzeh | Full-Stack Developer Profile",
        inLanguage: isPersian ? "fa-IR" : "en-US",
        mainEntity: { "@id": `${SITE_URL}/#person` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        alternateName: ["محمد افروزه"],
        url: SITE_URL,
        image: `${SITE_URL}/img/mohammad-afrouzeh.png`,
        description,
        jobTitle: isPersian
          ? "برنامه‌نویس وب، توسعه‌دهنده فول‌استک و مهندس بک‌اند"
          : "Software Developer, Full-Stack Developer and Backend Engineer",
        mainEntityOfPage: { "@id": `${profileUrl}/#webpage` },
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
