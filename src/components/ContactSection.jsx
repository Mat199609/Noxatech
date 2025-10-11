import React, { useState } from 'react';

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section className="contact-section">
      <h2>Contacto</h2>
      <p>Hablemos de cómo podemos ayudarte a escalar tu calidad de software.</p>
      {sent ? (
        <div className="contact-success">¡Gracias! Te contactaremos pronto.</div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Empresa" required />
          <textarea placeholder="Mensaje" required />
          <button type="submit">Enviar</button>
        </form>
      )}
      <div className="contact-info">
        <span>WhatsApp: <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">+57 300 123 4567</a></span>
  <span>Email: <a href="mailto:contacto@noxatech.com">contacto@noxatech.com</a></span>
        <span>Medellín, Colombia</span>
      </div>
    </section>
  );
};

export default ContactSection;
