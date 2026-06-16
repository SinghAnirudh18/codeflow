import { useEffect, useRef } from 'react';
import type { SyntheticEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hls from 'hls.js';
import { useAuth } from '../contexts/AuthContext';
import { API_BASE } from '../lib/api';
import LandingNavbar from '../components/LandingNavbar';

gsap.registerPlugin(ScrollTrigger);

const logoUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC0xONATTGGnIhN-Gi98YRMGsjoNo43DxPW-ktVixrK2cOiGXaVB1Ivxc21hzI25aK0is9DXaUZ2nSka_wKsR_F0lPBcCFP1P_v6xFDTOTHOD_0coUBWtQhoxo_j9QrKI7Dk6RFdRcEJ_vPhgv_S4xQonPKjkL6ogG1dvwedkyCRorCxa1yMQEjAh0kqVZWkFSkkAZYf3Rxty-8nxX6MZz4F8Qyv9KVaDSc70gKY9k9zoYWroRBYAIRpTbuTDgDtoqi0XQkqRkDYqM';

const imageUrls = {
  map: '/images/mindmap.jpeg',
  architecture: '/images/devops.png',
  intelligence: '/images/mindmap.jpeg',
  bounties: '/images/bounty.png',
};

export default function LandingPage() {
  const { user, login, loading } = useAuth();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!loading && user) navigate('/dashboard');
  }, [user, loading, navigate]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = 'https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8';
    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({ startLevel: -1 });
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    }

    return () => {
      hls?.destroy();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sceneIds = ['s1', 's2', 's3', 's4', 's5', 's6'];
      const sceneEls = sceneIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el));
      const dots = Array.from(document.querySelectorAll<HTMLElement>('.prog-dot'));

      if (sceneEls.length !== sceneIds.length) return;

      const setActiveDot = (idx: number) => {
        dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
      };

      gsap.set(sceneEls, { autoAlpha: 0 });
      gsap.set(sceneEls[0], { autoAlpha: 1 });

      const introTl = gsap.timeline({ delay: 0.15 });
      introTl
        .from('.s1-eyebrow', { y: 18, autoAlpha: 0, duration: 0.7, ease: 'power3.out' })
        .from('.s1-h1', { y: 30, autoAlpha: 0, duration: 0.9, ease: 'power3.out' }, '-=0.45')
        .from('.s1-sub', { y: 20, autoAlpha: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
        .from('.s1-btns', { y: 16, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.45')
        .from('#scroll-indicator', { autoAlpha: 0, y: 8, duration: 0.5, ease: 'power2.out' }, '-=0.2');

      const makeSceneIn = (el: HTMLElement, idx: number) => {
        const tl = gsap.timeline();
        if (idx === 0) return tl;

        const eyebrow = el.querySelector('.eyebrow');
        const icon = el.querySelector('.feat-icon');
        const h = el.querySelector('.s-h2, h2');
        const p = el.querySelector('p');
        const visual = el.querySelector('.s-visual, .glass-card, img');
        const statCards = el.querySelectorAll('.stat-card');
        const btn = el.querySelector('button');
        const textEls = [eyebrow, icon, h, p, btn].filter(Boolean);

        tl.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4, ease: 'none' }, 0);

        if (textEls.length) {
          tl.from(
            textEls,
            {
              y: 28,
              autoAlpha: 0,
              duration: 0.55,
              stagger: 0.08,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
            },
            0.1,
          );
        }

        if (visual) {
          tl.from(
            visual,
            {
              x: idx % 2 === 0 ? 40 : -40,
              autoAlpha: 0,
              duration: 0.65,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
            },
            0.15,
          );
        }

        if (statCards.length) {
          tl.from(
            statCards,
            {
              y: 30,
              autoAlpha: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: 'power3.out',
            },
            0.2,
          );
        }

        return tl;
      };

      const makeSceneOut = (el: HTMLElement) =>
        gsap.timeline().to(el, { autoAlpha: 0, y: -20, scale: 1.03, duration: 0.35, ease: 'power2.in' });

      const masterTL = gsap.timeline({ paused: true });

      for (let i = 1; i < sceneIds.length; i += 1) {
        const label = `t${i}`;
        masterTL.addLabel(label).add(makeSceneOut(sceneEls[i - 1]), label).add(makeSceneIn(sceneEls[i], i), label);
      }

      ScrollTrigger.create({
        trigger: '#scroll-root',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
        pin: '#pin-wrap',
        anticipatePin: 1,
        onUpdate(self) {
          const idx = Math.min(sceneIds.length - 1, Math.floor(self.progress * sceneIds.length));
          setActiveDot(idx);
          masterTL.progress(self.progress);
        },
      });

      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          const rootEl = document.getElementById('scroll-root');
          if (!rootEl) return;
          const totalH = rootEl.getBoundingClientRect().height;
          const scrollTop = rootEl.offsetTop + (i / (sceneIds.length - 0.5)) * totalH;
          window.scrollTo({ top: scrollTop, behavior: 'smooth' });
        });
      });

      const targets: Record<string, number> = { stat1: 7, stat2: 2, stat3: 1 };
      let statsRun = false;

      const animateStats = () => {
        if (statsRun) return;
        statsRun = true;

        Object.entries(targets).forEach(([id, end]) => {
          gsap.fromTo(
            `#${id}`,
            { innerText: 0 },
            {
              innerText: end,
              duration: 1.2,
              ease: 'power2.out',
              snap: { innerText: 1 },
              onUpdate() {
                const el = document.getElementById(id);
                if (el) el.textContent = String(Math.round(Number.parseFloat(el.innerText)));
              },
            },
          );
        });
      };

      ScrollTrigger.create({
        trigger: '#scroll-root',
        start: '80% top',
        onEnter: animateStats,
        onEnterBack: () => {
          statsRun = false;
          animateStats();
        },
      });

      // Scroll background color transition is managed autonomously inside LandingNavbar component

      ScrollTrigger.create({
        trigger: '#scroll-root',
        start: '5% top',
        onEnter() {
          gsap.to('#scroll-indicator', { autoAlpha: 0, y: 8, duration: 0.4 });
        },
        onLeaveBack() {
          gsap.to('#scroll-indicator', { autoAlpha: 1, y: 0, duration: 0.4 });
        },
      });

      document.fonts.ready.then(() => ScrollTrigger.refresh());
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.background = '#1c1b1c';
    event.currentTarget.style.minHeight = '200px';
  };

  return (
    <div className="ani-page">
      <style>{`
        .ani-page *, .ani-page *::before, .ani-page *::after { box-sizing: border-box; }
        .ani-page {
          min-height: 100vh;
          background: #0e0e0f;
          color: #e5e2e3;
          font-family: 'Geist', sans-serif;
          overflow-x: hidden;
        }
        .ani-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .ani-bg video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.35;
        }
        .ani-bg-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(14,14,15,0.3) 0%, rgba(14,14,15,0.55) 50%, #0e0e0f 100%);
        }
        #scroll-root {
          height: 700vh;
          position: relative;
          z-index: 10;
        }
        #pin-wrap {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }
        .scene {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 1.5rem 2rem;
          pointer-events: none;
        }
        .scene.s-center { flex-direction: column; text-align: center; }
        .scene button, .scene a, #navbar a, #navbar button, footer a { pointer-events: auto; }
        .glass {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(20px) saturate(140%);
          -webkit-backdrop-filter: blur(20px) saturate(140%);
          border: 1px solid rgba(255,255,255,0.09);
          border-top-color: rgba(255,255,255,0.18);
        }
        .glass-card {
          border-radius: 1.5rem;
          padding: 0.5rem;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.05) inset, 0 32px 64px rgba(0,0,0,0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .glass-card:hover {
          transform: scale(1.03);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.1) inset, 0 48px 96px rgba(0,0,0,0.7);
        }
        /* Navbar styles moved to LandingNavbar component */
        .grad-text {
          background: linear-gradient(160deg, #e0f7ff 0%, rgba(224,247,255,0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glow {
          text-shadow: 0 0 20px rgba(0,218,243,0.6), 0 0 40px rgba(0,218,243,0.25);
        }
        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 72rem;
          width: 100%;
        }
        .split.rev { direction: rtl; }
        .split.rev > * { direction: ltr; }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #00daf3;
          margin-bottom: 1.25rem;
        }
        .eyebrow::before {
          content: '';
          display: block;
          width: 1.5rem;
          height: 1px;
          background: #00daf3;
          box-shadow: 0 0 6px rgba(0,218,243,0.8);
        }
        .stat-card {
          border-radius: 1.5rem;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
        }
        .stat-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(0,218,243,0.6), transparent);
        }
        #scroll-indicator {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.375rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(186,201,204,0.5);
        }
        .scroll-mouse {
          width: 1.25rem;
          height: 2rem;
          border: 1.5px solid rgba(186,201,204,0.3);
          border-radius: 999px;
          position: relative;
        }
        .scroll-dot {
          position: absolute;
          top: 0.3rem;
          left: 50%;
          transform: translateX(-50%);
          width: 0.2rem;
          height: 0.45rem;
          background: #00daf3;
          border-radius: 999px;
          animation: scrollDot 1.8s ease-in-out infinite;
        }
        @keyframes scrollDot {
          0% { opacity: 1; transform: translateX(-50%) translateY(0); }
          80% { opacity: 0; transform: translateX(-50%) translateY(0.85rem); }
          100% { opacity: 0; transform: translateX(-50%) translateY(0); }
        }
        #progress-dots {
          position: fixed;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 90;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .prog-dot {
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 999px;
          background: rgba(186,201,204,0.25);
          transition: background 0.3s, transform 0.3s;
          cursor: pointer;
        }
        .prog-dot.active {
          background: #00daf3;
          transform: scale(1.5);
          box-shadow: 0 0 6px rgba(0,218,243,0.7);
        }
        .feat-icon {
          font-size: 2.2rem;
          color: #66eaff;
          filter: drop-shadow(0 0 8px rgba(102,234,255,0.4));
          margin-bottom: 1rem;
          display: block;
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
        }
        .feat-icon-docs {
          color: #ff7eb9;
          filter: drop-shadow(0 0 8px rgba(255,126,185,0.4));
        }
        .feat-icon-bounties {
          color: #ffb400;
          filter: drop-shadow(0 0 8px rgba(255,180,0,0.4));
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .scene .s-text {
          max-width: 100%;
          padding: 0 1rem;
          text-align: center;
        }
        .scene-img {
          width: 100%;
          height: auto;
          border-radius: 1.25rem;
          display: block;
          object-fit: cover;
          aspect-ratio: 16 / 9;
        }
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          display: inline-block;
          line-height: 1;
          text-transform: none;
          letter-spacing: normal;
          white-space: nowrap;
          direction: ltr;
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
        }
        /* Navbar link styles moved to LandingNavbar component */
        .ani-btn {
          border-radius: 9999px;
          cursor: pointer;
          transition: background 0.25s, box-shadow 0.25s, color 0.2s, border-color 0.2s;
        }
        .ani-btn-primary {
          padding: 0.875rem 2.25rem;
          font-size: 1rem;
          font-weight: 500;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.12);
        }
        .ani-btn-primary:hover {
          background: rgba(255,255,255,0.08);
          box-shadow: 0 0 24px rgba(0,218,243,0.15);
        }
        .ani-btn-ghost {
          padding: 0.875rem 2.25rem;
          font-size: 1rem;
          font-weight: 400;
          color: #8a9699;
          background: transparent;
          border: 1px solid rgba(59,73,76,0.6);
        }
        .ani-btn-ghost:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.25);
        }
        .ani-footer-link {
          font-size: 0.875rem;
          color: #8a9699;
          text-decoration: none;
          transition: color 0.2s;
        }
        .ani-footer-link:hover { color: #e5e2e3; }
        @media (max-width: 768px) {
          .split { grid-template-columns: 1fr; gap: 2rem; }
          .split.rev { direction: ltr; }
          .s6-stats { grid-template-columns: 1fr !important; }
          footer .footer-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          #progress-dots { display: none; }
          .nav-links { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ani-page * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      <div className="ani-bg">
        <video ref={videoRef} autoPlay muted loop playsInline />
        <div className="ani-bg-shade" />
        <div className="orb" style={{ width: '40vw', height: '40vw', top: '-5%', left: '-10%', background: 'rgba(0,218,243,0.04)' }} />
        <div className="orb" style={{ width: '35vw', height: '35vw', bottom: '10%', right: '-8%', background: 'rgba(0,180,200,0.05)' }} />
      </div>

      <LandingNavbar />

      <div id="progress-dots">
        {[0, 1, 2, 3, 4, 5].map((idx) => (
          <div key={idx} className={`prog-dot ${idx === 0 ? 'active' : ''}`} data-scene={idx} />
        ))}
      </div>

      <div id="scroll-root">
        <div id="pin-wrap">
          <section className="scene s-center" id="s1">
            <div style={{ maxWidth: '56rem', width: '100%' }}>
              <div className="eyebrow s1-eyebrow">From the Community, For the Community</div>
              <h1
                className="grad-text s1-h1"
                style={{
                  fontSize: 'clamp(3rem,8vw,7rem)',
                  lineHeight: 1,
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  marginBottom: '1.5rem',
                }}
              >
                Fix Bugs.
                <br />
                Build Together.
              </h1>
              <p className="s1-sub" style={{ fontSize: '1.125rem', lineHeight: 1.7, color: '#8a9699', maxWidth: '38rem', margin: '0 auto 2.5rem' }}>
                A collaborative intelligence platform where developers unite to solve complex issues, build better software, and earn rewards.
              </p>
              <div className="s1-btns" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button className="glass ani-btn ani-btn-primary" onClick={login}>Get Started</button>
                <Link className="ani-btn ani-btn-ghost" to="/features">Explore Features</Link>
              </div>
            </div>

            <div id="scroll-indicator">
              <div className="scroll-mouse"><div className="scroll-dot" /></div>
              <span>scroll</span>
            </div>
          </section>

          <section className="scene" id="s2">
            <div className="split">
              <div className="s-text">
                <div className="eyebrow">Spatial Navigation</div>
                <span className="material-symbols-outlined feat-icon">view_in_ar</span>
                <h2 className="grad-text s-h2" style={{ fontSize: 'clamp(1.75rem,4vw,3.25rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                  Visualize your
                  <br />
                  codebase in 3D.
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#8a9699', maxWidth: '28rem' }}>
                  Navigate complex repositories with intuitive spatial mapping. Understand dependencies and architecture at a glance.
                </p>
              </div>
              <div className="s-visual">
                <div className="glass glass-card">
                  <img className="scene-img" alt="3D Codebase Mapping" src={imageUrls.map} onError={handleImageError} />
                </div>
              </div>
            </div>
          </section>

          <section className="scene" id="s3">
            <div className="split rev">
              <div className="s-text">
                <div className="eyebrow">Living Docs</div>
                <span className="material-symbols-outlined feat-icon feat-icon-docs">architecture</span>
                <h2 className="grad-text s-h2" style={{ fontSize: 'clamp(1.75rem,4vw,3.25rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                  Automated
                  <br />
                  Architecture Blueprints.
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#8a9699', maxWidth: '28rem' }}>
                  Generate living documentation and infrastructure diagrams directly from your source code. Always up to date.
                </p>
              </div>
              <div className="s-visual">
                <div className="glass glass-card">
                  <img className="scene-img" alt="Architecture Blueprints" src={imageUrls.architecture} onError={handleImageError} />
                </div>
              </div>
            </div>
          </section>

          <section className="scene" id="s4">
            <div className="split">
              <div className="s-text">
                <div className="eyebrow">AI-Powered</div>
                <span className="material-symbols-outlined feat-icon">psychology</span>
                <h2 className="grad-text s-h2" style={{ fontSize: 'clamp(1.75rem,4vw,3.25rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                  RAG-Powered
                  <br />
                  Code Intelligence.
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#8a9699', maxWidth: '28rem' }}>
                  Ask questions about your repository and conduct technical interviews with AI that understands your entire codebase context.
                </p>
              </div>
              <div className="s-visual">
                <div className="glass glass-card">
                  <img className="scene-img" alt="Code Intelligence Q&A" src={imageUrls.intelligence} onError={handleImageError} />
                </div>
              </div>
            </div>
          </section>

          <section className="scene s-center" id="s5">
            <div style={{ maxWidth: '52rem', width: '100%' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>Earn While You Code</div>
              <span className="material-symbols-outlined feat-icon feat-icon-bounties" style={{ fontSize: '3rem' }}>monetization_on</span>
              <h2 className="grad-text" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                Earn Bounties.
                <br />
                Solve Issues.
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#8a9699', maxWidth: '34rem', margin: '0 auto 2.5rem' }}>
                Contribute to open source and private repositories. Get paid directly for closing critical issues and improving code quality.
              </p>
              <div className="glass glass-card" style={{ maxWidth: '48rem', margin: '0 auto' }}>
                <img className="scene-img" alt="Bounties Dashboard" src={imageUrls.bounties} onError={handleImageError} />
              </div>
            </div>
          </section>

          <section className="scene s-center" id="s6">
            <div style={{ maxWidth: '52rem', width: '100%' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>Early Access</div>
              <h2 className="grad-text" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '3rem' }}>
                Join the Movement
              </h2>
              <div className="s6-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
                <div className="glass stat-card">
                  <span className="glow" style={{ fontSize: '3.5rem', fontWeight: 800, color: '#00daf3', lineHeight: 1 }} id="stat1">0</span>
                  <span style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8a9699' }}>Total Points</span>
                </div>
                <div className="glass stat-card">
                  <span className="glow" style={{ fontSize: '3.5rem', fontWeight: 800, color: '#00daf3', lineHeight: 1 }} id="stat2">0</span>
                  <span style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8a9699' }}>Repositories</span>
                </div>
                <div className="glass stat-card">
                  <span className="glow" style={{ fontSize: '3.5rem', fontWeight: 800, color: '#00daf3', lineHeight: 1 }} id="stat3">0</span>
                  <span style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8a9699' }}>Solutions Accepted</span>
                </div>
              </div>
              <button className="glass ani-btn" onClick={login} style={{ borderRadius: '9999px', padding: '1rem 2.75rem', fontSize: '1.05rem', fontWeight: 500, color: '#fff', border: '1px solid rgba(255,255,255,0.12)' }}>
                Start Contributing Now
              </button>
            </div>
          </section>
        </div>
      </div>

      <footer style={{ position: 'relative', zIndex: 10, background: '#0a0a0b', borderTop: '1px solid rgba(59,73,76,0.4)', padding: '4rem 2.5rem' }}>
        <div className="footer-grid" style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '2rem' }}>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#e5e2e3', marginBottom: '0.5rem' }}>CodeFlow</div>
            <p style={{ fontSize: '0.875rem', color: '#8a9699', lineHeight: 1.6 }}>
              © 2024 CodeFlow.
              <br />
              Fix bugs. Build together. Earn rewards.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <a className="ani-footer-link" href="#">Privacy Policy</a>
            <a className="ani-footer-link" href="#">Terms of Service</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <a className="ani-footer-link" href="#">Security</a>
            <a className="ani-footer-link" href={`${API_BASE}/health`} target="_blank" rel="noreferrer">Status</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <a className="ani-footer-link" href="#">Contact</a>
            <a className="ani-footer-link" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
