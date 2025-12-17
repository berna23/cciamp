import React from 'react';
import { BookOpen, Activity, Wind, Brain, Plus } from 'lucide-react';
import { SERVICES, FOUR_FACTORS_DIAGRAM_IMAGE, FOUR_FACTORS_DIAGRAM_PLACEHOLDER } from '../constants';
import { motion } from 'framer-motion';

const iconMap = {
  'book': BookOpen,
  'activity': Activity,
  'wind': Wind,
  'brain': Brain
};

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-32 bg-gradient-gold-warm relative overflow-hidden">
      {/* Background Elements - Warm Gold Blend */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-100/20 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3 mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-200/30 blur-[150px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3 mix-blend-multiply"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
           <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4">Metodologia Exclusiva</span>
           <h2 className="font-serif text-4xl md:text-5xl text-primary-900 mb-6">O Modelo dos 4 Fatores</h2>
           <p className="text-primary-500 font-light leading-relaxed">
             Uma intervenção integrada que une todas as dimensões do ser humano para potenciar o equilíbrio e a performance.
           </p>
        </div>

        {/* 4 FACTORS DIAGRAM - IMAGE INTEGRATION */}
        <div className="mb-24 relative flex justify-center">
           {/* Architectural lines behind image */}
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
              <div className="w-[1px] h-full bg-primary-900"></div>
              <div className="h-[1px] w-full bg-primary-900 absolute"></div>
           </div>

           {/* The Image Container with Warm Glow (No Green) */}
           <div className="relative z-10 p-8">
              <div className="absolute inset-0 bg-radial-gradient from-gold-100/40 to-transparent blur-3xl rounded-full"></div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative bg-white/60 backdrop-blur-md p-6 border border-white/50 shadow-glow"
              >
                 {/* Placeholder for the user's image */}
                 <img 
                    src={FOUR_FACTORS_DIAGRAM_IMAGE} 
                    alt="Modelo 4 Fatores CCIAPM" 
                    className="max-w-[300px] md:max-w-[500px] h-auto object-contain mx-auto mix-blend-multiply"
                    onError={(e) => {
                        e.currentTarget.onerror = null; 
                        e.currentTarget.src = FOUR_FACTORS_DIAGRAM_PLACEHOLDER;
                    }}
                 />
              </motion.div>
           </div>
        </div>

        {/* Detailed List Grid - Sharp Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-primary-200 bg-white/80 backdrop-blur-sm">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border-r border-b border-primary-200 p-10 hover:bg-gold-50/30 transition-colors duration-500 min-h-[450px] flex flex-col justify-between"
              >
                <div>
                    <div className="flex justify-between items-start mb-8">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-primary-400 border border-primary-200 px-2 py-1 group-hover:border-accent group-hover:text-accent transition-colors">
                          {service.factor}
                        </span>
                        <Icon size={24} strokeWidth={1} className="text-primary-300 group-hover:text-accent transition-colors" />
                    </div>
                    
                    <h4 className="font-serif text-2xl text-primary-900 mb-8 min-h-[64px]">{service.title}</h4>
                    
                    <ul className="space-y-4">
                    {service.items.slice(0, 5).map((item, i) => (
                        <li key={i} className="text-xs text-primary-500 font-medium uppercase tracking-wide flex gap-3 items-start group-hover:text-primary-900 transition-colors">
                           <Plus size={10} className="mt-0.5 text-accent shrink-0" />
                           {item}
                        </li>
                    ))}
                    </ul>
                </div>

                <div className="pt-8 mt-auto">
                   {/* Gradient Line: Gold to Transparent */}
                   <div className="w-8 h-[1px] bg-primary-300 group-hover:w-full group-hover:bg-accent transition-all duration-700 ease-out"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;