import React from 'react';
import GlobalReach from '../components/GlobalReach';
import CTA from '../components/CTA';

const GlobalNetworkPage: React.FC = () => {
  return (
    <>
      <div className="bg-brand-red-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Global Network</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Connecting businesses across 209+ countries with reliable logistics solutions
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <GlobalReach />
      </div>
      
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Global Presence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              With offices and partners in strategic locations worldwide, we ensure seamless logistics operations across continents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 flex items-center justify-center overflow-hidden">
                <img 
                  src="/loved images/WhatsApp Image 2025-07-22 at 16.33.42.jpeg"
                  alt="Africa Globe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Africa</h3>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">Key Locations & Strategic Focus</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Kampala, Uganda (Headquarters)</li>
                  <li>• Nairobi, Kenya</li>
                  <li>• Lagos, Nigeria</li>
                  <li>• Johannesburg, South Africa (Hub)</li>
                  <li>• Cairo, Egypt</li>
                </ul>
                <p className="mt-4 text-slate-600">
                  Our extensive African network, anchored by our Johannesburg Hub, ensures seamless logistics solutions across major economic hubs and beyond, driving growth for local and international businesses.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 flex items-center justify-center overflow-hidden">
                <img 
                  src="/loved images/WhatsApp Image 2025-07-22 at 16.33.42.jpeg"
                  alt="Europe Globe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Europe</h3>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">Key Locations & Strategic Focus</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• London, United Kingdom</li>
                  <li>• Amsterdam, Netherlands (Hub)</li>
                  <li>• Frankfurt, Germany</li>
                  <li>• Paris, France</li>
                  <li>• Milan, Italy</li>
                </ul>
                <p className="mt-4 text-slate-600">
                  Our European network, with its primary hub in Amsterdam, connects Africa to key European markets, offering streamlined and efficient customs processes and timely deliveries for diverse industries.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 flex items-center justify-center overflow-hidden">
                <img 
                  src="/loved images/WhatsApp Image 2025-07-22 at 16.33.42.jpeg"
                  alt="Asia Globe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Asia</h3>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">Key Locations & Strategic Focus</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Dubai, UAE</li>
                  <li>• Singapore</li>
                  <li>• Hong Kong (Hub)</li>
                  <li>• Shanghai, China</li>
                  <li>• Mumbai, India</li>
                </ul>
                <p className="mt-4 text-slate-600">
                  Our robust Asian network, centered around our Hong Kong Hub, facilitates critical trade routes between Africa and the rapidly expanding Asian economies, supporting complex supply chains.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 flex items-center justify-center overflow-hidden">
                <img 
                  src="/loved images/WhatsApp Image 2025-07-22 at 16.33.42.jpeg"
                  alt="North America Globe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">North America</h3>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">Key Locations & Strategic Focus</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• New York, USA</li>
                  <li>• Chicago, USA</li>
                  <li>• Fort Lauderdale, Florida, USA (Hub)</li>
                  <li>• Toronto, Canada</li>
                  <li>• Mexico City, Mexico</li>
                </ul>
                <p className="mt-4 text-slate-600">
                  Our North American network, with a key hub in Florida, provides reliable and timely connections for businesses trading between Africa and the North American markets, enhancing global commerce.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 flex items-center justify-center overflow-hidden">
                <img 
                  src="/loved images/WhatsApp Image 2025-07-22 at 16.33.42.jpeg"
                  alt="South America Globe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">South America</h3>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">Key Locations & Strategic Focus</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• São Paulo, Brazil</li>
                  <li>• Buenos Aires, Argentina</li>
                  <li>• Santiago, Chile</li>
                  <li>• Bogotá, Colombia</li>
                  <li>• Lima, Peru</li>
                </ul>
                <p className="mt-4 text-slate-600">
                  Our South American network is dedicated to connecting African businesses with the vibrant and emerging markets across the continent, offering tailored logistics solutions for diverse industries.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 flex items-center justify-center overflow-hidden">
                <img 
                  src="/loved images/WhatsApp Image 2025-07-22 at 16.33.42.jpeg"
                  alt="Oceania Globe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Oceania</h3>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">Key Locations & Strategic Focus</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Sydney, Australia (Hub)</li>
                  <li>• Melbourne, Australia</li>
                  <li>• Auckland, New Zealand</li>
                  <li>• Brisbane, Australia</li>
                  <li>• Perth, Australia</li>
                </ul>
                <p className="mt-4 text-slate-600">
                  Our Oceania network, with a primary hub in Sydney, streamlines trade and logistics between Africa and Australia/New Zealand, ensuring efficient and timely deliveries for expanding businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTA />
    </>
  );
};

export default GlobalNetworkPage;