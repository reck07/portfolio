import Socials from "./Socials";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Location</h3>
          <p>Mumbai, Maharashtra, India</p>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <a href="tel:+919035711448">+91 9035711448</a>
          <a href="mailto:abdulhaseebsagri@gmail.com">abdulhaseebsagri@gmail.com</a>
        </div>
        <div className="footer-column">
          <h3>Follow Me</h3>
          <Socials className="social-links-inline" />
        </div>
      </div>
      <div className="footer-copyright">
        <p>(c) 2026 MD Abdul Haseeb Sagri. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
