import PortfolioApp from "@/components/portfolio/PortfolioApp";
import StructuredData from "@/components/seo/StructuredData";

export default function HomePage() {
  return (
    <>
      <StructuredData locale="en" />
      <PortfolioApp initialLang="en" />
    </>
  );
}
