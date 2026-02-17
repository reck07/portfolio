import { testimonials } from './projectsData.js';

function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <h2>Testimonials</h2>
      <div className="grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card" style={{textAlign: 'left', borderLeft: `4px solid var(--accent)`}}>
            <p style={{fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-primary)'}}>"{testimonial.text}"</p>
            <p style={{textAlign: 'right', fontWeight: 'bold', color: 'var(--text-secondary)'}}>- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Testimonials;