import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { fadeInUp, createDelayedFadeInUp } from "@/hooks/animations";
import profile from "../../../public/profile_img.png";

export const Hero = () => {
  return (
    <section className="flex flex-row justify-start">
      <div className="z-10 flex w-1/2 flex-col gap-[20%] px-10">
        <motion.h1 className="headline w-[140%] ml-[-40px]" {...fadeInUp}>
          WEBUDVIKLER NICOLAI HARMS
        </motion.h1>
        <motion.p
          className="text-4xl tiny-headline w-2/3"
          {...createDelayedFadeInUp(0.2)}
        >
          Fullstack Developor med passion for interaktive løsninger og design{" "}
        </motion.p>

        <div className="flex pl-20 w-full flex-col">
          <motion.h2 className="text-5xl mb-8" {...createDelayedFadeInUp(0.4)}>
            Her er lidt ekstra info, som jeg ikke helt ved hvad kommer til at
            handle om
          </motion.h2>
          <motion.div
            className="flex gap-2 flex-row w-2/3"
            {...createDelayedFadeInUp(0.6)}
          >
            <Github size={32} />
            <Linkedin size={32} />
          </motion.div>
        </div>
      </div>
      <div className="w-full h-[200vh]">
        <div className="h-screen w-full sticky top-0 right-0">
          <div className="absolute top-0 right-0 w-[120%] h-screen">
            <Image
              className="w-full h-screen -z-10 object-cover object-top"
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
