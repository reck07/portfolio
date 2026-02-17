import { testimonials } from './projectsData.js';

function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <h2>Testimonials</h2>
      <div className="grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card testimonial-card">
            <p className="testimonial-quote">"{testimonial.text}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Testimonials;
