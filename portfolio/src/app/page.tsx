import Image from "next/image";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import Darkmode from "../components/ui/dark-toggle";
import profile from "../../public/profile_img.png";

export default function Home() {
  return (
    <>
      <div className="absolute top-2 right-2 z-50">
        <Darkmode />
      </div>
      <section className="flex flex-row justify-start h-[150vh] ">
        <div className="z-10 flex flex-col justify-between px-10">
          <h1 className="text-[110px] w-[130%] ml-[-40px]">
            WEBUDVIKLER NICOLAI HARMS
          </h1>
          <p className="text-4xl w-2/3">
            Fullstack Developor med passion for inaktive løsniger og design{" "}
          </p>

          <div className="flex pl-20 w-full flex-col">
            <h2 className="text-5xl  mb-8">
              Her er lidt ekstra info, som jeg ikke helt ved hvad kommer til at
              handle om
            </h2>
            <div className="flex gap-2 flex-row w-2/3">
              <Github size={32} />
              <Linkedin size={32} />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="h-screen w-full sticky top-0 right-0 ">
            <div className="absolute top-0 right-0 w-[130%] h-screen">
              <Image
                className="w-full h-screen -z-10 object-cover object-top"
                src={profile}
                alt="Profile"
                style={{ objectFit: "cover" }} // Maintains aspect ratio and covers
                quality={100} // Optional: Adjust quality (0-100) if needed
                priority // Prioritize loading this image
                placeholder="blur" // Optional: Use a blur placeholder
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center h-[100vh]">
        <h2>Portfolio</h2>
        <p>Her er en samling af mine projekter</p>
      </section>
    </>
  );
}
