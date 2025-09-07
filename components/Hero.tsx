'use client';

import { ArrowRight, Calendar, Users, Clock, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 lg:pt-20 bg-gradient-to-br from-sky-50 to-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                スタペイ連携（順次実装予定）
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                予約統合システム
                <br />
                <span className="text-sky-600">BookingGateway</span>
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

            {/* Right Visual removed as requested */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
