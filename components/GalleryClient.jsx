"use client";

import { useMemo, useState, useEffect } from "react";

export default function GalleryClient() {
  const items = useMemo(
    () => [
      { category: "underwater", full: "/image/satu.jpeg", thumb: "/image/satu.jpeg", alt: "Underwater" },
      { category: "underwater", full: "/image/dua.jpeg", thumb: "/image/dua.jpeg", alt: "Underwater" },
      { category: "underwater", full: "/image/tiga.jpeg", thumb: "/image/tiga.jpeg", alt: "Underwater" },
      { category: "underwater", full: "/image/empat.jpeg", thumb: "/image/empat.jpeg", alt: "underwater" },
      { category: "underwater", full: "/image/lima.jpeg", thumb: "/image/lima.jpeg", alt: "Underwater" },
      { category: "underwater", full: "/image/enam.png", thumb: "/image/enam.png", alt: "Underwater" },
      { category: "underwater", full: "/image/tujuh.jpeg", thumb: "/image/tujuh.jpeg", alt: "Underwater" },
      { category: "underwater", full: "/image/delapan.jpeg", thumb: "/image/delapan.jpeg", alt: "underwater" },
      { category: "underwater", full: "/image/sembilan.jpeg", thumb: "/image/sembilan.jpeg", alt: "Underwater" },
      { category: "underwater", full: "/image/sepuluh.png", thumb: "/image/sepuluh.png", alt: "underwater" },
      { category: "all", full: "/image/1.jpeg", thumb: "/image/1.jpeg", alt: "all" },
      { category: "all", full: "/image/2.jpeg", thumb: "/image/2.jpeg", alt: "all" },
    ],
    []
  );

  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleItems = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((i) => i.category === filter);
  }, [items, filter]);

  function openLightbox(idx) {
    if (!visibleItems.length) return;
    setCurrentIndex(Math.max(0, Math.min(idx, visibleItems.length - 1)));
    setOpen(true);
  }

  function closeLightbox() {
    setOpen(false);
  }

  function next() {
    if (!visibleItems.length) return;
    setCurrentIndex((i) => (i + 1) % visibleItems.length);
  }

  function prev() {
    if (!visibleItems.length) return;
    setCurrentIndex((i) => (i - 1 + visibleItems.length) % visibleItems.length);
  }

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, visibleItems.length]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="galleryPage" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p className="section-subtitle">Explore moments from our trips — underwater scenes.</p>
        </div>

        <div className="filter">
          {[
            { key: "all", label: "All" },
            { key: "underwater", label: "Underwater" },
          ].map((b) => (
            <button
              key={b.key}
              type="button"
              className={`filter-btn ${filter === b.key ? "active" : ""}`.trim()}
              data-filter={b.key}
              onClick={() => setFilter(b.key)}
            >
              {b.label}
            </button>
          ))}
        </div>

        <div className="masonry">
          {visibleItems.map((it, idx) => (
            <button
              key={`${it.full}-${idx}`}
              type="button"
              className="masonry-item"
              data-category={it.category}
              data-full={it.full}
              aria-label={`Open image ${idx + 1}`}
              onClick={() => openLightbox(idx)}
            >
              <img src={it.thumb} alt={it.alt} />
            </button>
          ))}
        </div>

        <div
          id="lightbox"
          className={`lightbox ${open ? "open" : ""}`.trim()}
          aria-hidden={!open}
          onClick={(e) => {
            if (e.target?.id === "lightbox") closeLightbox();
          }}
        >
          <button id="lightboxClose" className="lightbox-close" type="button" onClick={closeLightbox}>
            &times;
          </button>
          <button id="lightboxPrev" className="lightbox-nav prev" type="button" onClick={(e) => { e.stopPropagation(); prev(); }}>
            &#10094;
          </button>
          {open && visibleItems[currentIndex]?.full ? (
            <img
              id="lightboxImg"
              className="lightbox-img"
              src={visibleItems[currentIndex].full}
              alt=""
            />
          ) : null}
          <button id="lightboxNext" className="lightbox-nav next" type="button" onClick={(e) => { e.stopPropagation(); next(); }}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
