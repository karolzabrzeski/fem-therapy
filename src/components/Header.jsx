import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { contact } from "../data/content.js";

const links = [
  { to: "/o-mnie", label: "O mnie" },
  { to: "/oferta", label: "Oferta" },
  { to: "/galeria", label: "Galeria" },
  { to: "/cennik", label: "Cennik" },
  { to: "/regulamin", label: "Regulamin" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo" aria-label="Fem Therapy – strona główna">
          <img className="logo__mark" src="/logo.svg" alt="" width="54" height="54" />
          <span className="logo__name">Fem Therapy</span>
          <span className="logo__sep" />
          <span className="logo__person">
            Marta
            <br />
            Zabrzeska
          </span>
        </Link>

        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? "nav--open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a href={contact.booksy} target="_blank" rel="noreferrer" className="btn btn--sage nav__cta">
            Umów wizytę
          </a>
        </nav>
      </div>
    </header>
  );
}
