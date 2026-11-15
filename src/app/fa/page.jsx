import PortfolioApp from "@/components/portfolio/PortfolioApp";
import StructuredData from "@/components/seo/StructuredData";

// The portfolio is content-first; render it at build time for low TTFB.
export const dynamic = "force-static";
// Cache generated HTML for one hour at compatible CDN/reverse-proxy layers.
export const revalidate = 3600;

export default function PersianHomePage() {
  return (
    <>
      <StructuredData locale="fa" />
      <PortfolioApp initialLang="fa" />
    </>
  );
}
