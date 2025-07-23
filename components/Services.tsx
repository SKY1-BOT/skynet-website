import React, { useState } from 'react';

const GlobeBackground: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className={`absolute top-0 right-0 h-full w-auto text-slate-800 transform translate-x-1/4 animate-spin-slow ${className}`}>
    <defs>
      <radialGradient id="serviceGlobeGradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.5"/>
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.2"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="50" fill="url(#serviceGlobeGradient)" />
    <path d="M 50 0 A 50 50 0 0 1 50 100" stroke="currentColor" strokeWidth="0.01" fill="none" />
    <path d="M 0 50 A 50 50 0 0 1 100 50" stroke="currentColor" strokeWidth="0.01" fill="none" />
    {[...Array(10)].map((_, i) => (
      <path key={`lat-${i}`} d={`M ${10 + i*8} 0 A 40 40 0 0 1 ${10 + i*8} 100`} stroke="currentColor" strokeWidth="0.005" fill="none" />
    ))}
    {[...Array(5)].map((_, i) => (
      <circle key={`lon-${i}`} cx="50" cy="50" r={10 + i * 8} stroke="currentColor" strokeWidth="0.005" fill="none" />
    ))}
  </svg>
);

const Services: React.FC = () => {
    return (
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            {/* Animated Globe Background */}
            <GlobeBackground />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-50"></div>
            {/* Animated Travel Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              <path d="M10 50 Q 50 20, 90 50" stroke="white" strokeWidth="0.5" fill="none" className="animated-path" style={{ animationDelay: '0s' }} />
              <path d="M90 10 Q 50 40, 10 90" stroke="white" strokeWidth="0.5" fill="none" className="animated-path" style={{ animationDelay: '1s' }} />
              <path d="M20 80 Q 60 90, 80 20" stroke="white" strokeWidth="0.5" fill="none" className="animated-path" style={{ animationDelay: '2s' }} />
            </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">
            Streamline Your Logistics with Our Expert Services
          </h2>
          <p className="text-xl text-slate-600 text-center max-w-4xl mx-auto mb-16">
            From express deliveries to complex freight forwarding, we provide reliable, efficient, and tailored solutions to meet your unique business needs. Experience seamless operations and unparalleled support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service 1: Domestic Courier Services */}
            <div
              className="relative bg-slate-50 rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url('/assets/vlcsnap-2024-10-19-02h49m23s720-1536x864.png')`,
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
              <h3 className="relative z-10 text-2xl font-bold text-white mb-4">Domestic Courier Services</h3>
              <p className="relative z-10 text-white mb-6">
                Reliable and efficient same-day and next-day delivery services across Uganda.
              </p>
              <ul className="relative z-10 list-disc list-inside text-white mb-6">
                <li>Same-day & Next-day delivery</li>
                <li>Nationwide coverage</li>
                <li>Secure handling</li>
              </ul>
              <button
                className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md group"
                onClick={() => alert('Talk to 24/7 live agent')}
              >
                Learn More
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Talk to 24/7 live agent
                </span>
              </button>
            </div>

            {/* Service 2: International Express Shipping */}
            <div className="relative rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden text-white">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/loved images/IMG_1664.JPG")' }}></div>
              <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay for readability */}
              <h3 className="relative z-10 text-2xl font-bold mb-4">International Express Shipping</h3>
              <p className="relative z-10 mb-6">
                Fast and secure international shipping to over 200 destinations worldwide.
              </p>
              <ul className="relative z-10 list-disc list-inside mb-6">
                <li>Global reach</li>
                <li>Door-to-door service</li>
                <li>Real-time tracking</li>
              </ul>
              <button
                className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md group"
                onClick={() => alert('Talk to 24/7 live agent')}
              >
                Get a Quote
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Talk to 24/7 live agent
                </span>
              </button>
            </div>

            {/* Service 3: E-commerce Delivery Services */}
            <div
              className="relative bg-slate-50 rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url('/assets/close-up-delivery-person-with-parcels.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
              <h3 className="relative z-10 text-2xl font-bold text-white mb-4">E-commerce Delivery Services</h3>
              <p className="relative z-10 text-white mb-6">
                Tailored delivery solutions for your e-commerce business, ensuring customer satisfaction.
              </p>
              <ul className="relative z-10 list-disc list-inside text-white mb-6">
                <li>Last-mile delivery</li>
                <li>Cash on delivery options</li>
                <li>Integrated solutions</li>
              </ul>
              <button
                className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md group"
                onClick={() => alert('Talk to 24/7 live agent')}
              >
                Partner with Us
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Talk to 24/7 live agent
                </span>
              </button>
            </div>

            {/* Service 4: Last-Mile Delivery Solutions */}
            <div
              className="relative bg-slate-50 rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url('/assets/Logistics Transport Freight Shipping Cargo Import Export Customs_.jpeg')`,
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
              <h3 className="relative z-10 text-2xl font-bold text-white mb-4">Last-Mile Delivery Solutions</h3>
              <p className="relative z-10 text-white mb-6">
                Efficient and timely delivery from your hub to the customer's doorstep.
              </p>
              <ul className="relative z-10 list-disc list-inside text-white mb-6">
                <li>Optimized routes</li>
                <li>Real-time updates</li>
                <li>Customer satisfaction focus</li>
              </ul>
              <button
                className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md group"
                onClick={() => alert('Talk to 24/7 live agent')}
              >
                Discover More
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Talk to 24/7 live agent
                </span>
              </button>
            </div>

            {/* Service 5: Import & Export Handling */}
            <div
              className="relative bg-slate-50 rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url('/assets/car-2-1200x654.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
              <h3 className="relative z-10 text-2xl font-bold text-white mb-4">Import & Export Handling</h3>
              <p className="relative z-10 text-white mb-6">
                Seamless handling of your import and export documentation and processes.
              </p>
              <ul className="relative z-10 list-disc list-inside text-white mb-6">
                <li>Documentation assistance</li>
                <li>Regulatory compliance</li>
                <li>Global trade expertise</li>
              </ul>
              <button
                className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md group"
                onClick={() => alert('Talk to 24/7 live agent')}
              >
                Get Started
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Talk to 24/7 live agent
                </span>
              </button>
            </div>

            {/* Service 6: Customs Clearance Services */}
            <div
              className="relative bg-slate-50 rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url('/assets/vlcsnap-2024-10-19-02h48m20s256-1536x864.png')`,
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
              <h3 className="relative z-10 text-2xl font-bold text-white mb-4">Customs Clearance Services</h3>
              <p className="relative z-10 text-white mb-6">
                Expedited customs clearance to ensure smooth and timely delivery of your goods.
              </p>
              <ul className="relative z-10 list-disc list-inside text-white mb-6">
                <li>Expert brokerage</li>
                <li>Duty and tax handling</li>
                <li>Compliance assurance</li>
              </ul>
              <button
                className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md group"
                onClick={() => alert('Talk to 24/7 live agent')}
              >
                Inquire Now
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Talk to 24/7 live agent
                </span>
              </button>
            </div>

            {/* Service 7: Logistics & Freight Forwarding (Air & Sea) */}
            <div
              className="relative bg-slate-50 rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url('/assets/IMG_1600.JPG')`,
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
              <h3 className="relative z-10 text-2xl font-bold text-white mb-4">Logistics & Freight Forwarding (Air & Sea)</h3>
              <p className="relative z-10 text-white mb-6">
                Comprehensive freight solutions for large and complex shipments via air and sea.
              </p>
              <ul className="relative z-10 list-disc list-inside text-white mb-6">
                <li>Air freight solutions</li>
                <li>Sea freight (FCL & LCL)</li>
                <li>Project cargo handling</li>
              </ul>
              <button
                className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md group"
                onClick={() => alert('Talk to 24/7 live agent')}
              >
                View Options
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Talk to 24/7 live agent
                </span>
              </button>
            </div>

            {/* Service 8: Warehousing & Fulfillment */}
            <div
              className="relative bg-slate-50 rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url('/assets/vlcsnap-2024-10-19-02h48m20s256-1536x864.png')`,
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
              <h3 className="relative z-10 text-2xl font-bold text-white mb-4">Warehousing & Fulfillment</h3>
              <p className="relative z-10 text-white mb-6">
                Secure and efficient warehousing and fulfillment services for your inventory.
              </p>
              <ul className="relative z-10 list-disc list-inside text-white mb-6">
                <li>Storage solutions</li>
                <li>Inventory management</li>
                <li>Pick & pack services</li>
              </ul>
              <button
                className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md group"
                onClick={() => alert('Talk to 24/7 live agent')}
              >
                Request Info
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Talk to 24/7 live agent
                </span>
              </button>
            </div>

            {/* Service 9: Reverse Logistics (Returns) */}
            <div
              className="relative bg-slate-50 rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url('/assets/close-up-delivery-person-with-parcels.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
              <h3 className="relative z-10 text-2xl font-bold text-white mb-4">Reverse Logistics (Returns)</h3>
              <p className="relative z-10 text-white mb-6">
                Streamlined returns management to optimize your supply chain.
              </p>
              <ul className="relative z-10 list-disc list-inside text-white mb-6">
                <li>Efficient returns processing</li>
                <li>Quality control</li>
                <li>Cost-effective solutions</li>
              </ul>
              <button
                className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md group"
                onClick={() => alert('Talk to 24/7 live agent')}
              >
                Learn More
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Talk to 24/7 live agent
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Services;