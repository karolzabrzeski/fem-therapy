import { Link } from "react-router-dom";
import { pricing, contact } from "../data/content.js";

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Cennik</h1>
          <p>Orientacyjne ceny zabiegów i konsultacji.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          {pricing.map((group) => (
            <div key={group.category} className="price-block">
              <h3>{group.category}</h3>
              {group.items.map((it) => (
                <div key={it.name} className="price-row">
                  <span>{it.name}</span>
                  <span>{it.price}</span>
                </div>
              ))}
            </div>
          ))}
          <p className="note">
            Ceny są przykładowe i zostaną zaktualizowane. Ostateczny koszt ustalany jest podczas konsultacji.
          </p>
          <div className="center">
            <a href={contact.booksy} target="_blank" rel="noreferrer" className="btn btn--gold">Umów wizytę</a>
          </div>
        </div>
      </section>
    </>
  );
}
