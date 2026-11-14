import { TECH } from "@/data/portfolio-data";

export const TERMINAL_TECH = TECH.reduce((acc, tech) => {
  const { name, level, category, color } = tech;
  acc[name.toLowerCase().replace(/[^a-z0-9]+/g, "-")] = {
    name,
    level,
    category,
    color,
  };
  return acc;
}, {});
