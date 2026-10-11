import { useRef } from "react";
import { Chevron } from "./Icons.jsx";

// Prosta karuzela oparta o scroll-snap + strzałki.
export default function Carousel({ children, label }) {
  const ref = useRef(null);

  const scroll = (dir) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="carousel" role="region" aria-label={label}>
      <button className="carousel__arrow" onClick={() => scroll(-1)} aria-label="Poprzednie">
        <Chevron dir="left" />
      </button>
      <div className="carousel__track" ref={ref}>
        {children}
      </div>
      <button className="carousel__arrow" onClick={() => scroll(1)} aria-label="Następne">
        <Chevron />
      </button>
    </div>
  );
}
