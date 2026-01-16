import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <span className="logo" aria-hidden="true">
                <img
                  src="/image/IMG_1567.PNG"
                  alt="Superman Snorkeling Logo"
                  width={40}
                  height={40}
                />
              </span>
              <span>
                Superman <span className="brand-accent">Snorkeling</span>
              </span>
            </div>
            <p className="footer-desc">
              Trip snorkeling on Nusa Lembongan, Bali. Safe, fun, and unforgettable ocean experiences.
            </p>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>

            <a className="footer-item" href="https://wa.me/6282339536671" target="_blank" rel="noopener">
              <span className="footer-icon">
                <i className="fa-brands fa-whatsapp" />
              </span>
              <span>
                <b>WhatsApp</b>
                <br />
                0823-3953-6671
              </span>
            </a>

            <a className="footer-item" href="mailto:supermansnorkelingtrip@gmail.com">
              <span className="footer-icon">
                <i className="fa-solid fa-envelope" />
              </span>
              <span>
                <b>Email</b>
                <br />
                supermansnorkelingtrip@gmail.com
              </span>
            </a>

            <a
              className="footer-item"
              href="https://www.instagram.com/superman_lembongan?igsh=b2J5N3ZzbThrOWJj&utm_source=qr"
              target="_blank"
              rel="noopener"
            >
              <span className="footer-icon">
                <i className="fa-brands fa-instagram" />
              </span>
              <span>
                <b>Instagram</b>
                <br />
                @superman_lembongan
              </span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} Superman Snorkeling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
