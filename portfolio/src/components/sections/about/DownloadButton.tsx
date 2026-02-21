import { motion, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { FINAL_START, FINAL_FRAC } from "@/data/about";

export function DownloadButton({
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
    <motion.div className="mt-8 max-lg:mt-4" style={{ opacity }}>
      <a
        href="/personal/CV Nicolai - English.pdf"
        target="_blank"
        className="inline-block text-lg max-lg:text-sm bg-black dark:bg-white dark:text-black text-white px-6 py-3 max-lg:px-4 max-lg:py-2 rounded-md hover:bg-golden hover:text-white dark:hover:bg-golden dark:hover:text-white transition-all duration-300"
      >
        Download CV
      </a>
    </motion.div>
  );
}
