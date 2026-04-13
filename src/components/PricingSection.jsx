import React from 'react';
import { motion } from 'framer-motion';
import './PricingSection.css';

const tiers = [
  {
    name: "The Ascent",
    price: "$2,499",
    specs: "Core i7 / RTX 4070 / 32GB DDR5 / 1TB NVMe"
  },
  {
    name: "The Stratosphere",
    price: "$3,899",
    specs: "Core i9 / RTX 4080 / 64GB DDR5 / 2TB NVMe"
  },
  {
    name: "The Zenith",
    price: "$5,299",
    specs: "Ryzen 9 7950X3D / RTX 4090 / 64GB DDR5 / 4TB NVMe"
  }
];

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <motion.h2 
        className="pricing-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Choose Your Altitude.
      </motion.h2>

      <div className="pricing-list">
        {tiers.map((tier, index) => (
          <motion.div 
            className="pricing-item"
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="tier-info">
              <h3>{tier.name}</h3>
              <p className="emphasis">{tier.specs}</p>
            </div>
            <div className="tier-price">
              Starting at {tier.price}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
