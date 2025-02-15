import { motion } from "motion/react";
import { fadeInUp, createDelayedFadeInUp } from "@/hooks/animations";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
// Mock data - replace with your actual cases
const cases = [
  {
    id: 1,
    title: "Lendr",
    backgroundImage: "/cases/lendr.png",
    mockupImage: "/cases/lendr-mock.png", // Replace with actual mockup image
    link: "/cases/lendr",
    tags: ["Nextjs", "TailwindCSS", "MySQL"],
  },
  {
    id: 2,
    title: "Ligeværd",
    backgroundImage: "/cases/ligevaerd.png",
    mockupImage: "/cases/ligevaerd-mock.png",
    link: "/cases/ligevaerd",
    tags: ["PHP", "Wordpress", "JS"],
  },
  {
    id: 3,
    title: "Owners Club",
    backgroundImage: "/cases/ownersclub.png",
    mockupImage: "/cases/ownersclub-mock.png",
    link: "/cases/ownersclub",
    tags: ["Wordpress", "Elementor", "Javascript"],
  },
];

export default function Cases() {
  return (
    <section id="projects" className="w-full distance-top">
      <div className="wrapper mx-auto ">
        <div className="flex items-center justify-between ">
          <motion.h2 className="small-headline w-1/3 font-bold" {...fadeInUp}>
            Featured <span className="text-[#BD8E2A]">Projects</span>
            <span className="text-[#BD8E2A]"></span>.
          </motion.h2>
          <div className="flex w-1/3 flex-col items-end gap-4">
            <p className="p-tag">
              Disse cases er en blanding af mine nyeste og mest varierede
              projekter. De viser min evne til at arbejde med forskellige
              teknologier, skabe brugervenlige løsninger og tilpasse mig
              forskellige krav og behov. Projekterne afspejler både mit tekniske
              fundament og min passion for at udvikle funktionelle og visuelt
              tiltalende webløsninger.{" "}
            </p>
          </div>
        </div>
        <Link href="/archievepage">
          <p className="text-end pb-2 flex items-center justify-end gap-2">
            View all projects
            <MoveRight className="w-7 h-7 text-[#BD8E2A]" />
          </p>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((project, index) => (
            <Link href={project.link} key={project.id}>
              <motion.div
                className="group relative w-full h-[400px] rounded-xl overflow-hidden cursor-pointer"
                {...createDelayedFadeInUp(0.2 * index)}
              >
                {/* Blurred background image */}
                <div className="absolute inset-0">
                  <Image
                    src={project.backgroundImage}
                    alt={project.title}
                    fill
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                </div>

                {/* Centered mockup image */}
                <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                  <div className="relative w-full h-3/4">
                    <Image
                      src={project.mockupImage}
                      alt={`${project.title} mockup`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
