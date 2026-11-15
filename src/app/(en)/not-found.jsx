import NotFoundPage from "@/components/not-found/NotFoundPage";

export const metadata = {
  title: "404 — Page Not Found | Mohammad Afrouzeh",
  description: "The requested page could not be found on Mohammad Afrouzeh's portfolio website.",
  robots: { index: false, follow: true },
};

export default function EnglishNotFound() {
  return <NotFoundPage locale="en" />;
}
