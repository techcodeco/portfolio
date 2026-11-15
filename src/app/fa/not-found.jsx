import NotFoundPage from "@/components/not-found/NotFoundPage";

export const metadata = {
  title: "۴۰۴ — صفحه پیدا نشد | محمد افروزه",
  description: "صفحه درخواستی در وب‌سایت محمد افروزه پیدا نشد.",
  robots: { index: false, follow: true },
};

export default function PersianNotFound() {
  return <NotFoundPage locale="fa" />;
}
