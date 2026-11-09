// Wszystkie teksty i zdjęcia w jednym miejscu – łatwo je potem podmienić.
// Zdjęcia są tymczasowe (picsum.photos) – podmienimy je na prawdziwe.

const img = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const images = {
  hero: img("femtherapy-hero", 1200, 800),
  marta: img("femtherapy-marta", 600, 700),
  mariusz: "/images/mariusz.jpg",
  gabinet1: img("femtherapy-gabinet1", 800, 600),
  gabinet2: img("femtherapy-gabinet2", 800, 600),
};

// Opisy osób są przykładowe – do podmiany na właściwe.
export const team = [
  {
    name: "Marta Zabrzeska",
    role: "Fizjoterapeutka i kosmetolog",
    image: images.marta,
    short:
      "Specjalizuje się w terapii blizn, fizjoterapii uroginekologicznej i nowoczesnej kosmetologii estetycznej. Łączy wiedzę medyczną z wrażliwością na potrzeby kobiet.",
    long: [
      "Jestem fizjoterapeutką i kosmetologiem. Specjalizuję się w terapii blizn, fizjoterapii uroginekologicznej oraz nowoczesnych zabiegach regeneracyjnych i estetycznych. Fem Therapy to miejsce stworzone z myślą o kobietach, które szukają profesjonalnej, a jednocześnie ciepłej i dyskretnej opieki.",
      "Stale się szkolę i korzystam ze sprawdzonych, nowoczesnych metod. Każdą wizytę zaczynam od rozmowy – dopiero wtedy dobieram terapię dopasowaną do Twoich potrzeb.",
    ],
    points: [
      "Terapia blizn i ScarINK",
      "Fizjoterapia uroginekologiczna",
      "Zabiegi regeneracyjne i estetyczne",
    ],
  },
  {
    name: "Mariusz Zabrzeski",
    role: "Fizjoterapeuta",
    image: images.mariusz,
    imagePosition: "38% 35%",
    short:
      "Zajmuje się terapią manualną, rehabilitacją pozabiegową oraz zabiegami z wykorzystaniem osocza i fibryny. Stawia na rzetelną diagnozę i spokojną współpracę z pacjentem.",
    long: [
      "Jestem fizjoterapeutą. Zajmuję się terapią manualną, rehabilitacją po zabiegach operacyjnych oraz zabiegami regeneracyjnymi z wykorzystaniem osocza bogatopłytkowego i fibryny. W Fem Therapy wspieram pacjentów na każdym etapie powrotu do sprawności.",
      "Wierzę w dokładny wywiad, jasne tłumaczenie każdego etapu terapii i plan dopasowany do możliwości pacjenta. Regularnie poszerzam wiedzę na szkoleniach i kursach specjalistycznych.",
    ],
    points: [
      "Terapia manualna i rehabilitacja pozabiegowa",
      "Zabiegi z osoczem i fibryną",
      "Indywidualny plan terapii",
    ],
  },
];

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
    "category": "Konsultacja i kwasy",
    "items": [
      {
        "name": "Konsultacja",
        "price": "Bezpłatnie",
        "duration": "30 min"
      },
      {
        "name": "Kwasy Gen Factor",
        "price": "250 zł",
        "duration": "30 min"
      }
    ]
  },
  {
    "category": "Tropokolagen",
    "items": [
      {
        "name": "Trudno gojące się rany / blizny",
        "price": "300 zł",
        "duration": "1 godz.",
        "note": "każda kolejna ampułka: 100 zł"
      },
      {
        "name": "Skóra głowy",
        "price": "400 zł",
        "duration": "1 godz."
      },
      {
        "name": "Rewitalizacja stref intymnych",
        "price": "300 zł",
        "duration": "1 godz.",
        "sub": [
          {
            "name": "Mięśniówka zwieraczy",
            "price": "700 zł",
            "duration": "1 godz."
          },
          {
            "name": "Srom + mięśniówka zwieraczy + wzgórek łonowy",
            "price": "450 zł",
            "duration": "1 godz."
          },
          {
            "name": "Srom + mięśniówka zwieraczy",
            "price": "300 zł",
            "duration": "1 godz."
          },
          {
            "name": "Srom",
            "price": "wg wyceny",
            "duration": "1 godz."
          }
        ]
      },
      {
        "name": "Okolice oka",
        "price": "300 zł",
        "duration": "1 godz."
      },
      {
        "name": "Twarz",
        "price": "500 zł",
        "duration": "1 godz."
      },
      {
        "name": "Twarz + szyja",
        "price": "650 zł",
        "duration": "1 godz."
      },
      {
        "name": "Twarz + szyja + dekolt",
        "price": "800 zł",
        "duration": "1 godz."
      },
      {
        "name": "Blizny potrądzikowe",
        "price": "400 zł",
        "duration": "1 godz."
      },
      {
        "name": "Regeneracja skóry dłoni",
        "price": "400 zł",
        "duration": "1 godz."
      },
      {
        "name": "Zmiany skórne w okolicy sromu (liszaj twardzinowy)",
        "price": "400 zł",
        "duration": "1 godz.",
        "note": "każda kolejna ampułka: 100 zł"
      },
      {
        "name": "Rozstępy",
        "price": "300 zł",
        "duration": "1 godz.",
        "note": "każda kolejna ampułka: 100 zł"
      },
      {
        "name": "Wysiłkowe nietrzymanie moczu",
        "price": "400 zł",
        "duration": "1 godz."
      },
      {
        "name": "Regeneracja pochwy",
        "price": "500 zł",
        "duration": "1 godz."
      }
    ]
  },
  {
    "category": "Osocze bogatopłytkowe",
    "items": [
      {
        "name": "Twarz",
        "price": "400 zł",
        "duration": "1 godz."
      },
      {
        "name": "Szyja + dekolt",
        "price": "400 zł",
        "duration": "1 godz."
      },
      {
        "name": "Twarz + szyja + dekolt",
        "price": "700 zł",
        "duration": "1 godz."
      },
      {
        "name": "Skóra głowy",
        "price": "400 zł",
        "duration": "1 godz."
      },
      {
        "name": "Okolice oczu",
        "price": "350 zł",
        "duration": "1 godz."
      },
      {
        "name": "Dłonie",
        "price": "350 zł",
        "duration": "1 godz."
      },
      {
        "name": "Blizny / rozstępy / rany / przebarwienia",
        "price": "400 zł",
        "duration": "1 godz."
      },
      {
        "name": "Twarz – osocze + fibryna",
        "price": "700 zł",
        "duration": "1 godz."
      },
      {
        "name": "Okolice intymne",
        "price": "500 zł",
        "duration": "1 godz."
      }
    ]
  },
  {
    "category": "Fibryna",
    "items": [
      {
        "name": "Okolice oczu",
        "price": "400 zł",
        "duration": "1 godz."
      },
      {
        "name": "Zmarszczki",
        "price": "400 zł",
        "duration": "1 godz.",
        "note": "cena dotyczy jednej strefy"
      },
      {
        "name": "Szyja / dekolt",
        "price": "400 zł",
        "duration": "1 godz."
      },
      {
        "name": "Dłonie",
        "price": "400 zł",
        "duration": "1 godz."
      },
      {
        "name": "Fibryna komórkowa + strukturalna",
        "price": "700 zł",
        "duration": "1 godz."
      }
    ]
  },
  {
    "category": "Mezoterapia mikroigłowa",
    "items": [
      {
        "name": "Mezoterapia mikroigłowa",
        "price": "300 zł",
        "duration": "1 godz."
      }
    ]
  },
  {
    "category": "ScarINK – mikropunktura",
    "items": [
      {
        "name": "ScarINK – blizny",
        "price": "400 zł",
        "duration": "1 godz.",
        "sub": [
          {
            "name": "Po przeszczepie włosów",
            "price": "350 zł",
            "duration": "1 godz."
          },
          {
            "name": "Po cięciu cesarskim / usunięciu wyrostka / tarczycy",
            "price": "350 zł",
            "duration": "1 godz."
          },
          {
            "name": "Po usuwaniu znamienia, brodawki, pieprzyka, po kolczyku itp.",
            "price": "350 zł",
            "duration": "1 godz."
          },
          {
            "name": "Po rozszczepie wargi",
            "price": "400 zł",
            "duration": "1,5 godz."
          },
          {
            "name": "Po pęknięciu / nacięciu krocza",
            "price": "400 zł",
            "duration": "1,5 godz."
          },
          {
            "name": "Po plastyce piersi / mastektomii",
            "price": "450 zł",
            "duration": "1,5 godz."
          },
          {
            "name": "Po plastyce brzucha",
            "price": "wg wyceny"
          }
        ]
      },
      {
        "name": "ScarINK – po zabiegach i operacjach chirurgicznych",
        "price": "400 zł",
        "duration": "1 godz.",
        "sub": [
          {
            "name": "Do 15 cm",
            "price": "450 zł",
            "duration": "1,5 godz."
          },
          {
            "name": "15–30 cm",
            "price": "350 zł",
            "duration": "1 godz."
          },
          {
            "name": "Powyżej 30 cm",
            "price": "wg wyceny"
          }
        ]
      },
      {
        "name": "ScarINK – blizny pourazowe / po usunięciu tatuażu",
        "price": "400 zł",
        "duration": "1 godz.",
        "sub": [
          {
            "name": "Do 20 cm²",
            "price": "450 zł",
            "duration": "1,5 godz."
          },
          {
            "name": "20–40 cm²",
            "price": "500 zł",
            "duration": "2 godz."
          },
          {
            "name": "Powyżej 40 cm²",
            "price": "wg wyceny"
          }
        ]
      },
      {
        "name": "ScarINK – rozstępy",
        "price": "450 zł",
        "duration": "1 godz.",
        "note": "z tropokolagenem igłą depozytową: +150 zł",
        "sub": [
          {
            "name": "Plecy",
            "price": "450 zł",
            "duration": "1 godz."
          },
          {
            "name": "Boczki",
            "price": "450 zł",
            "duration": "1 godz."
          },
          {
            "name": "Ramiona",
            "price": "450 zł",
            "duration": "1 godz."
          },
          {
            "name": "Brzuch",
            "price": "450 zł",
            "duration": "1 godz."
          },
          {
            "name": "Piersi",
            "price": "400 zł",
            "duration": "1 godz."
          },
          {
            "name": "Uda – jedna strefa (przód / tył / zewnętrzna / wewnętrzna strona)",
            "price": "500 zł",
            "duration": "1,5 godz."
          },
          {
            "name": "Uda – całe",
            "price": "450 zł",
            "duration": "1,5 godz."
          },
          {
            "name": "Pośladki",
            "price": "wg wyceny"
          }
        ]
      },
      {
        "name": "ScarINK – blizny po trądziku / ospie",
        "price": "350 zł",
        "duration": "1 godz.",
        "note": "z tropokolagenem igłą depozytową: +150 zł",
        "sub": [
          {
            "name": "Twarz",
            "price": "350 zł",
            "duration": "1 godz."
          },
          {
            "name": "Dekolt",
            "price": "350 zł",
            "duration": "1 godz."
          },
          {
            "name": "Plecy",
            "price": "450 zł",
            "duration": "1,5 godz."
          }
        ]
      },
      {
        "name": "ScarINK microlift",
        "price": "300 zł",
        "duration": "1 godz.",
        "sub": [
          {
            "name": "Lifting skóry dekoltu",
            "price": "400 zł",
            "duration": "1 godz."
          },
          {
            "name": "Lifting skóry piersi",
            "price": "300 zł",
            "duration": "1 godz."
          },
          {
            "name": "Lifting skóry pośladków",
            "price": "300 zł",
            "duration": "1 godz."
          },
          {
            "name": "Lifting skóry brzucha",
            "price": "400 zł",
            "duration": "1 godz."
          },
          {
            "name": "Lifting skóry twarzy (opracowanie zmarszczek)",
            "price": "wg wyceny"
          }
        ]
      },
      {
        "name": "ScarINK microlift + micropeel – twarz + dekolt",
        "price": "600 zł",
        "duration": "1 godz."
      },
      {
        "name": "ScarINK micropeel – twarz + dekolt",
        "price": "450 zł",
        "duration": "1 godz."
      }
    ]
  },
  {
    "category": "SQT biomikroigły",
    "items": [
      {
        "name": "SQT biomikroigły",
        "price": "550 zł",
        "duration": "1 godz.",
        "sub": [
          {
            "name": "SQT rewitalizujący",
            "price": "500 zł",
            "duration": "1 godz."
          },
          {
            "name": "SQT naprawczy",
            "price": "500 zł",
            "duration": "1 godz."
          },
          {
            "name": "SQT odżywczo-nawilżający",
            "price": "600 zł",
            "duration": "1 godz."
          },
          {
            "name": "SQT odmładzający",
            "price": "wg wyceny"
          }
        ]
      }
    ]
  }
];

export const contact = {
  address: "ul. Lwowska 114/11, 35-301 Rzeszów",
  phone: "+48 667 023 168",
  email: "femtherapyrzeszow@gmail.com",
  booksy: "https://booksy.com/pl-pl/235545_fem-therapy-marta-zabrzeska_medycyna-estetyczna_10729_rzeszow#ba_s=sh_1",
  instagram: "https://www.instagram.com/femtherapy.martazabrzeska/",
  facebook: "https://www.facebook.com/people/Fem-Therapy-Marta-Zabrzeska/61557704197715/",
  hours: [
    ["Poniedziałek – piątek", "10:00 – 19:00"],
    ["Sobota", "10:00 – 19:00"],
    ["Niedziela", "nieczynne"],
  ],  
};
