import { ArrowRight, MessageSquare, FileText, Settings, Play, CheckCircle } from 'lucide-react';

const Flow = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-sky-600" />,
      title: "申込",
      description: "お問い合わせフォームから申込"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-600" />,
      title: "LINE案内",
      description: "専用LINEでサポート開始"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "IT導入補助金\n申請サポート",
      description: "申請手続きをサポート"
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      title: "システムアカウント準備",
      description: "専用アカウントを準備"
    },
    {
      icon: <Play className="w-8 h-8 text-orange-600" />,
      title: "システム初期設定",
      description: "予約サービスとの連携設定"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "運用開始",
      description: "BookingGateway運用開始"
    }
  ];

  const phases = [
    {
      title: "各種準備期間",
      color: "bg-sky-100 text-sky-800",
      width: "w-1/4"
    },
    {
      title: "IT導入補助金申請期間", 
      color: "bg-green-100 text-green-800",
      width: "w-2/4"
    },
    {
      title: "システム利用開始",
      color: "bg-orange-100 text-orange-800", 
      width: "w-1/4"
    }
  ];

  return (
    <section id="flow" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            導入フローについて
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>

        {/* Steps */}
        <div className="relative mb-16">
          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-full shadow-lg border-2 border-gray-200 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2 whitespace-pre-line">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 max-w-24">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-4 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-lg border-2 border-gray-200 flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Phases */}
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
            期間イメージ
          </h3>
          <div className="flex rounded-lg overflow-hidden">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`${phase.width} ${phase.color} py-4 px-3 text-center relative`}
              >
                <div className="text-sm font-medium">
                  {phase.title}
                </div>
                {index < phases.length - 1 && (
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-current border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors"
            data-analytics="flow-cta"
          >
            導入を開始する
            <Play className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Flow;