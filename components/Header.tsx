'use client';

import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ヘッダーはロゴのみを表示

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 lg:h-20">
          <a
            href="#"
            className="text-xl lg:text-2xl font-bold text-sky-600 hover:text-sky-700 transition-colors"
            aria-label="BookingGateway ホームページに戻る"
          >
            BookingGateway
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
