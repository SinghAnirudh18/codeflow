import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const logoUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC0xONATTGGnIhN-Gi98YRMGsjoNo43DxPW-ktVixrK2cOiGXaVB1Ivxc21hzI25aK0is9DXaUZ2nSka_wKsR_F0lPBcCFP1P_v6xFDTOTHOD_0coUBWtQhoxo_j9QrKI7Dk6RFdRcEJ_vPhgv_S4xQonPKjkL6ogG1dvwedkyCRorCxa1yMQEjAh0kqVZWkFSkkAZYf3Rxty-8nxX6MZz4F8Qyv9KVaDSc70gKY9k9zoYWroRBYAIRpTbuTDgDtoqi0XQkqRkDYqM';

export default function LandingNavbar() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Trigger check immediately in case the page is already scrolled on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        #navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          justify-content: center;
          padding: 1.5rem 1rem;
          pointer-events: none;
          box-sizing: border-box;
        }
        #navbar-container *, #navbar-container *::before, #navbar-container *::after {
          box-sizing: border-box;
        }
        .nav-inner-custom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 56rem;
          padding: 0.625rem 1.25rem;
          border-radius: 9999px;
          pointer-events: auto;
          transition: background 0.3s ease;
        }
        .glass-custom {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(20px) saturate(140%);
          -webkit-backdrop-filter: blur(20px) saturate(140%);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-top-color: rgba(255, 255, 255, 0.18);
        }
        .nav-link-custom {
          font-size: 0.7rem;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8a9699;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link-custom:hover {
          color: #00daf3;
        }
        .ani-btn-custom {
          border-radius: 9999px;
          cursor: pointer;
          transition: background 0.25s, box-shadow 0.25s, color 0.2s, border-color 0.2s;
        }
        .ani-btn-custom:hover {
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 24px rgba(0, 218, 243, 0.15);
        }
        @media (max-width: 640px) {
          .nav-links-custom {
            display: none !important;
          }
        }
      `}</style>

      <nav id="navbar-container">
        <div 
          className="nav-inner-custom glass-custom" 
          style={{
            background: scrolled ? 'rgba(14, 14, 15, 0.7)' : 'rgba(255, 255, 255, 0.04)'
          }}
        >
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <img src={logoUrl} alt="Codeski" style={{ height: '2.25rem', width: 'auto', objectFit: 'contain' }} />
          </Link>

          <div className="nav-links-custom" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Link className="nav-link-custom" to="/">Product</Link>
            <Link className="nav-link-custom" to="/features">Features</Link>
            <Link className="nav-link-custom" to="/docs">Docs</Link>
            <Link className="nav-link-custom" to="/bounties">Bounties</Link>
          </div>

          <button
            className="glass-custom ani-btn-custom"
            onClick={user ? () => navigate('/dashboard') : login}
            style={{
              borderRadius: '9999px',
              padding: '0.5rem 1.25rem',
              fontSize: '0.7rem',
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#00daf3',
              border: '1px solid rgba(0, 218, 243, 0.3)',
            }}
          >
            {user ? 'Dashboard' : 'Sign in with GitHub'}
          </button>
        </div>
      </nav>
    </>
  );
}
