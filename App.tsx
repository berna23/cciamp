import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ProfessionalsCarousel from './components/ProfessionalsCarousel';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProfessionalDetail from './components/ProfessionalDetail';
import Booking from './components/Booking';
import Store from './components/Store';
import Checkout from './components/Checkout';
import About from './components/About';
import Pricing from './components/Pricing';
import { CartProvider } from './components/CartContext';
import CartSidebar from './components/CartSidebar';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <ProfessionalsCarousel />
      <Testimonials />
      <Contact />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
        <div className="font-sans antialiased text-slate-900 bg-white min-h-screen flex flex-col">
          <Header />
          <CartSidebar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/professional/:id" element={<ProfessionalDetail />} />
              <Route path="/agendar" element={<Booking />} />
              <Route path="/loja" element={<Store />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;