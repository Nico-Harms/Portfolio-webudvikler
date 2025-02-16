import ArchiveCases from "@/components/sections/ArchiveCases"; // Adjust the import path as necessary
import BackButton from "@/components/backbutton";
export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-white">
      <BackButton colorProp="text-black" />
      <ArchiveCases />
    </div>
  );
}
