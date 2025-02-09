import { motion } from "framer-motion";
import { fadeInUp, createDelayedFadeInUp } from "@/hooks/animations";
import Image from "next/image";

// Mock data - replace with your actual cases
const archiveCases = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of the project and its key features",
    image: "/placeholder.jpg", // Replace with actual image
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "Another amazing project with its unique characteristics",
    image: "/placeholder.jpg",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Project Three",
    description: "The third showcase project with its special features",
    image: "/placeholder.jpg",
    tags: ["Svelte", "Firebase", "TailwindCSS"],
  },
];

export default function ArchiveCases() {
  return (
    <section className="py-20 px-10 min-h-screen">
      <motion.h2 className="text-4xl font-bold mb-12 text-center" {...fadeInUp}>
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {archiveCases.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            {...createDelayedFadeInUp(0.2 * index)}
          >
            <div className="aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 z-10" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
