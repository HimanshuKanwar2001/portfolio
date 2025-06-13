import React from "react";

const ParallaxBackground = () => {
  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen z-50"
          style={{
            background: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Moutain Layer 3 */}
        <div
          className="absolute inset-0 -z-40 "
          style={{
            background: "url(/assets/moutain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Planets */}
        <div className="" />
        {/* Mountain Layer 2 */}
        <div />
        {/* Mountain Layer 1 */}
        <div />
      </div>
    </section>
  );
};

export default ParallaxBackground;
