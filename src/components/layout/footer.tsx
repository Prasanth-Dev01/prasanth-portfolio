import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
export function Footer() {
  return (
    <footer className="border-t border-white/10 py-7">
      <div className="shell flex flex-col justify-between gap-4 text-xs text-zinc-500 sm:flex-row">
        <span>
          © {new Date().getFullYear()} {portfolio.name}
        </span>
        <span>Designed & built with care</span>
        <Link href="#home" className="focus-ring flex items-center gap-1 hover:text-white">
          Back to top <ArrowUpRight size={12} />
        </Link>
      </div>
    </footer>
  );
}
