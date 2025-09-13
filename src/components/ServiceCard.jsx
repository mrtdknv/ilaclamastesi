import React from 'react';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

const ServiceCard = ({ service, onServiceClick }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
         onClick={() => onServiceClick(service)}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
            Detayları Gör
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            {service.title}
          </h3>
          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{service.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Award className="h-4 w-4" />
            <span>{service.warranty}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-green-600" />
            <span className="text-sm text-green-600 font-medium">
              Güvenli ve Etkili Çözüm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;