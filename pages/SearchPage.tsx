import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const SearchPage: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';

  const [searchResults, setSearchResults] = useState<{ title: string; description: string; category: string; link: string; }[]>([]);

  const allSearchableContent = [
    {
      title: 'Domestic Courier Services',
      description: 'Fast and reliable parcel delivery within the country.',
      category: 'Services',
      link: '/services/domestic-courier',
    },
    {
      title: 'International Express Shipping',
      description: 'Global shipping solutions for urgent and time-sensitive deliveries.',
      category: 'Services',
      link: '/services/international-express',
    },
    {
      title: 'E-commerce Delivery Services',
      description: 'Tailored logistics for online businesses, including last-mile delivery and returns.',
      category: 'Services',
      link: '/services/e-commerce-delivery',
    },
    {
      title: 'Last-Mile Delivery Solutions',
      description: 'Efficient and quick delivery from the final distribution center to the customer\'s doorstep.',
      category: 'Services',
      link: '/services/last-mile-delivery',
    },
    {
      title: 'Import & Export Handling',
      description: 'Comprehensive services for smooth international trade, including documentation and customs.',
      category: 'Services',
      link: '/services/import-export',
    },
    {
      title: 'Customs Clearance Services',
      description: 'Expert handling of customs procedures to ensure compliant and fast clearance.',
      category: 'Services',
      link: '/services/customs-clearance',
    },
    {
      title: 'Logistics & Freight Forwarding (Air & Sea)',
      description: 'Integrated logistics for heavy and bulk cargo via air and sea freight.',
      category: 'Services',
      link: '/services/freight-forwarding',
    },
    {
      title: 'Warehousing & Fulfillment',
      description: 'Secure storage and efficient order fulfillment services for businesses.',
      category: 'Services',
      link: '/services/warehousing-fulfillment',
    },
    {
      title: 'Reverse Logistics (Returns)',
      description: 'Streamlined process for managing product returns and exchanges.',
      category: 'Services',
      link: '/services/reverse-logistics',
    },
    {
      title: 'About Us',
      description: 'Learn more about our company\'s mission, vision, and values.',
      category: 'Company',
      link: '/about-us',
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our team for inquiries, support, or quotes.',
      category: 'Company',
      link: '/contact',
    },
    {
      title: 'Tracking',
      description: 'Track your shipments in real-time.',
      category: 'Services',
      link: '/tracking',
    }
  ];

  useEffect(() => {
    if (query) {
      const filteredResults = allSearchableContent.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      {query ? (
        <>
          <p className="text-xl mb-4">Showing results for: "<span className="text-brand-red font-semibold">{query}</span>"</p>
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((result, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-2"><Link to={result.link} className="text-brand-red hover:underline">{result.title}</Link></h2>
                  <p className="text-slate-700">{result.description}</p>
                  <p className="text-sm text-slate-500 mt-2">Category: {result.category}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xl text-slate-600">No results found for "<span className="text-brand-red font-semibold">{query}</span>". Please try a different query.</p>
          )}
        </>
      ) : (
        <p className="text-xl text-slate-600">Please enter a search query in the header search bar.</p>
      )}
    </div>
  );
};

export default SearchPage; 