'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, Settings, RefreshCw, FolderSync } from 'lucide-react';

const Features = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-sky-600" />,
      title: "各予約サービスの予約情報の収集と予約確認画面、予約追加機能",
      description: "新規予約やキャンセル情報を自動反映。電話予約も追加可能です。一つの画面ですべての予約状況を確認でき、手動での予約追加も簡単に行えます。"
    },
    {
      icon: <Settings className="w-6 h-6 text-green-600" />,
      title: "御社独自予約管理システムの予約情報の収集機能",
      description: "カスタマイズ対応で自動反映します。既存の予約システムと連携し、BookingGateway上で一元管理することが可能です。"
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-orange-600" />,
      title: "各予約サービスへの満席設定反映機能",
      description: "満席時に自動で受付終了設定を行います。ダブルブッキングを防ぎ、適切な予約管理を実現します。"
    },
    {
      icon: <FolderSync className="w-6 h-6 text-blue-600" />,
      title: "各予約サービスへの予約変更反映機能",
      description: "BG画面での操作を各サービス側に自動反映します。一度の操作で全ての予約サービスに変更が反映されるため、作業効率が大幅に向上します。"
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            機能一覧
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center space-x-3">
                  {feature.icon}
                  <span className="font-medium text-gray-900">{feature.title}</span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;