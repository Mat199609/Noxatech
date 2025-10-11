
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/noxatech_logo_transparent.png';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import SuccessCases from './components/SuccessCases';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <Router>
      <div className="nexatech-app">
        <header className="main-header">
          <div className="container">
            <div className="header-content">
              <div className="logo-area">
                <Link to="/" className="logo">
                  <img src={logo} alt="Noxatech" className="logo-image" />
                </Link>
              </div>
              <nav className="main-nav">
                <Link to="/servicios">Servicios</Link>
                <Link to="/casos">Casos de Éxito</Link>
                <Link to="/equipo">Equipo</Link>
                <Link to="/contacto">Contacto</Link>
              </nav>
            </div>
          </div>
        </header>
        <main className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero onCtaClick={() => window.location.href = '/contacto'} />
                  <FeaturesSection />
                  <ServicesSection />
                  <SuccessCases />
                  <TeamSection />
                  <ContactSection />
                </>
              } />
              <Route path="/servicios" element={<ServicesSection />} />
              <Route path="/casos" element={<SuccessCases />} />
              <Route path="/equipo" element={<TeamSection />} />
              <Route path="/contacto" element={<ContactSection />} />
            </Routes>
          </div>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
