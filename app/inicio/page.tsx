import Image from "next/image";
import Link from "next/link";

export default function InicioPage() {
  return (
    <main className="site-page">
      <header className="main-nav">
        <Link href="/" className="main-logo">
          <Image src="/logo.png" alt="Vértice Digital" width={38} height={38} />
          <div>
            VÉRTICE <span>DIGITAL</span>
          </div>
        </Link>

        <nav className="main-links">
          <Link href="/sobre">Sobre</Link>
          <Link href="/produtos">Produtos</Link>
          <Link href="/equipe">Equipe</Link>
          <Link href="/newsroom">Newsroom</Link>
          <Link href="/carreiras">Carreiras</Link>
          <Link href="/contato">Contato</Link>
        </nav>

        <Link href="/contato" className="main-cta">
          Falar com a equipe
        </Link>
      </header>

      <section className="main-hero">
        <div className="hero-glow"></div>
        <div className="hero-grid"></div>

        <div className="main-hero-content">
          <div className="hero-badge">
            <span></span>
            Benguela · Angola · 2026
          </div>

          <h1 className="main-hero-title">
            Inovação digital <br />
            <em>com propósito.</em>
          </h1>

          <div className="hero-keywords">
            <span>Desenvolvemos</span>
            <b>·</b>
            <span>Criamos</span>
            <b>·</b>
            <span>Inovamos</span>
            <b>·</b>
            <span>Transformamos</span>
            <b>·</b>
            <span>Crescemos</span>
          </div>

          <div className="hero-actions">
            <Link href="/produtos" className="primary-button">
              Conhecer os produtos
            </Link>

            <Link href="/sobre" className="secondary-button">
              Sobre a empresa
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
            }
