"use client";

import { motion, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { type AboutSection, contentStart, contentEnd } from "@/data/about";
import { ContactInfo } from "./ContactInfo";

export function SectionText({
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

  const innerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(0);

  useEffect(() => {
    const measure = () => {
      const inner = innerRef.current;
      const container = containerRef.current;
      if (inner && container) {
        setOverflow(Math.max(0, inner.scrollHeight - container.clientHeight));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const opacity = useTransform(
    scrollYProgress,
    [start + range * 0.05, start + range * 0.15, end - range * 0.15, end - range * 0.05],
    [0, 1, 1, 0]
  );

  const scrollY = useTransform(
    scrollYProgress,
    [start + range * 0.15, end - range * 0.2],
    [0, -overflow]
  );

  return (
    <motion.div
      className="col-start-1 row-start-1 self-center max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:right-0"
      style={{ opacity, pointerEvents: isActive ? "auto" : "none" }}
    >
      {section.isContact ? (
        <ContactInfo />
      ) : (
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          style={{ maxHeight: isMobile ? "min(45vh, 380px)" : "min(55vh, 500px)" }}
        >
          <motion.div ref={innerRef} style={isMobile ? undefined : { y: scrollY }}>
            <div className="space-y-6">
              {section.content?.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-2xl max-lg:text-base leading-[1.9] max-lg:leading-[1.7] text-gray-600 dark:text-gray-400 max-w-xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-[#363635] to-transparent pointer-events-none" />
        </div>
      )}
    </motion.div>
  );
}
