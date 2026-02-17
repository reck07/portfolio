import { useEffect, useState } from 'react';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function Navbar({ theme, onThemeToggle }) {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', ...navLinks.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-35% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="brand-group">
        <a href="#hero" className="brand-link">
          Haseeb Sagri
        </a>
        <span className="status-pill">Open to Work</span>
      </div>
      <div className="nav-links">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            onClick={() => setActiveSection(link.id)}
          >
            {link.label}
          </a>
        ))}
        <button type="button" className="theme-toggle" onClick={onThemeToggle}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
