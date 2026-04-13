import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ExplodedViewMode.css';

const ExplodedViewMode = () => {
  const { scrollYProgress } = useScroll();

  // GPU Animations
  const gpuX = useTransform(scrollYProgress, [0.1, 0.3], [-500, 0]);
  const gpuOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  
  // Cooler Animations
  const coolerX = useTransform(scrollYProgress, [0.35, 0.55], [500, 0]);
  const coolerOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);

  return (
    <section className="exploded-view-section">
      <div className="component-row">
        <motion.div 
          className="component-image-container"
          style={{ x: gpuX, opacity: gpuOpacity }}
        >
          <img src="/rtx_gpu.png" alt="RTX GPU" className="component-image" />
        </motion.div>
        <motion.div 
          className="component-text text-right"
          initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <h2>Graphics Processing Unit</h2>
          <div className="spec-line emphasis">NVIDIA RTX 4090</div>
          <p>Uncompromising rendering power. Hyper-realistic ray tracing.</p>
          <div className="leader-line line-right"></div>
        </motion.div>
      </div>

      <div className="component-row row-reverse">
        <motion.div 
          className="component-image-container"
          style={{ x: coolerX, opacity: coolerOpacity }}
        >
          <img src="/liquid_cooler.png" alt="Liquid Cooler" className="component-image" />
        </motion.div>
        <motion.div 
          className="component-text text-left"
          initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <h2>Thermal Management</h2>
          <div className="spec-line emphasis">360mm AIO Liquid Cooling</div>
          <p>Zero RPM fan modes. Silent operation. Wood-accented pump block.</p>
          <div className="leader-line line-left"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExplodedViewMode;
