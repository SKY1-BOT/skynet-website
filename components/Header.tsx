import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon, SearchIcon } from '../constants';
import SkynetLogo from '../skynet logo/logo-skynet.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };
  
  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '/services',
      services: [
        { name: 'Domestic Courier Services', path: '/services/domestic-courier' },
        { name: 'International Express Shipping', path: '/services/international-express' },
        { name: 'E-commerce Delivery Services', path: '/services/e-commerce-delivery' },
        { name: 'Last-Mile Delivery Solutions', path: '/services/last-mile-delivery' },
        { name: 'Import & Export Handling', path: '/services/import-export' },
        { name: 'Customs Clearance Services', path: '/services/customs-clearance' },
        { name: 'Logistics & Freight Forwarding (Air & Sea)', path: '/services/freight-forwarding' },
        { name: 'Warehousing & Fulfillment', path: '/services/warehousing-fulfillment' },
        { name: 'Reverse Logistics (Returns)', path: '/services/reverse-logistics' },
      ]
    },
    { name: 'Tracking', path: '/tracking' },
    { name: 'Global Network', path: '/global-network' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = isScrolled
    ? 'bg-white/70 backdrop-blur-md shadow-lg'
    : 'bg-slate-50/60 backdrop-blur-xl';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${headerClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 interactive-hover">
              <img
                src={SkynetLogo}
                alt="Skynet Express Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.services && setIsServicesMenuOpen(true)}
                  onMouseLeave={() => link.services && setIsServicesMenuOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`text-slate-600 hover:text-brand-red transition-all duration-300 relative group py-2 flex items-center ${
                      location.pathname.includes(link.path) ? 'text-brand-red' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.name}
                    {link.services && (
                      <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServicesMenuOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    )}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-red transition-all duration-300 ${
                      location.pathname.includes(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                  {link.services && isServicesMenuOpen && (
                    <div className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 transform-gpu opacity-100 scale-100 z-50">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {link.services.map((service) => (
                           <Link
                            key={service.name}
                            to="/services"
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-brand-red"
                            role="menuitem"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch(searchQuery);
                  }
                }}
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-brand-red hover:bg-slate-100 focus:outline-none transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <MenuIcon className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                <XIcon className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/70 backdrop-blur-md border-t border-slate-200">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-brand-red hover:bg-red-50 transition-all duration-300 ${
                location.pathname === link.path ? 'text-brand-red bg-red-50' : ''
              }`}
              style={{
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100px)',
                opacity: isMenuOpen ? 1 : 0,
                transitionDelay: `${index * 0.1}s`
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(searchQuery);
                }
              }}
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
          </div>
        </div>
        <div className="pt-4 pb-3 border-t border-slate-200 bg-white/70 backdrop-blur-md">
          <div className="px-5 space-y-3">
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;