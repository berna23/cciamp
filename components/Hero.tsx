import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HERO_BACKGROUND_IMAGE } from '../constants';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden">
      {/* Background - Warm Pearl */}
      <div className="absolute inset-0 bg-[#FFFCF9] z-0"></div>
      <div className="absolute inset-0 z-0 bg-noise opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 h-full flex-grow flex items-center relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 w-full items-center">
          
          {/* Typography / Left */}
          <div className="lg:col-span-5 relative z-10 flex flex-col gap-10">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-accent"></div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                    Clínica & Investigação
                  </span>
                </div>

                <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl text-primary-900 leading-[1.1] mb-8">
                  Equilíbrio <br />
                  <span className="italic font-light text-primary-600 relative">
                    Integrado.
                    <span className="absolute -bottom-2 left-0 w-1/3 h-[2px] bg-accent/30"></span>
                  </span>
                </h1>

                <p className="text-sm md:text-base text-primary-500 font-light leading-relaxed max-w-md border-l border-primary-200 pl-6">
                  Abordagem CCIAPM de 4 Fatores. Um modelo multidisciplinar de excelência que une Psicoafetivo, Sensorial, Físico e Intelectual.
                </p>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4, duration: 0.8 }}
               className="flex flex-col sm:flex-row gap-4"
             >
               <button 
                 onClick={() => navigate('/agendar')}
                 className="btn-primary px-8 py-4 min-w-[180px]"
               >
                 Agendar
               </button>
               <button 
                 onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                 className="btn-outline px-8 py-4 flex items-center justify-center gap-3 group bg-white/50 backdrop-blur-sm"
               >
                 Explorar Modelo
                 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-accent" />
               </button>
             </motion.div>
          </div>

          {/* Architectural Image / Right */}
          <div className="lg:col-span-7 h-[60vh] lg:h-[80vh] relative hidden lg:block">
             <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="absolute inset-0 bg-primary-100 overflow-hidden"
             >
                <img 
                  src={HERO_BACKGROUND_IMAGE} 
                  alt="Architecture" 
                  className="w-full h-full object-cover grayscale-[10%] contrast-[1.02] sepia-[10%]"
                />
                
                {/* Subtle Gold Blend Overlay - No Green */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/10 via-transparent to-gold-500/10 mix-blend-overlay"></div>

                {/* Floating "Card" */}
                <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur p-12 max-w-sm border-t border-r border-primary-100 border-l-4 border-l-accent">
                   <p className="font-serif text-2xl mb-2 text-primary-900">4 Fatores</p>
                   <p className="text-xs text-primary-500 font-light leading-relaxed uppercase tracking-wider">
                     Modelo Multidisciplinar <br/> Exclusivo CCIAPM
                   </p>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;