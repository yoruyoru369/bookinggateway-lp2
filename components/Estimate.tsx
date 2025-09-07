'use client';

import { CheckCircle } from 'lucide-react';

const Estimate = () => {
  return (
    <section id="estimate" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">お見積り例</h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
        </div>

        {/* 補足バナー */}
        <div className="mt-6 bg-sky-700 text-white text-center rounded-xl py-4 px-6">
          ※代理店活動補給金制度もご活用いただけます。
        </div>
      </div>
    </section>
  );
};

export default Estimate;
