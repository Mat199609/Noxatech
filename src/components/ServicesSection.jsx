import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLaptopCode, FaMobileAlt, FaNetworkWired, FaChalkboardTeacher } from 'react-icons/fa';

const services = [
  {
  icon: <FaLaptopCode size={32} color="#5F6FFF" />,
    title: 'Automatización Web y Móvil',
    desc: 'Pruebas automatizadas para aplicaciones web y móviles.'
  },
  {
  icon: <FaNetworkWired size={32} color="#6B3DD6" />,
    title: 'Pruebas de API',
    desc: 'Automatización y validación de APIs REST y SOAP.'
  },
  {
  icon: <FaLaptopCode size={32} color="#5F6FFF" />,
    title: 'Integración Continua (CI/CD)',
    desc: 'Implementación de pipelines de testing en tus flujos DevOps.'
  },
  {
  icon: <FaChalkboardTeacher size={32} color="#6B3DD6" />,
    title: 'Consultoría y Capacitación',
    desc: 'Formación y acompañamiento en QA Automation.'
  }
];

const ServiceCard = ({ service, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="service-card"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.2,
            ease: [0.6, -0.05, 0.01, 0.99]
          }
        }
      }}
    >
      <div className="service-content">
        <motion.div
          className="service-icon"
          animate="idle"
          whileHover="hover"
          variants={{
            idle: { scale: 1, rotate: 0 },
            hover: { scale: 1.1, rotate: 360 }
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut"
          }}
        >
          {service.icon}
        </motion.div>
        <motion.h3
          variants={{
            idle: { y: 0 },
            hover: { y: -5 }
          }}
          transition={{ duration: 0.3 }}
        >
          {service.title}
        </motion.h3>
        <motion.p
          variants={{
            idle: { opacity: 0.9 },
            hover: { opacity: 1 }
          }}
          transition={{ duration: 0.3 }}
        >
          {service.desc}
        </motion.p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => (
  <section className="services-section">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Nuestros Servicios
    </motion.h2>
    <div className="services-grid">
      {services.map((service, i) => (
        <ServiceCard key={i} service={service} index={i} />
      ))}
    </div>
  </section>
);

export default ServicesSection;
