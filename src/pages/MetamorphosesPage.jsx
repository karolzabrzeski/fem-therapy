import { Link } from "react-router-dom";
import { beforeAfter, contact } from "../data/content.js";

export default function MetamorphosesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Galeria</h1>
          <p>Efekty terapii i zabiegów – zdjęcia przed i po za zgodą pacjentek.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery">
            {beforeAfter.map((b) => (
              <figure key={b.id} className="ba">
                <img src={b.image} alt={b.label} loading="lazy" />
                <figcaption>{b.label}</figcaption>
              </figure>
            ))}
          </div>
          <p className="note">Efekty mogą się różnić w zależności od indywidualnych predyspozycji.</p>
          <div className="center">
            <a href={contact.booksy} target="_blank" rel="noreferrer" className="btn btn--gold">Umów wizytę</a>
          </div>
        </div>
      </section>
    </>
  );
}
