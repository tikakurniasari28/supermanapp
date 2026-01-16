"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "6282339536671";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const text =
      `Halo Superman Snorkeling!\n\n` +
      `Nama: ${name}\n` +
      `No. WA: ${phone}\n\n` +
      `Pesan:\n${message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form id="contactForm" onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        WhatsApp Number
        <input name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </label>
      <label>
        Message
        <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </label>
      <button className="btn primary" type="submit">
        Send via WhatsApp
      </button>
    </form>
  );
}
