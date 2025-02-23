import { motion } from "framer-motion";
import { Code2, Braces, Terminal, Laptop, Database } from "lucide-react";
import { cases } from "@/data/cases";

const techStack = [
  { icon: Code2, label: "Frontend", color: "text-blue-500" },
  { icon: Terminal, label: "Backend", color: "text-green-500" },
  { icon: Database, label: "Database", color: "text-purple-500" },
  { icon: Braces, label: "API", color: "text-orange-500" },
  { icon: Laptop, label: "Responsive", color: "text-pink-500" },
];

// Get unique tags from all projects
const getAllTechnologies = () => {
  const allTags = cases.flatMap((project) => project.tags);
  return [...new Set(allTags)];
};

export default function IntroductionCase() {
  const uniqueTechnologies = getAllTechnologies();
  const totalProjects = cases.length;

  return (
    <section className="relative min-h-[80vh] pt-20 flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #bd8e2a 1px, transparent 0)`,
            backgroundSize: "40px 40px",
            opacity: 0.1,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {/* <span className="px-4 py-2 rounded-full text-sm font-medium bg-[#bd8e2a]/10 text-[#bd8e2a]">
                Portfolio Archive
              </span> */}
            </motion.div>
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="bg-clip-text small-headline text-transparent bg-gradient-to-r from-neutral-950 to-neutral-500">
                Udforsk alle
              </span>
              <br />
              <span className="text-[#bd8e2a] small-headline">
                Mine projekter
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Her kan du finde alle mine projekter, hvad enten de er udført for
              Brand by Hand, udviklet som skoleprojekter eller lavet som
              fritidsprojekt.
            </p>
            <p className="text-lg text-muted-foreground max-w-xl">
              Når jeg arbejder for Brand by Hand, har jeg som regel leveret
              WordPress-løsninger til forskellige kundetyper. Jeg har haft
              direkte dialog med kunderne om tidsestimater og forventninger samt
              samarbejdet tæt med designere omkring brugervenligheden.
            </p>
            <p className="text-lg text-muted-foreground max-w-xl">
              I mine skoleprojekter har jeg fokuseret på at udforske nye
              teknologier, særligt moderne frameworks. Det stemmer godt overens
              med min passion for webudvikling og giver mig mulighed for at
              holde mig opdateret med de nyeste trends.
            </p>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg"
                >
                  <tech.icon className={`w-4 h-4 ${tech.color}`} />
                  <span className="text-sm font-medium">{tech.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Code Block Visual */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/0 rounded-2xl backdrop-blur-sm border border-black/5 p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-4 font-mono text-sm h-full overflow-y-auto custom-scrollbar"
              >
                {/* Fade Overlay for Scroll Indication */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />

                <div className="text-[#bd8e2a]">{"const cases = {"}</div>

                <div className="pl-4">
                  <span className="text-blue-600">totalProjects:</span>{" "}
                  <span className="text-amber-600">{totalProjects}</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-600">projects:</span> [
                  {cases.map((project, index) => (
                    <div key={project.id} className="pl-4">
                      {"{"}
                      <div className="pl-4">
                        <span className="text-blue-600">id:</span>{" "}
                        <span className="text-amber-600">{project.id}</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-blue-600">title:</span>{" "}
                        <span className="text-green-600">
                          &quot;{project.title}&quot;
                        </span>
                        ,
                      </div>

                      <div className="pl-4">
                        <span className="text-blue-600">stack:</span> [
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex}>
                            <span className="text-green-600">
                              &quot;{tag}&quot;
                            </span>
                            {tagIndex < project.tags.length - 1 ? ", " : ""}
                          </span>
                        ))}
                        ],
                      </div>
                      {"}"}
                      {index < cases.length - 1 ? "," : ""}
                    </div>
                  ))}
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-blue-600">technologies:</span> [
                  {uniqueTechnologies.map((tech, index) => (
                    <span key={tech}>
                      <span className="text-green-600">&quot;{tech}&quot;</span>
                      {index < uniqueTechnologies.length - 1 ? ", " : ""}
                    </span>
                  ))}
                  ],
                </div>
                <div className="text-[#bd8e2a]">{"}"}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-[#bd8e2a]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
