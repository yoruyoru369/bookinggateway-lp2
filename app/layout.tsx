import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '予約統合システム｜ブッキングゲートウェイ（BookingGateway）',
  description: '食べログ・ぐるなび・HOT PEPPERなど複数の予約サービスを一元管理。手動作業を減らし、ダブルブッキングを防ぎ、顧客対応を迅速化。IT導入補助金対応の料金プランで導入を後押し。',
  keywords: '予約システム,予約管理,飲食店,IT導入補助金,ホットペッパー,ぐるなび,食べログ',
  openGraph: {
    title: '予約統合システム｜ブッキングゲートウェイ（BookingGateway）',
    description: '食べログ・ぐるなび・HOT PEPPERなど複数の予約サービスを一元管理。手動作業を減らし、ダブルブッキングを防ぎ、顧客対応を迅速化。IT導入補助金対応の料金プランで導入を後押し。',
    url: 'https://bookinggateway.jp',
    siteName: 'BookingGateway',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '予約統合システム BookingGateway',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '予約統合システム｜ブッキングゲートウェイ（BookingGateway）',
    description: '食べログ・ぐるなび・HOT PEPPERなど複数の予約サービスを一元管理。手動作業を減らし、ダブルブッキングを防ぎ、顧客対応を迅速化。IT導入補助金対応の料金プランで導入を後押し。',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://bookinggateway.jp',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://bookinggateway.jp/#organization',
      name: 'StandardRacing株式会社',
      url: 'https://bookinggateway.jp',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '日本橋小舟町9-3',
        addressLocality: '中央区',
        addressRegion: '東京都',
        addressCountry: 'JP',
      },
      foundingDate: '2023-06-01',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: '営業',
        telephone: '+81-3-XXXX-XXXX',
        email: 'contact@bookinggateway.jp'
      }
    },
    {
      '@type': 'Product',
      '@id': 'https://bookinggateway.jp/#product',
      name: 'BookingGateway',
      description: '複数の予約サービスを一元管理する予約統合システム',
      brand: {
        '@id': 'https://bookinggateway.jp/#organization'
      },
      offers: {
        '@type': 'Offer',
        price: '125000',
        priceCurrency: 'JPY',
        priceValidUntil: '2024-12-31',
        availability: 'https://schema.org/InStock'
      }
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://bookinggateway.jp/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'どの予約サービスに対応していますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'HOT PEPPER、ぐるなび、食べログ、Googleカレンダー、御社ホームページ、一休、インスタグラム、スタペイ、Retty、トレタ、LINEなど、その他順次対応しています。'
          }
        },
        {
          '@type': 'Question',
          name: 'スタペイ連携はいつ利用できますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '連携は段階的に提供予定です。Ver.5でスタペイ「リアルタイム予約」連携機能をリリース予定です。'
          }
        },
        {
          '@type': 'Question',
          name: 'IT導入補助金は使えますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'はい、本システムはIT導入補助金の対象です。'
          }
        },
        {
          '@type': 'Question',
          name: '24ヶ月後の料金は？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'プレミアムプラン終了後は、スタンダードプラン月額5,000円（税別／1店舗ごと）に移行予定です。'
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        {/* GTM Snippet - TODO: 実際のGTM-IDに置き換え */}
        {/* 
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={notoSansJP.className}>
        {/* GTM NoScript - TODO: 実際のGTM-IDに置き換え */}
        {/* 
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        */}
        {children}
      </body>
    </html>
  );
}