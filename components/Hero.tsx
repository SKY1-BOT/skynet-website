import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import { ArrowRightIcon, StarIcon } from '../constants';

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Animate to opacity 1
      transition={{ duration: 1 }} // Duration of the animation
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/loved images/IMG_1667.JPG"
          alt="Logistics professionals overseeing cargo shipment in a busy port"
          className="hero-image w-full h-full object-cover z-10"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 bg-black/50 z-20"></div>
    
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-brand-red/10 rounded-full float-animation"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-brand-red/5 rounded-lg float-animation-delay-1"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-brand-red/15 rounded-full float-animation-delay-2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-30">
        <div className="text-center">
          <div className="">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="text-gradient">Skynet Worldwide Express</span>
              <span className="block">Your Business in Motion</span>
            </h1>
            <p className="mt-3 text-base text-slate-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
              Comprehensive logistics and distribution solutions across 209+ countries. From Kampala to the world - we deliver air freight, sea freight, road transport, and customs clearance with unmatched reliability.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-red hover:bg-brand-red-dark md:py-4 md:text-lg md:px-10 interactive-hover button-pulse glow-on-hover transition-all duration-300"
                >
                  Request a Quote
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                 <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-red bg-brand-red-light hover:bg-red-200 md:py-4 md:text-lg md:px-10 interactive-hover transition-all duration-300"
                >
                  See How It Works
                </a>
              </div>
            </div>
             <div className="mt-4 lg:mt-6">
                <a href="#" className="text-sm font-semibold text-slate-300 hover:text-white group transition-all duration-300">
                    <span>Speak to an expert</span>
                    <ArrowRightIcon className="inline-block h-4 w-4 ml-1 transition-transform group-hover:translate-x-2" />
                </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;