import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Hamburger } from "./hamburger";
import "../../app/styles/hamburger.css";

export const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prevValue = scrollY.getPrevious() ?? 0;
    setHidden(latest > prevValue && latest > 150);
    setAtTop(latest < 30);
  });

  const variants = {
    visible: {
      y: 0,
      backgroundColor: atTop ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.10)",
      backdropFilter: atTop ? "none" : "blur(10px)",
    },
    hidden: { y: "-100%" },
  };

  return (
    <motion.header
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 transition-colors duration-300"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20 gap-4">
          <div className="flex items-center">
            <h1
              className={`text-xl text-white font-bold ${atTop ? "opacity-0" : "opacity-100"} transition-opacity duration-300 max-lg:hidden`}
            >
              Nicolai.harms@gmail.com
            </h1>
          </div>

          <Hamburger onClick={() => {}} isAtTop={atTop} />
        </nav>
      </div>
    </motion.header>
  );
};
