"use client";

import ServerErrorPage from "@/components/errors/ServerErrorPage";

export default function EnglishError({ error, reset }) {
  return <ServerErrorPage locale="en" error={error} reset={reset} />;
}
