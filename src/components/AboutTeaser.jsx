import { Link } from "react-router-dom";
import { images } from "../data/content.js";

export default function AboutTeaser() {
  return (
    <section className="section about-teaser">
      <div className="container about-teaser__inner">
        <img
          className="about-teaser__photo"
          src={images.portrait}
          alt="Marta Zabrzeska – fizjoterapeutka i kosmetolog"
          loading="lazy"
        />
        <div>
          <h2 className="section__title section__title--left">O nas</h2>
          <p>
            Nazywam się Marta Zabrzeska. Jestem fizjoterapeutką i kosmetologiem
            specjalizującą się w terapii blizn, uroginekologii oraz nowoczesnej
            kosmetologii estetycznej. Łączę wiedzę medyczną z wrażliwością na
            potrzeby kobiet, tworząc bezpieczną i spokojną przestrzeń do
            troski o ciało.
          </p>
          <p>
            W swojej pracy stawiam na indywidualne podejście, sprawdzone metody
            i rzetelne informacje. Każda terapia zaczyna się od dokładnej
            rozmowy i oceny, aby dobrać rozwiązanie, które naprawdę pomoże.
          </p>
          <Link to="/o-nas" className="btn btn--outline">
            Poznaj mnie bliżej
          </Link>
        </div>
      </div>
    </section>
  );
}
