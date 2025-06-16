import React from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <ParallaxBackground />
      <div className="relative z-10 flex items-start justify-center md:justify-start px-4 md:px-16">
        <HeroText />
      </div>
    </section>
  );
};

export default Hero;
