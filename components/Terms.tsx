import { ExternalLink, FileText, CheckCircle } from 'lucide-react';

const Terms = () => {
  return (
    <section id="terms" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            システムの利用規約
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto"></div>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-sky-100 rounded-full">
              <FileText className="w-12 h-12 text-sky-600" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            ご利用前に必ずご確認ください
          </h3>
          
          <p className="text-lg text-gray-600 mb-8">
            下記よりご確認ください。
          </p>

          <a
            href="/terms"
            className="inline-flex items-center px-8 py-4 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors group shadow-lg"
            data-analytics="terms-cta"
          >
            利用規約を見る
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Terms;
