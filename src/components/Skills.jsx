import { skills, coreStrengths } from './projectsData.js';

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Core Skills & Strengths</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="skill-category card">
            <h4 className="skill-category-title">
              {category.replace(/([A-Z/])/g, ' $1').trim()}
            </h4>
            <div className="skills-list">
              {skillList.map(skill => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="strengths-panel">
        <h3 className="strengths-title">Core Strengths</h3>
        <ul className="strengths-list">
          {coreStrengths.map((strength, i) => (
            <li key={i} className="skill-badge strength-badge">{strength}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Skills;
