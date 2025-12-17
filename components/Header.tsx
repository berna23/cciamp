import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleCart, itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Missão', id: 'sobre' },
    { label: 'Abordagem 360º', id: 'servicos' },
    { label: 'Preçário', id: 'precario' },
    { label: 'Equipa', id: 'profissionais' },
    { label: 'Loja', path: '/loja' },
    { label: 'Contactos', id: 'contactos' },
  ];

  const handleNavClick = (item: { id?: string; path?: string }) => {
    setIsOpen(false);
    
    if (item.path) {
      navigate(item.path);
      window.scrollTo(0, 0);
      return;
    }

    if (item.id) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(item.id!);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const element = document.getElementById(item.id!);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-0' : 'bg-white/90 backdrop-blur-sm py-4 border-b border-primary-100'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <div 
          onClick={() => { navigate('/'); window.scrollTo(0,0); }} 
          className="cursor-pointer flex items-center gap-6"
        >
          {/* Logo Text Block - Clean & Editorial */}
          <div className="flex flex-col border-l-2 border-primary-900 pl-3">
            <span className="font-serif text-2xl tracking-widest text-primary-900 leading-none">
              CCIAPM
            </span>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-[9px] uppercase tracking-[0.3em] text-accent">
                Clínica
              </span>
              <span className="text-[9px] text-primary-300">|</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-primary-500">
                Investigação
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="text-xs font-medium uppercase tracking-[0.15em] text-primary-500 hover:text-primary-900 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-8">
           <button 
              onClick={toggleCart}
              className="relative text-primary-900 hover:text-accent transition-colors"
           >
              <ShoppingBag size={20} strokeWidth={1} />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent text-white text-[9px] font-bold flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
           </button>

          <button 
            onClick={() => navigate('/agendar')}
            className="hidden md:flex btn-primary px-6 py-3"
          >
            Agendar
          </button>

           {/* Mobile Menu Button */}
           <button 
              className="lg:hidden text-primary-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out lg:hidden pt-32 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="text-2xl font-serif text-primary-900 hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="mt-8 w-full max-w-xs border-t border-primary-100 pt-8">
             <button 
              onClick={() => { setIsOpen(false); navigate('/agendar'); }}
              className="w-full btn-primary py-4"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;