import React, { useState, useEffect } from 'react';
import { DoubleQuotesIcon, ChevronLeftIcon, ChevronRightIcon } from '../constants';

const testimonials = [
  {
    quote: "Skynet Worldwide Express has transformed our international shipping from Uganda. Their air freight services are incredibly reliable, and customs clearance is handled seamlessly. We've expanded to 15 new markets thanks to their expertise.",
    name: "James Mukasa",
    title: "Export Manager, Uganda Coffee Traders",
    image: "/assets/IMG_1601.JPG"
  },
  {
    quote: "The multimodal transportation solutions from Skynet are exactly what our manufacturing business needed. From sea freight for bulk materials to road transport for local distribution - they handle everything with precision.",
    name: "Priya Sharma",
    title: "Logistics Director, East Africa Manufacturing",
    image: "/assets/IMG_1602.JPG"
  },
  {
    quote: "Their ecommerce solutions have been a game-changer for our online business. Real-time tracking, efficient last-mile delivery, and excellent customer support across 209+ countries. Highly recommended!",
    name: "David Okello",
    title: "CEO, Digital Commerce Uganda",
    image: "/assets/IMG_1603.JPG"
  }
];


const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 7000); // Change testimonial every 7 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="relative lg:col-span-7">
            <div>
              <p className="text-brand-red font-semibold">Client Stories</p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                What Our Clients Say About Us
              </h2>
            </div>
            <div className="mt-8 relative overflow-hidden h-64 sm:h-56">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`} aria-hidden={index !== currentIndex}>
                    <DoubleQuotesIcon className="h-16 w-16 text-brand-red/20" />
                    <blockquote className="mt-6 text-slate-600">
                        <p className="text-xl font-medium">
                        "{testimonial.quote}"
                        </p>
                    </blockquote>
                    <footer className="mt-6">
                        <p className="text-base font-semibold text-slate-900">{testimonial.name}</p>
                        <p className="text-base text-slate-500">{testimonial.title}</p>
                    </footer>
                </div>
              ))}
            </div>
             <div className="mt-8 flex items-center justify-between">
                <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                        <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-brand-red' : 'bg-slate-300 hover:bg-slate-400'}`} aria-label={`Go to testimonial ${index + 1}`}></button>
                    ))}
                </div>
                <div className="flex space-x-4">
                    <button onClick={prevTestimonial} aria-label="Previous testimonial" className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors">
                        <ChevronLeftIcon className="h-5 w-5" />
                    </button>
                    <button onClick={nextTestimonial} aria-label="Next testimonial" className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors">
                        <ChevronRightIcon className="h-5 w-5" />
                    </button>
                </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <div className="relative">
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-xl">
                 {testimonials.map((testimonial, index) => (
                    <img
                      key={index}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                      src={testimonial.image}
                      alt={`Client: ${testimonial.name}`}
                      aria-hidden={index !== currentIndex}
                    />
                  ))}
              </div>
               <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-red rounded-full -z-10"></div>
               <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-200 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;