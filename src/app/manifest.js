export default function manifest() {
  return {
    name: "Mohammad Afrouzeh | TECHCODE",
    short_name: "TECHCODE",
    description: "Personal portfolio of Mohammad Afrouzeh — Full-Stack Developer and Backend Engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#070D1B",
    theme_color: "#070D1B",
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
    ],
  };
}
