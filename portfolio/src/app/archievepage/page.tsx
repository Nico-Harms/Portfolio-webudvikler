"use client";

import ArchiveCases from "@/components/sections/ArchiveCases"; // Adjust the import path as necessary
import BackButton from "@/components/backbutton";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import IntroductionCase from "@/components/sections/IntroductionCase";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function ArchivePage() {
  useSmoothScroll();
  useScrollToTop();

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  // Transform scroll progress into x-position for parallax
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background relative">
      {/* Parallax Dots Background */}
      <motion.div
        className="magicpattern fixed inset-0 z-0"
        style={{
          x: backgroundX,
          scale: 1.1, // Slightly larger to prevent edges showing during movement
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="fixed top-4 left-4 z-50">
          <BackButton colorProp="text-black" />
        </div>

        {/* Main Content Container */}
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <IntroductionCase />
          <div className="mt-20">
            {" "}
            {/* Adjusted spacing between components */}
            <ArchiveCases />
          </div>
        </div>
      </div>
    </div>
  );
}
