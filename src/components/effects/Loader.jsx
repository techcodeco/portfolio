"use client";

import { m } from "framer-motion";

export default function Loader() {
  return (
    <m.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="loader-inner">
        <div className="loader-logo">&lt;/&gt;</div>
        <strong>TECHCODE</strong>
        <span>Code • Build • Level Up</span>
        <span>initializing systems...</span>
        <div className="loaderbar">
          <i />
        </div>
      </div>
    </m.div>
  );
}
