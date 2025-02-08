import { MotionProps } from "framer-motion";

export const fadeInUp: MotionProps = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
};

export const createDelayedFadeInUp = (delay: number): MotionProps => ({
  ...fadeInUp,
  transition: { ...fadeInUp.transition, delay },
});
