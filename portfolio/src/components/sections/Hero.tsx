import { motion } from "motion/react";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { fadeInUp, createDelayedFadeInUp } from "@/hooks/animations";
import profile from "../../../public/profile_img.png";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex flex-row justify-start max-lg:flex-col-reverse ">
      <div className="z-10 flex w-full lg:w-1/2 flex-col gap-[20%] px-10">
        <motion.h1
          className="headline w-[140%] ml-[-40px] max-lg:absolute bottom-[170px]"
          {...fadeInUp}
        >
          WEBUDVIKLER
          <span className="text-[#BD8E2A] pr-5">
            <br />
            NICOLAI
          </span>
          <span>HARMS</span>
        </motion.h1>
        <motion.p
          className="tiny-headline w-2/3 max-lg:absolute bottom-0 w-full left-2"
          {...createDelayedFadeInUp(0.2)}
        >
          Fullstack Developer med passion for interaktive løsninger og design
        </motion.p>

        <div className="flex pl-20  w-full flex-col max-lg:pl-0">
          <motion.h2
            className="tiny-headline mb-8"
            {...createDelayedFadeInUp(0.4)}
          >
            Velkommen til mit portfolio
          </motion.h2>
          <motion.div
            className="flex gap-3 flex-row w-2/3"
            {...createDelayedFadeInUp(0.6)}
          >
            <Link href="https://github.com/Nico-Harms">
              <Github size={32} />
            </Link>
            <Link href="https://www.linkedin.com/in/nicolai-harms-0847551b8/">
              <Linkedin size={32} />
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="relative w-1/2 h-[200vh] max-lg:w-full h-[150vh] ">
        <div className="h-screen w-full sticky top-0 right-0">
          <div className="absolute top-0 right-0 w-[120%] h-screen">
            <Image
              className="w-full h-screen -z-10 object-cover object-top max-lg:h-[70vh]"
              src={profile}
              alt="Profile"
              style={{ objectFit: "cover" }}
              quality={100}
              priority
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
