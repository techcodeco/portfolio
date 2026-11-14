"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BackButton({ locale, label, homeHref }) {
  const router = useRouter();
  const Icon = locale === "fa" ? ChevronRight : ChevronLeft;

  function handleBack() {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push(homeHref);
  }

  return (
    <button className="nf-button nf-button-secondary" onClick={handleBack} type="button">
      <Icon size={17} aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}
