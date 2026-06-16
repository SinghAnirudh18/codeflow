import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';
import { API_BASE } from '../lib/api';

export default function LandingFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#070809] px-5 py-10 text-sm text-slate-500 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-cyan-200">
              <Code2 size={16} />
            </span>
            <span className="font-black">CodeFlow</span>
          </Link>
          <p className="mt-3 max-w-md">
            Collaborative code intelligence, repository bounties, and verified developer portfolios.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-xs font-bold uppercase tracking-[0.14em]">
          <Link className="transition hover:text-cyan-200" to="/features">Features</Link>
          <Link className="transition hover:text-cyan-200" to="/docs">Docs</Link>
          <Link className="transition hover:text-cyan-200" to="/bounties">Bounties</Link>
          <Link className="transition hover:text-cyan-200" to="/explore">Explore</Link>
          <a className="transition hover:text-cyan-200" href={`${API_BASE}/health`} target="_blank" rel="noreferrer">Health</a>
        </div>
      </div>
    </footer>
  );
}
