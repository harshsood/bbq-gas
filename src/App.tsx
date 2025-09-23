import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import DeliveryAreas from './components/DeliveryAreas';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Certifications />
      <DeliveryAreas />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
