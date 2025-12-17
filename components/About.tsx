import React from 'react';
import { LOGO_WHITE_OUTLINE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="bg-white border-b border-gray-100">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2">
           
           {/* Left: Mission Statement */}
           <div className="p-12 lg:p-24 flex flex-col justify-center border-r border-gray-100">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-8">Nossa Missão</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-slate-900 leading-tight mb-8">
                Desenvolver o potencial humano através do equilíbrio.
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-6 text-lg">
                Na CCIAPM, acreditamos que o bem-estar nasce da harmonia entre todas as dimensões da vida. 
                A nossa abordagem clínica e científica responde às necessidades únicas de cada pessoa, apoiando a reconstrução da sua melhor versão.
              </p>
              <div className="flex gap-12 mt-8">
                 <div>
                    <span className="block font-serif text-4xl text-slate-900 mb-2">15+</span>
                    <span className="text-xs uppercase tracking-wider text-gray-400">Anos Experiência</span>
                 </div>
                 <div>
                    <span className="block font-serif text-4xl text-slate-900 mb-2">4</span>
                    <span className="text-xs uppercase tracking-wider text-gray-400">Dimensões</span>
                 </div>
              </div>
           </div>

           {/* Right: Values - Dark Block */}
           <div className="bg-slate-900 p-12 lg:p-24 flex flex-col justify-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                 <img src={LOGO_WHITE_OUTLINE} className="w-64 h-64" alt="CCIAPM Logo Outline" /> 
              </div>
              
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-8 relative z-10">Valores</span>
              
              <ul className="space-y-8 relative z-10">
                 {[
                    { title: 'Ética & Integridade', text: 'Transparência total em cada processo clínico.' },
                    { title: 'Inovação Científica', text: 'Práticas baseadas na evidência mais recente.' },
                    { title: 'Multidisciplinaridade', text: 'Visão 360º de diferentes especialidades.' },
                    { title: 'Excelência', text: 'Compromisso com o mais alto padrão de cuidado.' }
                 ].map((val, i) => (
                    <li key={i} className="group">
                       <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-accent transition-colors">{val.title}</h3>
                       <p className="text-gray-400 text-sm font-light">{val.text}</p>
                    </li>
                 ))}
              </ul>
           </div>

        </div>
      </div>
    </section>
  );
};

export default About;