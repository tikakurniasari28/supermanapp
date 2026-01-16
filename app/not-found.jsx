import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container" style={{ padding: "48px 0" }}>
      <h1>Halaman tidak ditemukan</h1>
      <p className="muted">Link yang kamu buka tidak ada.</p>
      <Link className="btn primary" href="/">Kembali ke Home</Link>
    </main>
  );
}
