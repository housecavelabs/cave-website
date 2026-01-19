import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background 404 */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] font-black text-white/5 select-none pointer-events-none z-0 tracking-tighter">
        404
      </h1>

      {/* Content */}
      <div className="relative z-10 text-center space-y-6 md:space-y-8">
        <h2 className="text-3xl md:text-5xl font-medium text-white drop-shadow-[0_0_25px_rgba(235,203,75,0.6)] tracking-tight">
          You've wandered off the path.
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-medium max-w-md mx-auto">
          This page doesn't exist or it was never meant to be found.
        </p>

        <Link href="/">
          <button className="bg-[#fbcc16] text-black text-sm md:text-base font-bold py-3 px-10 rounded-[4px] hover:bg-[#d4b132] transition-colors cursor-pointer shadow-[0_0_20px_rgba(251,204,22,0.15)]">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
