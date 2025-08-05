"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.2 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const { ref: sectionRef } = useSectionInView("About");

  return (
    <section
      ref={sectionRef}
      id="about"
      className="scroll-mt-28 mb-28 px-4 text-white"
    >
      <SectionHeading>Hakkımda</SectionHeading>

      <motion.div
        ref={cardRef}
        style={{ scale, opacity }}
        className="group relative max-w-[42rem] mx-auto rounded-lg border border-purple-500/10 bg-white/5 p-10 sm:p-12 transition duration-300 overflow-hidden"
      >
        {/* Mor ışık efekti */}
        <div
          className="absolute -z-10 blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"
          style={{
            top: "-20%",
            left: "50%",
            width: "150%",
            height: "150%",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(circle at center, rgba(168,85,247,0.6) 0%, transparent 70%)",
          }}
        />

        <motion.div
          className="text-center"
          whileHover={{
            scale: 1.03,
          }}
          transition={{ type: "spring", stiffness: 20, damping: 20 }}
        >
        <p className="text-lg leading-relaxed text-gray-300">
  Hello! I'm <strong>Şevval Ercan</strong>, a Computer Engineering graduate from Fırat University.
  <br />
  <br />
  During and after my studies, I completed software internships at various companies where I gained hands-on experience developing applications using both .NET/C# and Java technologies.
  <br />
  <br />
  I am currently working at Tostbang Technology as a <strong>Jr. Front‑End Developer & UI/UX Designer</strong>. I build user-focused interfaces using modern technologies such as React, Next.js, TypeScript, and Tailwind CSS.
  <br />
  <br />
  I enjoy creating solutions that add value both technically and visually, with a strong emphasis on user experience. I’m a detail-oriented developer who thrives in collaborative environments and is always eager to learn.
</p>

        </motion.div>
      </motion.div>
    </section>
  );
}
