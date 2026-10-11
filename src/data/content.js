// Wszystkie teksty i zdjęcia w jednym miejscu – łatwo je potem podmienić.
// Zdjęcia są tymczasowe (picsum.photos) – podmienimy je na prawdziwe.

const img = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const images = {
  hero: img("femtherapy-hero", 1200, 800),
  portrait: img("femtherapy-marta", 600, 700),
  gabinet1: img("femtherapy-gabinet1", 800, 600),
  gabinet2: img("femtherapy-gabinet2", 800, 600),
};

export const services = [
  {
    slug: "terapia-blizn",
    title: "Terapia blizn i ScarINK",
    short:
      "Terapia blizn, ścięgien i tkanek miękkich oraz ScarINK – estetyczna regeneracja skóry.",
    long: "Specjalistyczna terapia blizn pooperacyjnych, pourazowych i po cięciu cesarskim. Łączę techniki manualne z nowoczesnymi metodami poprawiającymi wygląd, elastyczność i czucie tkanki bliznowatej.",
    benefits: [
      "Poprawa elastyczności i wyglądu blizny",
      "Zmniejszenie napięcia i dolegliwości bólowych",
      "Wsparcie po cięciu cesarskim i zabiegach operacyjnych",
      "Plan terapii dobrany indywidualnie",
    ],
    tone: "light",
    image: img("femtherapy-blizny", 900, 600),
  },
  {
    slug: "tropokolagen",
    title: "Tropokolagen i regeneracja tkanki",
    short:
      "Tropokolagen i akcelerator regeneracji – wsparcie odbudowy skóry i tkanek.",
    long: "Zabiegi z wykorzystaniem tropokolagenu wspierają naturalne procesy naprawcze organizmu, poprawiają jędrność skóry i przyspieszają gojenie tkanek.",
    benefits: [
      "Wsparcie regeneracji i gojenia tkanek",
      "Poprawa jędrności i nawilżenia skóry",
      "Bezpieczna metoda o udokumentowanym działaniu",
      "Idealne jako uzupełnienie innych terapii",
    ],
    tone: "rose",
    image: img("femtherapy-kolagen", 900, 600),
  },
  {
    slug: "fizjoterapia-uroginekologiczna",
    title: "Fizjoterapia uroginekologiczna",
    short:
      "Fizjoterapia uroginekologiczna – dyskretna pomoc przy problemach mięśni dna miednicy.",
    long: "Profesjonalna, dyskretna opieka dla kobiet na każdym etapie życia: w ciąży, po porodzie, przy nietrzymaniu moczu i dolegliwościach dna miednicy.",
    benefits: [
      "Diagnostyka i terapia mięśni dna miednicy",
      "Przygotowanie do porodu i powrót do formy po nim",
      "Pomoc przy nietrzymaniu moczu i bólach miednicy",
      "Komfortowa, intymna atmosfera gabinetu",
    ],
    tone: "rose-soft",
    image: img("femtherapy-uro", 900, 600),
  },
  {
    slug: "kosmetologia-estetyczna",
    title: "Kosmetologia estetyczna (Gen Factor)",
    short:
      "Kosmetologia estetyczna z Gen Factor – odmładzanie, regeneracja i rozświetlenie skóry.",
    long: "Nowoczesne zabiegi kosmetologii estetycznej z użyciem czynników wzrostu. Poprawiają koloryt, jędrność i gęstość skóry, dając naturalny, świeży efekt.",
    benefits: [
      "Odmładzanie i rozświetlenie skóry",
      "Redukcja drobnych zmarszczek i przebarwień",
      "Zabiegi dobrane do potrzeb i typu skóry",
      "Naturalny efekt bez długiej rekonwalescencji",
    ],
    tone: "light",
    image: img("femtherapy-gen", 900, 600),
  },
];

export const beforeAfter = [
  { id: 1, image: img("femtherapy-ba1", 500, 400), label: "Terapia blizny – 6 tygodni" },
  { id: 2, image: img("femtherapy-ba2", 500, 400), label: "Regeneracja skóry – 4 zabiegi" },
  { id: 3, image: img("femtherapy-ba3", 500, 400), label: "Terapia blizny – 3 miesiące" },
  { id: 4, image: img("femtherapy-ba4", 500, 400), label: "Gen Factor – 3 zabiegi" },
  { id: 5, image: img("femtherapy-ba5", 500, 400), label: "ScarINK – po zabiegu" },
  { id: 6, image: img("femtherapy-ba6", 500, 400), label: "Tropokolagen – 5 zabiegów" },
];

export const testimonials = [
  {
    id: 1,
    text: "Mam wrażenie, że wreszcie ktoś potraktował moją bliznę poważnie. Po kilku wizytach jest wyraźnie mniej napięta i dużo mniej widoczna.",
    author: "Anna, pacjentka",
  },
  {
    id: 2,
    text: "Dyskretna, spokojna atmosfera i ogromna wiedza. Po porodzie wróciłam do formy dzięki terapii uroginekologicznej.",
    author: "Katarzyna, pacjentka",
  },
  {
    id: 3,
    text: "Efekty zabiegów są naturalne, a skóra jest rozświetlona i jędrna. Zdecydowanie wrócę na kolejne wizyty.",
    author: "Magdalena, pacjentka",
  },
];

export const pricing = [
  {
    category: "Terapia blizn i ScarINK",
    items: [
      { name: "Konsultacja i ocena blizny", price: "od 120 zł" },
      { name: "Terapia blizny (45 min)", price: "od 180 zł" },
      { name: "ScarINK", price: "od 400 zł" },
    ],
  },
  {
    category: "Tropokolagen i regeneracja tkanki",
    items: [
      { name: "Zabieg z tropokolagenem", price: "od 250 zł" },
      { name: "Seria 4 zabiegów", price: "od 900 zł" },
    ],
  },
  {
    category: "Fizjoterapia uroginekologiczna",
    items: [
      { name: "Konsultacja uroginekologiczna", price: "od 200 zł" },
      { name: "Wizyta terapeutyczna (50 min)", price: "od 220 zł" },
    ],
  },
  {
    category: "Kosmetologia estetyczna (Gen Factor)",
    items: [
      { name: "Zabieg Gen Factor – twarz", price: "od 350 zł" },
      { name: "Zabieg Gen Factor – twarz i szyja", price: "od 450 zł" },
    ],
  },
];

export const contact = {
  address: "ul. Lwowska 114/11, Rzeszów",
  phone: "+33 339 3820",
  email: "info@femcherapylny.pl",
  booksy: "https://booksy.com/pl-pl/235545_fem-therapy-marta-zabrzeska_medycyna-estetyczna_10729_rzeszow#ba_s=sh_1",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  hours: [
    ["Poniedziałek – piątek", "9:00 – 18:00"],
    ["Sobota", "9:00 – 13:00"],
    ["Niedziela", "nieczynne"],
  ],
};
