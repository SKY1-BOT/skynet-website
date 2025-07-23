import React from 'react';
import CTA from '../components/CTA';

const ServicesPage: React.FC = () => {
  return (
    <>
      <div className="bg-brand-red-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Services</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>
        </div>
      </div>
      
      {/* New Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <button className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md">
                Learn More
              </button>
            </div>

            {/* Service 2: International Express Shipping */}
            <div
              className="relative bg-slate-50 rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url('/assets/vlcsnap-2024-10-19-02h47m38s545-1536x864.png')`,
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
              <h3 className="relative z-10 text-2xl font-bold text-white mb-4">International Express Shipping</h3>
              <p className="relative z-10 text-white mb-6">
                Fast and secure international shipping to over 200 destinations worldwide.
              </p>
              <ul className="relative z-10 list-disc list-inside text-white mb-6">
                <li>Global reach</li>
                <li>Door-to-door service</li>
                <li>Real-time tracking</li>
              </ul>
              <button className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md">
                Get a Quote
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
              <button className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md">
                Partner with Us
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
              <button className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md">
                Discover More
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
              <button className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md">
                Get Started
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
              <button className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md">
                Inquire Now
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
              <button className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md">
                View Options
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
              <button className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md">
                Request Info
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
              <button className="relative z-10 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-brand-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Skynet?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            We combine cutting-edge technology with a dedicated team to deliver logistics solutions that are not just efficient, but also truly reliable and customer-centric.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/10 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">Global Network</h3>
              <p className="text-lg opacity-90">Reach over 200 countries with our extensive network.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">Advanced Tracking</h3>
              <p className="text-lg opacity-90">Real-time visibility for every shipment, every step of the way.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">Dedicated Support</h3>
              <p className="text-lg opacity-90">Our team is here 24/7 to assist you with any query.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Social Proof Section (Optional, can be added later) */}
      {/* <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-12">What Our Clients Say</h2>
          </div>
      </section> */}

      {/* Final CTA */}
      <CTA />
    </>
  );
};

export default ServicesPage;