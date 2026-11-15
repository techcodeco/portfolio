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
  const title = "Mohammad Afrouzeh | Full-Stack & Backend Developer";
  const description =
    "Official portfolio of Mohammad Afrouzeh, a Full-Stack and Backend Developer building web applications and modular services with TypeScript, Node.js, React and APIs.";

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
      "Web Developer",
      "Full-Stack Developer",
      "Full-Stack Programmer",
      "Backend Developer",
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
          url: "/img/opengraph-image.png",
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
      images: ["/img/opengraph-image.png"],
    },
    icons: {
      icon: [
        { url: "/icons/favicon-48x48.png", type: "image/png", sizes: "48x48" },
        { url: "/icons/favicon-96x96.png", type: "image/png", sizes: "96x96" },
        { url: "/icons/favicon.ico", sizes: "any" },
        { url: "/icons/icon.svg", type: "image/svg+xml" },
      ],
      shortcut: ["/icons/favicon.ico"],
      apple: [{ url: "/icons/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    },
    category: "technology",
  };
}

export function createPersianMetadata() {
  const title = "محمد افروزه | برنامه‌نویس فول‌استک و مهندس بک‌اند";
  const description =
    "وب‌سایت رسمی محمد افروزه، برنامه‌نویس وب و توسعه‌دهنده فول‌استک با تمرکز بر بک‌اند، TypeScript، Node.js، طراحی API و معماری نرم‌افزار.";

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
      "برنامه نویس فول استک",
      "برنامه‌نویس وب",
      "توسعه‌دهنده وب",
      "توسعه‌دهنده فول‌استک",
      "مهندس بک‌اند",
      "توسعه‌دهنده بک‌اند",
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
          url: "/img/opengraph-image.png",
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
      images: ["/img/opengraph-image.png"],
    },
    icons: {
      icon: [
        { url: "/icons/favicon-48x48.png", type: "image/png", sizes: "48x48" },
        { url: "/icons/favicon-96x96.png", type: "image/png", sizes: "96x96" },
        { url: "/icons/favicon.ico", sizes: "any" },
        { url: "/icons/icon.svg", type: "image/svg+xml" },
      ],
      shortcut: ["/icons/favicon.ico"],
      apple: [{ url: "/icons/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    },
    category: "technology",
  };
}
