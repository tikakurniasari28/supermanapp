"use client";

import { useMemo, useRef, useState } from "react";

const PHONE_NUMBER = "6282339536671";

function openWhatsApp({ pkg, price, spots }) {
  const message =
    `Hi Superman Snorkeling \n\n` +
    `I want to book:\n` +
    `Package: ${pkg}\n` +
    `Price: ${price}\n` +
    `Spots: ${spots}\n\n` +
    `Trip date: \n` +
    `Number of participants: `;

  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function PackagesClient() {
  const [openId, setOpenId] = useState(null);
  const dialogRefs = useRef({});

  const packages = useMemo(
    () => [
      {
        id: "spot3",
        tag: "Best Deal",
        title: "Package 3 Spot Snorkeling",
        muted: "Manta Bay - Crystal Bay - Mangrove",
        price: "Rp 299K",
        items: ["3 Spot Snorkeling", "Sharing Boat", "Full Equipment"],
        spots: "Manta Bay - Crystal Bay - Mangrove",
        details: {
          sections: [
            {
              title: "Facilities",
              bullets: [
                "Towel",
                "Guide",
                "Full Equipment",
                "Sharing Boat",
                "Free Mineral Water & Fruit",
                "Documentation",
              ],
            },
            {
              title: "Snorkeling Spots",
              bullets: ["Manta Bay", "Crystal Bay", "Mangrove Point"],
            },
          ],
        },
      },
      {
        id: "private",
        tag: "Private",
        title: "Private Trip",
        muted: "Private Boat Snorkeling",
        price: "Rp 2.999K",
        items: ["SPECIAL GUIDE", "Private Boat", "Full Equipment"],
        spots: "Private Boat + Free Request Spot",
        details: {
          sections: [
            {
              title: "Facilities",
              bullets: [
                "Towel",
                "Special Guide",
                "Full Equipment",
                "Private Boat",
                "Free Mineral Water & Fruit",
                "Documentation",
                "3 Spot : Manta Point, Crystal, & Mangrove",
              ],
            },
            {
              title: "Notes",
              bullets: ["Free request spots (subject to sea condition)."],
            },
          ],
        },
      },
      {
        id: "special",
        tag: "SuperSnor",
        title: "Superman Special Trip",
        muted: "Another best deal",
        price: "Rp 799K",
        items: ["Ticket Boat PP", "Sharing Boat", "Mineral Water & Snack"],
        spots: "Ticket Boat PP + Free Documentations",
        details: {
          sections: [
            {
              title: "Includes",
              bullets: [
                "Return boat ticket (PP)",
                "Sharing boat snorkeling",
                "Mineral water & snack",
                "Free documentation",
              ],
            },
          ],
        },
      },
      {
        id: "trip1",
        tag: "Combo Trip 1",
        title: "Simple Trip 1 (Snorkeling + Nusa Dua & Uluwatu Tour)",
        muted: "Boat PP + Snorkeling 3 Spot + Full Day Tour",
        price: "Rp 1.599K",
        items: [
          "Boat ticket PP",
          "Snorkeling: Manta Bay, Crystal Bay, Mangrove Point",
          "Free pickup area Nusa Lembongan",
        ],
        spots: "Manta Bay - Crystal Bay - Mangrove Point",
        details: {
          sections: [
            {
              title: "Snorkeling Facilities",
              bullets: ["Towel", "Guide", "Full Equipment", "Sharing Boat", "Water & Fruit"],
            },
            {
              title: "Tour Highlights",
              bullets: ["Nusa Dua", "Uluwatu", "Optional cultural stops"],
            },
            {
              title: "Note",
              bullets: ["Does not include hotel, lunch payment, and entry tickets."],
            },
          ],
        },
        featured: true,
      },
      {
        id: "trip2",
        tag: "Combo Trip 2",
        title: "Simple Trip 2 (Snorkeling + Ubud Tour)",
        muted: "Boat PP + Snorkeling 3 Spot + Full Day Ubud Tour",
        price: "Rp 1.499K",
        items: [
          "Boat ticket PP",
          "Snorkeling: Manta Bay, Crystal Bay, Mangrove Point",
          "Free pickup area Nusa Lembongan",
        ],
        spots: "Manta Bay - Crystal Bay - Mangrove Point",
        details: {
          sections: [
            {
              title: "Snorkeling Facilities",
              bullets: ["Towel", "Guide", "Full Equipment", "Sharing Boat", "Water & Fruit"],
            },
            {
              title: "Tour Highlights",
              bullets: ["Ubud", "Rice terraces", "Coffee plantation (optional)"],
            },
            {
              title: "Note",
              bullets: ["Does not include hotel, lunch payment, and entry tickets."],
            },
          ],
        },
      },
      {
        id: "trip3",
        tag: "Combo Trip 3",
        title: "Simple Trip 3 (Snorkeling + Kintamani Tour)",
        muted: "Boat PP + Snorkeling 3 Spot + Full Day Kintamani Tour",
        price: "Rp 1.699K",
        items: [
          "Boat ticket PP",
          "Snorkeling: Manta Bay, Crystal Bay, Mangrove Point",
          "Free pickup area Nusa Lembongan",
        ],
        spots: "Manta Bay - Crystal Bay - Mangrove Point",
        details: {
          sections: [
            {
              title: "Snorkeling Facilities",
              bullets: ["Towel", "Guide", "Full Equipment", "Sharing Boat", "Water & Fruit"],
            },
            {
              title: "Tour Highlights",
              bullets: ["Kintamani (Mount Batur view)", "Coffee plantation", "Temples (optional)"],
            },
            {
              title: "Note",
              bullets: ["Does not include hotel, lunch payment, and entry tickets."],
            },
          ],
        },
      },
    ],
    []
  );

  function showModal(id) {
    setOpenId(id);
    const dialog = dialogRefs.current[id];
    if (dialog && !dialog.open) dialog.showModal();
  }

  function closeModal(id) {
    const dialog = dialogRefs.current[id];
    if (dialog && dialog.open) dialog.close();
    setOpenId(null);
  }

  return (
    <section id="packages">
      <div className="container">
        <div className="section-title">
          <h2>PACKAGES</h2>
        </div>

        <div className="packages">
          {packages.map((p) => (
            <div key={p.id} className={`card package ${p.featured ? "featured" : ""}`.trim()}>
              <span className="tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p className="muted">{p.muted}</p>
              <div className="price">{p.price}</div>
              <ul>
                {p.items.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>

              <button className="details-btn" type="button" onClick={() => showModal(p.id)}>
                View Details
              </button>

              <div className="card-actions">
                <a
                  className="btn primary"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openWhatsApp({ pkg: p.title, price: p.price, spots: p.spots });
                  }}
                >
                  Book via WhatsApp
                </a>
              </div>

              <dialog
                ref={(el) => {
                  if (el) dialogRefs.current[p.id] = el;
                }}
                className="modal"
                onClick={(e) => {
                  // close when clicking outside the modal-box
                  if (e.target?.tagName === "DIALOG") closeModal(p.id);
                }}
              >
                <div className="modal-box">
                  <button className="modal-x" type="button" aria-label="Close" onClick={() => closeModal(p.id)}>
                    &times;
                  </button>

                  <h3>{p.title}</h3>

                  {p.details.sections.map((s) => (
                    <div key={s.title}>
                      <h4>{s.title}</h4>
                      <ul>
                        {s.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <button
                    className="modal-book wa-modal"
                    type="button"
                    onClick={() => openWhatsApp({ pkg: p.title, price: p.price, spots: p.spots })}
                  >
                    Book via WhatsApp
                  </button>
                </div>
              </dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
