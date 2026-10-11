import OfferSection from "../components/OfferSection.jsx";

export default function OfferPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Oferta</h1>
          <p>Poznaj zabiegi i terapie dostępne w Fem Therapy.</p>
        </div>
      </section>
      <OfferSection title="Nasze usługi" subtitle="Wybierz obszar, który Cię interesuje" />
    </>
  );
}
