import Programs from "@/components/landing/sections/Programs";
import ContactCTA from "@/components/landing/sections/ContactCTA";
import Header from "@/components/landing/layout/Header";
import Footer from "@/components/landing/sections/Footer";
import HeroSlider from "@/components/landing/sections/Hero";
import Gallery from "@/components/landing/sections/Gallery";
import DonateCTA from "@/components/landing/sections/DonateCTA";
import Testimonials from "@/components/landing/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <Programs />
      <ContactCTA />
      <Gallery />
      <DonateCTA />
      <Testimonials />
      <Footer />
    </>
  );
}
