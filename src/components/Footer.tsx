import { siteName } from "@/config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 py-6 md:h-16 md:flex-row md:justify-between md:py-0">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <Link 
              href="/"
              className="text-sm font-medium hover:text-foreground/80"
            >
              首页
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-foreground/80"
            >
              关于
            </Link>
            <Link
              href="https://github.com/wangrunlin/linkway"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-foreground/80"
            >
              Github
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
