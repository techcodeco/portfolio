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
        src: "/icons/icon-192.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "/icons/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
    ],
  };
}
