'use client';

import { useState } from 'react';
import { Calculator, DollarSign } from 'lucide-react';

const Estimate = () => {
  const [revenue, setRevenue] = useState<string>('');
  const [subsidyAmount, setSubsidyAmount] = useState<number>(0);

  const calculateSubsidy = (revenueAmount: number) => {
    if (revenueAmount >= 30000000) {
      return 1500000;
    } else if (revenueAmount >= 22500000) {
      return 1125000;
    } else if (revenueAmount >= 15000000) {
      return 750000;
    } else {
      return 0;
    }
  };

  const handleRevenueChange = (value: string) => {
    setRevenue(value);
    const revenueAmount = parseInt(value.replace(/,/g, ''));
    if (!isNaN(revenueAmount)) {
      setSubsidyAmount(calculateSubsidy(revenueAmount));
    } else {
      setSubsidyAmount(0);
    }
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString('ja-JP');
  };

  const premiumTotal = 3300000; // 24ヶ月総額（税込）
  const actualCost = premiumTotal - subsidyAmount;
  const subsidyRate = subsidyAmount > 0 ? Math.round((subsidyAmount / premiumTotal) * 100) : 0;

  return (
    <section id="estimate" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            簡易お見積りツール
          </h2>
          <p className="text-lg text-gray-600">
            年商を入力して、該当する補助金額と実質負担額を確認できます
          </p>
          <div className="w-24 h-1 bg-sky-600 mx-auto mt-6"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="w-6 h-6 text-sky-600" />
                <h3 className="text-xl font-semibold text-gray-900">年商を入力してください</h3>
              </div>
              
              <div className="mb-6">
                <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-2">
                  年商（万円）
                </label>
                <input
                  type="text"
                  id="revenue"
                  value={revenue}
                  onChange={(e) => handleRevenueChange(e.target.value)}
                  placeholder="例: 3000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-lg"
                />
                <p className="text-xs text-gray-500 mt-1">
                  ※半角数字で入力してください
                </p>
              </div>

              {/* Subsidy brackets */}
              <div className="space-y-2 text-sm text-gray-600">
                <p className="font-medium text-gray-800 mb-2">補助金額の基準</p>
                <div className="space-y-1">
                  <p>• 年商1,500万円以上 → 75万円</p>
                  <p>• 年商2,250万円以上 → 112.5万円</p>
                  <p>• 年商3,000万円以上 → 150万円</p>
                </div>
              </div>
            </div>

            {/* Result Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">計算結果</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">プレミアムプラン24ヶ月総額</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {formatNumber(premiumTotal)}円
                  </div>
                  <div className="text-xs text-gray-500">（税込）</div>
                </div>

                {subsidyAmount > 0 && (
                  <>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="text-sm text-green-700 mb-1">IT導入補助金</div>
                      <div className="text-2xl font-bold text-green-600">
                        -{formatNumber(subsidyAmount)}円
                      </div>
                      <div className="text-xs text-green-600">
                        （総額の{subsidyRate}%相当）
                      </div>
                    </div>

                    <div className="bg-sky-50 p-4 rounded-lg border border-sky-200">
                      <div className="text-sm text-sky-700 mb-1">実質ご負担額</div>
                      <div className="text-3xl font-bold text-sky-600">
                        {formatNumber(actualCost)}円
                      </div>
                      <div className="text-xs text-sky-600">
                        （税込・概算）
                      </div>
                    </div>
                  </>
                )}

                {revenue && subsidyAmount === 0 && (
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <div className="text-sm text-yellow-700 mb-1">補助金対象外</div>
                    <div className="text-sm text-yellow-600">
                      年商1,500万円以上で補助金の対象となります
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-xs text-blue-800">
                  ※概算金額です。正確な金額は個別にお見積りいたします。
                  <br />
                  ※補助金の適用には審査があります。
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors"
              data-analytics="estimate-cta"
            >
              詳細なお見積りを依頼
              <Calculator className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimate;