import { CheckCircle, Circle, Calendar } from 'lucide-react';

const ReleaseTimeline = () => {
  const releases = [
    {
      version: "Ver.1",
      title: "各予約サービスの予約情報の収集と予約確認画面、予約追加機能",
      status: "completed"
    },
    {
      version: "Ver.2", 
      title: "御社独自の予約管理システムの予約情報の収集機能",
      status: "in-progress"
    },
    {
      version: "Ver.3",
      title: "各予約サービスへの満席設定反映機能",
      status: "planned"
    },
    {
      version: "Ver.4",
      title: "各予約サービスへの予約変更反映機能",
      status: "planned"
    },
    {
      version: "Ver.5",
      title: "スタペイ「リアルタイム予約」連携機能",
      status: "planned"
    },
    {
      version: "Ver.6",
      title: "自動座席割当て機能",
      status: "planned"
    }
  ];

  return (
    <section id="release-timeline" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            各機能のリリーススケジュール
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          
          <div className="space-y-8">
            {releases.map((release, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 ${
                  release.status === 'completed' 
                    ? 'bg-green-500 border-green-200' 
                    : release.status === 'in-progress'
                    ? 'bg-yellow-500 border-yellow-200'
                    : 'bg-gray-200 border-gray-300'
                }`}>
                  {release.status === 'completed' ? (
                    <CheckCircle className="w-8 h-8 text-white" />
                  ) : (
                    <Circle className={`w-8 h-8 ${
                      release.status === 'in-progress' ? 'text-white' : 'text-gray-500'
                    }`} />
                  )}
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className={`bg-white p-6 rounded-lg shadow-sm border-l-4 ${
                    release.status === 'completed' 
                      ? 'border-green-500' 
                      : release.status === 'in-progress'
                      ? 'border-yellow-500'
                      : 'border-gray-300'
                  }`}>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        release.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : release.status === 'in-progress'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {release.version}
                      </span>
                      {release.status === 'in-progress' && (
                        <span className="text-sm text-yellow-600 font-medium">開発中</span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {release.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start space-x-2">
            <Calendar className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-yellow-800">
              ※2026年中に全てのバージョンをリリース予定。スケジュールは変更になる可能性があります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReleaseTimeline;