import { Building, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const navigationItems = [
    { label: '課題', href: '#problem' },
    { label: '解決策', href: '#benefits' },
    { label: '対応サービス', href: '#integrations' },
    { label: '機能', href: '#features' },
    { label: 'リリース計画', href: '#release-timeline' },
    { label: '補助金', href: '#subsidy' },
    { label: '料金', href: '#pricing' },
    { label: '導入フロー', href: '#flow' },
    { label: '会社情報', href: '#company' },
    { label: 'お問い合わせ', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">BookingGateway</h3>
              <p className="text-gray-400">
                複数の予約サービスを一元管理
              </p>
            </div>
            
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Building className="w-5 h-5 text-sky-400" />
                <span>StandardRacing株式会社</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-sky-400" />
                <span>東京都中央区日本橋小舟町9-3</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sky-400" />
                <span>BookingGateway事業部</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">サイトナビゲーション</h4>
            <div className="grid grid-cols-2 gap-2">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-400 hover:text-sky-400 transition-colors text-sm py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">お問い合わせ</h4>
            <div className="space-y-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
              >
                無料相談はこちら
                <Mail className="w-4 h-4 ml-2" />
              </a>
              
              <div>
                <a
                  href="/terms"
                  className="inline-flex items-center text-gray-400 hover:text-sky-400 transition-colors text-sm"
                >
                  利用規約
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © StandardRacing株式会社 BookingGateway事業部
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-xs">
                本サイトの内容は予告なく変更される場合があります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
