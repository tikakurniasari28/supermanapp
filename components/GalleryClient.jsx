"use client";

import { useMemo, useState, useEffect } from "react";

export default function GalleryClient() {
  const items = useMemo(
    () => [
      {
        category: "underwater",
        full: "/public/image/satu.jpeg",
        thumb: "/public/image/satu.jpeg",
        alt: "Underwater",
      },
      {
        category: "underwater",
        full: "/public/image/dua.jpeg",
        thumb: "/public/image/dua.jpeg",
        alt: "Underwater",
      },
      {
        category: "underwater",
        full: "/public/image/tiga.jpeg",
        thumb: "/public/image/tiga.jpeg",
        alt: "Underwater",
      },
      {
        category: "underwater",
        full: "/public/image/empat.jpeg",
        thumb: "/public/image/empat.jpeg",
        alt: "underwater",
      },
      {
        category: "underwater",
        full: "/public/image/lima.jpeg",
        thumb: "/public/image/lima.jpeg",
        alt: "Underwater",
      },
      {
        category: "underwater",
        full: "/public/image/enam.png",
        thumb: "/public/image/enam.png",
        alt: "Underwater",
      },
      {
        category: "underwater",
        full: "/public/image/tujuh.jpeg",
        thumb: "/public/image/tujuh.jpeg",
        alt: "Underwater",
      },
      {
        category: "underwater",
        full: "/public/image/delapan.jpeg",
        thumb: "/public/image/delapan.jpeg",
        alt: "underwater",
      },
      {
        category: "underwater",
        full: "/public/image/sembilan.jpeg",
        thumb: "/public/image/sembilan.jpeg",
        alt: "Underwater",
      },
      {
        category: "underwater",
        full: "/public/image/sepuluh.png",
        thumb: "/public/image/sepuluh.png",
        alt: "underwater",
      },
      {
        category: "all",
        full: "/public/image/1.jpeg",
        thumb: "/public/image/1.jpeg",
        alt: "all",
      },
      {
        category: "all",
        full: "/public/image/2.jpeg",
        thumb: "/public/image/2.jpeg",
        alt: "all",
      },
    ],
    [],
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
          <p className="section-subtitle">
            Explore moments from our trips — underwater scenes.
          </p>
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
          <button
            id="lightboxClose"
            className="lightbox-close"
            type="button"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <button
            id="lightboxPrev"
            className="lightbox-nav prev"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
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
          <button
            id="lightboxNext"
            className="lightbox-nav next"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
