import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const ContactButtons = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleWhatsApp = () => {
    const message = 'Merhaba! İlaçlama hizmetleriniz hakkında bilgi almak istiyorum.';
    const whatsappUrl = `https://wa.me/905457207524?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open('tel:05457207524', '_self');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
        title="WhatsApp ile iletişime geç"
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          WhatsApp ile Yaz
        </div>
      </button>

      {/* Phone Button - Only on Mobile */}
      {isMobile && (
        <button
          onClick={handleCall}
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
          title="Hemen ara"
        >
          <Phone className="h-6 w-6" />
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Hemen Ara
          </div>
        </button>
      )}
    </div>
  );
};

export default ContactButtons;