import React from "react";
import { Shield, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Şirket Bilgileri */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-green-600 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Kuzey Yıldızı İlaçlama</h3>
                <p className="text-gray-400 text-sm">
                  Güvenilir Çözüm Ortağınız
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              7 yıllık deneyimimizle ev, ofis, fabrika ve her türlü mekanınızda
              zararlılardan korunmanız için profesyonel hizmet sunuyoruz.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4 text-blue-400" />
              <span className="text-gray-400">7/24 Acil Müdahale Hattı</span>
            </div>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Ev İlaçlaması
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Ofis İlaçlaması
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Okul İlaçlaması
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Fabrika İlaçlaması
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Otel İlaçlaması
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Restoran & Cafe
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-lg font-semibold mb-6">İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">0543 448 86 06 </p>
                  <p className="text-gray-400 text-sm">7/24 Acil Hat</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">info@kuzeyyildizi.com</p>
                  <p className="text-gray-400 text-sm">E-posta</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Türkiye Geneli</p>
                  <p className="text-gray-400 text-sm">Hizmet Alanı</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sertifikalar */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kalite Güvencemiz</h4>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h5 className="font-medium text-green-400 mb-2">ISO 9001</h5>
                <p className="text-gray-400 text-sm">Kalite Yönetim Sistemi</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h5 className="font-medium text-blue-400 mb-2">Lisanslı</h5>
                <p className="text-gray-400 text-sm">
                  T.C. Tarım Bakanlığı Onaylı
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h5 className="font-medium text-purple-400 mb-2">Sigortalı</h5>
                <p className="text-gray-400 text-sm">Tam Kapsam Güvence</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Kuzey Yıldızı İlaçlama. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span className="hover:text-white cursor-pointer transition-colors duration-200">
                Gizlilik Politikası
              </span>
              <span className="hover:text-white cursor-pointer transition-colors duration-200">
                Kullanım Şartları
              </span>
              <span className="hover:text-white cursor-pointer transition-colors duration-200">
                KVKK
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
