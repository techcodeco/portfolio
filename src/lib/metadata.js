import { SITE_LANGUAGES, SITE_NAME, SITE_URL } from "@/lib/site-config";

const sharedRobots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export function createEnglishMetadata() {
  const title = "Mohammad Afrouzeh | Full-Stack Developer & Backend Engineer | TECHCODE";
  const description =
    "Official portfolio of Mohammad Afrouzeh (محمد افروزه), software developer, Full-Stack Developer and Backend Engineer. Explore TypeScript, Node.js, React, API engineering and modular software architecture.";

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: `${SITE_NAME} | TECHCODE`,
    title,
    description,
    keywords: [
      "Mohammad Afrouzeh",
      "محمد افروزه",
      "TECHCODE",
      "Software Developer",
      "Programmer",
      "Full-Stack Developer",
      "Backend Engineer",
      "TypeScript",
      "Node.js",
      "React",
      "API Engineering",
    ],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical: "/",
      languages: {
        "en-US": SITE_LANGUAGES["en-US"],
        "fa-IR": SITE_LANGUAGES["fa-IR"],
        "x-default": SITE_LANGUAGES["x-default"],
      },
    },
    robots: sharedRobots,
    openGraph: {
      type: "website",
      url: SITE_LANGUAGES["en-US"],
      siteName: `${SITE_NAME} | TECHCODE`,
      title,
      description,
      locale: "en_US",
      alternateLocale: ["fa_IR"],
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Mohammad Afrouzeh — Full-Stack Developer, TECHCODE",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image.png"],
    },
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      shortcut: ["/icon.svg"],
    },
    category: "technology",
  };
}

export function createPersianMetadata() {
  const title = "محمد افروزه | توسعه‌دهنده فول‌استک و مهندس بک‌اند | TECHCODE";
  const description =
    "وب‌سایت رسمی محمد افروزه (Mohammad Afrouzeh)، برنامه‌نویس و توسعه‌دهنده فول‌استک و مهندس بک‌اند؛ با تمرکز بر TypeScript، Node.js، React، طراحی API و معماری ماژولار نرم‌افزار.";

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: `${SITE_NAME} | TECHCODE`,
    title,
    description,
    keywords: [
      "محمد افروزه",
      "Mohammad Afrouzeh",
      "TECHCODE",
      "برنامه‌نویس",
      "توسعه‌دهنده فول‌استک",
      "مهندس بک‌اند",
      "طراحی API",
      "TypeScript",
      "Node.js",
      "React",
    ],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical: "/fa",
      languages: {
        "en-US": SITE_LANGUAGES["en-US"],
        "fa-IR": SITE_LANGUAGES["fa-IR"],
        "x-default": SITE_LANGUAGES["x-default"],
      },
    },
    robots: sharedRobots,
    openGraph: {
      type: "website",
      url: SITE_LANGUAGES["fa-IR"],
      siteName: `${SITE_NAME} | TECHCODE`,
      title,
      description,
      locale: "fa_IR",
      alternateLocale: ["en_US"],
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "محمد افروزه — توسعه‌دهنده فول‌استک و TECHCODE",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image.png"],
    },
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      shortcut: ["/icon.svg"],
    },
    category: "technology",
  };
}
