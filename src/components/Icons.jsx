const base = {
  width: 56,
  height: 56,
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "#5e0a7a",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function ScarIcon() {
  return (
    <svg {...base}>
      <path d="M14 46 L50 18" />
      <path d="M20 41 l-4 -5 M26 36 l-4 -5 M32 31 l-4 -5 M38 26 l-4 -5 M44 21 l-4 -5" />
      <path d="M17 44 l4 5 M23 39 l4 5 M29 34 l4 5 M35 29 l4 5 M41 24 l4 5" />
    </svg>
  );
}

export function CollagenIcon() {
  return (
    <svg {...base}>
      <path d="M22 10 C30 20 36 24 32 32 C28 40 20 42 24 54" />
      <path d="M42 10 C34 20 28 24 32 32 C36 40 44 42 40 54" />
      <path d="M26 20 h12 M25 32 h14 M26 44 h12" />
    </svg>
  );
}

export function UroIcon() {
  return (
    <svg {...base}>
      <path d="M32 14 v10" />
      <path d="M32 24 C24 24 18 20 14 14" />
      <path d="M32 24 C40 24 46 20 50 14" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="52" cy="12" r="3" />
      <path d="M22 28 C14 36 18 50 32 52 C46 50 50 36 42 28 C38 32 26 32 22 28 Z" />
    </svg>
  );
}

export function FaceIcon() {
  return (
    <svg {...base}>
      <path d="M32 10 C20 10 16 22 20 34 C22 42 26 48 32 52 C38 48 42 42 44 34 C48 22 44 10 32 10 Z" />
      <path d="M24 28 h4 M36 28 h4" />
      <path d="M28 40 c2.5 2 5.5 2 8 0" />
      <path d="M32 30 v6" />
    </svg>
  );
}

export const iconBySlug = {
  "terapia-blizn": ScarIcon,
  tropokolagen: CollagenIcon,
  "fizjoterapia-uroginekologiczna": UroIcon,
  "kosmetologia-estetyczna": FaceIcon,
};

export function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 1.2 19.9v-7h-2.4V12h2.4V9.9c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 12 2z" />
    </svg>
  );
}

export function BooksyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M9 7v10h3.5a2.75 2.75 0 0 0 0-5.5H9m3 0a2.5 2.5 0 0 0 0-4.5H9" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
      <path d="M3.5 7.5l8.5 6 8.5-6" />
    </svg>
  );
}

export function Chevron({ dir = "right" }) {
  const rot = dir === "left" ? 180 : 0;
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${rot}deg)` }} aria-hidden="true">
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}
