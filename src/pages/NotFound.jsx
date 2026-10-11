import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: 360 }}>
      <div className="container">
        <h1>Nie znaleziono strony</h1>
        <p>Strona, której szukasz, nie istnieje lub została przeniesiona.</p>
        <p><Link to="/" className="btn btn--gold">Wróć na stronę główną</Link></p>
      </div>
    </section>
  );
}
