import Image from "next/image";
import Link from "next/link";
import { cases } from "@/data/cases";

export default function ArchiveCases() {
  return (
    <section id="projects" className="w-full distance-top">
      <div className="wrapper mx-auto">
        <div className="flex items-center justify-between max-lg:flex-col gap-6">
          <h2 className="small-headline w-1/3 font-bold max-lg:w-full">
            Archive <span className="text-[#BD8E2A]">Projects</span>
            <span className="text-[#BD8E2A]"></span>.
          </h2>
          <div className="flex w-1/2 flex-col items-end gap-4 max-lg:w-full">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-lg:pt-2">
          {cases.map((project) => (
            <Link href={`/cases/${project.id}`} key={project.id}>
              <div className="group relative w-full h-[400px] rounded-xl overflow-hidden cursor-pointer">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
