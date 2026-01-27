"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);

  // Hide header saat scroll: hanya di Home
  useEffect(() => {
    if (!isHome) {
      setHide(false);
      return;
    }

    const onScroll = () => setHide(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Tutup mobile menu tiap pindah halaman
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`${hide ? "hide" : ""} ${isHome ? "is-home" : "is-solid"}`}>
      <div className="container">
        <div className="nav">
          <Link className="brand" href="/" aria-label="Superman Snorkeling" onClick={closeMenu}>
            <span className="logo" aria-hidden="true">
              <img
                src="image/IMG_1567.PNG"
                alt="Superman Snorkeling Logo"
                width={40}
                height={40}
              />
            </span>
            <span>
              Superman <span className="brand-accent">Snorkeling</span>
            </span>
          </Link>

          <nav aria-label="Navigasi">
            <ul>
              <li><Link href="/packages">Packages</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/#contact">Contact Us</Link></li>
              <li><Link href="/#testimoni">Customer Say</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </nav>

          <div className="actions">
            <Link className="btn primary" href="/#contact" onClick={closeMenu}>
              Booking Now
            </Link>

            <button
              className="btn icon menu-toggle"
              aria-label="Buka menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              type="button"
            >
              <span className="hamburger" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${open ? "open" : ""}`}>
          <Link href="/packages" onClick={closeMenu}>Packages</Link>
          <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link href="/#contact" onClick={closeMenu}>Contact Us</Link>
          <Link href="/#testimoni" onClick={closeMenu}>Customer Say</Link>
          <Link href="/about" onClick={closeMenu}>About Us</Link>
        </div>
      </div>
    </header>
  );
}
