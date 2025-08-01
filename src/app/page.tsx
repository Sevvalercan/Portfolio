import SectionDivider from "@/components/ui/SectionDivider";
import About from "@/components/sections/About";
import Intro from "@/components/sections/Intro";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <div className="relative">
        <Experience />
      </div>
      <Contact />
    </main>
  );
}
