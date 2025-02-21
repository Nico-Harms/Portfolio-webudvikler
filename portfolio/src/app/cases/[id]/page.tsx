import Image from "next/image";
import { cases } from "@/data/cases";
import Link from "next/link";
import BackButton from "@/components/backbutton";
import { Github, Link as LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  return cases.map((caseItem) => ({
    id: caseItem.id.toString(),
  }));
}

export default async function CaseDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const caseData = cases.find((c) => c.id === parseInt(resolvedParams.id));

  if (!caseData) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <div className="pl-4 pt-2">
          <BackButton colorProp="text-white" />
        </div>

        {/* Background Image with Gradient */}
        <div className="absolute inset-0">
          <Image
            src={caseData.backgroundImage}
            alt={caseData.title}
            fill
            className="object-cover object-center"
            priority
            quality={100}
            sizes="100vw"
            style={{
              transform: "scale(1.02)",
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent"
            style={{
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex h-full items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {caseData.tags.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-7xl font-bold text-white">
                {caseData.title}
              </h1>

              {/* Description */}
              <p className="text-white/80 text-lg max-w-xl leading-relaxed">
                {caseData.intro}
              </p>

              {/* Project Links */}
              <div className="flex items-center gap-4 pt-4">
                {caseData.githubLink && (
                  <Link href={caseData.githubLink} target="_blank">
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-2 py-3 px-6 text-base hover:scale-105 transition-transform"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </Badge>
                  </Link>
                )}
                <Link href={caseData.link} target="_blank">
                  <Badge
                    variant="default"
                    className="flex items-center gap-2 py-3 px-6 text-base hover:scale-105 transition-transform"
                  >
                    <LinkIcon className="w-5 h-5" />
                    Live Demo
                  </Badge>
                </Link>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-white/60 pt-2">
                <span className="font-medium">Duration:</span>
              </div>
            </div>

            {/* Right Content - Mockup */}
            <div className="hidden lg:block w-1/2">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-[90%] aspect-[9/16] group">
                  <Image
                    src={caseData.mockupImage}
                    alt={caseData.title}
                    fill
                    className="object-contain drop-shadow-2xl transition-all duration-500 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Project Overview</h2>
            <p className="text-muted-foreground color leading-relaxed">
              {caseData.description}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <p>
              <span className="font-bold">Duration:</span> {caseData.duration}
            </p>
          </div>
          {/* Add more project details sections here */}
        </div>
      </section>
    </div>
  );
}
