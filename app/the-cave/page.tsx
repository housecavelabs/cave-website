import Image from "next/image";
import React from "react";
import { Poppins, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const TheCave = () => {
  return (
    <section className="bg-[#0A0A0A] max-w-7xl mt-20 text-white py-24 relative overflow-hidden">
      <div className="w-full h-[80vh] relative">
        <Image
          src="/the-cave-hero.jpg"
          alt="The Cave Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="inset-0 absolute bg-[#0A0A0A]/80" />
        <div className="absolute w-full px-4 md:w-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="font-black mb-6 whitespace-nowrap">
            <span className={`text-2xl md:text-5xl ${poppins.className}`}>
              WELCOME TO
            </span>{" "}
            <span
              className={`text-[#EBCB4B] italic text-4xl md:text-7xl ${inter.className}`}
            >
              Caveverse
            </span>
          </h1>
          <div
            className={`flex flex-col md:flex-row w-full gap-4 md:gap-3 items-center ${poppins.className}`}
          >
            <p className="text-xs md:text-sm tracking-wide leading-relaxed text-center md:text-left max-w-md mx-auto md:mx-0">
              A training ground, a culture, a community to the impact driven,
              the visionaries, and the change architects. This is home for those
              who are not here to merely exist, but to shape the world.
            </p>
            <h2 className="text-2xl md:text-4xl uppercase whitespace-nowrap font-bold">
              Home of the 1%
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-black space-y-12 text-white py-7">
        <div className="px-8">
          <h2
            className={`uppercase text-3xl md:text-5xl font-bold ${poppins.className}`}
          >
            We saw the crack
          </h2>

          <div className="px-16 space-y-5 mt-10 tracking-wide leading-relaxed text-center md:text-left max-w-2xl">
            <p>
              Modern life pulled three things apart that were never meant to be
              separate:{" "}
              <span className="text-[#EBCB4B]">Identity, Skill, Impact</span>
            </p>
            <p>
              People consume. They save threads. They bookmark videos. They plan
              endlessly. They start and abandon. They feel busy but hollow.
            </p>
            <p>It is a design failure.</p>
            <p className="text-[#EBCB4B]">
              The Cave simply exists to repair that fracture.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="px-8">
            <h2
              className={`uppercase text-3xl md:text-5xl font-bold ${poppins.className}`}
            >
              We felt the pressure
            </h2>

            <div className="px-16 space-y-5 mt-10 tracking-wide leading-relaxed text-center md:text-left max-w-2xl">
              <p>
                We live in a time of unlimited information and expected
                confusion. You can learn anything yet most people don't know
                what to build.
              </p>
              <p>
                You can see thousands of role models yet few show the middle:
                the uncertainty, the discipline, the silent repetition. You can
                join endless communities yet still feel completely alone in
                execution.
              </p>

              <p className="text-[#EBCB4B]">
                The Cave exists because something broke.
              </p>
            </div>
          </div>
        </div>
        <div className="px-8">
          <h2
            className={`uppercase text-3xl md:text-5xl font-bold ${poppins.className}`}
          >
            We heard the noise
          </h2>

          <div className="px-16 space-y-5 mt-10 tracking-wide leading-relaxed text-center md:text-left max-w-2xl">
            <p>
              We are told visibility equals value.{" "}
              <span className="block">
                Post more. Speak more. Brand louder. Launch early.
              </span>
            </p>
            <p>But exposure without branding breaks people.</p>
            <p>It is a design failure.</p>
            <p className="">
              The Cave does not reward noise.{" "}
              <span className="text-[#EBCB4B]">
                It rewards depth coupled with ruthless execution.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheCave;
