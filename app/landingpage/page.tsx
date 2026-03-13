import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen">
      <header className="">
        <nav className="fixed top-0 bg-black left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
          <div className="flex items-center gap-12">
            <Link href="/" className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/cave-logo.png"
                alt="Cave Logo"
                fill
                className="object-contain invert brightness-0"
                priority
              />
            </Link>
          </div>
          <div>
            <ul className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide uppercase">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#EFC738] transition-colors"
                >
                  Who we are
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#EFC738] transition-colors"
                >
                  The arms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#EFC738] transition-colors"
                >
                  What we do
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#EFC738] transition-colors"
                >
                  Our approach
                </Link>
              </li>
              <li className="flex items-center gap-1.5 cursor-pointer group hover:text-[#EFC738] transition-colors leading-none">
                <span className="translate-y-[1px]">Work with us</span>
                <FaChevronDown className="text-[10px] group-hover:rotate-180 transition-transform duration-300" />
              </li>
            </ul>
          </div>

          <button className="hidden md:block cursor-pointer bg-[#F1D15A] hover:bg-[#EFC738] text-black px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,199,56,0.3)]">
            Start a Conversation
          </button>
        </nav>
      </header>
      <section className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-black text-white px-4 md:px-12 lg:px-20 max-w-[1600px] mx-auto pt-24 pb-12">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold leading-[1.1] mb-8 tracking-tight">
            A growth partner for <br className="hidden md:block" />
            <span className="text-[#EFC738]">cultural</span> and{" "}
            <br className="hidden md:block" />
            <span className="text-[#EFC738]">impact-driven</span>{" "}
            <br className="hidden md:block" />
            organisations
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-md mb-12 font-medium">
            We help ventures scale, reach new audiences, and build lasting
            influence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-20 lg:mb-0">
            <button className="bg-[#F1D15A] hover:bg-[#EFC738] text-black px-8 py-3.5 rounded-lg font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,199,56,0.3)] cursor-pointer">
              Start a Conversation
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-lg font-bold transition-all duration-300 cursor-pointer">
              Learn more
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 relative h-[450px] md:h-[600px] lg:h-[800px] w-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl">
          {/* Image */}
          <Image
            src="/hands.png"
            alt="Hands"
            fill
            className="object-cover"
            priority
          />

          {/* Yellow Overlay - Sophisticated Blend */}
          <div
            className="
              absolute inset-0
              bg-linear-to-b from-black/40 via-transparent to-[#D0BD21]/50
              mix-blend-multiply
              pointer-events-none
            "
          />
          <div
            className="
              absolute inset-0
              bg-radial-[at_50%_100%] from-[#D0BD21]/20 to-transparent
              mix-blend-overlay
              pointer-events-none
            "
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
