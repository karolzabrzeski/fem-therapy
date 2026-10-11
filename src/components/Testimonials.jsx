import { useState } from "react";
import { testimonials } from "../data/content.js";
import { Chevron } from "./Icons.jsx";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const n = testimonials.length;
  const go = (d) => setI((v) => (v + d + n) % n);

  // Na desktopie pokazujemy 3 opinie naraz, startując od aktualnego indeksu.
  const visible = [0, 1, 2].map((k) => testimonials[(i + k) % n]);

  return (
    <section className="section section--rose testimonials">
      <div className="container">
        <h2 className="section__title">Opinie Pacjentek</h2>
        <div className="testimonials__row">
          <button className="carousel__arrow carousel__arrow--soft" onClick={() => go(-1)} aria-label="Poprzednia opinia">
            <Chevron dir="left" />
          </button>
          <div className="testimonials__list">
            {visible.map((t, idx) => (
              <figure key={`${t.id}-${idx}`} className="bubble">
                <span className="bubble__quote">“</span>
                <blockquote>{t.text}</blockquote>
                <figcaption>{t.author}</figcaption>
              </figure>
            ))}
          </div>
          <button className="carousel__arrow carousel__arrow--soft" onClick={() => go(1)} aria-label="Następna opinia">
            <Chevron />
          </button>
        </div>
        <div className="dots" aria-hidden="true">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              className={`dots__dot ${idx === i ? "dots__dot--active" : ""}`}
              onClick={() => setI(idx)}
              tabIndex={-1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
