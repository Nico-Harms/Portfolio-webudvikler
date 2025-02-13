import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Om mig</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Image
          src="/profile-img.webp"
          alt="About me"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
