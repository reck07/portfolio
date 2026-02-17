import { skills, coreStrengths } from './projectsData.js';

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Core Skills & Strengths</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="skill-category card" style={{textAlign: 'left'}}>
            <h4 style={{ textTransform: 'capitalize', borderLeft: `3px solid var(--accent)`, paddingLeft: '10px' }}>
              {category.replace(/([A-Z\/])/g, ' $1').trim()}
            </h4>
            <div className="skills-list">
              {skillList.map(skill => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '3rem', textAlign: 'left', background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '10px' }}>
        <h3 style={{textAlign: 'center'}}>Core Strengths</h3>
        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {coreStrengths.map((strength, i) => (
            <li key={i} className="skill-badge" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent)' }}>{strength}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Skills;