import { useState } from 'react';
import { projects } from "./projectsData.js";

function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Frontend", "AI/ML", "Data Eng", "Web App"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      
      <div className="filter-tabs">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid">
        {filteredProjects.map((project) => (
          <div className={`card ${project.featured ? 'featured-card' : ''}`} key={project.id}>
            <div className="card-header">
              <h4>{project.title}</h4>
              {project.featured && <span className="featured-badge">Featured</span>}
            </div>

            <p style={{color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem'}}><strong>Problem:</strong> {project.why}</p>

            <div className="project-details">
              <p style={{marginBottom: '0.5rem', fontSize: '0.9rem'}}><strong>Solution:</strong> {project.how}</p>
              <p style={{marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--accent)'}}><strong>Impact:</strong> {project.impact}</p>
              
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>

            <div style={{marginTop: 'auto', display: 'flex', gap: '1rem', paddingTop: '1rem'}}>
              {project.link && project.link !== "#" && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span className="live-dot"></span>
                  Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-primary)', fontWeight: 'bold'}}>
                  GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
