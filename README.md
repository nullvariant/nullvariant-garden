# nullvariant-garden

個人ウェブサイト（会員サイト）プロジェクト。Astroベースの静的サイト生成により、自分の作品を公開・共有する場として構築されています。

> 📦 **このリポジトリは [nullvariant-atelier](https://github.com/nullvariant/nullvariant-atelier) のサブモジュールです**  
> 詳細な設計思想・意思決定記録（ADR）は、PRIVATEリポジトリ（nullvariant-atelier）で管理されています。

---

## 📖 概要

このリポジトリは、Null;Variantが発信する思想・哲学・作品などを展示する空間です。

### 技術スタック

- **静的サイト生成**: [Astro](https://astro.build/)
- **スタイリング**: Tailwind CSS
- **コンテンツ管理**: Markdown + MDX
- **検索機能**: Pagefind
- **デプロイ**: Cloudflare Pages

---

## 🚀 セットアップ手順

### 前提条件

- Node.js 18以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 初回ビルド（動作確認）
npm run build

# 検索機能のセットアップ（OS別）
# macOS/Linux:
npm run osxsearch

# Windows:
npm run winsearch

# 開発サーバーの起動
npm run dev
```

開発サーバーは `http://localhost:4321` で起動します。

### 主要コマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用ビルドを生成 |
| `npm run preview` | ビルド結果をプレビュー |
| `npm run config-i18n` | 多言語設定を構成 |

---

## 📂 プロジェクト構成

```
.
├── src/
│   ├── components/     # Astroコンポーネント
│   ├── layouts/        # レイアウトテンプレート
│   ├── pages/          # ページルーティング
│   ├── data/           # コンテンツ（Markdown/MDX）
│   └── config/         # サイト設定
├── public/             # 静的アセット
└── dist/              # ビルド出力（生成される）
```

---

## 🎨 設計思想

このプロジェクトの設計思想は、以下の原則に基づいています：

### データ主権の重視

- 独自ドメインで運用
- コンテンツの源泉そのものはプライベートリポジトリで管理
- 個人情報などのデータは含まない

### 責任範囲の明確化

- コンテンツ生成は当リポジトリの範囲
- 認証・決済・メール配信は信頼できる外部サービスに委託

### テーマ着せ替えアーキテクチャ

- 複数のAstroテーマを柔軟に切り替え可能
- コンテンツとテーマの分離により、テーマ変更時の影響を最小化
- 将来的に、最も最適化されたテンプレートを生み出すことを見据えた設計

> **📦 詳細な設計思想・意思決定記録（ADR）は、PRIVATEリポジトリ（[nullvariant-atelier](https://github.com/nullvariant/nullvariant-atelier)）で管理されています。**  
> アクセス制限により公開されていませんが、このリポジトリは公開プロダクトとして、個人ウェブサイトを提供しています。

詳細は [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) を参照してください。

---

## 🔗 外部リンク

- **Astro Documentation**: https://docs.astro.build
- **Cloudflare Pages**: https://pages.cloudflare.com

---

_Last Updated: 2025-11-19_
