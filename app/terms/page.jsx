// app/terms/page.jsx
export const metadata = {
  title: "Terms & Conditions | Superman Snorkeling",
  description: "Syarat dan ketentuan pemesanan Superman Snorkeling.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Terms &amp; Conditions</h1>
      <p className="mt-2 text-sm opacity-80">Last updated: {new Date().getFullYear()}</p>

      <section className="mt-8 space-y-4 leading-relaxed">
        <p>
          <strong>Superman Snorkeling</strong> menetapkan syarat dan ketentuan berikut untuk
          pemesanan layanan snorkeling.
        </p>

        <ul className="list-disc space-y-2 pl-5">
          <li>Pemesanan dilakukan melalui WhatsApp resmi Superman Snorkeling.</li>
          <li>Jadwal snorkeling akan dikonfirmasi setelah pelanggan melakukan pemesanan.</li>
          <li>Pembayaran dapat dilakukan sesuai kesepakatan (DP atau pembayaran penuh).</li>
          <li>Pembatalan oleh pelanggan dapat dilakukan maksimal 1 hari sebelum jadwal snorkeling.</li>
          <li>
            Pembatalan karena cuaca buruk atau kondisi laut tidak aman akan dijadwalkan ulang atau
            dikembalikan sesuai kesepakatan.
          </li>
          <li>Peserta wajib mengikuti instruksi guide demi keselamatan selama aktivitas snorkeling.</li>
          <li>Superman Snorkeling tidak bertanggung jawab atas kehilangan barang pribadi selama kegiatan.</li>
        </ul>

        <p>Dengan melakukan pemesanan, pelanggan dianggap telah menyetujui seluruh syarat dan ketentuan ini.</p>
      </section>
    </main>
  );
}
