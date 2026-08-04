"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import coffeeLoading from "@/lib/lottie/coffee-loading.json";

export default function LoadingSplash() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) {
      setVisible(false);
      return;
    }

    const fadeTimer = setTimeout(() => setFading(true), 900);
    const hideTimer = setTimeout(() => setVisible(false), 1250);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-paper transition-opacity duration-300 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-40 sm:w-48">
        <Lottie animationData={coffeeLoading} loop={false} />
      </div>
    </div>
  );
}
