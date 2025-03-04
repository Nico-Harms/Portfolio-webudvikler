import { motion } from "motion/react";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { createDelayedFadeInUp } from "@/hooks/animations";
import profile from "../../../public/personal/profile_img.png";

export const Hero = () => {
  return (
    <section className="flex flex-row justify-start max-lg:flex-col-reverse ">
      <div className="z-10 flex w-full lg:w-1/2 flex-col gap-[20%] px-10">
        <h1 className="headline text-[#BD8E2A] drop-shadow-[0_0_10px_rgba(0,0,0,0.10)] w-[140%] drop-shadow- ml-[-40px] max-lg:absolute bottom-[45%] max-lg:w-full">
          WEBUDVIKLER
          <span className="text-black pr-5 whitespace-nowrap">
            <br />
            NICOLAI HARMS
          </span>
        </h1>
        <p className="tiny-headline w-4/5 max-lg:absolute bottom-[10%] max-lg:w-[90%] left-3">
          Fullstack Developer med passion for interaktive løsninger
        </p>

        <div className="flex pl-20  w-full flex-col max-lg:pl-0">
          <motion.h2
            className="tiny-headline mb-8 max-lg:text-center"
            {...createDelayedFadeInUp(0.4)}
          >
            Eller check mig ud på
          </motion.h2>
          <motion.div
            className="flex gap-3 flex-row w-2/3 max-lg:w-full max-lg:justify-center"
            {...createDelayedFadeInUp(0.6)}
          >
            <a
              target="_blank"
              className="transition-colors duration-300 hover:bg-[#211F1F] hover:text-white rounded-full p-2"
              href="https://github.com/Nico-Harms"
            >
              <Github size={32} />
            </a>
            <a
              target="_blank"
              className="transition-colors duration-300 hover:bg-[#0077B5] hover:text-white rounded-full p-2"
              href="https://www.linkedin.com/in/nicolai-harms-0847551b8/"
            >
              <Linkedin size={32} />
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1], // Custom ease-out curve for smooth ending
        }}
        className="relative w-1/2 h-[200vh] max-lg:w-full max-lg:h-[130vh]"
      >
        <div className="h-screen w-full sticky top-0 right-0">
          <div className="absolute top-0 right-0 w-[120%] h-screen">
            <div className="relative w-full h-full max-lg:h-[50vh]">
              <Image
                className="w-full h-full -z-10 object-cover scale-x-[-1] object-top"
                src={profile}
                alt="Profile"
                style={{ objectFit: "cover" }}
                quality={100}
                priority
                placeholder="blur"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0) 65.5%, #7f7f7f 100%)",
                  zIndex: 5,
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
