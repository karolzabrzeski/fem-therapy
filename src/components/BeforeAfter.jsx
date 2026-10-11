import { Link } from "react-router-dom";
import { beforeAfter } from "../data/content.js";
import Carousel from "./Carousel.jsx";

export default function BeforeAfter({ showLink = true }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">Galeria</h2>
        <p className="section__subtitle">Przed i Po</p>
        <Carousel label="Galeria – przed i po">
          {beforeAfter.map((b) => (
            <figure key={b.id} className="ba">
              <img src={b.image} alt={b.label} loading="lazy" />
              <figcaption>{b.label}</figcaption>
            </figure>
          ))}
        </Carousel>
        {showLink && (
          <div className="center">
            <Link to="/galeria" className="btn btn--outline">
              Zobacz całą galerię
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
