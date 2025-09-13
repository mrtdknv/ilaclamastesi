import React from 'react';
import ServiceCard from './ServiceCard';
import { serviceData } from '../utils/serviceData';

const Services = ({ onServiceClick }) => {
  return (
    <section id="hizmetler" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Profesyonel İlaçlama Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Her türlü mekan için özel çözümler sunuyor, sağlıklı yaşam alanları oluşturuyoruz
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onServiceClick={onServiceClick}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Özel İhtiyaçlarınız mı Var?
            </h3>
            <p className="text-gray-600 mb-6">
              Yukarıda bulamadığınız özel ilaçlama hizmetleri için bizimle iletişime geçin
            </p>
            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200">
              Özel Teklif Al
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;