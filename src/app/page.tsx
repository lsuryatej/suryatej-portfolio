import SideNav from "@/components/side-nav";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import TopNav from "@/components/nav";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="flex-1 md:ml-[200px]">
        <TopNav />
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Footer />
      </main>
    </div>
  );
}
