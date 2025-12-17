import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROFESSIONALS } from '../constants';
import { motion } from 'framer-motion';

const ProfessionalsCarousel: React.FC = () => {
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
    <section id="profissionais" className="py-32 bg-white overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 mb-20 flex justify-between items-end">
          <div>
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">Especialistas</span>
            <h2 className="font-serif text-4xl text-slate-900 mt-4">Corpo Clínico</h2>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-gray-200"></div>
      </div>

      <div ref={carouselRef} className="pl-6 md:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] overflow-hidden cursor-grab active:cursor-grabbing pb-12">
        <motion.div 
          ref={innerCarouselRef}
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-6 w-fit pr-12"
        >
          {PROFESSIONALS.map((prof) => (
            <motion.div 
              key={prof.id}
              className="relative w-[300px] shrink-0 group"
            >
              <div className="bg-white h-full border border-gray-200 hover:border-gray-900 transition-colors duration-500">
                {/* Image Container */}
                <div className="h-[380px] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                   <img 
                    src={prof.image} 
                    alt={prof.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-accent text-[9px] font-bold uppercase tracking-[0.2em] mb-3">
                    {prof.role}
                  </p>
                  <h3 className="font-serif text-xl text-slate-900 mb-2">{prof.name}</h3>
                  <Link 
                    to={`/professional/${prof.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mt-4 group-hover:text-slate-900 transition-colors"
                  >
                    Ver Perfil <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalsCarousel;