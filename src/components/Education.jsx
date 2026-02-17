import { education, certifications } from './projectsData.js';

function Education() {
  return (
    <section id="education" className="section">
      <h2>Education & Certifications</h2>
      <div className="grid">
        {education.map((edu, index) => (
          <div key={index} className="card">
            <h3 style={{color: 'var(--accent)'}}>{edu.degree}</h3>
            <p>{edu.school}</p>
            <p style={{color: 'var(--text-secondary)'}}>{edu.year}</p>
          </div>
        ))}
      </div>
      <div style={{marginTop: '3rem'}}>
        <h3>Certifications</h3>
        <div className="skills-list" style={{justifyContent: 'center', marginTop: '1rem'}}>
            {certifications.map(cert => (
                <span key={cert} className="skill-badge">{cert}</span>
            ))}
        </div>
      </div>
    </section>
  );
}
export default Education;