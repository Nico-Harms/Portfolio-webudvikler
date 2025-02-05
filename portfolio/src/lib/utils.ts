import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Import all tech stack images
import nextjs from "../../public/techstack/nextjs.svg";
import react from "../../public/techstack/react.svg";
import php from "../../public/techstack/php.svg";
import mongodb from "../../public/techstack/mongodb.svg";

import mysql from "../../public/techstack/mysql.svg";
import remix from "../../public/techstack/remix.svg";
import tailwind from "../../public/techstack/tailwindcss.svg";
import typescript from "../../public/techstack/typescript.svg";
import svelte from "../../public/techstack/svelte.svg";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Tech stack images object
export const techStackImages = {
  nextjs,
  react,
  php,
  mysql,
  remix,
  tailwind,
  mongodb,
  svelte,
  typescript,
  // Add more images as needed
} as const;

// Type for the tech stack image keys
export type TechStackImageKey = keyof typeof techStackImages;
