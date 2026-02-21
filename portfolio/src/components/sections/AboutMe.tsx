"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useRef, useCallback, useState, useEffect } from "react";

import {
  aboutSections,
  INTRO_FRAC,
  CONTENT_FRAC,
  FINAL_START,
  SECTION_COUNT,
  contentStart,
} from "@/data/about";
import { ContactInfo } from "./about/ContactInfo";
import { ProfileImage } from "./about/ProfileImage";
import { AccumulatingTitle } from "./about/AccumulatingTitle";
import { SectionText } from "./about/SectionText";
import { FinalImage } from "./about/FinalImage";
import { DownloadButton } from "./about/DownloadButton";

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
  const mainOpacity = useTransform(
    scrollYProgress,
    [INTRO_FRAC * 0.6, INTRO_FRAC],
    [0, 1]
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
            {/* Desktop layout */}
            <div className="wrapper mx-auto w-full max-lg:hidden">
              <div className="flex gap-16 w-full items-center">
                <div className="w-1/2 flex flex-col">
                  <p className="text-sm text-gray-500 uppercase tracking-[0.25em] mb-2">
                    Om mig
                  </p>
                  <div className="h-[2px] w-12 bg-golden mb-8" />
                  <h2
                    className="font-bold uppercase mb-8"
                    style={{
                      fontSize: "clamp(1.4rem, 3.5vw, 3rem)",
                      lineHeight: 0.95,
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

                <div className="w-1/2 flex items-center justify-center">
                  <div className="grid w-full">
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

            {/* Mobile layout (state-driven, no scroll-driven opacity) */}
            <div className="hidden max-lg:block absolute inset-0 pt-20 pb-4">
              <div className="px-5 h-full flex flex-col">
                <div className="shrink-0">
                  <p className="text-sm text-gray-500 uppercase tracking-[0.25em] mb-1">
                    Om mig
                  </p>
                  <div className="h-[2px] w-10 bg-golden mb-3" />

                  {aboutSections.map((section, i) => (
                    <div
                      key={section.title}
                      className="overflow-hidden transition-[max-height] duration-500 ease-out"
                      style={{
                        maxHeight: activePhase >= i + 1 ? 120 : 0,
                      }}
                    >
                      <AccumulatingTitle
                        scrollYProgress={scrollYProgress}
                        index={i}
                        title={section.title}
                        isActive={activePhase === i + 1}
                        onClick={() => scrollToSection(i)}
                      />
                    </div>
                  ))}

                  {activePhase === SECTION_COUNT + 1 && (
                    <DownloadButton scrollYProgress={scrollYProgress} />
                  )}
                </div>

                <div className="relative flex-1 min-h-0 mt-3">
                  {aboutSections.map((section, i) => (
                    <div
                      key={section.title}
                      className="absolute inset-0 transition-opacity duration-500 ease-out overflow-y-auto"
                      style={{
                        opacity: activePhase === i + 1 ? 1 : 0,
                        pointerEvents:
                          activePhase === i + 1 ? "auto" : "none",
                      }}
                    >
                      {section.isContact ? (
                        <ContactInfo />
                      ) : (
                        <p className="text-base leading-[1.7] text-gray-600 dark:text-gray-400">
                          {section.content}
                        </p>
                      )}
                    </div>
                  ))}

                  <div
                    className="absolute inset-0 transition-opacity duration-500 ease-out"
                    style={{
                      opacity: activePhase === SECTION_COUNT + 1 ? 1 : 0,
                      pointerEvents:
                        activePhase === SECTION_COUNT + 1 ? "auto" : "none",
                    }}
                  >
                    <ProfileImage />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
