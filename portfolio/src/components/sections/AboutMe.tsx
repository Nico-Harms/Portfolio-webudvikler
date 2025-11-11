"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeInUp } from "@/hooks/animations";
import { Phone, Mail, Plus, Minus } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const aboutMe = [
  {
    title: "Hvem jeg er",
    content:
      "Jeg er 27 år gammel og bosat på Nørrebro i København. Siden en tidlig alder har jeg altid haft en stærk passion for IT. Min fascination for teknologi og kreativ tænkning har motiveret mig til at forfølge en karriere som enten fullstack- eller frontend-udvikler. I sommeren 2024 færdiggjorde jeg min uddannelse som multimediedesigner og er nu i gang med at tage en professionsbachelor i webudvikling. Jeg elsker at dykke ned i komplekse problemer og finde innovative løsninger, samtidig med at jeg bruger min kreativitet til at forme digitale idéer til virkelighed.",
  },
  {
    title: "Hvad jeg søger",
    content:
      "Jeg søger en fuldtidsstilling som enten frontend- eller fullstack-udvikler, hvor jeg kan arbejde i et udviklende og lærerigt miljø. Jeg motiveres af at samarbejde med erfarne udviklere og få praktisk erfaring med de nyeste teknologier, særligt inden for frameworks, som jeg har en stor faglig interesse for. Jeg er ivrig efter at bidrage med mine færdigheder og mit perspektiv. Med min faglige baggrund og kreative tilgang tror jeg på, at jeg kan tilføre værdi til teamet og samtidig fortsætte min professionelle udvikling som udvikler.",
  },

  {
    title: "Min fritidsinteresser ",
    content:
      "Jeg er stadig lidt af en IT-nørd i min fritid – jeg elsker at nørde projekter sammen med min far og følge med i nye tech-trends. Jeg går meget op i mit smart home (det har jeg egentlig gjort, siden jeg fik min OnePlus 6 for mange år siden). Jeg gamer gerne med vennerne, men nyder også at koble af med historier om græsk mytologi. Derudover spiller jeg fodbold og sætter pris på et godt glas vin",
  },
  {
    title: "Kontakt oplysninger",
  },
];

export default function AboutMe() {
  const [openItem, setOpenItem] = useState<string>("item-1");

  return (
    <section
      id="about"
      className="wrapper mx-auto flex mb-20 align-start gap-20 distance-top max-lg:flex-col"
    >
      <div className="flex relative flex-col items-start w-1/2 max-lg:w-full">
        {/* Small gray heading with golden underline */}
        <div className="mb-4">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
            Om mig
          </p>
          <div className="h-[1px] w-12 bg-[#BD8E2A]" />
        </div>

        {/* Main title with golden italic and dot */}
        <h4 className="font-bold uppercase small-headline w-2/3 max-lg:w-full mb-12">
          <span className="text-[#BD8E2A] italic font-normal">(personlig)</span>{" "}
          HISTORIE
          <span className="text-[#BD8E2A]">.</span>
        </h4>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={openItem}
          onValueChange={setOpenItem}
        >
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger
              hideDefaultIcon
              className={`big-p font-bold pb-4 hover:no-underline ${
                openItem === "item-1"
                  ? "text-[#BD8E2A]"
                  : "text-black dark:text-white"
              }`}
            >
              <span>{aboutMe[0].title}</span>
              {openItem === "item-1" ? (
                <Minus className="h-5 w-5 shrink-0 ml-2" />
              ) : (
                <Plus className="h-5 w-5 shrink-0 ml-2" />
              )}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 dark:text-gray-400 text-base leading-relaxed pt-2 pb-6">
              {aboutMe[0].content}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger
              hideDefaultIcon
              className={`big-p font-bold pb-4 hover:no-underline ${
                openItem === "item-2"
                  ? "text-[#BD8E2A]"
                  : "text-black dark:text-white"
              }`}
            >
              <span>{aboutMe[1].title}</span>
              {openItem === "item-2" ? (
                <Minus className="h-5 w-5 shrink-0 ml-2" />
              ) : (
                <Plus className="h-5 w-5 shrink-0 ml-2" />
              )}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 dark:text-gray-400 text-base leading-relaxed pt-2 pb-6">
              {aboutMe[1].content}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger
              hideDefaultIcon
              className={`big-p font-bold pb-4 hover:no-underline ${
                openItem === "item-3"
                  ? "text-[#BD8E2A]"
                  : "text-black dark:text-white"
              }`}
            >
              <span>{aboutMe[2].title}</span>
              {openItem === "item-3" ? (
                <Minus className="h-5 w-5 shrink-0 ml-2" />
              ) : (
                <Plus className="h-5 w-5 shrink-0 ml-2" />
              )}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 dark:text-gray-400 text-base leading-relaxed pt-2 pb-6">
              {aboutMe[2].content}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-none">
            <AccordionTrigger
              hideDefaultIcon
              className={`big-p font-bold pb-4 hover:no-underline ${
                openItem === "item-4"
                  ? "text-[#BD8E2A]"
                  : "text-black dark:text-white"
              }`}
            >
              <span>{aboutMe[3].title}</span>
              {openItem === "item-4" ? (
                <Minus className="h-5 w-5 shrink-0 ml-2" />
              ) : (
                <Plus className="h-5 w-5 shrink-0 ml-2" />
              )}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 dark:text-gray-400 text-base leading-relaxed pt-2 pb-6">
              <div className="flex flex-col gap-2">
                <a
                  className="flex items-center gap-2 text-xl"
                  href="mailto:nicolai.harms@gmail.com"
                >
                  <Mail className="w-4 h-4" /> Nicolai.harms@gmail.com
                </a>
                <a
                  className="flex items-center gap-2 text-xl"
                  href="tel:+4561720311"
                >
                  <Phone className="w-4 h-4" /> 61720311
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="absolute bottom-[-50px] left-0 max-lg:bottom-[-65px]">
          <a
            href="/personal/CV - Nicolai Harms.pdf"
            target="_blank"
            className="text-lg bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-golden transition-all duration-300 hover:border-solid hover:border-golden hover:border-2"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-1/2 relative max-lg:w-full">
        <div
          className="w-full h-[700px] bg-cover bg-center rounded-3xl max-lg:h-[500px] relative overflow-hidden"
          style={{
            backgroundImage: 'url("/personal/profile.png")',
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          {/* Quote overlay at bottom left */}
          <div className="absolute bottom-8 left-8 z-20 max-w-md">
            <motion.div {...fadeInUp}>
              <p className="text-white text-lg leading-relaxed mb-4">
                &ldquo;Jeg elsker at kombinere kreativitet med teknologi og
                skabe løsninger, der gør en forskel for brugerne.&rdquo;
              </p>
              <hr className="border-t border-white/30 mb-4 w-16" />
              <div className="flex flex-col gap-1">
                <p className="text-white text-xl font-semibold">
                  Nicolai Harms
                </p>
                <p className="text-white/80 text-sm">Fullstack Developer</p>
              </div>
            </motion.div>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 rounded-3xl z-10 gradient-background" />
        </div>
      </div>
    </section>
  );
}
