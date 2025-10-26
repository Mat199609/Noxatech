import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="nexatech-footer">
    <div className="footer-content">
      <div className="footer-links">
        <Link to="/servicios">Servicios</Link>
        <Link to="/casos">Casos de Éxito</Link>
        <Link to="/equipo">Equipo</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
      <div className="footer-social" aria-label="Redes sociales">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="social-icon" aria-hidden="true" />
          <span className="social-text">LinkedIn</span>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="social-icon" aria-hidden="true" />
          <span className="social-text">GitHub</span>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube className="social-icon" aria-hidden="true" />
          <span className="social-text">YouTube</span>
        </a>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Noxatech. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
