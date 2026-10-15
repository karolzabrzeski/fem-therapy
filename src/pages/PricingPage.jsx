import { Link } from "react-router-dom";
import { pricing, contact } from "../data/content.js";

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Cennik</h1>
          <p>Aktualny cennik zabiegów i konsultacji.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          {pricing.map((group) => (
            <div key={group.category} className="price-block">
              <h3>{group.category}</h3>
              {group.items.map((it) => (
                <div key={it.name}>
                  <div className="price-row">
                    <span>
                      {it.name}
                      {it.duration && <small className="price-meta"> · {it.duration}</small>}
                      {it.note && <small className="price-note">{it.note}</small>}
                    </span>
                    <span>{it.price}</span>
                  </div>
                  {it.sub?.map((sub) => (
                    <div key={sub.name} className="price-row price-row--sub">
                      <span>
                        {sub.name}
                        {sub.duration && <small className="price-meta"> · {sub.duration}</small>}
                      </span>
                      <span>{sub.price}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
          <p className="note">
            Ceny pochodzą z systemu rezerwacji Booksy. Ostateczny koszt i zakres zabiegu ustalany jest podczas konsultacji.
          </p>
          <div className="center">
            <a href={contact.booksy} target="_blank" rel="noreferrer" className="btn btn--gold">Umów wizytę</a>
          </div>
        </div>
      </section>
    </>
  );
}
