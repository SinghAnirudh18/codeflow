import { motion } from 'framer-motion';
import {
  BadgeDollarSign,
  Bot,
  BrainCircuit,
  Flame,
  GitBranch,
  Layers3,
  Map,
  Mic,
  ShieldCheck,
} from 'lucide-react';
import LandingNavbar from '../components/LandingNavbar';
import LandingFooter from '../components/LandingFooter';

const features = [
  {
    title: '3D Codebase Maps',
    desc: 'Explore repositories as spatial dependency graphs with files, modules, and ownership relationships visible at a glance.',
    icon: Map,
    color: '#67e8f9',
    colorDim: 'rgba(103,232,249,0.1)',
    gradient: 'from-[#67e8f9]',
  },
  {
    title: 'Mock Interviews',
    desc: 'Practice architecture walkthroughs against an AI interviewer that understands the repository you are preparing to explain.',
    icon: Mic,
    color: '#f472b6',
    colorDim: 'rgba(244,114,182,0.1)',
    gradient: 'from-[#f472b6]',
  },
  {
    title: 'DevOps Blueprints',
    desc: 'Generate system diagrams and deployment notes from the project structure, services, and infrastructure hints in code.',
    icon: Layers3,
    color: '#6ee7b7',
    colorDim: 'rgba(110,231,183,0.1)',
    gradient: 'from-[#6ee7b7]',
  },
  {
    title: 'Streaks & Portfolios',
    desc: 'Turn accepted fixes into a verified work trail with contribution streaks, solved issues, and code review history.',
    icon: Flame,
    color: '#fb923c',
    colorDim: 'rgba(251,146,60,0.1)',
    gradient: 'from-[#fb923c]',
  },
  {
    title: 'AI Code Review',
    desc: 'Analyze submitted patches for security, performance, quality, and repository-specific side effects before owners review.',
    icon: Bot,
    color: '#7dd3fc',
    colorDim: 'rgba(125,211,252,0.1)',
    gradient: 'from-[#7dd3fc]',
  },
  {
    title: 'Issue Bidding',
    desc: 'Let solvers propose a price, boost important issues, and route attention toward the fixes that matter most.',
    icon: BadgeDollarSign,
    color: '#fde047',
    colorDim: 'rgba(253,224,71,0.1)',
    gradient: 'from-[#fde047]',
  },
];

const workflow = [
  { label: 'Ingest', value: 'Repositories, issues, and pull requests' },
  { label: 'Understand', value: 'Maps, summaries, Q&A, and diagrams' },
  { label: 'Resolve', value: 'Bids, reviews, accepted solutions, and rewards' },
];

export default function FeaturesPage() {
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
          background: 'radial-gradient(circle at 50% 0%, rgba(0,218,243,0.16), transparent 35%), linear-gradient(180deg, rgba(255,255,255,0.04), transparent 55%)',
          pointerEvents: 'none',
          zIndex: -1,
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.3,
          maskImage: 'linear-gradient(to bottom, black, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 70%)',
          pointerEvents: 'none',
          zIndex: -1,
        }} />
        <div className="orb-bg" style={{ width: '40vw', height: '40vw', top: '-5%', left: '-10%', background: 'rgba(0,218,243,0.04)' }} />
        <div className="orb-bg" style={{ width: '35vw', height: '35vw', bottom: '10%', right: '-8%', background: 'rgba(0,180,200,0.05)' }} />

        {/* Hero section */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          style={{
            maxWidth: '56rem',
            margin: '0 auto',
            textAlign: 'center',
          }}
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
            justifyContent: 'center',
            gap: '0.5rem',
          }}>
            <span style={{ display: 'block', width: '1.5rem', height: '1px', background: '#00daf3', boxShadow: '0 0 6px rgba(0,218,243,0.8)' }} />
            Product Capabilities
            <span style={{ display: 'block', width: '1.5rem', height: '1px', background: '#00daf3', boxShadow: '0 0 6px rgba(0,218,243,0.8)' }} />
          </p>
          <h1 className="glow" style={{
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            marginBottom: '2rem',
          }}>
            Built for developers,{' '}
            <span className="grad-text" style={{ display: 'block', marginTop: '0.15em' }}>powered by AI</span>
          </h1>
          <p style={{
            maxWidth: '42rem',
            margin: '0 auto',
            fontSize: '1.15rem',
            lineHeight: 1.8,
            color: '#8a9699',
          }}>
            Everything you need to understand a codebase, route the right work, review solutions, and build a public record of real fixes.
          </p>
        </motion.section>

        {/* Workflow section */}
        <section style={{
          marginTop: '10rem',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '2.5rem',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.09)',
              borderTopColor: 'rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.035)',
              backdropFilter: 'blur(20px) saturate(140%)',
              WebkitBackdropFilter: 'blur(20px) saturate(140%)',
              padding: '2.5rem',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.05) inset, 0 32px 64px rgba(0,0,0,0.4)',
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(165,243,252,0.5), transparent)',
            }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <span style={{
                display: 'flex',
                width: '3.5rem',
                height: '3.5rem',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '0.75rem',
                border: '1px solid rgba(165,243,252,0.25)',
                background: 'rgba(0,218,243,0.08)',
                color: '#67e8f9',
              }}>
                <BrainCircuit size={26} />
              </span>
              <div>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: '#64748b',
                  marginBottom: '0.35rem',
                }}>Intelligence loop</p>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                  From repository context to accepted fix
                </h2>
              </div>
            </div>

            <div style={{
              marginTop: '3rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.25rem',
            }}>
              {workflow.map((item) => (
                <div key={item.label} style={{
                  borderRadius: '1rem',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(0,0,0,0.3)',
                  padding: '1.5rem',
                }}>
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.16em',
                    color: '#67e8f9',
                  }}>{item.label}</p>
                  <p style={{
                    marginTop: '1rem',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: '#cbd5e1',
                  }}>{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.25rem',
            }}
          >
            {[
              ['Context-aware', 'Reviews'],
              ['Bounty-ready', 'Issues'],
              ['Verified', 'Profiles'],
              ['Living', 'Docs'],
            ].map(([top, bottom]) => (
              <div key={top} style={{
                borderRadius: '1rem',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.035)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <p style={{ fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.02em', color: '#fff' }}>
                  {top}
                </p>
                <p style={{
                  marginTop: '0.75rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  color: '#64748b',
                }}>
                  {bottom}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Features grid */}
        <section style={{
          marginTop: '3.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}>
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.04, duration: 0.45 }}
                className="feat-card group"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '1.25rem',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.025)',
                  backdropFilter: 'blur(16px)',
                  padding: '2.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
              >
                <style>{`
                  .feat-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(255,255,255,0.18);
                    background: rgba(255,255,255,0.04);
                  }
                  .feat-card:hover .feat-bg-icon {
                    color: ${feature.color} !important;
                    opacity: 0.1 !important;
                  }
                `}</style>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: `linear-gradient(to right, transparent, ${feature.color}60, transparent)`,
                  opacity: 0.7,
                }} />
                <div style={{
                  display: 'flex',
                  width: '3.5rem',
                  height: '3.5rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: feature.colorDim,
                }}>
                  <Icon style={{ color: feature.color }} size={24} />
                </div>
                <h3 style={{
                  marginTop: '2rem',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#fff',
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  marginTop: '1rem',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: '#94a3b8',
                }}>
                  {feature.desc}
                </p>
                <GitBranch 
                  className="feat-bg-icon transition-all duration-300" 
                  style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    right: '1.5rem',
                    color: 'rgba(255,255,255,0.05)',
                    width: '3rem',
                    height: '3rem',
                  }} 
                />
              </motion.article>
            );
          })}
        </section>

        {/* Bottom CTA section */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            marginTop: '12rem',
            display: 'grid',
            gridTemplateColumns: '0.95fr 1.05fr',
            alignItems: 'center',
            gap: '4rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '5rem 0',
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
              Quality layer
            </p>
            <h2 className="glow" style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}>
              The feature set is designed around real issue resolution.
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem',
          }}>
            {[
              'Repository-aware answers',
              'Patch review before merge',
              'Bounty marketplace flow',
              'Proof of accepted work'
            ].map((item) => (
              <div key={item} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                borderRadius: '1rem',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
                padding: '1.5rem',
                fontSize: '1rem',
                color: '#cbd5e1',
                fontWeight: 500,
              }}>
                <ShieldCheck size={22} style={{ color: '#6ee7b7' }} />
                {item}
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      <LandingFooter />

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 1024px) {
          main > section:nth-of-type(1),
          main > section:nth-of-type(3) {
            grid-template-columns: 1fr !important;
          }
          main section[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          main section[style*="grid-template-columns: repeat(3"],
          main section[style*="grid-template-columns: repeat(2"] > div,
          main div[style*="grid-template-columns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
          main section[style*="grid-template-columns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
