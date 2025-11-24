'use client';

import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 主要な予約サービス（円形配置用）
  const services = [
    { name: 'HOT PEPPER', angle: 0 },
    { name: 'ぐるなび', angle: 45 },
    { name: '食べログ', angle: 90 },
    { name: 'Google', angle: 135 },
    { name: '一休', angle: 180 },
    { name: 'スタペイ', angle: 225 },
    { name: 'LINE', angle: 270 },
    { name: 'その他', angle: 315 },
  ];

  return (
    <section id="hero" className="pt-16 lg:pt-20 bg-gradient-to-br from-sky-50 to-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left lg:min-w-0 lg:pr-8">
              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                予約統合システム
                <br />
                <span className="text-sky-600 whitespace-nowrap">ブッキングゲートウェイ</span>
                <span className="sr-only">（BookingGateway）</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-medium">
                複数の予約サービスの予約情報を一元管理
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToContact}
                  className="px-8 py-4 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors flex items-center justify-center group shadow-lg"
                  data-analytics="hero-cta-consultation"
                  aria-label="無料相談フォームに移動"
                >
                  無料相談
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Visual - Integration Hub */}
            <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
              <div className="relative w-full max-w-md aspect-square">
                {/* Connection Lines */}
                <svg 
                  className="absolute inset-0 w-full h-full" 
                  viewBox="0 0 200 200"
                  preserveAspectRatio="xMidYMid meet"
                  style={{ overflow: 'visible' }}
                >
                  {services.map((service, index) => {
                    const centerX = 100;
                    const centerY = 100;
                    const radius = 70;
                    const angleRad = (service.angle * Math.PI) / 180;
                    const x = centerX + radius * Math.cos(angleRad);
                    const y = centerY + radius * Math.sin(angleRad);
                    
                    return (
                      <line
                        key={index}
                        x1={centerX}
                        y1={centerY}
                        x2={x}
                        y2={y}
                        stroke="rgb(186, 230, 253)"
                        strokeWidth="2"
                        style={{
                          animation: `fadeInLine 0.8s ease-out ${index * 0.1}s both`,
                        }}
                      />
                    );
                  })}
                </svg>

                {/* Center Hub - BookingGateway */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative bg-gradient-to-br from-sky-500 to-sky-600 rounded-full w-32 h-32 sm:w-40 sm:h-40 shadow-2xl animate-pulse-slow flex items-center justify-center">
                    <div className="bg-white rounded-full p-2 sm:p-3 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs sm:text-sm font-bold text-sky-600">BookingGateway</span>
                    </div>
                  </div>
                </div>

                {/* Service Nodes */}
                {services.map((service, index) => {
                  const angleRad = (service.angle * Math.PI) / 180;
                  const radius = 35; // percentage
                  const x = 50 + radius * Math.cos(angleRad);
                  const y = 50 + radius * Math.sin(angleRad);
                  
                  return (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        animation: `fadeInScale 0.6s ease-out ${index * 0.1 + 0.3}s both`,
                      }}
                      title={service.name}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg border-2 border-sky-200 hover:border-sky-400 hover:shadow-xl transition-all duration-300 hover:scale-110"></div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
