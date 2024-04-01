import React from "react";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center h-full w-full">
      <video
        className="absolute h-full w-full bottom-[365px] left-0 z-[10] object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/gold.mp4" type="video/mp4" />
      </video>
      <video
        className="absolute h-full w-full -bottom-[365px] left-0 z-[1] object-cover rotate-180 translate-y-[-22px]"
        autoPlay
        loop
        muted
      >
        <source src="/gold.mp4" type="video/mp4" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
