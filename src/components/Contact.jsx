import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_ol36q86';
    const templateID = 'template_rmcsv8l';
    const publicKey = 'l1WiowePZ9dD5HWcN';

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
    <div className="nexatech-contact-page">
      <h2>Contacto</h2>
      {sent ? (
        <p className="contact-success">¡Gracias por contactarnos! Te responderemos pronto.</p>
      ) : (
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nombre de la empresa o Usuario" required />
          <input type="email" name="email" placeholder="Correo electrónico" required />
          <input type="text" name="title" placeholder="Asunto" required />
          <textarea name="message" placeholder="Mensaje" required />
          <button type="submit">Enviar</button>
        </form>
      )}
      <p className="contact-email">O escríbenos a: <a href="mailto:info@noxatech.io">info@noxatech.io</a></p>
    </div>
  );
};

export default Contact;
