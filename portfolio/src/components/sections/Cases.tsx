import { motion } from "framer-motion";
import { fadeInUp, createDelayedFadeInUp } from "@/hooks/animations";
import Image from "next/image";
import Link from "next/link";

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
    <section className="w-full py-20">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between mb-12">
          <motion.h2 className="text-4xl font-bold" {...fadeInUp}>
            Featured Projects
          </motion.h2>
          <p className="text-gray-500">
            Here are some of the projects I&apos;ve worked on.
          </p>
        </div>
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
