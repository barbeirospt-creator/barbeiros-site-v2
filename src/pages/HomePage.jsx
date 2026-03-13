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

        <section id="saibamais" className="section">
          <div className="container">
            <h2 className="sectionTitle">
              Tudo o que Precisa para Ter <span className="accent">Sucesso</span>
            </h2>
            <p className="sectionSub">
              Ferramentas poderosas desenhadas especificamente para donos de barbearias
            </p>

            <div className="cards3">
              <div className="card">
                <div className="cardIcon">👥</div>
                <h3>Comunidade</h3>
                <p>
                  Conecte-se com donos de barbearias em todo Portugal. Partilhe experiências, dicas e cresçam juntos.
                </p>
              </div>

              <div className="card">
                <div className="cardIcon">🏪</div>
                <h3>Expor o seu Negócio</h3>
                <p>
                  Apresente o seu negócio com fotos, portfólio, especialidades, localização e horários de funcionamento.
                </p>
              </div>

              <div className="card">
                <div className="cardIcon">🛒</div>
                <h3>Compras em Grupo</h3>
                <p>
                  Junte o poder de compra com outras barbearias para obter os melhores negócios em suprimentos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section sectionAlt">
          <div className="container">
            <h2 className="sectionTitle">
              O Que os Nossos <span className="accent">Membros</span> Dizem
            </h2>
            <p className="sectionSub">
              Junte-se a centenas de donos de barbearias satisfeitos
            </p>

            <div className="cards3">
              <div className="testimonial">
                <div className="stars">★★★★★</div>
                <p className="quote">
                  “O Barbeiros.pt transformou a forma como giro o meu negócio.
                  A visibilidade que ganhei foi incrível.”
                </p>
                <div className="who">João Silva</div>
                <div className="muted">Corte Fino, Lisboa</div>
              </div>

              <div className="testimonial">
                <div className="stars">★★★★★</div>
                <p className="quote">
                  “A funcionalidade de comunidade é incrível. Conectei-me com tantos profissionais e aprendi muito.”
                </p>
                <div className="who">Maria Santos</div>
                <div className="muted">Estilo Premium, Porto</div>
              </div>

              <div className="testimonial">
                <div className="stars">★★★★★</div>
                <p className="quote">
                  “As compras em grupo pouparam-me milhares. Esta plataforma paga-se a si mesma.”
                </p>
                <div className="who">Carlos Ferreira</div>
                <div className="muted">Barbearia Clássica, Braga</div>
              </div>
            </div>

            <div className="ctaBand">
              <h3>
                Pronto para Transformar o Seu <span className="accent">Negócio</span>?
              </h3>
              <p className="muted">
                Junte-se ao Barbeiros.pt hoje e leve a sua barbearia ao próximo nível
              </p>
              <a href="/register" className="btn btnPrimary">Iniciar Teste Gratuito</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <div className="footerBrand">Barbeiros.pt</div>
            <p className="muted">
              A plataforma premium da comunidade para barbearias portuguesas.
            </p>
          </div>

          <div>
            <div className="footerTitle">PLATAFORMA</div>
            <ul className="footerList">
              <li><a href="/">Home</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div>
            <div className="footerTitle">COMUNIDADE</div>
            <ul className="footerList">
              <li><a href="/community">Feed da Comunidade</a></li>
              <li><a href="/dashboard">Diretório</a></li>
            </ul>
          </div>

          <div>
            <div className="footerTitle">LEGAL</div>
            <ul className="footerList">
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Termos de Serviço</a></li>
              <li><a href="#">Política de Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="container footerBottom">
          <span className="muted">
            © {new Date().getFullYear()} Barbeiros.pt. Todos os direitos reservados.
          </span>
        </div>
      </footer>
    </div>
  );
}
