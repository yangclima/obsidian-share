import Link from "next/link";

export default function Home() {
  return (
    <div className="homepage">
      <header className="hero">
        <div className="hero-content">
          <h1>Cálculo Integral e Diferencial 3</h1>
          <p className="subtitle">
            Notas de estudo organizadas sobre cálculo vetorial, curvas,
            superfícies e séries infinitas.
          </p>
          <Link href="/calculo3" className="cta-button">
            Ver Índice Completo →
          </Link>
        </div>
      </header>

      <style jsx>{`
        .homepage {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .hero {
          text-align: center;
          padding: 4rem 2rem;
          margin-bottom: 3rem;
          background: linear-gradient(
            135deg,
            var(--color-accent-bg) 0%,
            transparent 100%
          );
          border-radius: 1.5rem;
        }

        .hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(
            135deg,
            var(--color-accent) 0%,
            var(--color-accent-light) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          display: inline-block;
          padding: 0.875rem 2rem;
          background: var(--color-accent);
          color: white;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .cta-button:hover {
          background: var(--color-accent-light);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        @media (max-width: 640px) {
          .hero {
            padding: 3rem 1.5rem;
          }

          .hero h1 {
            font-size: 1.875rem;
          }

          .subtitle {
            font-size: 1.1rem;
          }

          .sections-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
