import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="wrapper mx-auto flex mb-20 align-start  gap-20 distance-top"
    >
      <div className="flex flex-col items-start  w-1/2">
        <h4 className="font-bold uppercase text small-headline w-2/3">
          A little <span className="text-[#BD8E2A]">about</span> me
          <span className="text-[#BD8E2A]">.</span>
        </h4>
        <Accordion type="single" collapsible className="w-full pt-10">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-4xl font-bold pb-8  ">
              Hvad jeg søger
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-4xl font-bold mt-5 pb-8 ">
              Hvem jeg er
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-4xl font-bold mt-5 pb-8 ">
              Kontakt oplysninger
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col items-center justify-center w-1/2 relative">
        <div
          className="w-full h-[700px] bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage: 'url("/profile.png")',
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div className="flex justify-between items-end h-full pb-4 px-10">
            <p className="text-white  text-3xl z-20 ">Nicolai Harms</p>
            <p className="text-white text-3xl z-20 ">Webudvikler</p>
          </div>
          <div className="absolute inset-0 rounded-3xl z-10 gradient-background" />
        </div>
      </div>
    </section>
  );
}
