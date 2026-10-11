import { services } from "../data/content.js";
import ServiceCard from "./ServiceCard.jsx";

export default function OfferSection({ title = "Oferta", subtitle }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">{title}</h2>
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
        <div className="cards">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
