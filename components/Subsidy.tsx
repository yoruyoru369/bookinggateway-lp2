import { DollarSign, CheckCircle, FileText, Clock } from 'lucide-react';

const Subsidy = () => {
  const subsidyAmounts = [
    {
      revenue: "1,500万円以上",
      amount: "75万円",
      icon: <DollarSign className="w-6 h-6 text-green-600" />
    },
    {
      revenue: "2,250万円以上", 
      amount: "112.5万円",
      icon: <DollarSign className="w-6 h-6 text-blue-600" />
    },
    {
      revenue: "3,000万円以上",
      amount: "150万円", 
      icon: <DollarSign className="w-6 h-6 text-purple-600" />
    }
  ];

  return (
    <section id="subsidy" className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            IT導入補助金の概要
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            本システムは IT導入補助金の対象。スタペイと同じ支援事業者。申請はスムーズに行えます。
          </p>
          <div className="w-24 h-1 bg-sky-600 mx-auto mt-6"></div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">対象システム</h3>
              <p className="text-sm text-gray-600">BookingGatewayはIT導入補助金の認定対象システムです</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">資料活用</h3>
              <p className="text-sm text-gray-600">スタペイ申込時の資料が利用できます</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">スムーズ申請</h3>
              <p className="text-sm text-gray-600">同じ支援事業者のため申請がスムーズです</p>
            </div>
          </div>
        </div>

        {/* Subsidy amounts table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-sky-600 to-blue-600 px-6 py-4">
            <h3 className="text-xl font-semibold text-white text-center">
              年商別補助金額早見表
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subsidyAmounts.map((item, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    年商 {item.revenue}
                  </div>
                  <div className="text-3xl font-bold text-sky-600">
                    {item.amount}
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    補助金上限
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800 text-center">
            <CheckCircle className="w-4 h-4 inline mr-2" />
            スタペイ申込時の資料が利用できるため、申請準備も効率的に行えます。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subsidy;