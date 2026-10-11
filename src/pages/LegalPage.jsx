const texts = {
  regulamin: {
    title: "Regulamin",
    body: "Tutaj pojawi się regulamin świadczenia usług gabinetu Fem Therapy. Treść zostanie uzupełniona.",
  },
  polityka: {
    title: "Polityka Prywatności",
    body: "Tutaj pojawi się polityka prywatności i informacja o przetwarzaniu danych osobowych. Treść zostanie uzupełniona.",
  },
};

export default function LegalPage({ kind }) {
  const t = texts[kind];
  return (
    <>
      <section className="page-hero">
        <div className="container"><h1>{t.title}</h1></div>
      </section>
      <section className="section">
        <div className="container prose" style={{ maxWidth: 760 }}>
          <p>{t.body}</p>
        </div>
      </section>
    </>
  );
}
