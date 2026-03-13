export default function HomePage() {
  return (
    <div>
      <header className="topbar">
        <div className="container topbarInner">
          <a href="/" className="brand">Barbeiros<span>.pt</span></a>

          <nav className="navLinks">
            <a href="/" className="navLink">Home</a>
            <a href="#faq" className="navLink">FAQ</a>
          </nav>

          <div className="navActions">
            <a href="/login" className="btn btnGhost">Login</a>
            <a href="/register" className="btn btnPrimary">Register</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="heroBg" />
          <div className="container heroInner">
            <div className="heroCard">
              <h1 className="heroTitle">
                Barbeiros.pt<br />
                <span className="accent">Comunidade Premium</span><br />
                de Barbearias
              </h1>

              <p className="heroText">
                Conecte-se com os melhores profissionais de barbearia de Portugal.
                Exponha o seu talento, junte-se a compras em grupo exclusivas e
                expanda o seu negócio.
              </p>

              <div className="heroCtas">
                <a href="/register" className="btn btnPrimary">Começar</a>
                <a href="#saibamais" className="btn btnOutline">Saber Mais</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
