import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import Services from '../components/Services';
import GlobalReach from '../components/GlobalReach';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import { FeaturesTicker } from '../components/FeaturesTicker';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      {/* Partner Logos Section */}
      <motion.div
        className="py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg leading-6 font-semibold text-gray-900 uppercase tracking-wider mb-8">Our Valued Clients</h2>
          <div className="flex flex-nowrap overflow-x-auto justify-center items-center space-x-8">
            <div className="flex justify-center items-center">
              <img src="/partners/IMG_1675.JPG" alt="Partner Logo 1" className="max-h-20 max-w-full object-contain" />
            </div>
            <div className="flex justify-center items-center">
              <img src="/partners/IMG_1676.PNG" alt="Partner Logo 2" className="max-h-20 max-w-full object-contain" />
            </div>
            <div className="flex justify-center items-center">
              <img src="/partners/IMG_1677.PNG" alt="Partner Logo 3" className="max-h-20 max-w-full object-contain" />
            </div>
            <div className="flex justify-center items-center">
              <img src="/partners/IMG_1678.JPG" alt="Partner Logo 4" className="max-h-20 max-w-full object-contain" />
            </div>
            <div className="flex justify-center items-center">
              <img src="/partners/IMG_1679.JPG" alt="Partner Logo 5" className="max-h-20 max-w-full object-contain" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
        <WhyUs />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
        <FeaturesTicker />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
        <Services />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
        <GlobalReach />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
        <Testimonial />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
        <CTA />
      </motion.div>
    </>
  );
};

export default HomePage;