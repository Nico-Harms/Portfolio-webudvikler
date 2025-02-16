import "../../app/styles/hamburger.css";
import * as React from "react";
import { useState } from "react";

interface HamburgerProps {
  onClick?: () => void;
  isAtTop: boolean;
}

export const Hamburger: React.FC<HamburgerProps> = ({ onClick, isAtTop }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after clicking
    }
  };

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsOpen(isChecked);
    if (onClick) onClick();
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false); // Close the menu on scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <label className="hamburger">
        <input type="checkbox" checked={isOpen} onChange={handleToggle} />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            style={{ stroke: isAtTop ? "black" : "white" }}
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path
            className="line"
            style={{ stroke: isAtTop ? "black" : "white" }}
            d="M7 16 27 16"
          ></path>
        </svg>
      </label>
      <div
        className={`absolute z-50 nav-menu  left-0 top-full bg-white shadow-lg rounded-md mt-2 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="py-2 flex flex-col justify-evenly h-full">
          <button
            onClick={() => scrollToSection("intro")}
            className="block w-full px-4 py-2 text-white text-center text-4xl uppercase"
          >
            Intro
          </button>
          <button
            onClick={() => scrollToSection("tech-stack")}
            className="block w-full px-4 py-2 text-4xl text-white text-center uppercase"
          >
            Tech Stack
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="block w-full px-4 py-2 text-4xl text-white text-center uppercase"
          >
            Cases
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full px-4 py-2 text-4xl text-white text-center uppercase"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};
