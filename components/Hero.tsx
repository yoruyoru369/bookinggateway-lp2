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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  無料相談（担当営業に連絡）
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
                {/* Calendar Visual */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">予約管理画面</h3>
                    <Calendar className="w-6 h-6 text-sky-600" />
                  </div>
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {['日', '月', '火', '水', '木', '金', '土'].map((day) => (
                      <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 35 }, (_, i) => (
                      <div key={i} className={`aspect-square flex items-center justify-center text-sm rounded ${
                        i === 15 ? 'bg-sky-600 text-white' : 
                        i === 22 ? 'bg-orange-100 text-orange-600' :
                        i > 0 && i < 32 ? 'hover:bg-gray-100 cursor-pointer' : ''
                      }`}>
                        {i > 0 && i < 32 ? i : ''}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Integration Visual */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">HOT PEPPER予約: 5件</span>
                    <Users className="w-4 h-4 text-gray-500 ml-auto" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">ぐるなび予約: 3件</span>
                    <Clock className="w-4 h-4 text-gray-500 ml-auto" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">食べログ予約: 2件</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                  </div>
                </div>

                {/* Integration Arrow */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  <div className="bg-sky-600 text-white p-3 rounded-full shadow-lg">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs text-gray-600 font-medium">一元管理</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;