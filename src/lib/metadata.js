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
  const title = "Mohammad Afrouzeh | Full-Stack Developer | TechCodeCo";
  const description =
    "Official portfolio of Mohammad Afrouzeh (محمد افروزه) and TechCodeCo, featuring full-stack web development, React, Node.js and backend API projects.";

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: `${SITE_NAME} | TechCodeCo`,
    title,
    description,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical: "/",
      languages: {
        en: SITE_LANGUAGES.en,
        fa: SITE_LANGUAGES.fa,
        "x-default": SITE_LANGUAGES.en,
      },
    },
    robots: sharedRobots,
    openGraph: {
      type: "website",
      url: SITE_LANGUAGES.en,
      siteName: `${SITE_NAME} | TechCodeCo`,
      title,
      description,
      locale: "en_US",
      alternateLocale: ["fa_IR"],
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Mohammad Afrouzeh — Full-Stack Developer, TechCodeCo",
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
  const title = "محمد افروزه | برنامه‌نویس فول‌استک | TechCodeCo";
  const description =
    "وب‌سایت رسمی محمد افروزه (Mohammad Afrouzeh) و برند TechCodeCo؛ برنامه‌نویس و توسعه‌دهنده فول‌استک با تمرکز بر React، Node.js و توسعه وب.";

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: `${SITE_NAME} | TechCodeCo`,
    title,
    description,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical: "/fa",
      languages: {
        en: SITE_LANGUAGES.en,
        fa: SITE_LANGUAGES.fa,
        "x-default": SITE_LANGUAGES.en,
      },
    },
    robots: sharedRobots,
    openGraph: {
      type: "website",
      url: SITE_LANGUAGES.fa,
      siteName: `${SITE_NAME} | TechCodeCo`,
      title,
      description,
      locale: "fa_IR",
      alternateLocale: ["en_US"],
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "محمد افروزه — توسعه‌دهنده فول‌استک و TechCodeCo",
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
