import React from "react";
import { Shield, Users, Leaf, CheckCircle } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="hakkimizda" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Sol Kısım - Metin */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Hakkımızda
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            <span className="font-semibold text-blue-600">
              Kastamonu merkezli
            </span>{" "}
            firmamız, ev, iş yeri, depo ilaçlama, kemirgen kontrolü ve
            haşere/böcek ilaçlama alanlarında yıllardır profesyonel çözümler
            sunmaktadır. Ayrıca{" "}
            <span className="font-semibold text-blue-600">
              Ankara, Sinop , Karabük ,Çankırı
            </span>{" "}
            bölgelerinde de hizmet vermekteyiz. Amacımız, yaşam alanlarınızı
            güvenli, sağlıklı ve huzurlu hale getirmektir.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Uzman kadromuz, çevre dostu ürünler ve modern ekipmanlarla, müşteri
            memnuniyetini ön planda tutarak hizmet vermektedir. Firmamızda
            ayrıca{" "}
            <span className="font-semibold text-blue-600">
              İş Güvenliği Uzmanı
            </span>{" "}
            bulunmakta ve tüm uygulamalar iş güvenliği standartlarına uygun
            olarak yürütülmektedir. Her ihtiyaca özel, etkili ve garantili
            ilaçlama çözümleri ile sizlerin yanındayız.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-gray-700 text-lg">
                Ev ve İş Yeri İlaçlama
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-gray-700 text-lg">
                Depo İlaçlama ve Hijyen Çözümleri
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-gray-700 text-lg">
                Kemirgen ve Haşere Kontrolü
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-gray-700 text-lg">
                %100 Garantili ve Çevre Dostu Hizmet
              </span>
            </li>
          </ul>
        </div>

        {/* Sağ Kısım - Görsel & Kartlar */}
        <div className="relative">
          <img
            src="https://turacevre.com/images/intro-pic.jpg"
            alt="İlaçlama Hizmeti"
            className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
          />

          {/* Kart 1 */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="font-medium text-gray-800">Güvenilir Hizmet</span>
          </div>

          {/* Kart 2 */}
          <div className="absolute top-6 -right-6 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="font-medium text-gray-800">
              Çevre Dostu Ürünler
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
