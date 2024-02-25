import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      >
        <source src="src\assets\tractor_-_84624 (1440p).mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          Welcome to FarmTrading
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mt-4">
          Your one-stop solution for all farming needs
        </p>
      </div>
    </div>
  );
};

export default HeroSection;