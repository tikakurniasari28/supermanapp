// app/privacy-policy/page.jsx
export const metadata = {
  title: "Privacy Policy | Superman Snorkeling",
  description: "Kebijakan privasi Superman Snorkeling.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="mt-2 text-sm opacity-80">Last updated: {new Date().getFullYear()}</p>

      <section className="mt-8 space-y-4 leading-relaxed">
        <p>
          <strong>Superman Snorkeling</strong> menghargai dan melindungi privasi setiap pengunjung
          website kami. Informasi pribadi yang dikumpulkan melalui website ini, seperti nama dan
          nomor WhatsApp, digunakan hanya untuk keperluan pemesanan paket snorkeling dan komunikasi
          layanan.
        </p>

        <p>
          Kami tidak akan menjual, menyewakan, atau membagikan data pribadi pelanggan kepada pihak
          ketiga tanpa izin, kecuali diwajibkan oleh hukum yang berlaku.
        </p>

        <p>
          Data pelanggan disimpan dengan aman dan hanya digunakan untuk keperluan operasional layanan
          snorkeling.
        </p>

        <p>
          Jika Anda memiliki pertanyaan terkait kebijakan privasi ini, silakan hubungi kami melalui
          WhatsApp atau email yang tertera di website.
        </p>

        <p>Dengan menggunakan website ini, Anda menyetujui kebijakan privasi kami.</p>
      </section>
    </main>
  );
}
