import { AlertTriangle, Clock, Users, Phone, MessageCircle } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      text: "各予約サイトごとにログインして管理する必要があり、時間と労力がかかる"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      text: "同じ時間帯に複数の予約が入るリスクがある"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      text: "オンライン予約と電話予約を手作業で調整する必要があり、スタッフの負担が増える"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
      text: "予約情報が分散しているため、顧客からの問い合わせ時に素早く対応できない"
    }
  ];

  return (
    <section id="problem" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            こんなお悩みはありませんか？
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {problem.icon}
                </div>
                <p className="text-gray-700 leading-relaxed">{problem.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mini CTA */}
        <div className="text-center mt-12">
          <a
            href="#benefits"
            className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
            data-analytics="problem-cta"
          >
            解決策を見る
            <Phone className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Problem;