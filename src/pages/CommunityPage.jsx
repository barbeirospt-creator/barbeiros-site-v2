import React from "react";
import { Link } from "react-router-dom";

export default function CommunityPage() {
  return (
    <div>
      <header className="topbar">
        <div className="container topbarInner">
          <a href="/" className="brand">Barbeiros<span>.pt</span></a>

          <div className="navActions">
            <Link to="/dashboard" className="btn btnOutline">Dashboard</Link>
          </div>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <h1 className="sectionTitle">
            Comunidade de <span className="accent">Barbeiros</span>
          </h1>
          <p className="sectionSub">
            Esta área será fechada e visível apenas para membros com conta.
          </p>

          <div className="cards3">
            <div className="card">
              <h3>Membros</h3>
              <p>Aqui vamos mostrar os perfis dos barbeiros registados.</p>
            </div>

            <div className="card">
              <h3>Discussões</h3>
              <p>No futuro poderemos adicionar fóruns e partilha de experiências.</p>
            </div>

            <div className="card">
              <h3>Oportunidades</h3>
              <p>Compras em grupo, eventos e networking.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
