import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const { scrollYProgress } = useScroll();
  
  // Convert standard scroll progress at the very bottom to a color transition
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.9, 1],
    ['#ded3ce', '#4B5D44']
  );
  
  const color = useTransform(
    scrollYProgress,
    [0.9, 1],
    ['#1C1C1E', '#ded3ce']
  );

  return (
    <motion.footer 
      className="site-footer"
      style={{ backgroundColor, color }}
    >
      <div className="footer-content">
        <h2 className="footer-logo">Antigravity PCs</h2>
        <div className="footer-links">
          <a href="#">Configure</a>
          <a href="#">Support</a>
          <a href="#">About</a>
        </div>
        <div className="footer-legal">
          &copy; {new Date().getFullYear()} Antigravity Systems. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
