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
            Merhaba! Ben <strong>Şevval Ercan</strong>, bilgisayar mühendisiyim.
            Özellikle kullanıcı deneyimi odaklı ve görsel olarak zengin web
            arayüzleri geliştirmeye ilgi duyuyorum.
            <br />
            <br />
            React ve Next.js ile dinamik ve performanslı uygulamalar
            geliştiriyorum. Tailwind CSS ve Framer Motion gibi modern araçlarla
            sade ama etkili tasarımlar oluşturuyorum.
            <br />
            <br />
            Ekip içinde üretken çalışmayı ve sürekli öğrenmeyi ön planda
            tutuyorum. Projelerde sadece kod değil, aynı zamanda fikir üretme,
            çözüm geliştirme ve kullanıcıyı anlama aşamalarında da aktif rol
            almayı seviyorum.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
