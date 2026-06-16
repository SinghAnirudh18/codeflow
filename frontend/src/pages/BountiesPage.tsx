import { motion } from 'framer-motion';
import { ArrowUpRight, BadgeDollarSign, CheckCircle2, GitPullRequest, Search, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import LandingNavbar from '../components/LandingNavbar';
import LandingFooter from '../components/LandingFooter';
import { useAuth } from '../contexts/AuthContext';

const steps = [
  {
    step: '01',
    title: 'Find a real issue',
    desc: 'Browse open work by repository, stack, difficulty, and bounty size. Pick problems where your context and skill actually matter.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Submit a reviewed patch',
    desc: 'Attach your fix, explain the tradeoffs, and let Codeski run an AI quality pass before maintainers review it.',
    icon: GitPullRequest,
  },
  {
    step: '03',
    title: 'Earn reputation and rewards',
    desc: 'Accepted solutions become verified work history, portfolio proof, and bounty points tied to the issue you resolved.',
    icon: CheckCircle2,
  },
];

const stats = [
  ['Signal', 'Issue context, repository maps, and owner notes in one flow'],
  ['Trust', 'Patch checks for quality, security, and maintainability'],
  ['Proof', 'Accepted fixes attached to your developer profile'],
];

export default function BountiesPage() {
  const { login } = useAuth();

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
          height: '44rem',
          background: 'radial-gradient(circle at 50% 0%, rgba(251,191,36,0.16), transparent 34%), radial-gradient(circle at 20% 10%, rgba(0,218,243,0.12), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.04), transparent 60%)',
          pointerEvents: 'none',
          zIndex: -1,
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.25,
          maskImage: 'linear-gradient(to bottom, black, transparent 72%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 72%)',
          pointerEvents: 'none',
          zIndex: -1,
        }} />
        <div className="orb-bg" style={{ width: '40vw', height: '40vw', top: '-5%', right: '-10%', background: 'rgba(251,191,36,0.04)' }} />
        <div className="orb-bg" style={{ width: '35vw', height: '35vw', bottom: '10%', left: '-8%', background: 'rgba(0,218,243,0.04)' }} />

        {/* Hero section */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            alignItems: 'end',
            gap: '4rem',
          }}
        >
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              borderRadius: '9999px',
              border: '1px solid rgba(251,191,36,0.2)',
              background: 'rgba(251,191,36,0.08)',
              padding: '0.5rem 1.2rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: '#fde047',
              marginBottom: '2rem',
            }}>
              <BadgeDollarSign size={16} />
              Bounty Program
            </div>
            
            <h1 style={{
              fontSize: 'clamp(3rem, 7.5vw, 6.2rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              marginBottom: '2rem',
              textShadow: '0 0 20px rgba(251,191,36,0.4), 0 0 40px rgba(251,191,36,0.15)',
            }}>
              Earn while you{' '}
              <span className="grad-text" style={{ display: 'block', marginTop: '0.15em' }}>solve issues</span>
            </h1>
            
            <p style={{
              maxWidth: '38rem',
              fontSize: '1.15rem',
              lineHeight: 1.8,
              color: '#8a9699',
              marginBottom: '2.5rem',
            }}>
              Codeski turns issue resolution into a structured marketplace: clear context for solvers, reviewed submissions for owners, and verified proof of work for contributors.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                onClick={login}
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
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 0 30px rgba(0,218,243,0.2)',
                }}
              >
                Start earning
                <ArrowUpRight size={16} />
              </button>
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
                See features
              </Link>
            </div>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.035)',
            backdropFilter: 'blur(20px) saturate(140%)',
            WebkitBackdropFilter: 'blur(20px) saturate(140%)',
            border: '1px solid rgba(255,255,255,0.09)',
            borderTopColor: 'rgba(255,255,255,0.18)',
            borderRadius: '1.25rem',
            padding: '1.5rem',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.05) inset, 0 32px 64px rgba(0,0,0,0.4)',
          }}>
            <div style={{
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(0,0,0,0.4)',
              padding: '1.75rem',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                paddingBottom: '1.25rem',
              }}>
                <div>
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.16em',
                    color: '#64748b',
                  }}>Featured issue</p>
                  <h2 style={{
                    marginTop: '0.4rem',
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    letterSpacing: '-0.01em',
                  }}>Fix flaky auth callback redirect</h2>
                </div>
                <span style={{
                  borderRadius: '9999px',
                  border: '1px solid rgba(251,191,36,0.25)',
                  background: 'rgba(251,191,36,0.1)',
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.9rem',
                  fontWeight: 900,
                  color: '#fef08a',
                }}>
                  450 pts
                </span>
              </div>
              
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {['React Router flow', 'OAuth callback handling', 'AI review required'].map((item) => (
                  <div key={item} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: '0.75rem',
                    background: 'rgba(255,255,255,0.035)',
                    padding: '0.85rem 1.25rem',
                    fontSize: '0.9rem',
                    color: '#cbd5e1',
                  }}>
                    <span>{item}</span>
                    <ShieldCheck size={18} style={{ color: '#6ee7b7' }} />
                  </div>
                ))}
              </div>
              
              <div style={{
                marginTop: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid rgba(165,243,252,0.15)',
                background: 'rgba(165,243,252,0.06)',
                padding: '1.25rem',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                color: 'rgba(236,254,255,0.8)',
              }}>
                Solvers can bid, submit a patch, and receive review feedback before the owner accepts the solution.
              </div>
            </div>
          </div>
        </motion.section>

        {/* Steps section */}
        <section style={{
          marginTop: '10rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}>
          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '1.25rem',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.025)',
                  backdropFilter: 'blur(16px)',
                  padding: '2.5rem',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'linear-gradient(to right, rgba(252,211,77,0.6), rgba(255,255,255,0.2), transparent)',
                }} />
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#64748b',
                  }}>{item.step}</span>
                  <span style={{
                    display: 'flex',
                    width: '3.5rem',
                    height: '3.5rem',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.04)',
                    color: '#fef08a',
                  }}>
                    <Icon size={24} />
                  </span>
                </div>
                
                <h3 style={{
                  marginTop: '4rem',
                  fontSize: '1.6rem',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                }}>{item.title}</h3>
                
                <p style={{
                  marginTop: '1.25rem',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#94a3b8',
                }}>{item.desc}</p>
              </motion.article>
            );
          })}
        </section>

        {/* Stats section */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            marginTop: '12rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            borderRadius: '1.25rem',
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.03)',
            padding: '2.5rem',
          }}
        >
          {stats.map(([label, value]) => (
            <div key={label} style={{
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(0,0,0,0.3)',
              padding: '2rem',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#67e8f9',
              }}>
                <Sparkles size={18} />
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                }}>{label}</p>
              </div>
              <p style={{
                marginTop: '1.25rem',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#cbd5e1',
              }}>{value}</p>
            </div>
          ))}
        </motion.section>
      </main>

      <LandingFooter />

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 1024px) {
          main > section:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 900px) {
          main section[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          main section[style*="grid-template-columns: repeat(3"],
          main section[style*="grid-template-columns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
