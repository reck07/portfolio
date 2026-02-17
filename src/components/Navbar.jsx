function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" style={{ fontWeight: 'bold', fontSize: '1.2rem', textDecoration: 'none', color: 'var(--text-primary)' }}>
        Haseeb Sagri
      </a>
      <div>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
export default Navbar;