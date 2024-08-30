import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-[#f4f6f6] text-[#455473]">
      <HeroSection />
      <Stats />
      <WhyChooseUs />
    </div>
  );
}
