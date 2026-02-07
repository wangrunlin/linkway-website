import type { Metadata } from "next";
import { title } from "@/config";
import Link from "next/link";

export const metadata: Metadata = {
  title: `关于 - ${title}`,
};

const TECH_STACK = [
  { name: "Next.js", description: "React 框架", url: "https://nextjs.org" },
  { name: "TypeScript", description: "类型安全", url: "https://typescriptlang.org" },
  { name: "Tailwind CSS", description: "样式框架", url: "https://tailwindcss.com" },
  { name: "Vercel", description: "部署平台", url: "https://vercel.com" },
];

const ROADMAP = [
  { status: "done", title: "基础框架搭建", description: "Next.js + TypeScript + Tailwind CSS" },
  { status: "done", title: "SEO 优化", description: "sitemap、robots.txt、结构化数据" },
  { status: "progress", title: "多维表格集成", description: "支持飞书多维表格作为数据源" },
  { status: "planned", title: "主题系统", description: "多种预设主题和自定义样式" },
  { status: "planned", title: "用户系统", description: "注册登录、个人导航站管理" },
  { status: "planned", title: "数据分析", description: "访问统计、热门链接分析" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">关于 Link Way</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            一个开源的导航站构建平台，帮助你快速搭建专业的导航网站
          </p>
        </div>

        {/* Project Introduction */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-emerald-500 rounded" />
            项目简介
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Link Way 是一个专为内容创作者和电商从业者打造的导航站构建平台。
              基于先进的多维表格数据库，让用户能够轻松搭建专业的导航网站和独立站点，
              并通过强大的 SEO 优化获取持续稳定的流量。
            </p>
            <p>
              无论你是个人博主、独立开发者、电商卖家，还是企业用户，
              都能通过 Link Way 快速打造专属的导航平台，沉淀优质内容，建立品牌影响力。
            </p>
          </div>
        </section>

        {/* Core Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-sky-500 rounded" />
            核心功能
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "⚡", title: "快速建站", desc: "简单几步即可创建专业的导航网站" },
              { icon: "🔍", title: "智能搜索", desc: "强大的搜索功能，快速定位所需资源" },
              { icon: "📈", title: "SEO 优化", desc: "内置 SEO 最佳实践，提升网站可见度" },
              { icon: "📊", title: "流量分析", desc: "详细的访问统计和用户行为分析" },
              { icon: "📋", title: "多维管理", desc: "支持多维表格形式管理链接资源" },
              { icon: "🎨", title: "个性定制", desc: "丰富的主题和样式选项" },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
              >
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-violet-500 rounded" />
            技术栈
          </h2>
          <div className="flex flex-wrap gap-3">
            {TECH_STACK.map((tech) => (
              <Link
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-colors cursor-pointer"
              >
                <span className="font-medium text-white">{tech.name}</span>
                <span className="text-slate-500 ml-2 text-sm">{tech.description}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-amber-500 rounded" />
            开发路线图
          </h2>
          <div className="space-y-4">
            {ROADMAP.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
              >
                <div className={`
                  w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5
                  ${item.status === 'done' ? 'bg-emerald-500/20 text-emerald-400' : ''}
                  ${item.status === 'progress' ? 'bg-amber-500/20 text-amber-400' : ''}
                  ${item.status === 'planned' ? 'bg-slate-500/20 text-slate-400' : ''}
                `}>
                  {item.status === 'done' && '✓'}
                  {item.status === 'progress' && '◐'}
                  {item.status === 'planned' && '○'}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Open Source */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-rose-500 rounded" />
            开源项目
          </h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.1]">
            <p className="text-slate-300 leading-relaxed mb-6">
              Link Way 是一个完全开源的项目，采用 MIT 协议。我们欢迎社区贡献，
              无论是提交 Issue、Pull Request，还是分享使用经验，都是对项目的支持。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://github.com/wangrunlin/linkway"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                查看源码
              </Link>
              <Link
                href="https://github.com/wangrunlin/linkway/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 font-medium hover:bg-white/20 transition-colors cursor-pointer"
              >
                提交 Issue
              </Link>
            </div>
          </div>
        </section>

        {/* Author */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-cyan-500 rounded" />
            关于作者
          </h2>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 flex items-center justify-center text-xl font-bold">
                L
              </div>
              <div>
                <h3 className="font-semibold text-white">Leo Wang</h3>
                <p className="text-sm text-slate-400">独立开发者 / Indie Hacker</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              热爱开源，专注于构建实用的工具和产品。如果你喜欢这个项目，欢迎 Star ⭐
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://alin.run"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                🌐 alin.run
              </Link>
              <Link
                href="https://github.com/wangrunlin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                🐙 GitHub
              </Link>
              <Link
                href="https://twitter.com/AlinWRL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                🐦 Twitter
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
