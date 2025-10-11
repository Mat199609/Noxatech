import React from 'react';

const clients = [
  { logo: 'https://dummyimage.com/80x40/5f6fff/fff&text=Empresa+1', name: 'Empresa 1', testimonial: 'Con Nexatech mejoramos la calidad y velocidad de nuestros lanzamientos.' },
  { logo: 'https://dummyimage.com/80x40/a259e6/fff&text=Empresa+2', name: 'Empresa 2', testimonial: 'Automatización confiable y soporte profesional.' },
  { logo: 'https://dummyimage.com/80x40/23243a/fff&text=Empresa+3', name: 'Empresa 3', testimonial: 'Resultados medibles y excelente acompañamiento.' }
];

const SuccessCases = () => (
  <section className="success-section">
    <h2>Casos de Éxito</h2>
    <div className="clients-logos">
      {clients.map((c, i) => (
        <div className="client-logo" key={i}>
          <img src={c.logo} alt={c.name} />
        </div>
      ))}
    </div>
    <div className="testimonials">
      {clients.map((c, i) => (
        <div className="testimonial" key={i}>
          <p>"{c.testimonial}"</p>
          <span>- {c.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default SuccessCases;
