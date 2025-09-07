import { CheckCircle, Monitor, Zap, Users, Smartphone } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Monitor className="w-8 h-8 text-sky-600" />,
      title: "複数の予約サービスを一つの画面で管理できる",
      description: "すべての予約情報を統合画面で一元管理"
    },
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: "手動の予約管理が減り、オペレーションが効率化",
      description: "自動化により作業時間を大幅に短縮"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "顧客対応やスタッフの負担軽減",
      description: "迅速な対応でお客様満足度も向上"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-orange-600" />,
      title: "スタペイとの連携も可能（順次実装予定）",
      description: "より充実した予約管理機能を提供"
    }
  ];

  return (
    <section id="benefits" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            その悩み、BookingGatewayが解決します
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            予約管理の悩みを一気に解決
          </p>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-sm">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-sky-50 rounded-lg">
            <Smartphone className="w-5 h-5 text-sky-600 mr-2" />
            <span className="text-sm text-sky-800 font-medium">
              各種端末で予約情報を確認できます
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;