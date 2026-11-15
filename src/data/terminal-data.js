import { TECH } from "@/data/portfolio-data";

export const TERMINAL_TECH = TECH.reduce((acc, tech) => {
  const { name, category, color } = tech;
  acc[name.toLowerCase().replace(/[^a-z0-9]+/g, "-")] = {
    name,
    category,
    color,
  };
  return acc;
}, {});
