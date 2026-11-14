import PortfolioApp from "@/components/portfolio/PortfolioApp";
import StructuredData from "@/components/seo/StructuredData";

export default function PersianHomePage() {
  return (
    <>
      <StructuredData locale="fa" />
      <PortfolioApp initialLang="fa" />
    </>
  );
}
