"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ArchiveHero = ({ slides, interval = 5000 }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <section className="relative w-full h-[55vh] md:h-[90vh] overflow-hidden">
      {slides.map((slide: any, index: number) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={`${slide.name}`}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

          <div className="absolute bottom-10 left-6 right-6 md:left-auto md:right-20 md:bottom-20">
            <div className="bg-linear-to-r from-[#EBCB4B] to-[#FFFDF5] px-6 py-4 md:px-8 md:py-5 rounded-xl shadow-xl max-w-sm md:max-w-none">
              <h1 className="text-lg md:text-2xl font-black text-black uppercase">
                {slide.name}
              </h1>
              <p className="text-xs md:text-base font-semibold text-black/80">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_: any, i: number) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === activeIndex ? "bg-[#EBCB4B]" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ArchiveHero;
