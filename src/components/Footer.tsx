import { siteName } from "@/config";
import Link from "next/link";

const FRIEND_LINKS = [
  { name: "Leo's Blog", url: "https://alin.run", description: "作者个人博客" },
  { name: "AI Video Generator", url: "https://aivideogenerator.best", description: "AI 视频生成工具" },
  { name: "MakeImg", url: "https://makeimg.ai", description: "AI 图片生成" },
];

const RESOURCES = [
  { name: "文档", url: "https://github.com/wangrunlin/linkway#readme" },
  { name: "更新日志", url: "https://github.com/wangrunlin/linkway/releases" },
  { name: "问题反馈", url: "https://github.com/wangrunlin/linkway/issues" },
];

const SOCIAL = [
  { name: "GitHub", url: "https://github.com/wangrunlin/linkway" },
  { name: "Twitter", url: "https://twitter.com/AlinWRL" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-white hover:text-emerald-400 transition-colors">
              {siteName}
            </Link>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              专业的导航站构建平台，帮助你快速搭建专业的导航网站
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">资源</h3>
            <ul className="space-y-3">
              {RESOURCES.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">社交</h3>
            <ul className="space-y-3">
              {SOCIAL.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Friend Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">友情链接</h3>
            <ul className="space-y-3">
              {FRIEND_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                    title={item.description}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">
              &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm text-slate-500 hover:text-white transition-colors"
              >
                首页
              </Link>
              <Link
                href="/about"
                className="text-sm text-slate-500 hover:text-white transition-colors"
              >
                关于
              </Link>
              <Link
                href="https://github.com/wangrunlin/linkway"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 hover:text-white transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
