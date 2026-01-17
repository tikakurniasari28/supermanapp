import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="page about-page">
        <section className="container about-section">
          <div className="section-title">
            <h2>About Us</h2>
            <p className="section-subtitle">
              Learn more about our owner, our crew, and why snorkeling with us is safe, fun, and unforgettable.
            </p>
          </div>

          <div className="card about-card">
            <div className="about-grid">
              <div className="about-photo">
                <img src="/image/image.png" alt="Made Partayasa" />
              </div>

              <div className="about-text">
                <h3>Meet the Owner</h3>
                <p>
                  The owner, <b>Made Partayasa</b>, is originally from <b>Nusa Lembongan</b> and has extensive
                  experience in the surrounding waters. Before running Superman Snorkeling, he worked as a
                  dive instructor for a long time and holds a <b>course director certificate</b>.
                </p>
                <p>
                  He has extensive knowledge of the area and marine life around Nusa Lembongan. His crew members
                  will ensure you have a great time in the water and on the boat, while ensuring your safety
                  throughout the trip.
                </p>

                <h3>Safety & Boats</h3>
                <p>
                  Our boats are modern and new, well-maintained, and equipped with all necessary safety equipment.
                  We will ensure you have a great time during your snorkeling trip in Nusa Lembongan with us!
                </p>

                <div className="about-cta">
                  <a className="btn primary" href="/#contact">Booking Now</a>
                  <a className="btn" href="/gallery">View Gallery</a>
                </div>
              </div>
            </div>
          </div>

        </section>
        <Footer />
      </main>
    </>
  );
}
