export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Build A Striker Wiki",
  shortName: "Build A Striker",
  logoText: "BS",
  tagline: "Guides, Codes & Squad Building for the Roblox Striker Game",
  description: "Build A Striker guides for Roblox players: squad-building strategies, player attributes, progression tips, gameplay walkthroughs, and verified codes.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://build-a-striker.wiki",
  supportEmail: "support@build-a-striker.wiki",
  gameUrl: "https://www.roblox.com/games/98256320592611/",
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
