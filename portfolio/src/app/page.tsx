import Image from "next/image";
import profile from "../../public/profile_img.png";

export default function Home() {
  return (
    <>
      <section className="flex flex-row justify-start h-[120vh] ">
        <div>
          <h1 className="text-[110px] text-black w-2/3 ">
            WEBUDVIKLER NICOLAI HARMS
          </h1>
          <p className="text-4xl w-1/3 h-[1000px]">
            Fullstack Developor med passion for inaktive løsniger og design{" "}
          </p>

          <p>
            Her er lidt ekstra info, som jeg ikke helt ved hvad kommer til at
            handle om
          </p>
        </div>
        // might need extra container
        <div className="h-screen w-full sticky top-0 right-0 ">
          <div className="">
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
      </section>
      <section>
        <h2>Portfolio</h2>
        <p>Her er en samling af mine projekter</p>
      </section>
    </>
  );
}
