import { motion, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
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

  const opacity = useTransform(
    scrollYProgress,
    [start + range * 0.1, start + range * 0.25, end - range * 0.15, end - range * 0.05],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [start + range * 0.1, start + range * 0.3],
    [30, 0]
  );
  const textClipBottom = useTransform(
    scrollYProgress,
    [start + range * 0.15, start + range * 0.75],
    [100, 0]
  );
  const textClip = useTransform(
    textClipBottom,
    (v) => `inset(0 0 ${v}% 0)`
  );

  return (
    <motion.div
      className="col-start-1 row-start-1 self-center max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:right-0"
      style={{ opacity, y, pointerEvents: isActive ? "auto" : "none" }}
    >
      <motion.div style={isMobile ? undefined : { clipPath: textClip }}>
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
