// app/cases/[id]/page.tsx
import Image from "next/image";
import { cases } from "@/data/cases";

import BackButton from "@/components/backbutton";

export async function generateStaticParams() {
  return cases.map((caseItem) => ({
    id: caseItem.id.toString(),
  }));
}

export default async function CaseDetail({
  params,
}: {
  params: { id: string };
}) {
  // Access params.id directly without awaiting
  const caseId = params.id; // No need to await
  const caseData = cases.find((c) => c.id === parseInt(caseId));

  if (!caseData) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative justify-center h-[55vh] w-full wrapper">
        <BackButton colorProp="text-white" />
        <div className="absolute inset-0">
          <Image
            src={caseData.backgroundImage}
            alt={caseData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 wrapper mx-auto h-full flex items-center">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-white mb-6">
              {caseData.title}
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              {caseData.tags.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src={caseData.mockupImage}
              alt={caseData.title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rest of your component remains the same */}
    </div>
  );
}
