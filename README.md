# BookingGateway ランディングページ

予約統合システム「BookingGateway」の公式ランディングページです。Next.js 14 (App Router) + TypeScript + Tailwind CSSで構築された、本格的なプロダクション品質のWebサイトです。

## 🚀 特徴

- **フル機能LP**: 16セクションの充実したコンテンツ
- **レスポンシブデザイン**: モバイルファースト設計
- **SEO最適化**: 構造化データ、OGカード対応
- **アクセシビリティ**: WCAG準拠の設計
- **お問い合わせ機能**: バリデーション付きフォーム
- **見積もり計算ツール**: リアルタイム計算機能

## 📦 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Font**: Noto Sans JP

## 🛠 開発環境

### 必要要件
- Node.js 18.0.0以上
- npm または yarn

### インストール・起動

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm run start
```

### 開発URL
- 開発環境: http://localhost:3000

## 📁 プロジェクト構成

```
├── app/
│   ├── layout.tsx          # ルートレイアウト (メタデータ、構造化データ)
│   ├── page.tsx            # メインページ
│   └── api/
│       └── contact/
│           └── route.ts    # お問い合わせAPI
├── components/
│   ├── Header.tsx          # 固定ヘッダー
│   ├── Hero.tsx           # ヒーローセクション
│   ├── Problem.tsx        # 課題セクション
│   ├── Benefits.tsx       # 解決策・メリット
│   ├── Integrations.tsx   # 対応サービス一覧
│   ├── Features.tsx       # 機能一覧
│   ├── ReleaseTimeline.tsx # リリース計画
│   ├── Subsidy.tsx        # IT導入補助金
│   ├── Pricing.tsx        # 料金プラン
│   ├── Estimate.tsx       # 見積もり計算ツール
│   ├── Flow.tsx           # 導入フロー
│   ├── SetupCoop.tsx      # 設定協力
│   ├── Company.tsx        # 会社概要
│   ├── Terms.tsx          # 利用規約
│   ├── CTAContact.tsx     # お問い合わせフォーム
│   ├── FAQ.tsx            # よくある質問
│   └── Footer.tsx         # フッター
└── public/
    └── manifest.json       # PWA manifest
```

## 🎨 デザインシステム

### カラーパレット
- **Primary**: #0EA5E9 (sky-600)
- **Secondary**: #14B8A6 (teal-600) 
- **Accent**: #F97316 (orange-500)
- **Success**: #10B981 (emerald-500)
- **Warning**: #F59E0B (amber-500)
- **Error**: #EF4444 (red-500)

### Typography
- **Font**: Noto Sans JP
- **Weights**: 300, 400, 500, 600, 700

## 📧 お問い合わせAPI

### エンドポイント
`POST /api/contact`

### フィールド
- `companyName`: 会社名 (必須)
- `contactName`: 担当者名 (必須)
- `phone`: 電話番号 (必須)
- `email`: メールアドレス (必須)
- `storeCount`: 店舗数 (必須)
- `reservationServices`: 利用中の予約サービス (必須・複数選択)
- `implementationTiming`: 導入希望時期 (必須)
- `message`: 自由記述 (任意)
- `agreeTerms`: 利用規約同意 (必須)

## 🔧 環境変数

現在は環境変数を使用していませんが、将来的な拡張のため以下の雛形を用意：

```env
# Google Tag Manager (TODO)
NEXT_PUBLIC_GTM_ID=

# メール送信サービス (TODO)
SENDGRID_API_KEY=
RESEND_API_KEY=

# データベース (TODO)
DATABASE_URL=
```

## 📈 今後の実装予定

### 高優先度
- [ ] GTMの実装・設定
- [ ] メール送信機能（SendGrid/Resend）
- [ ] データベース連携（Supabase）
- [ ] 画像最適化・差し替え

### 中優先度
- [ ] A/Bテスト実装
- [ ] チャットボット統合
- [ ] アナリティクス強化
- [ ] パフォーマンス監視

### 低優先度
- [ ] 多言語対応
- [ ] ダークモード対応
- [ ] PWA機能拡張

## 🚀 デプロイ

### Vercel (推奨)
```bash
# Vercel CLIでデプロイ
vercel --prod
```

### その他のプラットフォーム
- Netlify
- AWS Amplify
- Firebase Hosting

## 📝 ライセンス

© StandardRacing株式会社 BookingGateway事業部

## 🤝 コントリビューション

改善提案や不具合報告は、以下までご連絡ください：
- Email: contact@bookinggateway.jp
- 会社: StandardRacing株式会社 BookingGateway事業部# bookinggateway-lp2
