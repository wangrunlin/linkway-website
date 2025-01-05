export const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Link Way";

export const title =
  process.env.NEXT_PUBLIC_TITLE || "Link Way - 连接无限可能的智能导航平台";

export const description =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "Link Way 是一款专为内容创作者和电商从业者打造的导航站构建平台。基于先进的多维表格数据库，让用户能够轻松搭建专业的导航网站和独立站点，并通过强大的 SEO 优化获取持续稳定的流量。";

// Last baseURL
const defaultBaseURL = "https://linkway.alin.run";

// Vercel baseURL, make sure it's a valid URL
const VERCEL_URL =
  process.env.NEXT_PUBLIC_VERCEL_URL &&
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

// meta base url
export const baseURL =
  process.env.NEXT_PUBLIC_URL ||
  VERCEL_URL ||
  (globalThis.location && globalThis.location.origin) ||
  defaultBaseURL;
