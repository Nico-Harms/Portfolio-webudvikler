export interface AboutSection {
  title: string;
  content?: string[];
  isContact?: boolean;
}

export const aboutSections: AboutSection[] = [
  {
    title: "Hvem jeg er",
    content: [
      "Jeg er 28 år gammel og bosat på Nørrebro i København. Siden en tidlig alder har jeg altid haft en stærk passion for IT.",
      "Min fascination for teknologi og kreativ tænkning har motiveret mig til at forfølge en karriere som enten fullstack- eller frontend-udvikler.",
      "I sommeren 2024 færdiggjorde jeg min uddannelse som multimediedesigner og blev i Januar 2026 færdig med min professionsbachelor i webudvikling.",
      "Jeg elsker at dykke ned i komplekse problemer og finde innovative løsninger, samtidig med at jeg bruger min kreativitet til at forme digitale idéer til virkelighed. Idag arbejder jeg som Software Engineer hos Propane.",
    ],
  },
  {
    title: "Hvad jeg søger",
    content: [
      "Jeg søger en fuldtidsstilling som enten frontend- eller fullstack-udvikler, hvor jeg kan arbejde i et udviklende og lærerigt miljø.",
      "Jeg motiveres af at samarbejde med erfarne udviklere og få praktisk erfaring med de nyeste teknologier, særligt inden for frameworks, som jeg har en stor faglig interesse for.",
      "Jeg er ivrig efter at bidrage med mine færdigheder og mit perspektiv. Med min faglige baggrund og kreative tilgang tror jeg på, at jeg kan tilføre værdi til teamet og samtidig fortsætte min professionelle udvikling som udvikler.",
    ],
  },
  {
    title: "Mine fritidsinteresser",
    content: [
      "Jeg er stadig lidt af en IT-nørd i min fritid – jeg elsker at nørde projekter sammen med min far og følge med i nye tech-trends.",
      "Jeg går meget op i mit smart home (det har jeg egentlig gjort, siden jeg fik min OnePlus 6 for mange år siden).",
      "Jeg gamer gerne med vennerne, men nyder også at koble af med historier om græsk mytologi. Derudover spiller jeg fodbold og sætter pris på et godt glas vin.",
    ],
  },
  {
    title: "Kontakt oplysninger",
    isContact: true,
  },
];

export const INTRO_FRAC = 0.06;
export const FINAL_FRAC = 0.08;
export const CONTENT_FRAC =
  (1 - INTRO_FRAC - FINAL_FRAC) / aboutSections.length;
export const FINAL_START = 1 - FINAL_FRAC;
export const SECTION_COUNT = aboutSections.length;

export function contentStart(i: number) {
  return INTRO_FRAC + i * CONTENT_FRAC;
}

export function contentEnd(i: number) {
  return INTRO_FRAC + (i + 1) * CONTENT_FRAC;
}
