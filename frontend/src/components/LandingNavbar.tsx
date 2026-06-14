import { Link } from 'react-router-dom';
import { Code2, GitBranch } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { API_BASE } from '../lib/api';

export default function LandingNavbar() {
  const { login } = useAuth();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:pt-6">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-[#101114]/80 px-4 py-3 shadow-2xl backdrop-blur-xl md:px-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/10 text-cyan-200">
            <Code2 size={18} />
          </span>
          <span className="hidden text-sm font-black tracking-tight text-white sm:inline">CodeFlow</span>
        </Link>

        <div className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[0.14em] text-slate-400 md:flex">
          <Link className="transition hover:text-cyan-200" to="/">Product</Link>
          <Link className="transition hover:text-cyan-200" to="/features">Features</Link>
          <a className="transition hover:text-cyan-200" href={`${API_BASE}/docs`} target="_blank" rel="noreferrer">Docs</a>
          <Link className="transition hover:text-cyan-200" to="/bounties">Bounties</Link>
        </div>

        <button
          onClick={login}
          className="inline-flex items-center gap-2 rounded-full bg-cyan-200 px-4 py-2 text-xs font-black uppercase tracking-[0.08em] text-[#001f24] transition hover:bg-white"
        >
          <GitBranch size={15} />
          <span className="hidden sm:inline">Sign in with GitHub</span>
          <span className="sm:hidden">Sign in</span>
        </button>
      </div>
    </nav>
  );
}
