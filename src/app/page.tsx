import { title, description } from "@/config";
import Link from "next/link";

// 抽离所有数据到常量
const FEATURES = [
  {
    title: "快速建站",
    features: [
      "一键创建专业导航站点",
      "基于多维表格的便捷管理后台",
      "灵活的数据组织与分类",
      "个性化站点定制",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "搜索增强",
    features: [
      "站内内容全文检索",
      "智能搜索推荐",
      "搜索历史分析",
      "热门关键词提示",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "流量获取",
    features: [
      "SEO 友好的技术架构",
      "热门关键词排名优化",
      "搜索引擎收录加速",
      "流量数据实时监控",
    ],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "简单管理",
    features: [
      "多维表格数据管理",
      "拖拽式内容编排",
      "批量数据导入导出",
      "便捷的数据更新",
    ],
    gradient: "from-green-500 to-teal-500",
  },
] as const;

const USE_CASES = [
  {
    title: "内容创作者",
    description: "构建个人资源导航，沉淀优质内容，获取稳定流量",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "电商卖家",
    description: "打造垂直领域导航，积累目标用户，提升转化效果",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "独立站长",
    description: "快速搭建专业导航站，通过 SEO 获取持续流量",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "知识管理",
    description: "整理和分享行业资源，建立个人品牌影响力",
    gradient: "from-teal-500 to-green-500",
  },
] as const;

const SHOWCASES = [
  {
    title: "开发者导航",
    description: "汇集优质开发资源，助力程序员提升效率",
    image:
      "https://placehold.co/600x400/2563eb/ffffff?text=Developer+Navigation",
    url: "#",
    stats: { visits: "10K+", links: "500+" },
  },
  {
    title: "设计师资源库",
    description: "精选设计工具与灵感，激发创意灵感",
    image: "https://placehold.co/600x400/9333ea/ffffff?text=Design+Resources",
    url: "#",
    stats: { visits: "8K+", links: "300+" },
  },
  {
    title: "数字营销导航",
    description: "整合营销工具与资源，助力业务增长",
    image: "https://placehold.co/600x400/dc2626/ffffff?text=Marketing+Tools",
    url: "#",
    stats: { visits: "15K+", links: "400+" },
  },
] as const;

const TESTIMONIALS = [
  {
    quote: "Link Way 帮助我快速搭建了专业的导航站点，SEO效果显著提升。",
    author: "张明",
    role: "独立站长",
    avatar: "https://ui-avatars.com/api/?name=张明&background=0D8ABC&color=fff",
  },
  {
    quote: "直观的管理界面，强大的搜索功能，是管理资源的得力助手。",
    author: "李华",
    role: "内容创作者",
    avatar: "https://ui-avatars.com/api/?name=李华&background=2A9D8F&color=fff",
  },
  {
    quote: "数据分析功能帮助我更好地了解用户需求，持续优化内容。",
    author: "王芳",
    role: "电商卖家",
    avatar: "https://ui-avatars.com/api/?name=王芳&background=E9C46A&color=fff",
  },
] as const;

const HERO_BUTTONS = [
  {
    text: "开始使用 Link Way",
    href: "#",
    variant: "primary",
    icon: "🚀",
  },
  {
    text: "查看演示",
    href: "https://demo.linkway.site",
    variant: "secondary",
    icon: (
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
] as const;

const CTA_BUTTONS = [
  {
    text: "开始使用",
    href: "#",
    variant: "light",
  },
  {
    text: "查看源码",
    href: "https://github.com/wangrunlin/linkway",
    variant: "dark",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto p-4 py-16">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[60vh] text-center mb-24 space-y-8">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* 优化后的按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-in-up">
            {HERO_BUTTONS.map((button) => (
              <Link
                key={button.text}
                href={button.href}
                className="w-full sm:w-auto"
              >
                <button
                  className={`
                    w-full px-6 sm:px-8 py-3 sm:py-4 rounded-full
                    text-base sm:text-lg font-medium
                    transform hover:scale-105 transition-all duration-300
                    shadow-lg hover:shadow-xl
                    inline-flex items-center justify-center
                    ${
                      button.variant === "primary"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
                    }
                  `}
                >
                  {button.icon && button.icon} {button.text}
                </button>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            核心特点
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl 
                  transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div
                    className={`h-1 w-20 mb-6 rounded bg-gradient-to-r ${feature.gradient}`}
                  />
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <ul className="space-y-4">
                    {feature.features.map((item) => (
                      <li
                        key={item}
                        className="text-gray-600 dark:text-gray-300 flex items-center"
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            适用场景
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {USE_CASES.map((useCase) => (
              <div
                key={useCase.title}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl 
                  transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div
                    className={`h-1 w-20 mb-6 rounded bg-gradient-to-r ${useCase.gradient}`}
                  />
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Showcase Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            优秀案例展示
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SHOWCASES.map((showcase) => (
              <div
                key={showcase.title}
                className="group hover:scale-105 transition-all duration-300"
              >
                <Link href={showcase.url}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-48">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={showcase.image}
                        alt={showcase.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                        {showcase.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {showcase.description}
                      </p>
                      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                        <span>月访问量 {showcase.stats.visits}</span>
                        <span>收录链接 {showcase.stats.links}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section for Social Proof */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            用户反馈
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 mr-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">准备好开始了吗？</h2>
              <p className="text-xl mb-12 text-blue-100">
                立即体验 Link Way，开启您的导航站构建之旅
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {CTA_BUTTONS.map((button) => (
                  <Link
                    key={button.text}
                    href={button.href}
                    className="w-full sm:w-auto"
                  >
                    <button
                      className={`
                        w-full px-8 py-4 rounded-full text-lg font-medium
                        transform hover:scale-105 transition-all duration-300
                        shadow-lg hover:shadow-xl
                        ${
                          button.variant === "light"
                            ? "bg-white text-blue-600 hover:bg-blue-50"
                            : "bg-gray-900 text-white hover:bg-gray-800"
                        }
                      `}
                    >
                      {button.text}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
