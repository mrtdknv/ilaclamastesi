import React from "react";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Award,
  Phone,
  MessageCircle,
  Shield,
  Star,
} from "lucide-react";

const ServiceDetail = ({ service, onBack }) => {
  if (!service) return null;

  const handleWhatsApp = () => {
    const message = `Merhaba! ${service.title} hizmeti hakkında bilgi almak istiyorum.`;
    const whatsappUrl = `https://wa.me/905457207524?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCall = () => {
    window.open("tel:05457207524", "_self");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={20} />
            <span>Ana Sayfaya Dön</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sol Taraf - Görsel */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Özellikler */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Hizmet Özellikleri
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sağ Taraf - İçerik */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Profesyonel Hizmet
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {service.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                {service.detailedDescription}
              </p>
            </div>

            {/* Hizmet Bilgileri */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-md text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Süre</div>
                <div className="font-semibold text-gray-900">
                  {service.duration}
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md text-center">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Garanti</div>
                <div className="font-semibold text-gray-900">
                  {service.warranty}
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md text-center">
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Kalite</div>
                <div className="font-semibold text-gray-900">Premium</div>
              </div>
            </div>

            {/* Fiyat ve İletişim */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hemen Teklif Alın
              </h3>
              <p className="text-gray-600 mb-6">
                {service.price} - Size özel en uygun fiyatı belirlemek için
                iletişime geçin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp ile İletişim</span>
                </button>
                <button
                  onClick={handleCall}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <span>Hemen Ara</span>
                </button>
              </div>
            </div>

            {/* Güvence Kartı */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  %100 Güvenceli Hizmet
                </h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Lisanslı ve sigortalı ekip</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Çevre dostu ürünler</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Memnuniyet garantisi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
