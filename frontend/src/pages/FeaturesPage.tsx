import { motion } from 'framer-motion';
import LandingNavbar from '../components/LandingNavbar';
import LandingFooter from '../components/LandingFooter';

export default function FeaturesPage() {
  return (
    <div className="bg-black min-h-screen text-white font-body overflow-x-hidden selection:bg-white/30">
      <style>{`
        .liquid-glass {
          background: rgba(255,255,255,0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
        }
        .liquid-glass::before {
          content: "";
          position: absolute; inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg,
            rgba(255,255,255,0.45) 0%,
            rgba(255,255,255,0.15) 20%,
            rgba(255,255,255,0) 40%,
            rgba(255,255,255,0) 60%,
            rgba(255,255,255,0.15) 80%,
            rgba(255,255,255,0.45) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>
      <LandingNavbar />

      <main className="pt-32 pb-24 px-8 md:px-16 lg:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <p className="text-sm font-body text-white/50 mb-4">// Features Overview</p>
          <h1 className="font-heading italic text-white" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '-2px', lineHeight: '1' }}>
            Built for developers,<br />powered by AI
          </h1>
          <p className="mt-6 text-base text-white/70 font-body font-light max-w-2xl mx-auto">
            Everything you need to understand, review, and fix complex codebases.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "3D Codebase Maps",
              desc: "Visualize your entire repository as an interactive 3D network graph. Understand dependencies and file relationships instantly.",
              icon: "🌌"
            },
            {
              title: "Mock Interviews",
              desc: "Get grilled by a Senior AI Engineer on your own codebase architecture. Perfect for onboarding or interview prep.",
              icon: "🎤"
            },
            {
              title: "DevOps Blueprints",
              desc: "Auto-generate system architecture diagrams from your tech stack. Export to Mermaid or PDF.",
              icon: "🏗️"
            },
            {
              title: "Streaks & Portfolios",
              desc: "Maintain daily streaks and build a verified portfolio of resolved bugs. Showcase your skills to potential employers.",
              icon: "🔥"
            },
            {
              title: "AI Code Review",
              desc: "Every submitted code patch is instantly analyzed by AI. Get security, performance, and quality insights posted automatically.",
              icon: "🤖"
            },
            {
              title: "Issue Bidding",
              desc: "Solvers name their price for fixing bugs. Anyone can Boost Bounty on open issues to pledge reputation into the pool.",
              icon: "💰"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="liquid-glass p-8 rounded-3xl"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="font-heading italic text-white text-3xl mb-3">{feature.title}</h3>
              <p className="text-white/70 font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
