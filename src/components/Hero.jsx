import React, { useState, useEffect } from "react";
import { Shield, CheckCircle, Star } from "lucide-react";
import resim1 from "../images/resim1.jpg"; // ✅ Yeni görsel import edildi

const Hero = () => {
  const [customerCount, setCustomerCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCustomerCount((prev) => {
        if (prev < 1000) {
          return prev + 3;
        } else {
          clearInterval(interval);
          return 1000;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4" />
              <span>Türkiye'nin Güvenilir İlaçlama Şirketi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Profesyonel
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {" "}
                İlaçlama{" "}
              </span>
              Hizmetleri
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Ev, ofis, fabrika ve tüm yaşam alanlarınızda zararlılardan
              korunmanız için uzman ekibimizle güvenli ve etkili ilaçlama
              çözümleri sunuyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12"></div>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {customerCount}+
                </div>
                <div className="text-gray-600 text-sm">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">7+</div>
                <div className="text-gray-600 text-sm">Yıl Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  24/7
                </div>
                <div className="text-gray-600 text-sm">Destek Hattı</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              {/* ✅ Yeni resim eklendi */}
              <img
                src={resim1}
                alt="Profesyonel İlaçlama Hizmeti"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            <div className="absolute top-8 -left-4 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    %100 Garanti
                  </div>
                  <div className="text-sm text-gray-600">Etkili Çözüm</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 -right-4 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Güvenli</div>
                  <div className="text-sm text-gray-600">Çevre Dostu</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-green-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
