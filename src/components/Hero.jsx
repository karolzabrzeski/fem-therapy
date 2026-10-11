import { Link } from "react-router-dom";
import { images } from "../data/content.js";

export default function Hero() {
  return (
    <section className="hero" style={{ "--hero-img": `url(${images.hero})` }}>
      <div className="container hero__inner">
        <div className="hero__content">
          <h1>
            Zadbaj o swoje ciało
            <br />z czułością
            <br />i profesjonalizmem.
          </h1>
          <p>
            Specjalistyczna terapia blizn, uroginekologia
            <br />i nowoczesna kosmetologia w Rzeszowie.
          </p>
          <Link to="/kontakt" className="btn btn--gold">
            Zarezerwuj termin
          </Link>
        </div>
      </div>
    </section>
  );
}
