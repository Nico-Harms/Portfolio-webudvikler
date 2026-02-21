import { motion, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { FINAL_START, FINAL_FRAC } from "@/data/about";
import { ProfileImage } from "./ProfileImage";

export function FinalImage({
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
      className="col-start-1 row-start-1 self-center max-lg:absolute max-lg:inset-0"
      style={{ opacity, y, pointerEvents: isActive ? "auto" : "none" }}
    >
      <ProfileImage />
    </motion.div>
  );
}
