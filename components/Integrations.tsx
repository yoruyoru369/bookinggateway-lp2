'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Integrations = () => {
  const services = [
    'HOT PEPPER',
    'ぐるなび',
    '食べログ',
    'Googleカレンダー',
    '御社ホームページ（独自予約システムなど）',
    '一休',
    'インスタグラム',
    'スタペイ',
    'Retty',
    'トレタ',
    'LINE',
    'その他 順次対応'
  ];

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="integrations" className="py-16 lg:py-24 bg-gradient-to-r from-sky-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            対応予約サービス一覧
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg ${
              canScrollLeft ? 'text-sky-600 hover:bg-sky-50' : 'text-gray-300 cursor-not-allowed'
            } transition-colors`}
            disabled={!canScrollLeft}
            aria-label="左にスクロール"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg ${
              canScrollRight ? 'text-sky-600 hover:bg-sky-50' : 'text-gray-300 cursor-not-allowed'
            } transition-colors`}
            disabled={!canScrollRight}
            aria-label="右にスクロール"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={checkScrollButtons}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 bg-white rounded-full shadow-md border hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            ※商標ロゴは使用せず、サービス名のみを表示しています
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Integrations;