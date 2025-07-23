import React from 'react';
import WhyUs from '../components/WhyUs';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <div className="bg-brand-red-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About Skynet Express</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your trusted logistics partner connecting Uganda to the world
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  As a global courier and logistics service provider, Skynet Worldwide Express Uganda is committed to providing reliable, efficient, and timely shipping services to businesses and individuals across Uganda and worldwide.
                </p>
                <p>
                  This onboarding document outlines the key shipping-related policies and requirements for clients, agents, and internal staff. Skynet Uganda offers a comprehensive range of logistics and shipping solutions.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/assets/close-up-delivery-person-with-parcels.jpg"
                alt="Skynet Express Team"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-slate-50">
        <WhyUs />
      </div>
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-brand-red">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Reliability</h3>
              <p className="text-slate-600">
                We deliver on our promises, ensuring that your shipments reach their destination safely and on time, every time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-brand-red">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Integrity</h3>
              <p className="text-slate-600">
                We conduct our business with honesty, transparency, and ethical standards, building trust with our clients and partners.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-brand-red">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Innovation</h3>
              <p className="text-slate-600">
                We continuously seek new ways to improve our services, embracing technology and creative solutions to meet evolving needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-brand-red">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Excellence</h3>
              <p className="text-slate-600">
                We strive for excellence in everything we do, setting high standards and constantly working to exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <Testimonial />
      </div>
      
      <CTA />
    </>
  );
};

export default AboutUsPage;