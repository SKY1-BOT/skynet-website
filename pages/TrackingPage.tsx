import React, { useState } from 'react';
import CTA from '../components/CTA';

const TrackingPage: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setIsSubmitted(true);
    }
  };
  
  return (
    <>
      <div className="bg-brand-red-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Track Your Shipment</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Enter your tracking number to get real-time updates on your shipment
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="tracking-number" className="block text-lg font-medium text-slate-700 mb-2">
                  Tracking Number
                </label>
                <input
                  type="text"
                  id="tracking-number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter your tracking number"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all duration-300"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-brand-red text-white py-3 px-6 rounded-lg font-medium hover:bg-brand-red-dark transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-opacity-50"
              >
                Track Shipment
              </button>
            </form>
            
            {isSubmitted && (
              <div className="mt-8 p-6 border border-slate-200 rounded-lg bg-slate-50">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Tracking Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Tracking Number:</span>
                    <span className="font-medium text-slate-800">{trackingNumber}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Status:</span>
                    <span className="font-medium text-green-600">In Transit</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Origin:</span>
                    <span className="font-medium text-slate-800">Kampala, Uganda</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Destination:</span>
                    <span className="font-medium text-slate-800">Nairobi, Kenya</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-600">Estimated Delivery:</span>
                    <span className="font-medium text-slate-800">July 25, 2025</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-slate-800 mb-3">Shipment Progress</h4>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <div className="h-full w-0.5 bg-slate-200"></div>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Shipment Picked Up</p>
                        <p className="text-sm text-slate-500">July 20, 2025 - 09:30 AM</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <div className="h-full w-0.5 bg-slate-200"></div>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Departed Facility</p>
                        <p className="text-sm text-slate-500">July 20, 2025 - 11:45 AM</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <div className="h-full w-0.5 bg-slate-200"></div>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">In Transit</p>
                        <p className="text-sm text-slate-500">July 20, 2025 - 02:15 PM</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-4 h-4 bg-slate-300 rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-medium text-slate-400">Arrived at Destination</p>
                        <p className="text-sm text-slate-400">Pending</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Tracking FAQs</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Where can I find my tracking number?</h3>
                <p className="text-slate-600">Your tracking number is provided in your shipping confirmation email or on your receipt.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">How often is tracking information updated?</h3>
                <p className="text-slate-600">Tracking information is typically updated every 24 hours, but may vary depending on the shipping method.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">What if my tracking information isn't updating?</h3>
                <p className="text-slate-600">If your tracking information hasn't updated in 48 hours, please contact our customer service team for assistance.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Can I track multiple shipments at once?</h3>
                <p className="text-slate-600">Yes, you can track multiple shipments by entering each tracking number separately.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTA />
    </>
  );
};

export default TrackingPage;