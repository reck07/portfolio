import { experience } from "./projectsData.js";

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="timeline">
        {experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="card" style={{textAlign: 'left'}}>
              <h3 style={{color: 'var(--accent)', fontSize: '1.2rem'}}>{exp.role}</h3>
              <h4 style={{fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem'}}>{exp.company}</h4>
              <p style={{fontSize: '0.8rem', marginBottom: '1rem', color: 'var(--highlight)', fontWeight: 'bold'}}>{exp.duration}</p>
              <p style={{fontSize: '0.9rem', lineHeight: '1.6'}}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;