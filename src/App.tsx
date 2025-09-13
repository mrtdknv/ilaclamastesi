import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import ContactButtons from './components/ContactButtons';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
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
          <Services onServiceClick={handleServiceClick} />
        </>
      ) : (
        <ServiceDetail service={selectedService} onBack={handleBackToHome} />
      )}
      
      <Footer />
      <ContactButtons />
    </div>
  );
}

export default App;