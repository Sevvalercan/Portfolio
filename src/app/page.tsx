import SectionDivider from "@/components/ui/SectionDivider";
import About from "@/components/sections/About";
import Intro from "@/components/sections/Intro";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Page() {
  return (
     <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      
    </main>
  );
}
