"use client";

import { Phone, Mail } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import type { MotionValue } from "motion/react";
import { useRef, useCallback, useState, useEffect } from "react";

interface AboutSection {
  title: string;
  content?: string;
  isContact?: boolean;
}

const aboutSections: AboutSection[] = [
  {
    title: "Hvem jeg er",
    content:
      "Jeg er 27 år gammel og bosat på Nørrebro i København. Siden en tidlig alder har jeg altid haft en stærk passion for IT. Min fascination for teknologi og kreativ tænkning har motiveret mig til at forfølge en karriere som enten fullstack- eller frontend-udvikler. I sommeren 2024 færdiggjorde jeg min uddannelse som multimediedesigner og er nu i gang med at tage en professionsbachelor i webudvikling. Jeg elsker at dykke ned i komplekse problemer og finde innovative løsninger, samtidig med at jeg bruger min kreativitet til at forme digitale idéer til virkelighed.",
  },
  {
    title: "Hvad jeg søger",
    content:
      "Jeg søger en fuldtidsstilling som enten frontend- eller fullstack-udvikler, hvor jeg kan arbejde i et udviklende og lærerigt miljø. Jeg motiveres af at samarbejde med erfarne udviklere og få praktisk erfaring med de nyeste teknologier, særligt inden for frameworks, som jeg har en stor faglig interesse for. Jeg er ivrig efter at bidrage med mine færdigheder og mit perspektiv. Med min faglige baggrund og kreative tilgang tror jeg på, at jeg kan tilføre værdi til teamet og samtidig fortsætte min professionelle udvikling som udvikler.",
  },
  {
    title: "Mine fritidsinteresser",
    content:
      "Jeg er stadig lidt af en IT-nørd i min fritid – jeg elsker at nørde projekter sammen med min far og følge med i nye tech-trends. Jeg går meget op i mit smart home (det har jeg egentlig gjort, siden jeg fik min OnePlus 6 for mange år siden). Jeg gamer gerne med vennerne, men nyder også at koble af med historier om græsk mytologi. Derudover spiller jeg fodbold og sætter pris på et godt glas vin",
  },
  {
    title: "Kontakt oplysninger",
    isContact: true,
  },
];

const INTRO_FRAC = 0.06;
const FINAL_FRAC = 0.08;
const CONTENT_FRAC =
  (1 - INTRO_FRAC - FINAL_FRAC) / aboutSections.length;
const FINAL_START = 1 - FINAL_FRAC;
const SECTION_COUNT = aboutSections.length;

function contentStart(i: number) {
  return INTRO_FRAC + i * CONTENT_FRAC;
}
function contentEnd(i: number) {
  return INTRO_FRAC + (i + 1) * CONTENT_FRAC;
}

function ContactInfo() {
  return (
    <div className="flex flex-col gap-5">
      <a
        className="flex items-center gap-3 text-xl hover:text-golden transition-colors duration-300"
        href="mailto:nicolai.harms@gmail.com"
      >
        <Mail className="w-6 h-6 text-golden" />
        nicolai.harms@gmail.com
      </a>
      <a
        className="flex items-center gap-3 text-xl hover:text-golden transition-colors duration-300"
        href="tel:+4561720311"
      >
        <Phone className="w-6 h-6 text-golden" />
        +45 61 72 03 11
      </a>
    </div>
  );
}

function ProfileImage() {
  return (
    <div
      className="w-full h-[90vh] max-lg:h-[70vh] bg-cover bg-center rounded-3xl relative overflow-hidden"
      style={{ backgroundImage: 'url("/personal/profile.png")' }}
    >
      <div className="absolute bottom-8 left-8 z-20 max-w-md">
        <p className="text-white text-lg leading-relaxed mb-4">
          &ldquo;Jeg elsker at kombinere kreativitet med teknologi og skabe
          løsninger, der gør en forskel for brugerne.&rdquo;
        </p>
        <hr className="border-t border-white/30 mb-4 w-16" />
        <div className="flex flex-col gap-1">
          <p className="text-white text-xl font-semibold">Nicolai Harms</p>
          <p className="text-white/80 text-sm">Fullstack Developer</p>
        </div>
      </div>
      <div className="absolute inset-0 rounded-3xl z-10 gradient-background" />
    </div>
  );
}

// Title that fades in once and stays visible permanently
function AccumulatingTitle({
  scrollYProgress,
  index,
  title,
  isActive,
  onClick,
}: {
  scrollYProgress: MotionValue<number>;
  index: number;
  title: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const start = contentStart(index);
  const range = contentEnd(index) - start;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + range * 0.2],
    [0, 1]
  );
  const y = useTransform(
    scrollYProgress,
    [start, start + range * 0.2],
    [15, 0]
  );
  const lineScale = useTransform(
    scrollYProgress,
    [start + range * 0.05, start + range * 0.3],
    [0, 1]
  );

  return (
    <motion.div style={{ opacity, y }}>
      <button
        onClick={onClick}
        className="text-left group w-full cursor-pointer"
      >
        <h3
          className={`font-bold uppercase break-words transition-colors duration-500 group-hover:text-golden ${
            isActive ? "text-golden" : ""
          }`}
          style={{
            fontSize: "clamp(1.6rem, 3.5vw, 3.5rem)",
            lineHeight: 1.15,
          }}
        >
          {title}
          <span className="text-golden">.</span>
        </h3>
      </button>
      <motion.div
        className="h-[2px] bg-golden mt-2 mb-3 origin-left"
        style={{ scaleX: lineScale }}
      />
    </motion.div>
  );
}

// Text content that fades in then out for each section
function SectionText({
  scrollYProgress,
  section,
  index,
  isActive,
  isMobile,
}: {
  scrollYProgress: MotionValue<number>;
  section: AboutSection;
  index: number;
  isActive: boolean;
  isMobile: boolean;
}) {
  const start = contentStart(index);
  const end = contentEnd(index);
  const range = end - start;

  const opacity = useTransform(
    scrollYProgress,
    [start + range * 0.2, start + range * 0.35, end - range * 0.15, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [start + range * 0.2, start + range * 0.4],
    [30, 0]
  );
  const clipBottom = useTransform(
    scrollYProgress,
    [start + range * 0.15, start + range * 0.75],
    [100, 0]
  );
  const clip = useTransform(clipBottom, (v) => `inset(0 0 ${v}% 0)`);

  return (
    <motion.div
      className="col-start-1 row-start-1 self-start"
      style={{
        opacity,
        y,
        pointerEvents: isActive ? "auto" : "none",
      }}
    >
      <motion.div style={isMobile ? undefined : { clipPath: clip }}>
        {section.isContact ? (
          <ContactInfo />
        ) : (
          <p className="text-2xl max-lg:text-base leading-[1.9] max-lg:leading-[1.7] text-gray-600 dark:text-gray-400 max-w-xl">
            {section.content}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

// Image that fades in during final phase
function FinalImage({
  scrollYProgress,
  isActive,
}: {
  scrollYProgress: MotionValue<number>;
  isActive: boolean;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [FINAL_START, FINAL_START + FINAL_FRAC * 0.4],
    [0, 1]
  );
  const y = useTransform(
    scrollYProgress,
    [FINAL_START, FINAL_START + FINAL_FRAC * 0.5],
    [40, 0]
  );

  return (
    <motion.div
      className="col-start-1 row-start-1 self-start"
      style={{ opacity, y, pointerEvents: isActive ? "auto" : "none" }}
    >
      <ProfileImage />
    </motion.div>
  );
}

// Download CV button that fades in during final phase
function DownloadButton({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [FINAL_START, FINAL_START + FINAL_FRAC * 0.35],
    [0, 1]
  );

  return (
    <motion.div className="mt-6" style={{ opacity }}>
      <a
        href="/personal/CV Nicolai - English.pdf"
        target="_blank"
        className="inline-block text-lg bg-black dark:bg-white dark:text-black text-white px-6 py-3 rounded-md hover:bg-golden hover:text-white dark:hover:bg-golden dark:hover:text-white transition-all duration-300"
      >
        Download CV
      </a>
    </motion.div>
  );
}

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isMobile, setIsMobile] = useState(false);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value < INTRO_FRAC) {
      setActivePhase(0);
    } else if (value >= FINAL_START) {
      setActivePhase(SECTION_COUNT + 1);
    } else {
      const idx = Math.floor((value - INTRO_FRAC) / CONTENT_FRAC);
      setActivePhase(Math.min(idx + 1, SECTION_COUNT));
    }
  });

  // Intro overlay
  const introOpacity = useTransform(
    scrollYProgress,
    [0, INTRO_FRAC * 0.5, INTRO_FRAC],
    [1, 1, 0]
  );
  const introY = useTransform(
    scrollYProgress,
    [INTRO_FRAC * 0.4, INTRO_FRAC],
    [0, -80]
  );
  const introScale = useTransform(
    scrollYProgress,
    [INTRO_FRAC * 0.4, INTRO_FRAC],
    [1, 0.95]
  );

  // Main content area crossfades in as intro fades out
  const mainOpacity = useTransform(
    scrollYProgress,
    [INTRO_FRAC * 0.5, INTRO_FRAC],
    [0, 1]
  );

  const skipOpacity = useTransform(
    scrollYProgress,
    [0, INTRO_FRAC * 0.3, FINAL_START, FINAL_START + FINAL_FRAC * 0.2],
    [0, 1, 1, 0]
  );

  const scrollToSection = useCallback((sectionIndex: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const containerTop =
      container.getBoundingClientRect().top + window.scrollY;
    const scrollableHeight = container.scrollHeight - window.innerHeight;
    const targetProgress = contentStart(sectionIndex) + CONTENT_FRAC * 0.35;
    window.scrollTo({
      top: containerTop + scrollableHeight * targetProgress,
      behavior: "smooth",
    });
  }, []);

  const skipToEnd = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const sectionBottom =
      container.getBoundingClientRect().top +
      window.scrollY +
      container.scrollHeight;
    window.scrollTo({
      top: sectionBottom,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative distance-top"
      style={{ height: "1080vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="h-full relative">
          {/* Intro: "(personlig) HISTORIE" */}
          <motion.div
            className="absolute inset-0 flex items-center"
            style={{
              opacity: introOpacity,
              y: introY,
              scale: introScale,
              pointerEvents: activePhase === 0 ? "auto" : "none",
            }}
          >
            <div className="wrapper mx-auto w-full">
              <p className="text-sm text-gray-500 uppercase tracking-[0.25em] mb-4">
                Om mig
              </p>
              <div className="h-[2px] w-12 bg-golden mb-10" />
              <h2
                className="font-bold uppercase"
                style={{
                  fontSize: "clamp(3.5rem, 9vw, 9rem)",
                  lineHeight: 0.9,
                }}
              >
                <span className="text-golden italic font-normal block mb-2">
                  (personlig)
                </span>
                HISTORIE
                <span className="text-golden">.</span>
              </h2>
            </div>

            <motion.div
              className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
                Scroll
              </span>
              <div className="w-[1px] h-8 bg-golden/50" />
            </motion.div>
          </motion.div>

          {/* Main content: accumulating titles + fading text/image */}
          <motion.div
            className="absolute inset-0 flex items-center"
            style={{
              opacity: mainOpacity,
              pointerEvents: activePhase > 0 ? "auto" : "none",
            }}
          >
            <div className="wrapper mx-auto w-full">
              <div className="flex gap-20 max-lg:flex-col max-lg:gap-6 w-full items-center">
                {/* Left: stacking titles */}
                <div className="w-1/2 max-lg:w-full flex flex-col">
                  <p className="text-sm text-gray-500 uppercase tracking-[0.25em] mb-2">
                    Om mig
                  </p>
                  <div className="h-[2px] w-12 bg-golden mb-6" />
                  <h2
                    className="font-bold uppercase mb-6"
                    style={{
                      fontSize: "clamp(2rem, 4.5vw, 4rem)",
                      lineHeight: 0.9,
                    }}
                  >
                    <span className="text-golden italic font-normal">
                      (personlig)
                    </span>{" "}
                    HISTORIE
                    <span className="text-golden">.</span>
                  </h2>

                  {aboutSections.map((section, i) => (
                    <AccumulatingTitle
                      key={section.title}
                      scrollYProgress={scrollYProgress}
                      index={i}
                      title={section.title}
                      isActive={activePhase === i + 1}
                      onClick={() => scrollToSection(i)}
                    />
                  ))}

                  <DownloadButton scrollYProgress={scrollYProgress} />
                </div>

                {/* Right: overlapping text areas + image */}
                <div className="w-1/2 max-lg:w-full pt-10 max-lg:pt-0">
                  <div className="grid">
                    {aboutSections.map((section, i) => (
                      <SectionText
                        key={section.title}
                        scrollYProgress={scrollYProgress}
                        section={section}
                        index={i}
                        isActive={activePhase === i + 1}
                        isMobile={isMobile}
                      />
                    ))}

                    <FinalImage
                      scrollYProgress={scrollYProgress}
                      isActive={activePhase === SECTION_COUNT + 1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skip button */}
          <motion.button
            onClick={skipToEnd}
            className="absolute bottom-8 right-8 max-lg:right-5 max-lg:bottom-5 flex items-center gap-2 px-4 py-2 rounded-full border border-golden/30 text-sm text-gray-500 hover:text-golden hover:border-golden transition-colors duration-300 cursor-pointer backdrop-blur-sm bg-white/50 dark:bg-black/30"
            style={{ opacity: skipOpacity }}
          >
            Spring over
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 13l5 5 5-5" />
              <path d="M7 6l5 5 5-5" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
