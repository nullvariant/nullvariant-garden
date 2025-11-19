# Architecture Overview

このドキュメントでは、nullvariant-gardenプロジェクトのアーキテクチャ概要を説明します。

## 目的

このリポジトリは、Null;Variantが発信する思想・哲学・作品などを展示する空間です。

## 技術スタック

### コア技術

- **Astro**: 静的サイト生成フレームワーク
  - Islands Architectureによる最適化されたJavaScript配信
  - Markdown/MDXによるコンテンツ管理
  - 柔軟なコンポーネント統合（React/Vue/Svelte等）

- **Tailwind CSS**: ユーティリティファーストのCSSフレームワーク
  - カスタマイズ可能なデザインシステム
  - レスポンシブデザインの容易な実装

- **Pagefind**: クライアントサイド検索エンジン
  - ビルド時にインデックス生成
  - 高速な全文検索機能

### 外部サービス統合

以下の機能は、信頼できる外部サービスに委託しています：

- **認証**: Clerk / Auth0 / Supabase Auth など
- **決済**: Stripe
- **メール配信**: AWS SES / SendGrid など

## アーキテクチャ原則

### 1. データ主権の重視

- 独自ドメインで運用
- コンテンツの源泉そのものはプライベートリポジトリで管理
- 個人情報などのデータは含まない

### 2. 責任範囲の明確化

責任の範囲：

- コンテンツ生成 → Astro（当リポジトリの範囲）
- 決済処理 → Stripe（セキュリティ責任を委任）
- メール送達 → AWS SES/SendGrid（到達率・スパム対策を委任）
- 認証システム → Clerk/Auth0（セキュリティ責任を委任）

### 3. テーマ着せ替えアーキテクチャ

複数のAstroテーマを柔軟に切り替え可能な設計：

- コンテンツとテーマの分離
- テーマ変更時の影響を最小化
- 将来的に、最も最適化されたテンプレートを生み出すことを見据えた設計

### 4. 静的サイト生成

- ビルド時に全ページを生成
- CDN配信による高速なページ表示
- サーバーサイドの運用コストを削減

## プロジェクト構造

```
nullvariant-garden/
├── src/
│   ├── components/      # 再利用可能なAstroコンポーネント
│   ├── layouts/         # ページレイアウトテンプレート
│   ├── pages/           # ルーティング（ファイルベース）
│   ├── data/            # コンテンツ（Markdown/MDX）
│   │   ├── blog/        # ブログ投稿
│   │   └── authors/     # 著者情報
│   ├── config/          # サイト設定
│   │   ├── siteSettings.json.ts
│   │   └── translationData.json.ts
│   └── styles/          # グローバルスタイル
├── public/              # 静的アセット（そのまま配信）
│   ├── images/
│   └── favicons/
└── dist/                # ビルド出力（生成される）
```

## デプロイメント

### Cloudflare Pages

- GitHubリポジトリと連携
- 自動ビルド・デプロイ
- カスタムドメイン（variant.fit）で配信
- CDNによる高速配信

### ビルドプロセス

1. `npm run build` で静的サイトを生成
2. Pagefindで検索インデックスを生成
3. Cloudflare Pagesが自動的にデプロイ

## コンテンツ管理

### Markdown/MDX

- 標準的なMarkdown形式でコンテンツを記述
- Front Matter（YAML）でメタデータを管理
- MDXにより、ReactコンポーネントをMarkdown内で使用可能

### コンテンツの組織化

- `/src/data/blog/` - ブログ投稿
- `/src/data/authors/` - 著者情報
- `/src/data/otherPages/` - その他のページ

## 多言語対応

- i18n設定により複数言語に対応
- `npm run config-i18n` で言語設定を構成
- 言語別のルーティングとコンテンツ管理

## セキュリティ

- 静的サイト生成により、サーバーサイドの脆弱性を排除
- 認証・決済は信頼できる外部サービスに委託
- HTTPS強制（Cloudflare Pagesの標準機能）

## パフォーマンス

- Islands Architectureによる最適化されたJavaScript配信
- ビルド時の最適化（画像最適化、コード分割等）
- CDN配信による高速なページ表示

---

_Last Updated: 2025-11-19_

