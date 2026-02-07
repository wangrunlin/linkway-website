import { siteName } from "@/config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4 py-8 md:h-20 md:flex-row md:justify-between md:py-0">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <Link 
              href="/"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              首页
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              关于
            </Link>
            <Link
              href="https://github.com/wangrunlin/linkway"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </Link>
          </div>
          
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
