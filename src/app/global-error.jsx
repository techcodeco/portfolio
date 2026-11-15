"use client";

import "./globals.css";
import ServerErrorPage from "@/components/errors/ServerErrorPage";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ServerErrorPage locale="auto" error={error} reset={reset} />
      </body>
    </html>
  );
}
