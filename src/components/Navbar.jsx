import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="nexatech-navbar">
    <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Inicio</NavLink>
    <NavLink to="/servicios" className={({ isActive }) => isActive ? 'active' : ''}>Servicios</NavLink>
    <NavLink to="/nosotros" className={({ isActive }) => isActive ? 'active' : ''}>Nosotros</NavLink>
    <NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}>Contacto</NavLink>
  </nav>
);

export default Navbar;
