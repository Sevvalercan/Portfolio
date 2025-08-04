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
            Merhaba! Ben <strong>Şevval Ercan</strong>, Bilgisayar Mühendisliği
            lisans eğitimimi Fırat Üniversitesi'nde tamamladım.
            <br />
            <br />
            Mezuniyetim sırasında ve sonrasında çeşitli firmalarda yazılım stajı
            yaparak hem .NET/C# hem de Java teknolojileriyle kurumsal uygulamalar
            geliştirme deneyimi kazandım.
            <br />
            <br />
            Şu anda Tostbang Teknoloji'de <strong>Jr. Front‑End Developer & UI/UX Designer</strong> olarak çalışıyorum. React, Next.js, TypeScript ve Tailwind CSS gibi modern teknolojilerle kullanıcı odaklı arayüzler geliştiriyorum.
            <br />
            <br />
            Kullanıcı deneyimini ön planda tutarak hem teknik hem tasarımsal açıdan değer katan çözümler üretmeyi seviyorum. Takım çalışmasına yatkın, sürekli öğrenmeye açık ve detaylara önem veren bir geliştiriciyim.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
