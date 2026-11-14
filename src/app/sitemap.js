import { SITE_LANGUAGES, SITE_URL } from "@/lib/site-config";

export default function sitemap() {
  const lastModified = new Date();
  const alternates = { languages: SITE_LANGUAGES };

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates,
    },
    {
      url: `${SITE_URL}/fa`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates,
    },
  ];
}
