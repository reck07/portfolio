import { useState } from 'react';
import { projects } from './projectsData.js';

function Projects({ activeFilter = 'All', onFilterChange = () => {} }) {
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const categories = ['All', 'Frontend', 'AI/ML', 'Data Eng', 'Web App'];
  const filter = categories.includes(activeFilter) ? activeFilter : 'All';

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((project) => project.category === filter);
  const visibleExpandedProjectId = filteredProjects.some((project) => project.id === expandedProjectId)
    ? expandedProjectId
    : null;
  const useFiveCardLayout = filter === 'All' && filteredProjects.length === 5;

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <p className="section-intro">
        Curated work samples (5 projects) with case-study context: problem, action, and measurable result.
      </p>

      <div className="filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => onFilterChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={`grid projects-grid ${useFiveCardLayout ? 'projects-grid-five' : ''}`}>
        {filteredProjects.map((project) => (
          <div className={`card project-card ${project.featured ? 'featured-card' : ''}`} key={project.id}>
            <div className="card-header">
              <h4>{project.title}</h4>
              {project.featured && <span className="featured-badge">Featured</span>}
            </div>
            <p className="project-role"><strong>Role:</strong> {project.role}</p>

            <p className="project-meta problem-text">
              <strong>Problem:</strong> {project.why}
            </p>

            <div className="project-details">
              <p className="project-meta">
                <strong>Solution:</strong> {project.how}
              </p>
              <p className="project-meta impact-text">
                <strong>Impact:</strong> {project.impact}
              </p>
              <p className="project-metric">
                <strong>Evidence:</strong> {project.metric}
              </p>
              <button
                className="case-toggle"
                onClick={() =>
                  setExpandedProjectId((prev) => (prev === project.id ? null : project.id))
                }
                aria-expanded={visibleExpandedProjectId === project.id}
                aria-controls={`case-study-${project.id}`}
              >
                {visibleExpandedProjectId === project.id ? 'Hide Case Study' : 'Show Case Study'}
              </button>
              <div
                id={`case-study-${project.id}`}
                className={`case-study ${visibleExpandedProjectId === project.id ? 'open' : ''}`}
              >
                <p><strong>Situation:</strong> {project.why}</p>
                <p><strong>Task:</strong> Deliver a reliable, outcome-focused solution as {project.role}.</p>
                <p><strong>Action:</strong> {project.how}</p>
                <p><strong>Result:</strong> {project.impact}</p>
              </div>

              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-links">
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live-link"
                >
                  <span className="live-dot"></span>
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  GitHub Link
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
