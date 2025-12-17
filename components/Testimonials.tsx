import React, { useState, useRef, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerCarouselRef = useRef<HTMLDivElement>(null);

  const calculateWidth = () => {
    if (carouselRef.current && innerCarouselRef.current) {
      const scrollWidth = innerCarouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setWidth(Math.max(0, scrollWidth - offsetWidth));
    }
  };

  useEffect(() => {
    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    const timer = setTimeout(calculateWidth, 100);
    return () => {
      window.removeEventListener('resize', calculateWidth);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="testemunhos" className="py-32 bg-slate-900 text-white relative">
      <div className="container mx-auto px-6 md:px-12 mb-20 flex flex-col items-center text-center">
         <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4">Feedback</span>
         <h2 className="font-serif text-4xl text-white mb-6">A voz de quem confia</h2>
      </div>

      <div ref={carouselRef} className="pl-6 md:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div 
          ref={innerCarouselRef}
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-12 pb-12 w-fit pr-12"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="w-[350px] md:w-[450px] shrink-0 border-l border-gray-700 pl-8 py-4 group hover:border-accent transition-colors duration-500"
            >
              <Quote size={24} className="text-accent mb-6 opacity-50" />
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light font-serif italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-none overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;