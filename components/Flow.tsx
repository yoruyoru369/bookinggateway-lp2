import { Play, ClipboardCheck, Users, Laptop, Search, Gift } from 'lucide-react';

const Flow = () => {
  const stepTitles = [
    '申込',
    'LINE案内',
    'IT導入補助金\n申請サポート',
    'システム\nアカウント準備',
    'システム\n初期設定',
    '運用開始',
  ];

  const iconRow = [
    <ClipboardCheck key="i1" className="w-16 h-16 text-cyan-500" />,
    <Users key="i2" className="w-16 h-16 text-cyan-500" />,
    <Laptop key="i3" className="w-16 h-16 text-cyan-500" />,
    <Search key="i4" className="w-16 h-16 text-cyan-500" />,
    <Laptop key="i5" className="w-16 h-16 text-cyan-500" />,
    <Gift key="i6" className="w-16 h-16 text-cyan-500" />,
  ];

  return (
    <section id="flow" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            担当営業にご連絡ください。
          </h2>
          <p className="text-lg text-gray-600">
            LINEを利用して、システムアカウントの開設案内やIT導入補助金の申請サポートを行います。
          </p>
          <div className="w-24 h-1 bg-sky-600 mx-auto mt-6"></div>
        </div>

        {/* Chevron Steps */}
        <div className="relative mb-12">
          {/* Desktop chevron bar */}
          <div className="hidden lg:flex w-full overflow-x-hidden">
            {stepTitles.map((title, idx) => (
              <div key={idx} className={`relative flex-1 bg-cyan-400 text-white font-bold text-center py-5 px-6 flex items-center justify-center ${idx === 0 ? 'rounded-l-xl' : ''} ${idx === stepTitles.length - 1 ? 'rounded-r-xl' : ''}`}>
                {/* left divider (slanted) */}
                {idx !== 0 && (
                  <div className="absolute left-0 top-0 h-full w-0 border-t-[30px] border-b-[30px] border-r-[18px] border-t-transparent border-b-transparent border-r-white/70" />
                )}
                <span className="whitespace-pre-line leading-tight">{title}</span>
                {/* arrow head: reverse on last */}
                {idx !== stepTitles.length - 1 ? (
                  <div className="absolute top-0 -right-4 h-full w-0 border-t-[30px] border-b-[30px] border-l-[16px] border-l-cyan-400 border-t-transparent border-b-transparent" />
                ) : (
                  <div className="absolute top-0 -right-4 h-full w-0 border-t-[30px] border-b-[30px] border-r-[16px] border-r-cyan-400 border-t-transparent border-b-transparent" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile stacked steps */}
          <div className="lg:hidden space-y-3">
            {stepTitles.map((title, idx) => (
              <div key={idx} className="relative bg-cyan-400 text-white font-semibold rounded-lg py-3 pl-4 pr-10 flex items-center justify-center text-center">
                <span className="whitespace-pre-line leading-tight">{title}</span>
                {idx !== stepTitles.length - 1 ? (
                  <div className="absolute top-0 -right-3 h-full w-0 border-t-[24px] border-b-[24px] border-l-[12px] border-l-cyan-400 border-t-transparent border-b-transparent" />
                ) : (
                  <div className="absolute top-0 -right-3 h-full w-0 border-t-[24px] border-b-[24px] border-r-[12px] border-r-cyan-400 border-t-transparent border-b-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Icon Row */}
        <div className="hidden lg:grid grid-cols-6 gap-6 justify-items-center mb-10">
          {iconRow.map((IconEl, idx) => (
            <div key={idx}>{IconEl}</div>
          ))}
        </div>

        {/* Timeline Arrows */}
        <div className="mt-4">
          <div className="flex justify-between text-blue-800 text-sm font-semibold mb-3">
            <span>各種準備期間</span>
            <span>IT導入補助金申請期間</span>
            <span>システム利用開始</span>
          </div>
          <div className="space-y-3">
            {[0,1].map((i) => (
              <div key={i} className="relative h-3 bg-blue-700 rounded-full">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-blue-700"></span>
                <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-blue-700"></span>
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
