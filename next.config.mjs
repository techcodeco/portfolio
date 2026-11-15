import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The intro portrait is rendered at ~184–310 CSS px. Smaller candidates
    // avoid forcing a 640px response for a 228px desktop rendering.
    imageSizes: [32, 48, 64, 96, 128, 160, 192, 256, 320, 384, 480],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    qualities: [70, 75],
  },
  turbopack: {
    root: projectRoot,
  },
  // Keep previously published asset URLs working while new references use
  // the organized /icons and /img directories.
  async redirects() {
    return [
      { source: "/favicon.ico", destination: "/icons/favicon.ico", permanent: true },
      { source: "/favicon-48x48.png", destination: "/icons/favicon-48x48.png", permanent: true },
      { source: "/favicon-96x96.png", destination: "/icons/favicon-96x96.png", permanent: true },
      { source: "/apple-touch-icon.png", destination: "/icons/apple-touch-icon.png", permanent: true },
      { source: "/icon.svg", destination: "/icons/icon.svg", permanent: true },
      { source: "/icon-192.png", destination: "/icons/icon-192.png", permanent: true },
      { source: "/icon-512.png", destination: "/icons/icon-512.png", permanent: true },
      { source: "/opengraph-image.png", destination: "/img/opengraph-image.png", permanent: true },
    ];
  },
};

export default nextConfig;
