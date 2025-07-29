"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] mx-auto px-4"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <Image
              src="/avatar.png"
              alt="Şevval Ercan"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.15,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Merhaba, ben Şevval Ercan.</span> <br />
        Bilgisayar mühendisi olarak{" "}
        <span className="font-bold">frontend ve backend</span> geliştirme
        yapıyorum.
        <br />
        <span className="italic">React (Next.js)</span> ile projeler
        geliştiriyorum.
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-8 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* Buton 1 */}
        <Link
          href="#contact"
          className="group flex items-center justify-center gap-3 h-14 min-w-[10rem] bg-purple-500 text-white px-8 rounded-full outline-none 
  focus:scale-110 hover:scale-110 hover:bg-purple-500 active:scale-105 transition text-base font-semibold shadow-md"
        >
          İletişime Geç{" "}
          <BsArrowRight className="opacity-100 text-base text-white group-hover:translate-x-2 transition-transform" />
        </Link>

        {/* Buton 2 */}
        <a
          href="/CV.pdf"
          download
          className="group flex items-center justify-center gap-3 h-14 min-w-[10rem] bg-gray-700 text-white px-8 rounded-full outline-none 
          focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-gray-600 text-base font-semibold shadow-md"
        >
          CV İndir{" "}
          <HiDownload className="opacity-100 text-base text-white group-hover:translate-y-2 transition-transform" />
        </a>

        {/* Sosyal Linkedin */}
        <a
          href="https://linkedin.com/in/sevvalercan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-5 h-14 w-14 text-white bg-purple-500 rounded-full 
          focus:scale-[1.2] hover:scale-[1.2] active:scale-110 transition cursor-pointer shadow-md"
        >
          <BsLinkedin className="text-2xl" />
        </a>

        {/* Sosyal Github */}
        <a
          href="https://github.com/sevvalercan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-5 h-14 w-14 text-white bg-gray-700 rounded-full 
          focus:scale-[1.2] hover:scale-[1.2] active:scale-110 transition cursor-pointer shadow-md"
        >
          <FaGithubSquare className="text-2xl" />
        </a>
      </motion.div>
    </section>
  );
}
