import { Link } from "react-router-dom";
import { contact } from "../data/content.js";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from "./Icons.jsx";

export default function Footer() {
  const mapQuery = encodeURIComponent(contact.address);
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <a
          className="footer__map"
          href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Zobacz lokalizację na mapie"
        >
          <iframe
            title="Mapa dojazdu"
            loading="lazy"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          />
        </a>

        <div className="footer__col">
          <h4>Lokalizacja:</h4>
          <p>{contact.address}</p>
        </div>

        <div className="footer__col">
          <h4>Kontakt do kliniki:</h4>
          <p>
            <PhoneIcon /> <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
          </p>
          <p>
            <MailIcon /> <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <div className="footer__social">
            <a href={contact.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
            <a href={contact.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div className="footer__col footer__col--links">
          <Link to="/regulamin">Regulamin</Link>
          <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
          <a className="btn btn--sage" href={contact.booksy} target="_blank" rel="noreferrer">
            Rezerwacja Booksy
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <img className="footer__logo" src="/logo.svg" alt="Fem Therapy – Marta Zabrzeska" width="72" height="72" />
        © {new Date().getFullYear()} Fem Therapy – Marta Zabrzeska
      </div>
    </footer>
  );
}
