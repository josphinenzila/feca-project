import Hero from "@/components/landing/sections/Hero";
import Programs from "@/components/landing/sections/Programs";
import Values from "@/components/landing/sections/Values";
import Header from "@/components/landing/layout/Header";
import Footer from "@/components/landing/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Programs />
      <Values />
      <Footer />
    </>
  );
}
