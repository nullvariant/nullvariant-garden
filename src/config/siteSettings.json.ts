/**
 * Global site settings
 */

import { type SiteSettingsProps } from "./types/configDataTypes";

// The below locales need to match what you've put in your `astro.config.mjs` file
export const locales = ["ja", "en"] as const;
export const defaultLocale = "ja" as const;

// localeMap is used to map languages to their respective locales - used for formatDate function
export const localeMap = {
	ja: "ja-JP",
	en: "en-US",
} as const;

// text to show in the language switcher for each locale
export const languageSwitcherMap = {
	ja: "日本語",
	en: "EN",
	// ja: "日本語",
	// en: "English",
} as const;

// site settings that don't change between languages
export const siteSettings: SiteSettingsProps = {
	useViewTransitions: true,
	useAnimations: true,
};

export default siteSettings;
