import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { siteName } from "@/config";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">{siteName}</span>
          </Link>
          
          <nav className="flex items-center gap-6">
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
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
} 