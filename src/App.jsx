import { useEffect, useState } from "react";
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
  const [projectFilter, setProjectFilter] = useState("All");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("#hero, .section"));
    elements.forEach((el) => el.classList.add("reveal-section"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <MouseGlow />
      <ParticleBackground />
      <Navbar
        theme={theme}
        onThemeToggle={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      />
      <Socials />
      <main>
        <Hero onTagSelect={setProjectFilter} />
        <Stats />
        <About />
        <Services />
        <Experience />
        <Projects activeFilter={projectFilter} onFilterChange={setProjectFilter} />
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
