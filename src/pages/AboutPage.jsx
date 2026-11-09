import { images, contact, team } from "../data/content.js";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>O nas</h1>
          <p>Poznaj Martę i Mariusza – zespół Fem Therapy.</p>
        </div>
      </section>

      {team.map((p, i) => (
        <section key={p.name} className={`section ${i % 2 ? "section--soft" : ""}`}>
          <div className={`container two-col ${i % 2 ? "two-col--reverse" : ""}`}>
            <img src={p.image} alt={p.name} loading="lazy" />
            <div className="prose">
              <h2>{p.name}</h2>
              <p className="team__role">{p.role}</p>
              {p.long.map((t) => (
                <p key={t}>{t}</p>
              ))}
              <ul className="ticks">
                {p.points.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <a href={contact.booksy} target="_blank" rel="noreferrer" className="btn btn--gold">Umów wizytę</a>
            </div>
          </div>
        </section>
      ))}

      <section className="section section--rose">
        <div className="container">
          <h2 className="section__title">Wykształcenie i doświadczenie</h2>
          <div className="prose" style={{ maxWidth: 720, margin: "24px auto 0" }}>
            <p>
              Ta sekcja jest przygotowana na listę kursów, szkoleń i
              certyfikatów. Podeślij mi proszę właściwe informacje, a uzupełnię
              ją w kolejnym kroku.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title">Gabinet</h2>
          <p className="section__subtitle">Miejsce, w którym możesz się zrelaksować</p>
          <div className="two-col">
            <img src={images.gabinet1} alt="Gabinet Fem Therapy" loading="lazy" />
            <img src={images.gabinet2} alt="Wnętrze gabinetu" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
