import React from 'react';

const address = 'Candaroğulları Mahallesi Şehit Tanju Turhan Sokak No 4 Merkez Kastamonu';

const MapSection: React.FC = () => {
  const encoded = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps?q=${encoded}&z=17&output=embed`;

  return (
    <section id="harita" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Bizi Ziyaret Edin</h2>
        <p className="text-gray-600 mb-4">{address}</p>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src={mapSrc}
            title="Kastamonu ofis haritası"
            className="w-full h-80 md:h-96 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label={`Harita: ${address}`}
          />
        </div>

        <div className="mt-4 text-sm">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encoded}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Google Maps'te aç
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
