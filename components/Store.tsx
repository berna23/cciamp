import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { useCart } from './CartContext';

const Store: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4">Loja Online</span>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-900 mb-6">Kits e Recursos Clínicos</h1>
        </div>

        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-0 border-t border-l border-primary-200">
          {PRODUCTS.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white border-r border-b border-primary-200 p-0 flex flex-col md:flex-row h-full group"
            >
              <div className="md:w-1/2 relative overflow-hidden bg-primary-50 aspect-square md:aspect-auto">
                 {product.image && (
                   <img 
                    src={product.image} 
                    alt={product.title} 
                    className={`w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 ${product.comingSoon ? 'grayscale opacity-70' : ''}`} 
                   />
                 )}
                 {product.comingSoon && (
                   <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-[2px]">
                     <span className="bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] border border-primary-900 text-primary-900">Brevemente</span>
                   </div>
                 )}
                 {product.installments && (
                   <div className="absolute top-0 left-0 bg-accent text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest">
                     Campanha
                   </div>
                 )}
              </div>

              <div className="p-10 md:w-1/2 flex flex-col justify-between">
                 <div>
                    <h2 className="font-serif text-2xl text-primary-900 mb-2 leading-tight">{product.title}</h2>
                    {!product.comingSoon && <p className="text-xl text-accent font-serif mb-6">{product.price.toFixed(0)}€</p>}
                    
                    <p className="text-primary-500 text-sm leading-relaxed mb-8 font-light border-l border-primary-200 pl-4">
                        {product.description}
                    </p>
                    
                    <ul className="space-y-3 mb-10">
                      {product.features.map((f, i) => (
                        <li key={i} className="text-[10px] text-primary-400 font-bold uppercase tracking-widest flex items-center gap-3">
                          <span className="w-1 h-1 bg-primary-900 rounded-none shrink-0"></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                 </div>

                 {!product.comingSoon ? (
                   <button 
                     onClick={() => addToCart(product)}
                     className="w-full btn-outline py-4 hover:bg-primary-900 hover:text-white transition-colors text-xs"
                   >
                     Adicionar ao Carrinho
                   </button>
                 ) : (
                    <button disabled className="w-full py-4 border border-primary-100 text-primary-300 text-xs font-bold uppercase cursor-not-allowed tracking-widest">
                      Indisponível
                    </button>
                 )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;