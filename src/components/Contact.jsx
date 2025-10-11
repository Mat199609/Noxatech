import React, { useState } from 'react';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="nexatech-contact-page">
      <h2>Contacto</h2>
      {sent ? (
        <p className="contact-success">¡Gracias por contactarnos! Te responderemos pronto.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Mensaje" required />
          <button type="submit">Enviar</button>
        </form>
      )}
  <p className="contact-email">O escríbenos a: <a href="mailto:contacto@noxatech.com">contacto@noxatech.com</a></p>
    </div>
  );
};

export default Contact;
