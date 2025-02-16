import { Slider } from "@/components/slider";
import { techStackImages } from "@/lib/utils";

export const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="flex flex-col justify-center items-center"
    >
      <Slider
        title="Tech Stack"
        items={[
          {
            image: techStackImages.nextjs,
            text: "Next.js",
            alt: "Next.js Logo",
          },
          {
            image: techStackImages.react,
            text: "React",
            alt: "React Logo",
          },
          {
            image: techStackImages.typescript,
            text: "TypeScript",
            alt: "TypeScript Logo",
          },
          {
            image: techStackImages.tailwind,
            text: "Tailwind CSS",
            alt: "Tailwind CSS Logo",
          },
          {
            image: techStackImages.mongodb,
            text: "MongoDB",
            alt: "MongoDB Logo",
          },
          {
            image: techStackImages.mysql,
            text: "MySQL",
            alt: "MySQL Logo",
          },
          {
            image: techStackImages.php,
            text: "PHP",
            alt: "PHP Logo",
          },
          {
            image: techStackImages.remix,
            text: "Remix",
            alt: "Remix Logo",
          },
          {
            image: techStackImages.svelte,
            text: "Svelte",
            alt: "Svelte Logo",
          },
        ]}
        autoplaySpeed={5000}
      />
    </section>
  );
};
