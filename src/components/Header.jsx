import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { contact } from "../data/content.js";
import { BooksyIcon, FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from "./Icons.jsx";

const links = [
  { to: "/o-nas", label: "O nas" },
  { to: "/oferta", label: "Oferta" },
  { to: "/galeria", label: "Galeria" },
  { to: "/cennik", label: "Cennik" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="header">
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__contact">
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
              <PhoneIcon /> <span>{contact.phone}</span>
            </a>
            <a href={`mailto:${contact.email}`}>
              <MailIcon /> <span className="topbar__email">{contact.email}</span>
            </a>
          </div>
          <div className="topbar__social">
            <a href={contact.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
            <a href={contact.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
            <a href={contact.booksy} aria-label="Booksy" target="_blank" rel="noreferrer">
              <BooksyIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="container header__inner">
        <Link to="/" className="logo" aria-label="Fem Therapy – strona główna">
          <img className="logo__mark" src="/logo.svg" alt="" width="54" height="54" />
          <span className="logo__name">Fem Therapy</span>
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
          <a href={contact.booksy} target="_blank" rel="noreferrer" className="btn btn--gold nav__cta">
            Umów wizytę
          </a>
        </nav>
      </div>
    </header>
  );
}
