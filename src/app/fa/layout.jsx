import "../globals.css";
import { createPersianMetadata } from "@/lib/metadata";

export const metadata = createPersianMetadata();

export const viewport = {
  themeColor: "#08080b",
  colorScheme: "dark light",
};

export default function PersianRootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
