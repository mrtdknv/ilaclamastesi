import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import BugsServices from './components/BugsServices'; // ✅ Böcek kartları
import ServiceDetail from './components/ServiceDetail';
import ContactButtons from './components/ContactButtons';
import Footer from './components/Footer';
import { Service } from './types'; // Eğer types.ts varsa, yoksa Service tipini kendi app içinde de tanımlayabilirsin

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'service-detail'>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setCurrentView('service-detail');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onBackToHome={handleBackToHome} showBack={currentView !== 'home'} />
      
      {currentView === 'home' ? (
        <>
          <Hero />
          <AboutUs />
          <Services onServiceClick={handleServiceClick} />

          {/* Böcek İlaçlama Hizmetleri Kartları */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <BugsServices onServiceClick={handleServiceClick} />
          </div>
        </>
      ) : (
        <ServiceDetail service={selectedService} onBack={handleBackToHome} />
      )}
      
      <Footer />
      <ContactButtons />
    </div>
  );
};

export default App;
