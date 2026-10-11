import { Link, useParams } from "react-router-dom";
import { services, contact } from "../data/content.js";
import NotFound from "./NotFound.jsx";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <NotFound />;

  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Strona główna</Link> / <Link to="/oferta">Oferta</Link> / {service.title}
          </div>
          <h1>{service.title}</h1>
          <p>{service.short}</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <img src={service.image} alt={service.title} loading="lazy" />
          <div className="prose">
            <p>{service.long}</p>
            <h2>Co zyskasz?</h2>
            <ul className="ticks">
              {service.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a href={contact.booksy} target="_blank" rel="noreferrer" className="btn btn--gold">Umów wizytę</a>{" "}
            <Link to="/cennik" className="btn btn--outline">Zobacz cennik</Link>
          </div>
        </div>
      </section>

      <section className="section section--rose">
        <div className="container">
          <h2 className="section__title">Zobacz także</h2>
          <div className="cards" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {others.map((s) => (
              <article key={s.slug} className="card">
                <h3 className="card__title">{s.title}</h3>
                <p className="card__text">{s.short}</p>
                <Link to={`/oferta/${s.slug}`} className="card__link">Dowiedz się więcej</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
