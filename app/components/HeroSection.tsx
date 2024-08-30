// components/HeroSection.tsx
import Image from "next/image";
import React from "react";
import Navbar from "./NavBar";
import { ModalProvider, ModalTrigger } from "./ui/animated-modal";

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center text-white">
      <Navbar />
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-pic.jpg" // Replace with your image path
          alt="Cityscape"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Optional overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <div className="w-full px-8 sm:px-0 md:w-1/2 text-center flex flex-col items-start space-y-4">
          <h1 className="text-center text-3xl sm:text-5xl md:text-7xl font-bold">
            GoodayOn
          </h1>
          <p className="text-[#fdfdfdc4] w-full text-base md:text-lg text-center">
            GoodayOn is an efficient and reliable gig marketplace that provides
            high-precision gig matching for domestic help and home repair
            services in Ethiopia.
          </p>
        </div>
      </div>
      {/* Box with Shadow */}
      <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 p-6 md:p-12 bg-[#fffffff1] text-pink-600 shadow-lg rounded-lg z-30">
        <div className="relative">
          <h2 className="text-xl sm:text-3xl lg:text-4xl 2xl:text-6xl font-semibold text-center leading-relaxed">
            Your Reliable Domestic Care Provider
            {/* <ModalProvider>
              <ModalTrigger className="bg-black text-white">ABDN</ModalTrigger>
            </ModalProvider> */}
          </h2>
          <div className="absolute -bottom-28 -right-28 xl:-bottom-32 xl:-right-32 2xl:-bottom-36 2xl:-right-36">
            <Image
              src="/cl-tool.png" // Replace with your image path
              alt="Sticky Image"
              width={180} // Adjust width as needed
              height={180} // Adjust height as needed
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
