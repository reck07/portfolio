import { useState, useEffect } from 'react';

function Hero() {
  // Helper functions for randomizing animations
  const randomDelay = () => -(Math.random() * 6);
  const randomDuration = () => (Math.random() * 4) + 4;

  const roles = ["Python Developer", "AI Enthusiast", "Problem Solver", "System Thinker"];
  const [index, setIndex] = useState(0);

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
        <h1>MD Abdul Haseeb Sagri</h1>
        <h2 style={{fontSize: '2rem', color: 'var(--accent)', marginBottom: '1rem', fontWeight: 'bold', minHeight: '2.4rem'}}>
          {roles[index]}
        </h2>
        <p style={{maxWidth: '600px', margin: '0 0 2rem 0', color: 'var(--text-secondary)', fontSize: '1.1rem'}}>
          I engineer production-ready, scalable systems and intelligent ML models that deliver measurable business impact.
        </p>
        <div className="btn-group">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="https://drive.google.com/uc?export=download&id=1eCqX4Bx3bc7I_i-p8DeR5s5cY9k6itWA" className="btn-secondary">Download Resume</a>
        </div>
      </div>
      
      <div className="hero-image-container">
        <img src="/1764517391554.jpg" alt="Abdul Haseeb" className="profile-img" />
        <div className="floating-icon icon-1" style={{ animationDelay: `${randomDelay()}s`, animationDuration: `${randomDuration()}s` }}>Python</div>
        <div className="floating-icon icon-2" style={{ animationDelay: `${randomDelay()}s`, animationDuration: `${randomDuration()}s` }}>React</div>
        <div className="floating-icon icon-3" style={{ animationDelay: `${randomDelay()}s`, animationDuration: `${randomDuration()}s` }}>ML</div>
      </div>
    </section>
  );
}
export default Hero;