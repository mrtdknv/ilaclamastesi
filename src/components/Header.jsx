import React from "react";
import { ArrowLeft } from "lucide-react";
import logo from "../images/logo.jpg"; // LOGO YOLU

const Header = ({ onBackToHome, showBack }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            {showBack && (
              <button
                onClick={onBackToHome}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Ana Sayfa</span>
              </button>
            )}
            <div className="flex items-center space-x-3">
              {/* LOGO */}
              <img
                src={logo}
                alt="Kuzey Yıldızı Logo"
                className="h-10 w-10 object-contain rounded-md"
              />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Kuzey Yıldızı İlaçlama
                </h1>
                <p className="text-sm text-gray-600 hidden sm:block">
                  Profesyonel İlaçlama Hizmetleri
                </p>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#hizmetler"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Hizmetlerimiz
            </a>
            <a
              href="#hakkimizda"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Hakkımızda
            </a>
            <a
              href="#iletisim"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              İletişim
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
