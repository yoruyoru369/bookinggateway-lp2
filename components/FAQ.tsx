'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "どの予約サービスに対応していますか？",
      answer: "HOT PEPPER、ぐるなび、食べログ、Googleカレンダー、御社ホームページ、一休、インスタグラム、スタペイ、Retty、トレタ、LINEなど、その他順次対応しています。詳しくは対応サービス一覧をご覧ください。"
    },
    {
      question: "スタペイ連携はいつ利用できますか？",
      answer: "連携は段階的に提供予定です。Ver.5でスタペイ「リアルタイム予約」連携機能をリリース予定です。2026年中の提供を目指しています。詳しくはリリース計画をご確認ください。"
    },
    {
      question: "IT導入補助金は使えますか？",
      answer: "はい、本システムはIT導入補助金の対象です。年商に応じて75〜150万円の補助（上限/1社あたり）が受けられます。スタペイと同じ支援事業者のため、申請もスムーズに行えます。"
    },
    {
      question: "24ヶ月後の料金は？",
      answer: "プレミアムプラン終了後は、スタンダードプラン月額5,000円（税別／1店舗ごと）に移行予定です。店舗数によってはプレミアムプラン継続がお得な場合もありますので、ご相談ください。"
    },
    {
      question: "導入までどのくらいの期間がかかりますか？",
      answer: "申込からシステム利用開始まで、IT導入補助金の申請期間を含めて約2-3ヶ月程度です。各種準備とシステム設定を並行して進めることで、スムーズな導入を実現しています。"
    },
    {
      question: "既存の予約システムとの連携は可能ですか？",
      answer: "はい、御社独自の予約管理システムとの連携も可能です。Ver.2でカスタマイズ対応による自動反映機能を提供予定です。詳細はお気軽にお問い合わせください。"
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            よくある質問
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-100">
                  <div className="pl-8">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-sky-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              他にご質問はございませんか？
            </h3>
            <p className="text-gray-600 mb-4">
              お気軽にお問い合わせください。担当営業が詳しくご説明いたします。
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
              data-analytics="faq-cta"
            >
              お問い合わせする
              <HelpCircle className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;