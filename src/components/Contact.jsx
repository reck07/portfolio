import { useState } from "react";
import Socials from "./Socials";

function Contact() {
  const [copiedField, setCopiedField] = useState('');
  const email = "abdulhaseebsagri@gmail.com";
  const phone = "+91 9035711448";

  const copyValue = async (value, field) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(''), 2000);
    } catch {
      setCopiedField('');
    }
  };

  return (
    <section id="contact" className="section cta-section">
      <h2 className="contact-title">Let's Build Something Meaningful.</h2>
      <p className="contact-subtitle">
        Open for Full Stack and AI/ML opportunities.
      </p>
      <div className="contact-container">
        <a
          href={`mailto:${email}`}
          className="btn-primary contact-email-btn"
        >
          Email Me
        </a>
        <div className="contact-socials">
          <Socials className="social-links-inline" />
        </div>
        <div className="copy-actions">
          <div className="copy-email-wrapper">
            <p
              className="copy-email-text"
              onClick={() => copyValue(email, 'email')}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  copyValue(email, 'email');
                }
              }}
              title="Click to copy email"
              role="button"
              tabIndex={0}
            >
              {email}
            </p>
            <div className={`copy-tooltip ${copiedField === 'email' ? "visible" : ""}`}>Email copied!</div>
          </div>
          <div className="copy-email-wrapper">
            <p
              className="copy-email-text"
              onClick={() => copyValue(phone, 'phone')}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  copyValue(phone, 'phone');
                }
              }}
              title="Click to copy phone"
              role="button"
              tabIndex={0}
            >
              {phone}
            </p>
            <div className={`copy-tooltip ${copiedField === 'phone' ? "visible" : ""}`}>Phone copied!</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
