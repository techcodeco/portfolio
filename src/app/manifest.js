export default function manifest() {
  return {
    name: "Mohammad Afrouzeh | TechCodeCo",
    short_name: "Mohammad Afrouzeh",
    description: "Full-stack developer and programmer portfolio of Mohammad Afrouzeh.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080b",
    theme_color: "#08080b",
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
