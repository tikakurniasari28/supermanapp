import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackagesClient from "@/components/PackagesClient";

export const metadata = {
  title: "Packages",
  description: "Packages snorkeling Superman Snorkeling di Nusa Lembongan, Bali.",
};

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main className="page-packages">
        <PackagesClient />
      </main>
      <Footer />
    </>
  );
}
