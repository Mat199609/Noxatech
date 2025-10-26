import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.EMAILJS_SERVICEID;
    const templateID = 'template_rmcsv8l';
    const publicKey = import.meta.env.EMAILJS_PUBLICKEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setSent(true);
      }, (error) => {
          console.log(error.text);
          alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <section className="contact-section">
      <h2>Contacto</h2>
      <p>Hablemos de cómo podemos ayudarte a escalar tu calidad de software.</p>
      {sent ? (
        <div className="contact-success">¡Gracias! Te contactaremos pronto.</div>
      ) : (
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nombre de la empresa o Usuario" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Mensaje" required />
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
