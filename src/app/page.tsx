import { title, description } from "@/config";
import Link from "next/link";

// Lucide-style SVG icons
const Icons = {
  rocket: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
  play: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="10 8 16 12 10 16 10 8"/>
    </svg>
  ),
  github: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  zap: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  search: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
  ),
  trendingUp: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  ),
  layers: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  arrowRight: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
  ),
};

const FEATURES = [
  {
    title: "快速建站",
    description: "一键创建专业导航站点，基于多维表格的便捷管理后台",
    icon: Icons.zap,
    accent: "from-amber-500 to-orange-600",
  },
  {
    title: "智能搜索",
    description: "站内全文检索，智能推荐，搜索历史分析",
    icon: Icons.search,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "流量增长",
    description: "SEO 友好架构，关键词优化，搜索引擎收录加速",
    icon: Icons.trendingUp,
    accent: "from-sky-500 to-blue-600",
  },
  {
    title: "简单管理",
    description: "拖拽式编排，批量导入导出，便捷数据更新",
    icon: Icons.layers,
    accent: "from-violet-500 to-purple-600",
  },
] as const;

const USE_CASES = [
  { title: "内容创作者", description: "构建个人资源导航，沉淀优质内容" },
  { title: "电商卖家", description: "打造垂直领域导航，积累目标用户" },
  { title: "独立站长", description: "快速搭建专业导航站，获取持续流量" },
  { title: "知识管理", description: "整理分享行业资源，建立品牌影响力" },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-[128px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-sky-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-violet-500/15 rounded-full blur-[128px]" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-400 w-fit mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            开源免费 · MIT License
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block text-white">{title.split(' - ')[0]}</span>
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400 text-transparent bg-clip-text">
              连接无限可能
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://github.com/wangrunlin/linkway"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {Icons.github}
              <span>开始使用</span>
              <span className="group-hover:translate-x-1 transition-transform">{Icons.arrowRight}</span>
            </Link>
            <Link
              href="https://github.com/wangrunlin/linkway#demo"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 font-semibold hover:bg-white/10 transition-colors cursor-pointer"
            >
              {Icons.play}
              <span>查看演示</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-16 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-white">4+</div>
              <div className="text-sm text-slate-500">GitHub Stars</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">MIT</div>
              <div className="text-sm text-slate-500">开源协议</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">Next.js</div>
              <div className="text-sm text-slate-500">技术栈</div>
            </div>
          </div>
        </section>

        {/* Features Section - Bento Grid */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">核心特点</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              专为内容创作者和电商从业者打造的导航站构建平台
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.title}
                className={`group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 cursor-pointer ${
                  index === 0 ? 'md:row-span-2' : ''
                }`}
              >
                {/* Icon with gradient background */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.accent} mb-6`}>
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500">
                  {Icons.arrowRight}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">适用场景</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              无论你是谁，Link Way 都能帮你快速搭建专业导航站
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {USE_CASES.map((useCase) => (
              <div
                key={useCase.title}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-sky-600/20 to-violet-600/20" />
            <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-xl" />
            
            {/* Content */}
            <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                准备好开始了吗？
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-10">
                Link Way 完全开源免费，立即开始构建你的导航站
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://github.com/wangrunlin/linkway#quick-start"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  {Icons.rocket}
                  <span>快速开始</span>
                </Link>
                <Link
                  href="https://github.com/wangrunlin/linkway"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 font-semibold hover:bg-white/20 transition-colors cursor-pointer"
                >
                  {Icons.github}
                  <span>查看源码</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
