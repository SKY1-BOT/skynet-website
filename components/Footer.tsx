import React from 'react';
import { LogoIcon, TwitterIcon, FacebookIcon, InstagramIcon, LinkedInIcon } from '../constants';

const Footer: React.FC = () => {
  const footerLinks = {
    Services: ['Air Freight', 'Sea Freight', 'Road Transport', 'Customs Clearance'],
    Solutions: ['Ecommerce Support', 'Supply Chain', 'Order Tracking', 'Global Network'],
    Industries: ['Manufacturing', 'Retail', 'Agriculture', 'Technology'],
    Resources: ['Track Shipment', 'Get Quote', 'Documentation', 'Support'],
    Company: ['About Skynet', 'Careers', 'Contact Us', 'Locations'],
  };
  
  const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, href: '#' },
    { name: 'Instagram', icon: InstagramIcon, href: '#' },
    { name: 'Twitter', icon: TwitterIcon, href: '#' },
    { name: 'LinkedIn', icon: LinkedInIcon, href: '#' },
  ];

  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <p className="text-slate-500 text-base">
              Skynet Worldwide Express Uganda Ltd - Your trusted logistics partner connecting Uganda to 209+ countries through comprehensive air freight, sea freight, road transport, and customs clearance services.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-slate-400 hover:text-slate-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 xl:mt-0 xl:col-span-2">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-slate-500 tracking-wider uppercase">{title}</h3>
                <ul className="mt-4 space-y-4">
                  {links.map(item => <li key={item}><a href="#" className="text-base text-slate-500 hover:text-slate-900">{item}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-base text-slate-400 text-center">&copy; {new Date().getFullYear()} Skynet Worldwide Express Uganda Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;