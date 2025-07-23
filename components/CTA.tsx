
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-brand-red to-red-500 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to Connect Uganda to the World?
              </h2>
              <p className="mt-4 text-lg text-red-100">
                Experience Skynet's comprehensive logistics solutions. From air freight to customs clearance - we handle it all across 209+ countries.
              </p>
              <form className="mt-8 sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 placeholder-slate-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 rounded-md outline-none"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-brand-red bg-white hover:bg-red-50"
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-12 lg:mt-0 relative h-64 lg:h-auto">
              <img
                className="absolute -bottom-8 -right-12 lg:-right-24 w-[32rem] max-w-none bg-transparent no-bg"
                src="/assets/most-sustainable-delivery-company-for-1200x487 (1).png"
                alt="Skynet sustainable logistics and delivery solutions"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
