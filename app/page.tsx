import { ModeToggle } from "@/components/ModeToggle";
import HeroSection from "@/components/specific/home/elements/HeroSection";
import Image from "next/image";
import dynamic from "next/dynamic";
const MapSection = dynamic(() => import("@/components/specific/home/elements/MapSection"), {
  ssr: false,
});
export default function Home() {
  return (
  <>  
 
      <HeroSection />
        <MapSection/>
      

  </>  );
}
