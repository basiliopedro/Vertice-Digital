import Link from "next/link";

export default function InicioPage() {
  return (
    <main className="site-page">
      <header className="site-nav">
        <Link href="/" className="site-brand">
          VÉRTICE <span>DIGITAL</span>
        </Link>

        <nav className="site-links">
          <Link href="/sobre">Sobre</Link>
          <Link href="/produtos">Produtos</Link>
          <Link href="/equipe">Equipe</Link>
          <Link href="/newsroom">Newsroom</Link>
          <Link href="/carreiras">Carreiras</Link>
          <Link href="/contato">Contato</Link>
        </nav>

        <Link href="/contato" className="site-nav-button">
          Falar conosco
        </Link>
      </header>

      <section className="home-hero">
        <div className="home-hero-content">
          <p className="section-kicker">VÉRTICE DIGITAL</p>

          <h1>
            Tecnologia feita para transformar ideias em sistemas reais.
          </h1>

          <p className="home-hero-text">
            Espaço reservado para a mensagem principal da empresa.
          </p>

          <div className="home-actions">
            <Link href="/produtos" className="primary-button">
              Ver produtos
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
