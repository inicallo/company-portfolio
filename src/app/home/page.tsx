"use client";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Link from "next/link";
import { getNextImageIndex, images } from "../../../constants/background";
import { Metadata } from "next";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        getNextImageIndex(prevIndex, images.length)
      );
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mt-5 flex items-center justify-center min-h-screen pt-16">
      <div className="relative h-screen w-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        {/* Shadow Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-50 md:bg-gradient-to-r md:from-slate-300 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute lg:mt-60 mt-16 text-center inset-0 flex flex-col justify-center items-center p-8 md:p-12 lg:p-20 lg:items-start lg:text-left lg:justify-center z-20">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 lg:mt-80">
          Capture Your Brand&apos;s <br />Story Globally
        </h1>
        <p className="text-[12px] md:text-lg lg:text-xl italic text-gray-950 mb-5 text-center lg:text-left">
          Get tailored photography and video services<br />
          anywhere in the world with our network of local experts,<br />
          ensuring top-quality visuals every time
        </p>
        <div className="flex flex-col items-center justify-end h-full w-full mb-20 lg:flex-row-reverse lg:mb-80">
          <Link href={"https://wa.me/+628111628881"} target="_blank">
            <Button type="button" title="Get In Touch" variant="btn_dark_red" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
