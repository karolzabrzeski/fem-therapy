import { useState } from "react";
import { contact, services } from "../data/content.js";
import { MailIcon, PhoneIcon } from "../components/Icons.jsx";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const mapQuery = encodeURIComponent(contact.address);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: podłączyć wysyłkę (np. Formspree / własny backend)
    setSent(true);
    e.target.reset();
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Kontakt</h1>
          <p>Umów wizytę lub zadaj pytanie – odpowiem najszybciej, jak to możliwe.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-box">
              <h3>Dane kontaktowe</h3>
              <ul className="contact-list">
                <li>📍 {contact.address}</li>
                <li><PhoneIcon /> <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a></li>
                <li><MailIcon /> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              </ul>
              <a className="btn btn--sage" href={contact.booksy} target="_blank" rel="noreferrer">
                Rezerwacja Booksy
              </a>
              <h3 style={{ marginTop: 28 }}>Godziny otwarcia</h3>
              <table className="hours">
                <tbody>
                  {contact.hours.map(([d, h]) => (
                    <tr key={d}><td>{d}</td><td>{h}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <form className="contact-box form" onSubmit={onSubmit}>
              <h3>Napisz do mnie</h3>
              <label>Imię i nazwisko<input name="name" required /></label>
              <label>E-mail<input type="email" name="email" required /></label>
              <label>Telefon<input type="tel" name="phone" /></label>
              <label>
                Interesuje mnie
                <select name="service" defaultValue="">
                  <option value="" disabled>Wybierz usługę</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.title}</option>
                  ))}
                  <option value="inne">Inne / konsultacja</option>
                </select>
              </label>
              <label>Wiadomość<textarea name="message" rows="4" /></label>
              <button className="btn btn--gold" type="submit">Wyślij wiadomość</button>
              {sent && <div className="form__ok">Dziękuję! Wiadomość została przyjęta (tryb demonstracyjny).</div>}
            </form>
          </div>

          <div className="map-big">
            <iframe
              title="Mapa dojazdu"
              loading="lazy"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
