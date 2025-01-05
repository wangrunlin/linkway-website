import type { Metadata } from "next";
import { title } from "@/config";

export const metadata: Metadata = {
  title: `关于 - ${title}`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <h1 className="mb-8 text-3xl font-bold">关于我们</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">项目简介</h2>
            <p className="mb-4">
              Link Way 是一个专业的导航网站构建工具，旨在帮助用户快速创建、管理和分享他们的链接资源。
              无论是个人博主、内容创作者，还是企业用户，都能通过 Link Way 轻松打造专属的导航平台。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">核心功能</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>快速建站：简单几步即可创建专业的导航网站</li>
              <li>智能搜索：强大的搜索功能，快速定位所需资源</li>
              <li>SEO 优化：内置 SEO 最佳实践，提升网站可见度</li>
              <li>流量分析：详细的访问统计和用户行为分析</li>
              <li>多维管理：支持多维表格形式管理链接资源</li>
              <li>个性定制：丰富的主题和样式选项</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">开源项目</h2>
            <p className="mb-4">
              Link Way 是一个开源项目，我们欢迎社区贡献。项目使用现代化的技术栈，包括 Next.js、
              TypeScript、Tailwind CSS 等。如果您对项目感兴趣，欢迎在 GitHub 上查看源码并参与贡献。
            </p>
            <p>
              项目地址：
              <a 
                href="https://github.com/wangrunlin/linkway" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com/wangrunlin/linkway
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
