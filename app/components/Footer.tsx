import Image from "next/image";
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#EFC738] text-white px-[80px] z-50 py-16">
      <div className="flex gap-8">
        <div className="w-18 h-18">
          <Image
            src="/cave-logo.png"
            alt="The Cave Logo"
            width={100}
            height={100}
          />
        </div>

        <div className="flex justify-around w-full gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Explore</h3>
            <ul className="flex text-sm  flex-col gap-2">
              <li>
                <Link className="hover:text-[#EFC738]" href="/the-cave">
                  The Cave
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#EFC738]" href="/pathway">
                  The Path
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#EFC738]" href="/school">
                  The Schools
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#EFC738]" href="/infrastructure">
                  The Infrastructure
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#EFC738]" href="/archive">
                  The Archive
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Resources</h3>
            <ul className="flex text-sm  flex-col gap-2">
              <li>
                <Link className="hover:text-[#EFC738]" href="/cave-posts">
                  Cave Posts
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#EFC738]" href="/proofs">
                  Proofs
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#EFC738]" href="/cave-labs">
                  Cave Labs
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#EFC738]" href="/cave-press">
                  Cave Press
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#EFC738]" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Connect</h3>
            <ul className="flex text-sm  flex-col gap-2">
              <li>
                <Link
                  href="https://www.instagram.com/thecaveofficial/"
                  className="group flex items-center gap-2 transition-all duration-300"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded transition-all duration-300 group-hover:bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)]">
                    <FaInstagramSquare
                      size={20}
                      className="transition-colors duration-300 group-hover:text-white"
                    />
                  </span>

                  <span className="group-hover:text-[#d62976] transition-colors duration-300">
                    Instagram
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  className="hover:text-red-500"
                  href="https://www.youtube.com/@thecaveofficial"
                >
                  <span className="flex items-center gap-2">
                    <span className="hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out">
                      <FaYoutube size={20} />
                    </span>
                    <span>YouTube</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
