import { Link } from "react-router-dom";
import { images, contact } from "../data/content.js";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>O mnie</h1>
          <p>Fizjoterapeutka i kosmetolog z pasją do holistycznej troski o ciało kobiety.</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <img src={images.portrait} alt="Marta Zabrzeska" loading="lazy" />
          <div className="prose">
            <h2>Marta Zabrzeska</h2>
            <p>
              Jestem fizjoterapeutką i kosmetologiem. Specjalizuję się w terapii
              blizn, fizjoterapii uroginekologicznej oraz nowoczesnych zabiegach
              regeneracyjnych i estetycznych. Fem Therapy to miejsce stworzone
              z myślą o kobietach, które szukają profesjonalnej, a jednocześnie
              ciepłej i dyskretnej opieki.
            </p>
            <p>
              Stale się szkolę i korzystam ze sprawdzonych, nowoczesnych metod.
              Każdą wizytę zaczynam od rozmowy – dopiero wtedy dobieram
              terapię dopasowaną do Twoich potrzeb.
            </p>
            <ul className="ticks">
              <li>Indywidualne podejście do każdej pacjentki</li>
              <li>Bezpieczne, udokumentowane metody terapii</li>
              <li>Dyskretna i spokojna atmosfera gabinetu</li>
            </ul>
            <a href={contact.booksy} target="_blank" rel="noreferrer" className="btn btn--gold">Umów wizytę</a>
          </div>
        </div>
      </section>

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
