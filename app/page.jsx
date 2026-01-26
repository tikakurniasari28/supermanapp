"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import ContactForm from "@/components/ContactForm";
import useInView from "./hooks/useInView";

function DestinationItem({ title, text, img, alt, reverse }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`destination-item ${reverse ? "reverse" : ""} ${isVisible ? "is-visible" : ""}`}
    >
      <div className="destination-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

      <div className="destination-image">
        <img src={img} alt={alt || title} />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="home">
        <section className="hero hero-bg">
          <HeroSlider
            images={[ "/image/delapan.jpeg", "/image/sembilan.jpeg", "/image/tiga.jpeg", "/image/satu.jpeg" ]}
          />
          <div className="hero-overlay" />

          <div className="container hero-content">
            <div className="hero-text">
              <h1>
                Discover the Ocean Like Never Before With <span>Superman Snorkeling</span>.
              </h1>

              <p className="lead">
                Welcome to Superman Snorkeling, where your ocean adventure begins. Whether you're visiting Bali for the first time or coming back for another escape, our snorkeling tours are designed to help you experience the sea in the most fun, safe, and unforgettable way.
              </p>
              <p className="lead">
                Discover vibrant coral reefs, swim alongside tropical fish, and experience the magic of the sea up close. Our local guides know the best spots and will make sure your experience is smooth, safe, and filled with amazing moments you'll want to capture forever.
              </p>
              <p className="lead">
                No stress, no worries — just you, the ocean, and the adventure of a lifetime. Whether you’re looking for relaxation or a thrilling experience, Superman Snorkeling is the perfect way to explore Bali from a whole new perspective.
              </p>

              <div className="hero-cta">
                <a className="btn primary" href="/packages">
                  See Packages
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="destination" id="destination">
          <div className="container destination-container">
            <h2>Snorkeling Destinations</h2>
            <p>Choose your favorite spot and let’s create your best underwater memory.</p>


            <DestinationItem
            title="Mangrove Point"
            text={`Mangrove Point is one of the most popular snorkeling spots in Nusa Lembongan, well known for its crystal-clear waters and calm conditions. This location is perfect for beginners, as the ocean currents are generally mild and the snorkeling area is wide and safe.
The main highlights of Mangrove Point are its healthy coral reefs with vibrant colors and the abundance of tropical fish swimming in shallow waters. This area is also a natural habitat for sea turtles, and on certain occasions, lucky visitors may even spot dolphins passing through the area.
With excellent water visibility, Mangrove Point offers a clear, comfortable, and unforgettable underwater snorkeling experience.`}
            img="image/mangrove.jpeg"
            alt="Mangrove Bay"
          />

          <DestinationItem
            title="Manta Bay"
            reverse
            text={`Manta Bay is one of the most iconic snorkeling spots in Nusa Penida, renowned as a habitat for manta rays. 
Its waters offer the unique experience of swimming with large yet docile manta rays. 
Its underwater beauty is enriched by natural coral and tropical fish.
Manta Bay is a major tourist attraction, offering a rare, thrilling, and memorable experience not found in many other places.`}
            img="image/tiga.jpeg"
            alt="Manta Bay"
          />

          <DestinationItem
            title="Crystal Bay"
            text={`Crystal Bay in Nusa Penida offers beautiful snorkeling with crystal-clear waters and high visibility. 
Colorful coral reefs and tropical fish are clearly visible even from the surface. 
The diversity of marine life and the tranquil beach atmosphere make Crystal Bay an ideal spot for snorkeling, even for beginners, and provides a beautiful and unforgettable underwater experience.`}
            img="image/crystal.jpeg"
            alt="Crystal Bay"
            />
          </div>
        </section>

        <section id="Why">
          <div className="container">
            <div className="section-title">
              <div>
                <h2>Why Choose Us</h2>
              </div>
              <p className="section-subtitle">
                We deliver a safe, fun, and unforgettable snorkeling adventure — with friendly local guides and complete facilities.
              </p>
            </div>

            <div className="why-container">
              <div className="why-box">
                <i className="fas fa-star" />
                <h3>Best Experience</h3>
                <p>We provide the best snorkeling experience with professional guides.</p>
              </div>

              <div className="why-box">
                <i className="fas fa-water" />
                <h3>Crystal Clear Water</h3>
                <p>Enjoy snorkeling in Bali with stunning underwater views.</p>
              </div>

              <div className="why-box">
                <i className="fas fa-users" />
                <h3>Friendly Team</h3>
                <p>Our team will ensure you feel safe and comfortable while with us.</p>
              </div>

              <div className="why-box">
                <i className="fas fa-shield-alt" />
                <h3>Safe &amp; Secure</h3>
                <p>All tools used are new comfortable and safe boat equipment cleanliness is maintained safety comes first</p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery">
          <div className="container">
            <div className="section-title">
              <div>
                <h2>Gallery</h2>
              </div>
              <p className="section-subtitle">
                From graceful manta rays to colorful coral gardens, every snorkeling spot offers a unique underwater story.
              </p>
            </div>

            <div className="gallery-4">
              <div className="g-item"><img src="/image/sepuluh.png" alt="Gallery 1" /></div>
              <div className="g-item"><img src="/image/lima.jpeg" alt="Gallery 4" /></div>
              <div className="g-item"><img src="/image/tiga.jpeg" alt="Gallery 2" /></div>
              <div className="g-item"><img src="/image/enam.png" alt="Gallery 3" /></div>
            </div>

            <div className="center-btn">
              <a className="btn primary" href="/gallery">Open Full Gallery</a>
            </div>
          </div>
        </section>


        <section id="testimoni">
          <div className="container">
            <div className="section-title">
              <div>
                <h2>Customer Say</h2>
              </div>

              <div className="testi">
                <div className="small">
                  <img src="/image/testi 11.jpeg" alt="testimoni says" />
                  <img src="/image/testi 2.jpeg" alt="testimoni Customer" />
                  <img src="/image/testi 3.jpeg" alt="testimoni snorkeling" />
                  <img src="/image/testi 4.jpeg" alt="testimoni Customer" />
                  <img src="/image/testi 5.jpeg" alt="testimoni snorkeling" />
                  <img src="/image/testi 6.jpeg" alt="testimoni cust" />
                  <img src="/image/testi 7.jpeg" alt="testimoni Customer" />
                  <img src="/image/testi 8.jpeg" alt="testimoni snorkeling" />
                  <img src="/image/testi 9.jpeg" alt="testimoni cust" />
                  <img src="/image/testi 10.jpeg" alt="testimoni snorkeling" />
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>

              <div className="contact-subtitle">
                <p>For any inquiries, please contact us</p>
                <a
                  href="https://wa.me/6282339536671"
                  target="_blank"
                  rel="noreferrer"
                  className="wa-icon"
                  aria-label="Chat on WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </div>
            </div>

            <div className="contact-grid">
              {/* LEFT: Form */}
              <div className="card contact-left">
                <h3>Form Message</h3>
                <ContactForm />
              </div>

              {/* RIGHT: Map */}
              <div className="card contact-right">
                <h3>Detail Location</h3>
                <p className="muted">
                  <b>Superman Snorkeling</b>
                </p>
                <p className="muted">At Jungutbatu Street Nusa Lembongan, Bali</p>

                <div className="map-box">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3944.2628666536066!2d115.44621987501456!3d-8.666532191381044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMzknNTkuNSJTIDExNcKwMjYnNTUuNyJF!5e0!3m2!1sid!2sid!4v1767708345465!5m2!1sid!2sid"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Superman Snorkeling Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
