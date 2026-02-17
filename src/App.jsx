import MouseGlow from "./components/MouseGlow";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import "./App.css";

function App() {
  return (
    <>
      <MouseGlow />
      <ParticleBackground />
      <Navbar />
      <Socials />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
