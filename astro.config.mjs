import mdx from "@astrojs/mdx";
// import netlify from "@astrojs/netlify";  // Cloudflare Pages用に削除
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
// import keystatic from "@keystatic/astro";  // Cloudflare Pages（静的サイト）では動作しないため削除
import compress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import AutoImport from "astro-auto-import";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://variant.fit",  // カスタムドメインに変更
	// adapter: netlify({  // Cloudflare Pages用に削除（静的サイトなのでアダプター不要）
	// 	imageCDN: false,
	// }),
	// redirects: {  // Keystatic CMS削除に伴いコメントアウト
	// 	"/admin": "/keystatic",
	// },
	// i18n configuration must match src/config/translationData.json.ts
	i18n: {
		defaultLocale: "ja",
		locales: ["ja", "en"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	markdown: {
		shikiConfig: {
			// Shiki Themes: https://github.com/shikijs/shiki/blob/main/docs/themes.md
			theme: "dracula",
			wrap: true,
		},
	},

	integrations: [
		// example auto import component into blog post mdx files
		AutoImport({
			imports: [
				// https://github.com/delucis/astro-auto-import
				"@components/Admonition/Admonition.astro",
				"@components/Newsletter/Newsletter.astro",
			],
		}),
		mdx(),
		react(),
		icon(),
		// keystatic(),  // Cloudflare Pages（静的サイト）では動作しないため削除
		sitemap(),
		compress({
			HTML: true,
			JavaScript: true,
			CSS: false, // enabling this can cause issues
			Image: false, // astro:assets handles this. Enabling this can dramatically increase build times
			SVG: false, // astro-icon handles this
		}),
	],

	vite: {
		plugins: [tailwindcss()],
		// stop inlining short scripts to fix issues with ClientRouter
		build: {
			assetsInlineLimit: 0,
		},
	},
});
