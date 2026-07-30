import Navbar from "./Components/layout/Navbar";
import Hero from "./Components/sections/Hero";
import About from "./Components/sections/About";
import Experience from "./Components/sections/Experience";
import Projects from "./Components/sections/Projects";
import Skills from "./Components/sections/Skills";
import Contact from "./Components/sections/Contact";
import Footer from "./Components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}