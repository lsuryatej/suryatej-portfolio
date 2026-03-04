import Nav from "@/components/nav";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Footer />
      </main>
    </>
  );
}
