"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import Darkmode from "@/components/ui/dark-toggle";
import FeaturedCases from "@/components/sections/FeaturedCases";
import { Header } from "@/components/ui/Header";
import AboutMe from "@/components/sections/AboutMe";
export default function Home() {
  useScrollToTop();
  useSmoothScroll();

  return (
    <>
      <Header />
      <Hero />
      <TechStack />
      <FeaturedCases />
      <AboutMe />
      <div className="fixed bottom-2 right-2 z-50">
        <Darkmode />
      </div>
    </>
  );
}
