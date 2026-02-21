import { motion, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { contentStart, contentEnd } from "@/data/about";

export function AccumulatingTitle({
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
    [start + range * 0.15, start + range * 0.75],
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
            fontSize: "clamp(1.1rem, 3vw, 3rem)",
            lineHeight: 1.15,
          }}
        >
          {title}
          <span className="text-golden">.</span>
        </h3>
      </button>
      <motion.div
        className="h-[2px] bg-golden mt-3 mb-5 max-lg:mt-1.5 max-lg:mb-2.5 origin-left"
        style={{ scaleX: lineScale }}
      />
    </motion.div>
  );
}
