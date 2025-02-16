import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeInUp } from "@/hooks/animations";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { motion } from "motion/react";

const aboutMe = [
  {
    title: "Hvem jeg er",
    content:
      "Jeg er 27 år gammel og bosat i Aarhus, men flytter snart til København. Siden en tidlig alder har jeg altid haft en stærk passion for IT. Min fascination for teknologi og kreativ tænkning har motiveret mig til at forfølge en karriere som enten fullstack- eller frontend-udvikler. I sommer færdiggjorde jeg min uddannelse som multimediedesigner og er nu i gang med at tage en professionsbachelor i webudvikling. Jeg elsker at dykke ned i komplekse problemer og finde innovative løsninger, samtidig med at jeg bruger min kreativitet til at forme digitale idéer til virkelighed",
  },
  {
    title: "Hvad jeg søger",
    content:
      "Jeg søger en praktikplads, hvor jeg kan tilbringe 10 uger i et udviklende og lærerigt miljø. Ideelt set ønsker jeg også at fortsætte samarbejdet i yderligere 10 uger efter praktikken, hvor min bachelorhovedopgave kan tage udgangspunkt i arbejdet for virksomheden. Jeg motiveres af at samarbejde med erfarne udviklere og få praktisk erfaring med de nyeste teknologier, særligt inden for frameworks, som jeg har en stor faglig interesse for. Jeg er ivrig efter at bidrage med mine færdigheder og mit perspektiv. Med min faglige baggrund og kreative tilgang tror jeg på, at jeg kan tilføre værdi til teamet og samtidig få mest muligt ud af de muligheder, et praktikforløb kan tilbyde.",
  },
  {
    title: "Kontakt oplysninger",
  },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="wrapper mx-auto flex mb-20 align-start  gap-20 distance-top max-lg:flex-col"
    >
      <div className="flex relative flex-col items-start  w-1/2 max-lg:w-full">
        <h4 className="font-bold uppercase text small-headline w-2/3 max-lg:w-full">
          En smule <span className="text-[#BD8E2A]">om</span> mig
          <span className="text-[#BD8E2A]">.</span>
        </h4>
        <Accordion type="single" collapsible className="w-full pt-10">
          <AccordionItem value="item-1">
            <AccordionTrigger className="big-p font-bold pb-8  ">
              {aboutMe[0].title}
            </AccordionTrigger>
            <AccordionContent>{aboutMe[0].content}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="big-p font-bold mt-5 pb-8 ">
              {aboutMe[1].title}
            </AccordionTrigger>
            <AccordionContent>{aboutMe[1].content}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="big-p font-bold mt-5 pb-8 ">
              {aboutMe[2].title}
            </AccordionTrigger>
            <AccordionContent>
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
        <div className="absolute bottom-0 left-0 max-lg:bottom-[-65px]">
          <a
            href="/personal/CV-2025.pdf"
            target="_blank"
            className="text-lg bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-golden transition-all duration-300  hover:border-solid hover:border-golden hover:border-2"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-1/2 relative max-lg:w-full">
        <div
          className="w-full h-[700px] bg-cover bg-center rounded-3xl max-lg:h-[500px]"
          style={{
            backgroundImage: 'url("/personal/profile.png")',
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div className="flex justify-between items-end h-full pb-4 px-10 max-lg:flex-col max-lg:justify-end max-lg:items-start">
            <motion.p className="text-white  text-3xl z-20 " {...fadeInUp}>
              Nicolai Harms
            </motion.p>
            <motion.p className="text-white text-3xl z-20 " {...fadeInUp}>
              Webudvikler
            </motion.p>
          </div>
          <div className="absolute inset-0 rounded-3xl z-10 gradient-background" />
        </div>
      </div>
    </section>
  );
}
