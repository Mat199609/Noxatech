import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = ({ onCtaClick }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section 
      ref={ref}
      style={{ y, opacity }}
      className="hero-section"
    >
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Noxatech
          <span className="gradient-text">QA Automation</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          Transformando la calidad del software a través de la automatización inteligente
        </motion.p>
        <motion.button
          className="cta-btn"
          onClick={onCtaClick}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Agenda una reunión
        </motion.button>
      </div>
      <div className="hero-background">
        <div className="hero-circles">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="circle"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                background: `var(--accent-${(i % 3) + 1})`
              }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
