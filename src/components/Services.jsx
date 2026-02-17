function Services() {
  const services = [
    {
      title: "Full-Stack Development",
      description: "Building scalable, high-performance web applications using React, Node.js, and modern frameworks.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      )
    },
    {
      title: "AI & Machine Learning",
      description: "Developing intelligent models for prediction, classification, and data analysis using Python and Scikit-learn.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5v.01"></path><path d="M16 15.5v.01"></path><path d="M12 12v.01"></path><path d="M11 17v.01"></path><path d="M7 14v.01"></path></svg>
      )
    },
    {
      title: "IoT Solutions",
      description: "Designing automated systems with sensors, microcontrollers, and real-time monitoring dashboards.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"></path><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M12 2v6"></path><path d="M12 12v.01"></path></svg>
      )
    },
    {
      title: "Data Engineering",
      description: "Creating robust ETL pipelines and automation scripts for efficient data processing and transformation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
      )
    }
  ];

  return (
    <section id="services" className="section">
      <h2>What I Do</h2>
      <div className="grid">
        {services.map((service, index) => (
          <div key={index} className="card service-card">
            <div className="service-icon" style={{color: 'var(--accent)', marginBottom: '1rem'}}>{service.icon}</div>
            <h3 style={{fontSize: '1.25rem', marginBottom: '0.5rem'}}>{service.title}</h3>
            <p style={{color: 'var(--text-secondary)'}}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;