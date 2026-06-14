import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import LandingNavbar from '../components/LandingNavbar';
import LandingFooter from '../components/LandingFooter';
import { useAuth } from '../contexts/AuthContext';

export default function BountiesPage() {
  const { login } = useAuth();

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
        .liquid-glass-strong {
          background: rgba(255,255,255,0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(50px);
          -webkit-backdrop-filter: blur(50px);
          border: none;
          box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15);
          position: relative;
          overflow: hidden;
        }
        .liquid-glass-strong::before {
          content: "";
          position: absolute; inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg,
            rgba(255,255,255,0.5) 0%,
            rgba(255,255,255,0.2) 20%,
            rgba(255,255,255,0) 40%,
            rgba(255,255,255,0) 60%,
            rgba(255,255,255,0.2) 80%,
            rgba(255,255,255,0.5) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>
      <LandingNavbar />

      <main className="pt-32 pb-24 px-8 md:px-16 lg:px-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="liquid-glass inline-flex items-center gap-2 rounded-full mb-6 px-4 py-1.5">
            <span className="text-sm text-white/90 font-body">Bug Bounty Program</span>
          </div>
          <h1 className="font-heading italic text-white" style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)', letterSpacing: '-2px', lineHeight: '0.9' }}>
            Earn while you<br />solve issues
          </h1>
        </motion.div>

        <div className="space-y-8">
          {[
            {
              step: "01",
              title: "Find an Issue",
              desc: "Browse the community marketplace for open issues across public repositories. Filter by language, framework, or bounty size."
            },
            {
              step: "02",
              title: "Submit a Solution",
              desc: "Write your code fix, attach the patch, and submit. Our AI will automatically review your solution for quality and security."
            },
            {
              step: "03",
              title: "Earn Rewards",
              desc: "When the repository owner accepts your solution, the bounty points are automatically transferred to your account."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="liquid-glass p-8 md:p-10 rounded-[2rem] flex flex-col md:flex-row gap-8 items-start md:items-center"
            >
              <div className="font-heading italic text-white/20" style={{ fontSize: '5rem', lineHeight: 0.8 }}>
                {item.step}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70 text-lg font-light leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button onClick={login} className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium text-white font-body cursor-pointer">
            Start Earning Now
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </motion.div>
      </main>

      <LandingFooter />
    </div>
  );
}
