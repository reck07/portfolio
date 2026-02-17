function About() {
  return (
    <section id="about" className="section">
      <div style={{textAlign: 'left'}}>
        <h2>About Me</h2>
        <p style={{marginBottom: '1rem'}}>
          Software Developer with strong foundations in Python, JavaScript, SQL, and Data Automation.
        </p>
        <p style={{marginBottom: '1rem'}}>
          I have hands-on experience in:
        </p>
        <ul style={{marginBottom: '1rem', paddingLeft: '1.5rem', color: 'var(--text-secondary)', listStyleType: 'disc'}}>
            <li style={{marginBottom: '0.5rem'}}>Full Stack Development</li>
            <li style={{marginBottom: '0.5rem'}}>ML-based Recommendation Systems</li>
            <li style={{marginBottom: '0.5rem'}}>Backend Logic Development</li>
            <li style={{marginBottom: '0.5rem'}}>Data Analysis & Automation</li>
        </ul>
        <p>
          I have a proven ability to build scalable applications, optimize workflows, and work with real-world datasets. I am currently seeking developer or data-focused roles in product-driven teams where I can deliver immediate impact.
        </p>
        <div style={{marginTop: '1.5rem'}}>
          <a href="https://drive.google.com/uc?export=download&id=1eCqX4Bx3bc7I_i-p8DeR5s5cY9k6itWA" style={{background: 'transparent', border: '1px solid var(--text-secondary)', color: 'var(--text-primary)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', textDecoration: 'none', display: 'inline-block'}}>Download Resume</a>
        </div>
      </div>
    </section>
  );
}
export default About;