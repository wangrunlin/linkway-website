import "@/app/globals.css";

import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { baseURL, description, siteName, title } from "@/config";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    template: `%s - ${title}`,
    default: `${title} - 专业的导航网站构建工具 | 一键创建、管理和分享您的链接资源`,
  },
  description: `${description} 提供快速建站、智能搜索、SEO优化、流量分析等全方位功能，助您轻松打造专业的导航网站。支持多维表格管理、个性化定制、数据分析，让您的链接资源管理更高效。`,
  keywords: [
    "导航站点",
    "网站导航",
    "链接管理",
    "SEO优化",
    "流量获取",
    "内容管理",
    "网站建设",
    "Link Way",
    "资源导航",
    "链接分享",
    "导航网站建设",
    "在线导航系统",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192" },
      { url: "/icon-512.png", sizes: "512x512" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
    },
    shortcut: {
      url: "/icon-192.png",
      sizes: "192x192",
      type: "image/png",
    },
  },
  alternates: {
    canonical: baseURL,
  },
  metadataBase: new URL(baseURL),
  openGraph: {
    title,
    description,
    siteName,
    url: baseURL,
    images: [
      {
        url: "/api/og",
        alt: `${siteName} Open Graph Image`,
      },
    ],
    type: "website",
    locale: "zh_CN",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 w-full pt-16">{children}</main>
            <Footer />
          </div>

          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
            <GoogleAnalytics
              gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
            />
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
