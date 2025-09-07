import { Users, Mail, Key, AlertTriangle, Clock, Shield } from 'lucide-react';

const SetupCoop = () => {
  const cooperationItems = [
    {
      icon: <Users className="w-6 h-6 text-sky-600" />,
      text: "ご利用中の予約サービスをお知らせください"
    },
    {
      icon: <Mail className="w-6 h-6 text-green-600" />,
      text: "BGと連携させる予約サービスの注文メールをご提供ください"
    },
    {
      icon: <Key className="w-6 h-6 text-purple-600" />,
      text: "BGと連携させる予約サービスの管理画面へのログイン情報をご提供ください"
    }
  ];

  return (
    <section id="setup-coop" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            各予約サービスとの連携設定のご協力
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Cooperation Items */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">ご対応事項</h3>
            <div className="space-y-6">
              {cooperationItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-gray-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Setup Notes */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">初期設定時の注意</h3>
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">深夜帯作業について</h4>
                    <p className="text-sm text-yellow-700">
                      初期設定の際、予約サービスに弊社開発担当がログインいたします（深夜帯作業）。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">動作確認について</h4>
                    <p className="text-sm text-blue-700">
                      動作確認のため、未来日で仮の予約を入れ、キャンセルを行います。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">詳細連絡</h4>
                    <p className="text-sm text-green-700">
                      詳細は弊社開発担当からご連絡します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-12 bg-white border-2 border-sky-200 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-sky-600" />
            <h3 className="text-lg font-semibold text-sky-900">セキュリティについて</h3>
          </div>
          <p className="text-sm text-sky-800 mb-3">
            お客様の大切な情報を安全にお取り扱いするため、以下の対策を講じております：
          </p>
          <ul className="text-sm text-sky-700 space-y-1 ml-6">
            <li>• SSL暗号化通信による情報保護</li>
            <li>• 作業時間の事前調整</li>
            <li>• 作業完了後の報告書提出</li>
            <li>• 情報の適切な管理・削除</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SetupCoop;