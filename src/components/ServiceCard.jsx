import { Link } from "react-router-dom";
import { iconBySlug } from "./Icons.jsx";

export default function ServiceCard({ service }) {
  const Icon = iconBySlug[service.slug];
  return (
    <article className={`card card--${service.tone}`}>
      <div className="card__icon">{Icon && <Icon />}</div>
      <h3 className="card__title">{service.title}</h3>
      <p className="card__text">{service.short}</p>
      <Link to={`/oferta/${service.slug}`} className="card__link">
        Dowiedz się więcej
      </Link>
    </article>
  );
}
