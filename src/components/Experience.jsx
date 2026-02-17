import { experience } from "./projectsData.js";

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="timeline">
        {experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="card timeline-card">
              <h3 className="timeline-role">{exp.role}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <p className="timeline-duration">{exp.duration}</p>
              <p className="timeline-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
