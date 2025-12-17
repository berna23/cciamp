import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, GraduationCap, Briefcase, Award } from 'lucide-react';
import { PROFESSIONALS } from '../constants';

const ProfessionalDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const professional = PROFESSIONALS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!professional) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Profissional não encontrado</h2>
        <button 
          onClick={() => navigate('/')}
          className="text-primary-600 hover:underline flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Voltar à Homepage
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Voltar
        </Link>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-12 gap-0">
            {/* Sidebar / Image Area */}
            <div className="lg:col-span-5 relative">
              <div className="h-[400px] lg:h-full w-full relative">
                <img 
                  src={professional.image} 
                  alt={professional.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent lg:hidden"></div>
                <div className="absolute bottom-6 left-6 text-white lg:hidden">
                    <h1 className="text-3xl font-bold">{professional.name}</h1>
                    <p className="opacity-90">{professional.role}</p>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16">
              <div className="hidden lg:block mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{professional.name}</h1>
                <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-bold tracking-wide">
                        {professional.role}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 font-medium">{professional.specialty}</span>
                </div>
              </div>

              <div className="space-y-10">
                <section>
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="text-primary-500" size={24} />
                    Sobre
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg font-light">
                    {professional.fullBio}
                  </p>
                </section>

                <div className="grid md:grid-cols-2 gap-8">
                  <section>
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <GraduationCap className="text-blue-500" size={24} />
                      Formação
                    </h2>
                    <ul className="space-y-3">
                      {professional.education.map((edu, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2 shrink-0"></span>
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Briefcase className="text-teal-500" size={24} />
                      Experiência
                    </h2>
                    <ul className="space-y-3">
                      {professional.experience.map((exp, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2 shrink-0"></span>
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row gap-4">
                     <button 
                        onClick={() => navigate('/agendar')}
                        className="flex-1 bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-black transition-colors shadow-lg shadow-gray-900/20"
                     >
                       Agendar Consulta
                     </button>
                     {professional.contactEmail && (
                        <a 
                          href={`mailto:${professional.contactEmail}`}
                          className="flex-1 flex items-center justify-center gap-2 text-gray-700 font-bold py-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                          <Mail size={18} />
                          Enviar Email
                        </a>
                      )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetail;