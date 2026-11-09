import { Link } from "react-router-dom";
import { contact } from "../data/content.js";

export default function CookiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container"><h1>Polityka Cookies</h1></div>
      </section>
      <section className="section">
        <div className="container prose" style={{ maxWidth: 760 }}>
          <h2>1. Informacje ogólne</h2>
          <p>
            Niniejsza polityka wyjaśnia, w jaki sposób strona internetowa gabinetu Fem Therapy –
            FemTherapy({contact.address}) korzysta z plików cookies oraz podobnych
            technologii. Pliki cookies to niewielkie pliki tekstowe zapisywane na Twoim urządzeniu
            przez przeglądarkę podczas odwiedzin strony.
          </p>

          <h2>2. Cookies własne</h2>
          <p>
            Strona nie zapisuje własnych plików cookies, nie prowadzi analityki ruchu, nie stosuje
            narzędzi marketingowych ani remarketingowych i nie profiluje użytkowników. Formularz
            kontaktowy nie zapisuje danych w cookies.
          </p>

          <h2>3. Usługi podmiotów trzecich</h2>
          <p>
            Część treści jest ładowana z zewnętrznych serwisów. Podczas ich wczytywania dostawcy
            mogą otrzymywać Twój adres IP i dane techniczne przeglądarki, a w niektórych
            przypadkach zapisywać własne pliki cookies:
          </p>
          <ul>
            <li>
              <strong>Google Maps</strong> – mapa dojazdu osadzona w stopce i na stronie Kontakt.
              Dostawca: Google LLC.
            </li>
            <li>
              <strong>Google Fonts</strong> – czcionki wczytywane z serwerów Google w celu
              poprawnego wyświetlania strony.
            </li>
            <li>
              <strong>Booksy</strong> – po kliknięciu „Rezerwacja Booksy” przechodzisz na zewnętrzną
              stronę, która działa według własnej polityki prywatności i cookies.
            </li>
            <li>
              <strong>Instagram i Facebook</strong> – odnośniki do profili w mediach
              społecznościowych. Cookies tych serwisów mogą być zapisane dopiero po przejściu na ich
              strony.
            </li>
          </ul>
          <p>
            Zasady stosowane przez te podmioty znajdziesz w ich politykach prywatności i cookies.
            Nie mamy wpływu na pliki cookies zapisywane przez zewnętrzne serwisy.
          </p>

          <h2>4. Podstawa prawna</h2>
          <p>
            Dane techniczne przetwarzane przy wyświetlaniu strony oraz treści zewnętrznych
            przetwarzamy na podstawie prawnie uzasadnionego interesu administratora (art. 6 ust. 1
            lit. f RODO), polegającego na zapewnieniu prawidłowego działania i wyświetlania strony.
            Szczegóły dotyczące danych osobowych znajdziesz w{" "}
            <Link to="/polityka-prywatnosci">Polityce Prywatności</Link>.
          </p>

          <h2>5. Zarządzanie plikami cookies</h2>
          <p>
            Możesz w dowolnym momencie zmienić ustawienia cookies w swojej przeglądarce – zablokować
            je, ograniczyć lub usunąć już zapisane. Sposób postępowania zależy od przeglądarki
            (Chrome, Firefox, Safari, Edge) i jest opisany w jej pomocy. Zablokowanie cookies
            podmiotów trzecich może sprawić, że mapa nie będzie się wyświetlać.
          </p>

          <h2>6. Zmiany polityki</h2>
          <p>
            Polityka może być aktualizowana, np. po dodaniu nowych funkcji strony. Aktualna wersja
            jest zawsze dostępna pod tym adresem.
          </p>

          <h2>7. Kontakt</h2>
          <p>
            Pytania dotyczące cookies prosimy kierować na adres{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
