"use client";

import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/site-config";

export default function ReportProblemLink({ locale = "en", code = "500", digest = "" }) {
  const pathname = usePathname() || (locale === "fa" ? "/fa" : "/");
  const isPersian = locale === "fa";
  const subject = isPersian
    ? `گزارش خطای ${code} در وب‌سایت TECHCODE`
    : `TECHCODE website issue report (${code})`;
  const body = isPersian
    ? `سلام، هنگام بازدید از وب‌سایت با یک خطا مواجه شدم.\n\nمسیر صفحه: ${pathname}\nکد خطا: ${code}\nشناسه پیگیری: ${digest || "ثبت نشده"}\n\nشرح مشکل:\n`
    : `Hello, I encountered an issue while visiting the TECHCODE website.\n\nPage path: ${pathname}\nError code: ${code}\nReference ID: ${digest || "Not available"}\n\nIssue details:\n`;
  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a className="nf-button nf-button-secondary" href={href}>
      <Mail size={17} aria-hidden="true" />
      <span>{isPersian ? "گزارش مشکل" : "Report a problem"}</span>
    </a>
  );
}
