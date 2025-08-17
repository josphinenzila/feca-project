import Programs from "@/components/landing/sections/Programs";
import Values from "@/components/landing/sections/Values";
import Header from "@/components/landing/layout/Header";
import Footer from "@/components/landing/sections/Footer";
import HeroSlider from "@/components/landing/sections/Hero";
import Gallery from "@/components/landing/sections/Gallery1";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <Programs />
      <Values />
      <Gallery />
      <Footer />
    </>
  );
}
