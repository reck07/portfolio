import Socials from "./Socials";
import { useState } from "react";

function Contact() {
    const [copied, setCopied] = useState(false);
    return (
      <section id="contact" className="section cta-section">
        <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Let’s Build Something Meaningful.</h2>
        <p style={{marginBottom: '2rem', color: 'var(--text-secondary)', fontSize: '1.1rem'}}>
          Open for Full Stack and AI/ML opportunities.
        </p>
        <div className="contact-container">
          <a href="mailto:abdulhaseebsagri@gmail.com" className="btn-primary" style={{textDecoration: 'none', display: 'inline-block', marginBottom: '2rem', fontSize: '1.1rem'}}>
            Email Me
          </a>
          <div style={{display: 'flex', justifyContent: 'center'}}>
             <Socials className="social-links-inline" />
          </div>
          <div className="copy-email-wrapper">
            <p
              className="copy-email-text"
              onDoubleClick={() => {
                navigator.clipboard.writeText('abdulhaseebsagri@gmail.com');
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              title="Double-click to copy email"
            >
              abdulhaseebsagri@gmail.com
            </p>
            <div className={`copy-tooltip ${copied ? 'visible' : ''}`}>Copied!</div>
          </div>
        </div>
      </section>
    );
  }

  export default Contact;
