import { Link } from "react-router-dom";
import { team } from "../data/content.js";

export default function AboutTeaser() {
  return (
    <section className="section about-teaser">
      <div className="container">
        <h2 className="section__title">O nas</h2>
        <p className="section__subtitle">
          Fem Therapy tworzymy razem – z troską o Twoje zdrowie i komfort.
        </p>
        <div className="team">
          {team.map((p) => (
            <article key={p.name} className="team__card">
              <img className="team__photo" src={p.image} alt={`${p.name} – ${p.role}`} loading="lazy" style={{ objectPosition: p.imagePosition }} />
              <h3>{p.name}</h3>
              <span className="team__role">{p.role}</span>
              <p>{p.short}</p>
            </article>
          ))}
        </div>
        <div className="center">
          <Link to="/o-nas" className="btn btn--outline">
            Poznaj nas bliżej
          </Link>
        </div>
      </div>
    </section>
  );
}
