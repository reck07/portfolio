import { certifications, education, professionalDevelopment } from './projectsData.js';

function Education() {
  return (
    <section id="education" className="section">
      <h2>Education & Certifications</h2>
      <div className="grid">
        {education.map((edu, index) => (
          <div key={index} className="card education-card">
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-school">{edu.school}</p>
            <p className="education-year">{edu.year}</p>
          </div>
        ))}
      </div>
      <div className="certifications-panel">
        <h3 className="certifications-title">Certifications</h3>
        <div className="skills-list certifications-list">
            {certifications.map(cert => (
                <span key={cert} className="skill-badge">{cert}</span>
            ))}
        </div>
      </div>
      <div className="development-panel">
        <h3 className="development-title">Professional Development</h3>
        <ul className="development-list">
          {professionalDevelopment.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Education;
