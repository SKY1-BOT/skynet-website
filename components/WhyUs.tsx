import React from 'react';
import { DoubleQuotesIcon } from '../constants';

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Skynet Worldwide Express: Your Trusted <span className="text-brand-red">Logistics</span> Partner in Uganda and Beyond
            </h2>
            <p className="mt-6 text-lg text-slate-500">
              With comprehensive expertise in multimodal transportation, customs clearance, and ecommerce solutions, we connect Uganda to the world through reliable, efficient logistics services.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-2xl p-8 flex flex-col justify-between shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <DoubleQuotesIcon className="h-12 w-12 text-white/20" />
                <div>
                  <p className="text-6xl font-bold text-white">99%</p>
                  <p className="mt-2 text-slate-300">On-time delivery rate across our global network</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img src="/assets/IMG_1600.JPG" alt="Skynet logistics operations and warehouse facilities" className="h-full w-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">SK</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">Skynet Express</p>
                      <p className="text-xs text-slate-500">Active Shipments</p>
                    </div>
                  </div>
                  <p className="font-bold text-slate-800">24,750+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="border-t-2 border-brand-red pt-6">
              <p className="text-4xl font-bold text-brand-red">209+</p>
              <p className="mt-2 text-slate-500">Countries Connected</p>
            </div>
            <div className="border-t-2 border-brand-red pt-6">
              <p className="text-4xl font-bold text-brand-red">24/7</p>
              <p className="mt-2 text-slate-500">Customer Support</p>
            </div>
            <div className="border-t-2 border-brand-red pt-6">
              <p className="text-4xl font-bold text-brand-red">1M+</p>
              <p className="mt-2 text-slate-500">Shipments Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;