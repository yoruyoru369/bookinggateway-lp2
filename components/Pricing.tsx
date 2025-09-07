import { Star, CheckCircle, Clock, Users } from 'lucide-react';

const Pricing = () => {
  const features = [
    "利用店舗数：上限なし",
    "初期費用：含む", 
    "利用期限：24ヶ月",
    "月額利用料：125,000円",
    "24ヶ月終了後：スタンダードプラン 月額5,000円（税別／1店舗ごと）への移行"
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            料金プラン
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Pricing Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl p-8 border-2 border-sky-200 relative overflow-hidden">
              {/* Premium Badge */}
              <div className="absolute top-0 right-0 bg-sky-600 text-white px-4 py-2 text-sm font-semibold rounded-bl-lg">
                <Star className="w-4 h-4 inline mr-1" />
                プレミアム
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">プレミアムプラン</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-sky-600">125,000</span>
                  <span className="text-lg text-gray-600 ml-1">円/月</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">（税別）</p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="mt-6 space-y-3">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <Clock className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-yellow-800">
                    ※プレミアムプラン終了前に今後のご利用についてご確認いたします。
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <Users className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-blue-800">
                    ※店舗数によってはプレミアムプラン継続がお得です。ご相談ください。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Estimate */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">お見積り例</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              {/* プラン利用料 */}
              <div>
                <div className="text-center font-bold text-gray-900 mb-3">プラン利用料</div>
                <div className="overflow-hidden rounded-lg border-2 border-gray-300">
                  <table className="w-full text-sm lg:text-base">
                    <thead>
                      <tr className="text-white">
                        <th className="bg-cyan-500/90 px-4 py-3 text-left w-1/4">個数</th>
                        <th className="bg-cyan-500/90 px-4 py-3 text-left w-1/4">単価</th>
                        <th className="bg-cyan-500/90 px-4 py-3 text-left w-1/2">金額</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-300">
                        <td className="px-4 py-3">24か月</td>
                        <td className="px-4 py-3">¥125,000</td>
                        <td className="px-4 py-3 font-semibold">¥3,000,000</td>
                      </tr>
                      <tr className="border-t border-gray-300">
                        <td className="px-4 py-3 bg-gray-50 font-medium" colSpan={2}>消費税</td>
                        <td className="px-4 py-3 bg-gray-50">¥300,000</td>
                      </tr>
                      <tr className="border-t-2 border-gray-400">
                        <td className="px-4 py-3 font-bold" colSpan={2}>合計金額</td>
                        <td className="px-4 py-3 font-extrabold text-gray-900">¥3,300,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* IT導入補助金 */}
              <div>
                <div className="text-center font-bold text-gray-900 mb-3">IT導入補助金</div>
                <div className="overflow-hidden rounded-lg border-2 border-gray-300">
                  <table className="w-full text-sm lg:text-base">
                    <thead>
                      <tr className="text-white">
                        <th className="bg-sky-700 px-4 py-3 text-left w-1/2">項目</th>
                        <th className="bg-sky-700 px-4 py-3 text-left w-1/6">個数</th>
                        <th className="bg-sky-700 px-4 py-3 text-left w-1/6">単価</th>
                        <th className="bg-sky-700 px-4 py-3 text-left w-1/6">補助額</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-300">
                        <td className="px-4 py-3">IT導入補助金（1/2以内）</td>
                        <td className="px-4 py-3">1</td>
                        <td className="px-4 py-3">¥1,500,000</td>
                        <td className="px-4 py-3 font-semibold">¥1,500,000</td>
                      </tr>
                      <tr className="border-t-2 border-gray-400">
                        <td className="px-4 py-3 bg-gray-50 font-bold" colSpan={3}>受給合計</td>
                        <td className="px-4 py-3 bg-gray-50 font-extrabold text-gray-900">¥1,500,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
                data-analytics="pricing-cta"
              >
                詳細を問い合わせる
                <CheckCircle className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
