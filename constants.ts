import { Professional, Service, Testimonial, Product } from './types';

// General UI Images
export const HERO_BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000';
export const FOUR_FACTORS_DIAGRAM_IMAGE = 'https://via.placeholder.com/500x500/F5EFE0/1c1917?text=CCIAPM+Diagrama+4+Fatores'; // Placeholder for the actual diagram image
export const FOUR_FACTORS_DIAGRAM_PLACEHOLDER = 'https://via.placeholder.com/500x500/F5EFE0/1c1917?text=Diagrama+4+Fatores'; // Fallback
export const LOGO_WHITE_OUTLINE = '/logo-white-outline.png'; // Assuming this is a local asset in the public folder

export const PROFESSIONALS: Professional[] = [
  {
    id: 'andreia-moura',
    name: 'Doutora Andreia Paiva de Moura',
    role: 'Diretora',
    specialty: 'Psicologia Clínica e da Saúde',
    category: 'Direção',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600', // Unsplash URL
    shortBio: 'Doutorada em dependências, com vasta experiência clínica e direção da CCIAPM.',
    fullBio: 'A Dra. Andreia Paiva de Moura (CP: 013202) é fundadora e diretora da CCIAPM. Doutorada na área das dependências e comportamentos aditivos, apresenta mais de 15 anos de experiência profissional em contextos diversificados. Integra experiência em docência, colaboração em projetos de investigação e publicação de artigos científicos. As suas áreas de diferenciação centram-se nas dependências, perturbações de humor e perturbações de personalidade. É autora da Abordagem CCIAPM de 4 Fatores.',
    education: [
      'Doutoramento em Dependências e Comportamentos Aditivos',
      'Experiência em docência e investigação científica'
    ],
    experience: [
      '2020 – 2023 – Membro da Assembleia Geral da Norte Vida: Associação para promoção da saúde',
      '2020 - 2023 – Formadora e Supervisora Clínica no INSPSIC',
      '2025 - Integra equipa de Investigação no CUF Academic Center',
      'Fundadora e Diretora da CCIAPM'
    ],
    contactEmail: 'andreia.moura@cciapm.pt'
  },
  {
    id: 'rafael-rodrigues',
    name: 'Dr. Rafael Brandão Rodrigues',
    role: 'Diretor Clínico',
    specialty: 'Medicina Geral e Familiar',
    category: 'Direção',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600', // Unsplash URL
    shortBio: 'Mestre em Medicina com Menção em Cirurgia Clínica. Foco em prevenção e acompanhamento global.',
    fullBio: 'O Dr. Rafael Brandão Rodrigues (CP: OM77879) é Diretor Clínico da CCIAPM e médico especialista em Medicina Geral e Familiar. Formado em Medicina pela Universidade Autónoma de Barcelona, possui percurso clínico em Espanha e Portugal. Fluente em português, inglês, espanhol, catalão e galego. Na CCIAPM, integra a equipa de várias especialidades médicas, com foco em prevenção e cuidado continuado centrado na pessoa.',
    education: [
      'Licenciatura em Medicina - Universidade Autónoma de Barcelona',
      'Mestrado em Medicina com Menção em Cirurgia Clínica'
    ],
    experience: [
      'Diretor Clínico na CCIAPM',
      'Experiência em contexto hospitalar e cuidados primários'
    ],
    contactEmail: 'rafael.brandao@cciapm.pt'
  },
  {
    id: 'ana-leite',
    name: 'Doutora Ana Leite',
    role: 'Psicóloga',
    specialty: 'Psicologia Social, das Organizações & Behavioral Science',
    category: 'Psicologia',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600', // Unsplash URL
    shortBio: 'Doutorada em Psicologia, especialista em Yoga Terapêutico e Investigação.',
    fullBio: 'A Dra. Ana Leite (CP: 14008) apresenta experiência em consultoria e no meio académico (UK). Na prática clínica, acompanha pessoas com doenças crónicas, burnout, ansiedade, stress e bem-estar no trabalho. É responsável pela investigação, apoio à escrita científica e tradução da ciência da CCIAPM, e exerce também como professora de yoga terapêutico.',
    education: [
      'Doutoramento em Psicologia',
      'Mestrado em Psicologia Social'
    ],
    experience: [
      'Docente universitária em Psicologia Social (10 anos)',
      'Académica honorária na Universidade de Kent',
      'Professora de Yoga Terapêutico'
    ],
    contactEmail: 'ana.leite@cciapm.pt'
  },
  {
    id: 'joana-bras',
    name: 'Dra. Joana Brás',
    role: 'Psicóloga',
    specialty: 'Psicologia da Educação & Escolar',
    category: 'Psicologia',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=600', // Unsplash URL
    shortBio: 'Especialista em Psicologia da Educação e acompanhamento escolar.',
    fullBio: 'Dedicada à Psicologia da Educação e Escolar, a Dra. Joana Brás foca-se no desenvolvimento de competências socioemocionais e na promoção do sucesso educativo, trabalhando em estreita colaboração com famílias e escolas.',
    education: ['Mestrado em Psicologia da Educação'],
    experience: ['Intervenção em contexto escolar', 'Acompanhamento psico-pedagógico'],
    contactEmail: 'consultas@cciapm.pt'
  },
  {
    id: 'mariana-castro',
    name: 'Dra. Mariana Miguel Castro',
    role: 'Psicóloga',
    specialty: 'Psicologia da Justiça, Trauma & Comportamento Desviante',
    category: 'Psicologia',
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488058?auto=format&fit=crop&q=80&w=600', // Unsplash URL
    shortBio: 'Especialista em Justiça e Trauma, com foco em intervenção psicossocial e emergência.',
    fullBio: 'A Dra. Mariana Miguel Castro (CP: 30978) apresenta experiência em intervenção psicossocial e de emergência. Na CCIAPM, dedica-se à intervenção psicológica em trauma e comportamentos de risco, bem como à dinamização de workshops formativos para promoção do bem-estar e empoderamento.',
    education: ['Mestrado em Psicologia da Justiça e do Comportamento Desviante'],
    experience: ['Intervenção psicossocial e de emergência', 'Investigação científica'],
    contactEmail: 'mariana.castro@cciapm.pt'
  },
  {
    id: 'ines-leite',
    name: 'Dra. Inês Pereira Leite',
    role: 'Psicóloga Clínica',
    specialty: 'Terapia Cognitivo-Comportamental (TCC)',
    category: 'Psicologia',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600', // Unsplash URL
    shortBio: 'Especializada em TCC, focada em perturbações de humor e ansiedade.',
    fullBio: 'A Dra. Inês Pereira Leite (CP: 31118) apresenta especialização em terapias cognitivo-comportamentais (TCC). Na CCIAPM foca-se na avaliação e intervenção em perturbações de humor e de ansiedade, utilizando uma abordagem baseada na evidência e centrada na pessoa.',
    education: ['Especialização em Terapias Cognitivo-Comportamentais'],
    experience: ['Avaliação e intervenção psicológica em adultos'],
    contactEmail: 'ines.leite@cciapm.pt'
  },
  {
    id: 'claudia-bernardo',
    name: 'Dra. Cláudia Bernardo',
    role: 'Médica de Família',
    specialty: 'Doenças Crónicas e Doenças Agudas',
    category: 'Medicina',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=600', // Unsplash URL
    shortBio: 'Assistente graduada em Medicina Geral e Familiar, focada na prevenção.',
    fullBio: 'A Dra. Cláudia Bernardo (CP: OM42307) tem experiência na vigilância e acompanhamento de saúde ao longo de todo o ciclo de vida. Na CCIAPM, a sua prática centra-se na prevenção, colaborando com cada utente para reduzir o risco de doenças cardiovasculares e oncológicas.',
    education: ['Licenciatura em Medicina', 'Formação em Medicina Geral e Familiar'],
    experience: ['Vigilância de saúde', 'Gestão de doenças crónicas'],
    contactEmail: 'claudia.bernardo@cciapm.pt'
  },
  {
    id: 'maria-matos',
    name: 'Dra. Maria Matos',
    role: 'Nutricionista',
    specialty: 'Excesso de Peso, Obesidade & Nutrição Desportiva',
    category: 'Nutrição',
    image: 'https://images.unsplash.com/photo-1542385317-0d32115162a0?auto=format&fit=crop&q=80&w=600', // Unsplash URL
    shortBio: 'Especialista em emagrecimento, reeducação alimentar e nutrição desportiva.',
    fullBio: 'A Dra. Maria Matos (CP: 3690N) trabalha na área do emagrecimento e da reeducação alimentar. Ajuda os pacientes a adotar uma relação equilibrada com a alimentação. Na CCIAPM, dedica-se a individualizar planos alimentares de acordo com necessidades, objetivos e rotinas.',
    education: ['Licenciatura em Nutrição'],
    experience: ['Nutrição Clínica', 'Nutrição Desportiva'],
    contactEmail: 'maria.matos@cciapm.pt'
  },
  {
    id: 'maria-pauperio',
    name: 'Dra. Maria Castro Paupério',
    role: 'Advogada (Formadora)',
    specialty: 'Direito da Família, Trabalho e Criminal',
    category: 'Direito',
    image: 'https://images.unsplash.com/photo-1580894742578-83863459c55b?auto=format&fit=crop&q=80&w=600', // Unsplash URL
    shortBio: 'Advogada com experiência em Direito do Trabalho, Segurança Social e Família.',
    fullBio: 'Maria Castro Paupério (CP: 58143-P) foca-se em Direito do Trabalho, Segurança Social e Direito de Família e Menores. Advoga em questões referentes à promoção de condições de trabalho e assessora processos de violência doméstica, divórcios e regulação de responsabilidades parentais.',
    education: ['Licenciatura em Direito', 'Mestrado em Direito Criminal'],
    experience: ['Direito do Trabalho', 'Direito da Família e Menores'],
    contactEmail: 'maria.pauperio@cciapm.pt'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'fator-1',
    title: 'Nível Psicoafetivo',
    factor: 'Fator 1',
    icon: 'brain',
    items: [
      'Psicologia Clínica e da Saúde',
      'Psicologia da Educação e Psicologia Escolar',
      'Psicologia da Justiça e do Comportamento Desviante',
      'Psicologia Social e das Organizações e Behavioral Science',
      'Psicoterapia: Terapia Cognitivo-Comportamental (TCC/CBT)',
      'Terapias de Grupo'
    ]
  },
  {
    id: 'fator-2',
    title: 'Nível Sensorial',
    factor: 'Fator 2',
    icon: 'wind',
    items: [
      'Atenção Plena (Individual e Grupo)',
      'Yoga Terapêutico (Individual e Grupo)',
      'Respiração Consciente (Individual e Grupo)'
    ]
  },
  {
    id: 'fator-3',
    title: 'Nível Físico',
    factor: 'Fator 3',
    icon: 'activity',
    items: [
      'Psiquiatria',
      'Medicina Geral e Familiar',
      'Nutrição',
      'Avaliação da Composição Corporal',
      'Planos de Treino'
    ]
  },
  {
    id: 'fator-4',
    title: 'Nível Intelectual',
    factor: 'Fator 4',
    icon: 'book',
    items: [
      'Supervisão Clínica',
      'Formações/Workshops/Cursos (Empresarial, Saúde, Geral)',
      'Direito de Família, Trabalho e Criminal',
      'Aconselhamento de Ação Social e Serviços Sociais',
      'Aconselhamento Financeiro',
      'Consultoria e Apoio à Investigação Académica'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'R.V.',
    role: 'Paciente',
    text: `Trabalhar com a Dra Andreia tem sido verdadeiramente transformador. Ajudou-me a fazer o luto da minha mãe e continua a ajudar-me a compreender-me melhor para conseguir ultrapassar as adversidades que surgem. Dá-me confiança e força para gerir os meus problemas de forma mais saudável.`,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't2',
    name: 'I.C.',
    role: 'Paciente',
    text: `Conheci a Dra Andreia Paiva Moura na sequência de um burn out e de uma fase de grandes mudanças. Ter a sua ajuda foi fundamental: deu-me ferramentas incríveis para compreender situações da minha vida e sinto que tive muita sorte em encontrar uma profissional tão dedicada e empenhada. Só posso recomendar!`,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't3',
    name: 'S.C.',
    role: 'Paciente',
    text: `A evolução terapêutica desde que sou seguida nas consultas melhorou muito, fazendo com que encare as situações menos positivas da vida com outra perspetiva e utilizando diferentes estratégias para lidar com as adversidades.`,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't4',
    name: 'B.A.',
    role: 'Paciente',
    text: `Quando marquei a minha primeira consulta sentia receio, mas a Dra Andreia criou um ambiente especial, leve e sem julgamentos. A evolução terapêutica é notória e muito positiva. Ajudou-me profundamente no meu processo de lidar com ansiedade. A Dra não é só psicóloga, é luz!`,
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't5',
    name: 'R.V.',
    role: 'Paciente',
    text: `Comecei com a Dra Andreia numa altura em que tudo me pesava. Não sabia se falar com alguém ia ajudar, mas desde a primeira conversa senti alívio. A sua forma calma, sem julgamentos, ajudou-me a perceber-me melhor e a largar pesos antigos. Saímos diferentes. Para melhor.`,
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488058?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't6',
    name: 'E.C.',
    role: 'Paciente',
    text: `Conheci a Dra Andreia numa fase crítica da minha vida e com diagnóstico tardio de PHDA. A empatia, profissionalismo e acompanhamento foram essenciais para compreender e ultrapassar este novo desafio. A psicoterapia não resolve tudo, mas com a Dra encontrei orientação, energia e apoio fundamentais.`,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'kit-intervencao',
    title: 'Kit Intervenção Completa',
    price: 600.00,
    description: 'Abordagem CCIAPM de 4 Fatores. Inclui 6 consultas/sessões à sua escolha + acesso a 1 formação/workshop por tempo limitado. (Inclui 1 consulta gratuita e desconto >80% na formação).',
    image: 'https://images.unsplash.com/photo-1587840173602-04e463a56658?auto=format&fit=crop&q=80&w=800', // Unsplash URL
    features: [
      '6 Consultas/Sessões',
      '1 Formação/Workshop',
      'Faseamento: 4x 150€',
      'Poupança Significativa'
    ],
    installments: 4
  },
  {
    id: 'kit-saude-mental',
    title: 'Kit Saúde Mental',
    price: 400.00,
    description: 'Abordagem CCIAPM. 3 sessões de Psicologia/Psicoterapia + 3 sessões de Atenção Plena, Yoga Terapêutico & Respiração Consciente.',
    image: 'https://images.unsplash.com/photo-1557804506-6136df31742a?auto=format&fit=crop&q=80&w=800', // Unsplash URL
    features: [
      '3 Sessões Psicologia',
      '3 Sessões Sensoriais',
      'Faseamento: 3x 133.33€',
      '1 Sessão Gratuita'
    ],
    installments: 3
  },
  {
    id: 'manual-ebook',
    title: 'E-book: Manual de Apoio',
    price: 34.99,
    description: 'Manual "Abordagem CCIAPM de 4 Fatores". O guia definitivo para intervenção clínica em saúde mental.',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    features: [
      'Brevemente Disponível',
      'Formato Digital'
    ],
    comingSoon: true
  },
  {
    id: 'workshops-online',
    title: 'Workshops & Cursos Online',
    price: 99.00,
    description: 'Formações no âmbito da Abordagem CCIAPM de 4 Fatores.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800',
    features: [
      'Brevemente Disponível',
      'Certificado Incluído'
    ],
    comingSoon: true
  },
   {
    id: 'linha-reforcos',
    title: 'Linha de Reforços Positivos',
    price: 29.90,
    description: 'Exclusivos da CCIAPM. Funcionam como reforços da superação de cada etapa da intervenção.',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800',
    features: [
      'Brevemente Disponível',
      'Acesso Exclusivo a Pacientes'
    ],
    comingSoon: true
  }
];