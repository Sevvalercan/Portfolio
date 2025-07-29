"use client";

import React, { useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const containerRef = useRef<HTMLUListElement>(null);

  // Scroll animasyonları: container içine göre
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // scale ve opacity scroll durumuna göre
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 px-4"
    >
      <SectionHeading>My skills</SectionHeading>
      <motion.ul
        ref={containerRef}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className="flex flex-wrap justify-center gap-4 text-lg text-gray-800 dark:text-gray-200"
      >
        {skillsData.map((skill, index) => (
          <motion.li
            key={skill}
            className="
              bg-white border border-black rounded-xl px-6 py-3 cursor-default
              dark:bg-white/10 dark:border-white/20 dark:text-white/90
              shadow-sm
              transition
              hover:scale-110 hover:shadow-lg hover:z-10 hover:border-purple-500 hover:bg-purple-600 hover:text-white
              hover:dark:bg-purple-700 hover:dark:border-purple-400
            "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
