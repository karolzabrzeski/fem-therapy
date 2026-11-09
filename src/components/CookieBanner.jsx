import { useState } from "react";
import { Link } from "react-router-dom";

const KEY = "cookie-consent";

const read = () => {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
};

export default function CookieBanner() {
  const [choice, setChoice] = useState(read);
  const [open, setOpen] = useState(() => !read());

  const decide = (value) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* brak dostępu do localStorage – wybór obowiązuje do końca sesji */
    }
    setChoice(value);
    setOpen(false);
  };

  return (
    <div className="cookie">
      {open ? (
        <div className="cookie__banner" role="dialog" aria-label="Zgoda na pliki cookies">
          <h4>Pliki cookies 🍪</h4>
          <p>
            Strona nie zapisuje własnych plików cookies, ale część treści (np. mapa Google, czcionki)
            pochodzi od podmiotów trzecich. Więcej w{" "}
            <Link to="/polityka-cookies">Polityce Cookies</Link>.
          </p>
          <div className="cookie__actions">
            <button type="button" className="btn btn--gold" onClick={() => decide("accepted")}>
              Akceptuję
            </button>
            <button type="button" className="btn btn--outline" onClick={() => decide("necessary")}>
              Tylko niezbędne
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="cookie__toggle"
          aria-label="Ustawienia plików cookies"
          title={choice === "accepted" ? "Cookies zaakceptowane" : "Tylko niezbędne cookies"}
          onClick={() => setOpen(true)}
        >
          🍪
        </button>
      )}
    </div>
  );
}
