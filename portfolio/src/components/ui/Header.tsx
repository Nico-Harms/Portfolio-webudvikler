import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 transition-colors duration-300"
    >
      <div className="max-w-container mx-auto">
        <nav className="flex items-center justify-end h-20 gap-12">
          <button
            onClick={() => scrollToSection("tech-stack")}
            className={`text-lg font-medium transition-colors ${
              atTop
                ? "text-black hover:text-[#BD8E2A]"
                : "text-white hover:text-[#BD8E2A]"
            }`}
          >
            Tech Stack
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`text-lg font-medium transition-colors ${
              atTop
                ? "text-black hover:text-[#BD8E2A]"
                : "text-white hover:text-[#BD8E2A]"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`text-lg font-medium transition-colors ${
              atTop
                ? "text-black hover:text-[#BD8E2A]"
                : "text-white hover:text-[#BD8E2A]"
            }`}
          >
            Contact
          </button>
        </nav>
      </div>
    </motion.header>
  );
};
