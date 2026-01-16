"use client";

import { useEffect, useState } from "react";

export default function HeroSlider({ images, intervalMs = 3500 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images?.length) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images, intervalMs]);

  return (
    <div className="hero-bg-slider hero-slider">
      <div className="slides">
        {images.map((src, i) => (
          <img key={src} src={src} alt="" className={i === index ? "active" : ""} />
        ))}
      </div>
    </div>
  );
}
