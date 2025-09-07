import { Building, MapPin, Calendar, Briefcase } from 'lucide-react';

const Company = () => {
  const companyInfo = [
    {
      icon: <Building className="w-6 h-6 text-sky-600" />,
      label: "会社名",
      value: "StandardRacing株式会社"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-green-600" />,
      label: "運営",
      value: "BookingGateway事業部"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      label: "所在地",
      value: "東京都中央区日本橋小舟町9-3"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-purple-600" />,
      label: "事業内容",
      value: "ブッキングゲートウェイ（飲食店向け）開発"
    },
    {
      icon: <Calendar className="w-6 h-6 text-orange-600" />,
      label: "設立",
      value: "2023年6月"
    }
  ];

  return (
    <section id="company" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            会社概要
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 shadow-lg border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                  {info.icon}
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600 mb-1">
                    {info.label}
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">
                    {info.value}
                  </dd>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Building className="w-5 h-5 text-sky-600 mr-2" />
                  事業ミッション
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  飲食店の予約管理業務を効率化し、より良いサービス提供を支援することで、
                  飲食業界の発展に貢献します。
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Briefcase className="w-5 h-5 text-green-600 mr-2" />
                  サービス特徴
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  複数の予約サービスを統合管理する独自のシステムにより、
                  業務効率化と顧客満足度向上を同時に実現します。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors"
            data-analytics="company-cta"
          >
            お問い合わせ
            <Building className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Company;