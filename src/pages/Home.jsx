import Hero from "../components/Hero.jsx";
import AboutTeaser from "../components/AboutTeaser.jsx";
import OfferSection from "../components/OfferSection.jsx";
import BeforeAfter from "../components/BeforeAfter.jsx";
import Testimonials from "../components/Testimonials.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <OfferSection title="Oferta" />
      <BeforeAfter />
      <Testimonials />
    </>
  );
}
