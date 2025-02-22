import Image from "next/image";
import { cases } from "@/data/cases";
import Link from "next/link";
import BackButton from "@/components/backbutton";
import { Github, Link as LinkIcon, Clock, Users } from "lucide-react";
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
      <section className="relative h-[70vh] w-full max-lg:h-fit max-lg:py-10 ">
        <div className="pl-4 pt-2 max-lg:pt-0">
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
            style={{ transform: "scale(1.02)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="relative h-full max-w-[1440px] mx-auto px-6 lg:px-12 max-lg:h-fit max-lg:pt-4">
          <div className="flex h-full items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Project Tags */}
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

              {/* Project Title */}
              <h1 className="small-headline font-bold text-white">
                {caseData.title}
              </h1>

              {/* Project Intro */}
              <p className="text-white/80 text-lg max-w-xl leading-relaxed">
                {caseData.intro}
              </p>

              {/* Project Links */}
              <div className="flex items-center gap-4 pt-4">
                {caseData.githubLink && (
                  <Link href={caseData.githubLink} target="_blank">
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1 sm:gap-2 py-2 sm:py-3 px-3 sm:px-6 text-sm sm:text-base hover:scale-105 transition-transform"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                      View Code
                    </Badge>
                  </Link>
                )}
                <Link href={caseData.link} target="_blank">
                  <Badge
                    variant="default"
                    className="flex items-center gap-1 sm:gap-2 py-2 sm:py-3 px-3 sm:px-6 text-sm sm:text-base hover:scale-105 transition-transform"
                  >
                    <LinkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    Live Demo
                  </Badge>
                </Link>
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

      {/* Project Demo Section */}
      <section className="max-w-[1440px] flex flex-col mx-auto px-6 lg:px-12 py-20">
        {caseData.demo && (
          <div
            className={`w-full flex gap-12 ${
              caseData.demo.isMobile ? "flex-row max-lg:flex-col" : "flex-col"
            }`}
          >
            {/* Video Container */}
            <div
              className={`relative w-1/2 ${
                caseData.demo.isMobile ? "w-1/2 max-lg:w-full" : "w-full"
              }`}
            >
              {/* Device Frame */}
              <div
                className={`relative mx-auto overflow-hidden drop-shadow-2xl ${
                  caseData.demo.isMobile
                    ? "max-w-[280px] rounded-[2.5rem] bg-[#1a1a1a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25),_0_30px_60px_-30px_rgba(0,0,0,0.3)] ring-1 ring-neutral-800/10"
                    : "max-w-[1000px] rounded-2xl bg-[#252627]"
                }`}
              >
                {/* Video Player */}
                <div>
                  <video
                    className={`w-full h-full p-2 border-[#252627] ${
                      caseData.demo.isMobile
                        ? "rounded-[2rem] border-[1px] "
                        : "rounded-xl"
                    }`}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={caseData.demo.video} type="video/mp4" />
                    <source src={caseData.demo.video} type="video/quicktime" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            {/* Project Overview */}
            <div
              className={`w-1/2 mt-0 ${
                caseData.demo.isMobile
                  ? "w-1/2 max-lg:w-full"
                  : "w-full max-w-[1000px] mx-auto"
              }`}
            >
              <h2 className="text-3xl font-bold">Projekt beskrivelse</h2>
              <div className="flex flex-col gap-4">
                {/* Project Quick Stats */}
                <div className="flex items-center flex-wrap gap-4 mt-4">
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-2 py-2 px-4 text-sm bg-black/5 hover:bg-black/5"
                  >
                    <Clock className="w-4 h-4" />
                    {caseData.duration}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-2 py-2 px-4 text-sm bg-black/5 hover:bg-black/5"
                  >
                    <Users className="w-4 h-4" />
                    {caseData.amountofpeople} Team medlemmer
                  </Badge>
                </div>

                {/* Description Paragraphs */}
                {caseData.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
