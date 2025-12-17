export interface Professional {
  id: string;
  name: string;
  role: string;
  specialty: string; 
  category: string; 
  image: string;
  shortBio: string;
  fullBio: string;
  education: string[];
  experience: string[];
  contactEmail?: string;
}

export interface Service {
  id: string;
  title: string;
  factor: string; // e.g., "Fator 1 - Nível Psicoafetivo"
  items: string[];
  icon: 'brain' | 'wind' | 'activity' | 'book';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; 
  text: string;
  image: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  features: string[];
  installments?: number; // e.g., 4 for "4x"
  comingSoon?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}