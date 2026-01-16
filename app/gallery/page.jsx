import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryClient from "@/components/GalleryClient";

export const metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
        <main className="page-gallery">
          <GalleryClient />
        </main>

      <Footer />
    </>
  );
}
