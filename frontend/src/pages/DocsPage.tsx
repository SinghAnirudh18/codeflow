import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Braces, GitBranch, KeyRound, Map, PlayCircle, TerminalSquare, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import LandingNavbar from '../components/LandingNavbar';
import LandingFooter from '../components/LandingFooter';
import { API_BASE } from '../lib/api';

const guides = [
  {
    title: 'Connect GitHub',
    desc: 'Authenticate, import repositories, and keep issue data synced with CodeFlow.',
    icon: KeyRound,
    color: '#00daf3',
    colorDim: 'rgba(0,218,243,0.12)',
  },
  {
    title: 'Map a Repository',
    desc: 'Generate codebase maps, inspect dependency clusters, and jump into files with context.',
    icon: Map,
    color: '#a78bfa',
    colorDim: 'rgba(167,139,250,0.12)',
  },
  {
    title: 'Resolve Issues',
    desc: 'Create bounties, submit solutions, run AI review, and track accepted fixes.',
    icon: GitBranch,
    color: '#34d399',
    colorDim: 'rgba(52,211,153,0.12)',
  },
  {
    title: 'Use the CLI',
    desc: 'Ask repository questions and manage issues from a local developer workflow.',
    icon: TerminalSquare,
    color: '#f472b6',
    colorDim: 'rgba(244,114,182,0.12)',
  },
];

const endpoints = [
  ['GET', '/health', 'Check backend availability'],
  ['GET', '/repos', 'List imported repositories'],
  ['POST', '/issues/{id}/solutions', 'Submit a solution for review'],
  ['POST', '/repos/{id}/ask', 'Ask repository-aware questions'],
];

export default function DocsPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#08090a',
      color: '#fff',
      overflowX: 'hidden',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      <LandingNavbar />

      <main style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '12rem 1.5rem 12rem',
      }}>
        {/* Background decorations */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '42rem',
          background: 'radial-gradient(circle at 50% 0%, rgba(0,218,243,0.14), transparent 35%), radial-gradient(circle at 80% 8%, rgba(236,72,153,0.1), transparent 26%), linear-gradient(180deg, rgba(255,255,255,0.04), transparent 60%)',
          pointerEvents: 'none',
          zIndex: -1,
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.2,
          maskImage: 'linear-gradient(to bottom, black, transparent 72%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 72%)',
          pointerEvents: 'none',
          zIndex: -1,
        }} />
        <div className="orb-bg" style={{ width: '35vw', height: '35vw', top: '5%', right: '-5%', background: 'rgba(0,218,243,0.04)' }} />
        <div className="orb-bg" style={{ width: '30vw', height: '30vw', bottom: '15%', left: '-10%', background: 'rgba(236,72,153,0.04)' }} />

        {/* Hero section */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            alignItems: 'end',
            gap: '4rem',
          }}
        >
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'rgba(165,243,252,0.8)',
              marginBottom: '1.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <span style={{ display: 'block', width: '1.5rem', height: '1px', background: '#00daf3', boxShadow: '0 0 6px rgba(0,218,243,0.8)' }} />
              Developer Docs
            </p>
            <h1 className="glow" style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              marginBottom: '2rem',
            }}>
              Learn the product,{' '}
              <span className="grad-text" style={{ display: 'block', marginTop: '0.15em' }}>ship the fix</span>
            </h1>
            <p style={{
              maxWidth: '36rem',
              fontSize: '1.15rem',
              lineHeight: 1.8,
              color: '#8a9699',
              marginBottom: '2.5rem',
            }}>
              Start with the core workflows: connect repositories, understand code with AI, submit reviewed fixes, and automate from the API.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href={`${API_BASE}/docs`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #a5f3fc, #67e8f9)',
                  padding: '0.875rem 1.75rem',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#001f24',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 0 30px rgba(0,218,243,0.2)',
                }}
              >
                Open API docs
                <ArrowUpRight size={16} />
              </a>
              <Link
                to="/features"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  padding: '0.875rem 1.75rem',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                Browse features
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* Quickstart card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              background: 'rgba(255,255,255,0.035)',
              backdropFilter: 'blur(20px) saturate(140%)',
              WebkitBackdropFilter: 'blur(20px) saturate(140%)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderTopColor: 'rgba(255,255,255,0.18)',
              borderRadius: '1.25rem',
              padding: '1.75rem',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.05) inset, 0 32px 64px rgba(0,0,0,0.4)',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              paddingBottom: '1.25rem',
            }}>
              <span style={{
                display: 'flex',
                width: '3rem',
                height: '3rem',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '0.75rem',
                border: '1px solid rgba(165,243,252,0.25)',
                background: 'rgba(0,218,243,0.08)',
                color: '#67e8f9',
              }}>
                <BookOpen size={20} />
              </span>
              <div>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  color: '#64748b',
                  marginBottom: '0.25rem',
                }}>Quickstart</p>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700 }}>First repository import</h2>
              </div>
            </div>
            <div style={{
              marginTop: '1.25rem',
              borderRadius: '0.75rem',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(0,0,0,0.4)',
              padding: '1.25rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.82rem',
              lineHeight: 2.2,
            }}>
              <p style={{ color: '#64748b' }}>$ codeflow auth login</p>
              <p style={{ color: '#a5f3fc' }}>$ codeflow repos import owner/project</p>
              <p style={{ color: '#64748b' }}>$ codeflow ask "where does auth redirect?"</p>
            </div>
            <div style={{
              marginTop: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.82rem',
              color: '#94a3b8',
            }}>
              <PlayCircle size={16} style={{ color: '#6ee7b7' }} />
              Use the dashboard or CLI against the same repository context.
            </div>
          </motion.div>
        </motion.section>

        {/* Guides grid */}
        <section style={{
          marginTop: '10rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.25rem',
        }}>
          {guides.map((guide, i) => {
            const Icon = guide.icon;
            return (
              <motion.article
                key={guide.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '1rem',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.025)',
                  backdropFilter: 'blur(16px)',
                  padding: '1.75rem',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                whileHover={{
                  y: -4,
                  borderColor: 'rgba(255,255,255,0.18)',
                  background: 'rgba(255,255,255,0.04)',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: `linear-gradient(to right, transparent, ${guide.color}60, transparent)`,
                }} />
                <span style={{
                  display: 'flex',
                  width: '3rem',
                  height: '3rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: guide.colorDim,
                  color: guide.color,
                }}>
                  <Icon size={22} />
                </span>
                <h3 style={{
                  marginTop: '1.75rem',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                }}>
                  {guide.title}
                </h3>
                <p style={{
                  marginTop: '0.85rem',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  color: '#94a3b8',
                }}>
                  {guide.desc}
                </p>
              </motion.article>
            );
          })}
        </section>

        {/* API Surface section */}
        <section style={{
          marginTop: '10rem',
          display: 'grid',
          gridTemplateColumns: '0.85fr 1.15fr',
          gap: '3rem',
          alignItems: 'start',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'rgba(165,243,252,0.8)',
              marginBottom: '1.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <span style={{ display: 'block', width: '1.5rem', height: '1px', background: '#00daf3', boxShadow: '0 0 6px rgba(0,218,243,0.8)' }} />
              API Surface
            </p>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}>
              Useful endpoints stay close to product workflows.
            </h2>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: '#94a3b8',
            }}>
              The full generated API reference is still available, but this page gives users a cleaner front door before they jump into Swagger.
            </p>
            <a
              href={`${API_BASE}/docs`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginTop: '1.5rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#67e8f9',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              Full API reference <ExternalLink size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{
              overflow: 'hidden',
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.025)',
              backdropFilter: 'blur(16px)',
            }}
          >
            {endpoints.map(([method, path, desc], i) => (
              <div
                key={path}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '5.5rem 1fr 1.4fr',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.2rem 1.5rem',
                  borderBottom: i < endpoints.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  transition: 'background 0.2s',
                }}
              >
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(52,211,153,0.2)',
                  background: 'rgba(52,211,153,0.08)',
                  padding: '0.3rem 0.75rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: '#6ee7b7',
                  width: 'fit-content',
                }}>
                  <Braces size={11} />
                  {method}
                </span>
                <code style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.82rem',
                  color: '#a5f3fc',
                }}>{path}</code>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{desc}</p>
              </div>
            ))}
          </motion.div>
        </section>
      </main>

      <LandingFooter />

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 1024px) {
          main > section:first-of-type,
          main > .docs-hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 900px) {
          main section[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          main section[style*="grid-template-columns: 0.85fr"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          main section[style*="grid-template-columns: repeat(4"],
          main section[style*="grid-template-columns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
          main div[style*="grid-template-columns: 5.5rem"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
