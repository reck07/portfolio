import { useEffect, useState } from 'react';

const roles = ['Python Developer', 'AI Enthusiast', 'Problem Solver', 'System Thinker'];
const tags = [
  { label: 'Python', filter: 'AI/ML', className: 'icon-1' },
  { label: 'React', filter: 'Frontend', className: 'icon-2' },
  { label: 'ML', filter: 'AI/ML', className: 'icon-3' },
  { label: 'SQL', filter: 'Data Eng', className: 'icon-4' },
  { label: 'Node.js', filter: 'Web App', className: 'icon-5' },
  { label: 'AWS', filter: 'Data Eng', className: 'icon-6' },
  { label: 'Docker', filter: 'Data Eng', className: 'icon-7' },
];

function Hero({ onTagSelect }) {
  const [index, setIndex] = useState(0);

  const handleTagClick = (filter) => {
    if (onTagSelect) {
      onTagSelect(filter);
    }
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-badge">Available for new projects</div>
        <h1 className="hero-title">MD Abdul Haseeb Sagri</h1>
        <h2 className="hero-role">
          {roles[index]}
        </h2>
        <p className="hero-summary">
          I engineer production-ready, scalable systems and intelligent ML models that deliver measurable business impact.
        </p>
        <div className="btn-group">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="https://drive.google.com/uc?export=download&id=1eCqX4Bx3bc7I_i-p8DeR5s5cY9k6itWA" className="btn-secondary">Download Resume</a>
        </div>
      </div>
      
      <div className="hero-image-container">
        <img src="/1764517391554.jpg" alt="Abdul Haseeb" className="profile-img" />
        {tags.map((tag) => (
          <button
            key={tag.label}
            type="button"
            className={`floating-icon floating-tag-btn ${tag.className}`}
            onClick={() => handleTagClick(tag.filter)}
            title={`Filter projects by ${tag.filter}`}
          >
            {tag.label}
          </button>
        ))}
      </div>
    </section>
  );
}
export default Hero;
