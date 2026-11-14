import "../globals.css";
import { createEnglishMetadata } from "@/lib/metadata";

export const metadata = createEnglishMetadata();

export const viewport = {
  themeColor: "#08080b",
  colorScheme: "dark light",
};

export default function EnglishRootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
