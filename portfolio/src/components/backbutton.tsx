"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";

interface BackButtonProps {
  colorProp: string;
}

export default function BackButton({ colorProp }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`inline-flex items-center gap-2 ${colorProp} group transition-colors duration-300 py-4`}
    >
      <ArrowLeftIcon
        className={`w-4 h-4 z-10 group-hover:text-[#D4AF37] ${colorProp}`}
      />
      <span className={`z-10 group-hover:text-[#D4AF37]`}>
        Back to projects
      </span>
    </button>
  );
}
