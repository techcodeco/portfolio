"use client";

import ServerErrorPage from "@/components/errors/ServerErrorPage";

export default function PersianError({ error, reset }) {
  return <ServerErrorPage locale="fa" error={error} reset={reset} />;
}
