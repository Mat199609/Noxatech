import { motion } from 'framer-motion';
import { FaCode, FaBug, FaRocket, FaLightbulb } from 'react-icons/fa';

const features = [
  {
    icon: <FaCode />,
    title: "Expertise Técnico",
    description: "Expertos en las últimas tecnologías de automatización y testing."
  },
  {
    icon: <FaBug />,
    title: "Detección Temprana",
    description: "Identificación proactiva de problemas antes de producción."
  },
  {
    icon: <FaRocket />,
    title: "Entrega Ágil",
    description: "Optimización de procesos de QA para entregas más rápidas."
  },
  {
    icon: <FaLightbulb />,
    title: "Innovación Constante",
    description: "Implementación de soluciones modernas y eficientes."
  }
];

const FeaturesSection = () => (
  <section className="features-section">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      ¿Por qué elegirnos?
    </motion.h2>
    <div className="features-grid">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="feature-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="feature-icon">
            {feature.icon}
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;