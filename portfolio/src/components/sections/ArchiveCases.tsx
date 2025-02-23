import Image from "next/image";
import Link from "next/link";
import { cases } from "@/data/cases";
import "../../app/styles/polkadots.css";

export default function ArchiveCases() {
  return (
    <section id="projects" className="w-full relative pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </section>
  );
}
