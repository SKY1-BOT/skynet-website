
import React from 'react';

const GlobeBackground: React.FC = () => (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="absolute top-0 right-0 h-full w-auto text-white/5 opacity-50 transform translate-x-1/4">
        <defs>
            <radialGradient id="globeGradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                <stop offset="0%" stopColor="white" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="50" fill="url(#globeGradient)" />
        <path d="M 50 0 A 50 50 0 0 1 50 100" stroke="currentColor" strokeWidth="0.2" fill="none" />
        <path d="M 0 50 A 50 50 0 0 1 100 50" stroke="currentColor" strokeWidth="0.2" fill="none" />
        {/* Simplified latitude/longitude lines */}
        {[...Array(10)].map((_, i) => (
            <path key={`lat-${i}`} d={`M ${10 + i*8} 0 A 40 40 0 0 1 ${10 + i*8} 100`} stroke="currentColor" strokeWidth="0.1" fill="none" />
        ))}
        {[...Array(5)].map((_, i) => (
            <circle key={`lon-${i}`} cx="50" cy="50" r={10 + i * 8} stroke="currentColor" strokeWidth="0.1" fill="none" />
        ))}
    </svg>
);


const GlobalReach: React.FC = () => {
    return (
        <section className="relative bg-brand-dark text-white py-24 sm:py-32 overflow-hidden">
            <GlobeBackground />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    <div className="max-w-2xl">
                        <p className="font-semibold text-brand-red">Skynet Worldwide Express Uganda</p>
                        <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
                            Global Reach, Local Precision
                        </h2>
                        <p className="mt-6 text-lg text-slate-300">
                            From our Kampala headquarters to 209+ countries worldwide, Skynet delivers comprehensive logistics solutions with multimodal transportation expertise across air, sea, and road networks.
                        </p>
                        <div className="mt-10">
                            <a
                                href="#"
                                className="px-8 py-3 bg-brand-red text-white rounded-lg shadow-md hover:bg-brand-red-dark transition-all duration-300 transform hover:scale-105"
                            >
                                Track Your Shipment
                            </a>
                        </div>
                        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
                            <div>
                                <p className="text-5xl font-bold text-white">209+</p>
                                <p className="mt-2 text-slate-400">Countries Served</p>
                            </div>
                            <div>
                                <p className="text-5xl font-bold text-white">24/7</p>
                                <p className="mt-2 text-slate-400">Customer Support</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0">
                        <div className="relative">
                            <img
                                src="/loved images/IMG_1664.JPG"
                                alt="Skynet global logistics network operations"
                                className="w-full h-auto rounded-2xl shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalReach;
