
import React from 'react';
import { PlusIcon } from '../constants';

export const FeaturesTicker: React.FC = () => {
    const features = ["Air Freight", "Sea Freight", "Road Transport", "Customs Clearance", "209+ Countries", "Ecommerce Solutions", "24/7 Support", "Order Tracking"];
    const repeatedFeatures = [...features, ...features]; // Repeat for seamless loop

    return (
        <div className="relative w-full overflow-hidden bg-slate-900 text-white py-4">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 z-10"></div>
            <div className="flex animate-marquee whitespace-nowrap">
                {repeatedFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center mx-6">
                        <PlusIcon className="h-5 w-5 text-brand-red" />
                        <span className="ml-3 text-lg font-medium">{feature}</span>
                    </div>
                ))}
            </div>
            <style>
                {`
                    @keyframes marquee {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        animation: marquee 30s linear infinite;
                    }
                `}
            </style>
        </div>
    );
};
