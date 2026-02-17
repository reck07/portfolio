import { missionStatement } from "./projectsData.js";

function About() {
  return (
    <section id="about" className="section">
      <div className="about-content">
        <h2>About Me</h2>
        <p className="about-lead">
          Software Developer with strong foundations in Python, JavaScript, SQL, and Data Automation.
        </p>
        <p className="about-subtitle">
          I have hands-on experience in:
        </p>
        <ul className="about-list">
            <li>Full Stack Development</li>
            <li>ML-based Recommendation Systems</li>
            <li>Backend Logic Development</li>
            <li>Data Analysis & Automation</li>
        </ul>
        <p className="about-body">
          I have a proven ability to build scalable applications, optimize workflows, and work with real-world datasets. I am currently seeking developer or data-focused roles in product-driven teams where I can deliver immediate impact.
        </p>
        <div className="mission-card">
          <h3>Mission</h3>
          <p>{missionStatement}</p>
        </div>
        <div className="about-cta">
          <a href="https://drive.google.com/uc?export=download&id=1eCqX4Bx3bc7I_i-p8DeR5s5cY9k6itWA" className="btn-ghost">Download Resume</a>
        </div>
      </div>
    </section>
  );
}
export default About;
