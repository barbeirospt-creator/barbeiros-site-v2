import React from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase.js";

export default function DashboardPage() {
  const [userEmail, setUserEmail] = React.useState("");

  React.useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUserEmail(data?.user?.email || "");
    });
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  return (
    <div>
      <header className="topbar">
        <div className="container topbarInner">
          <a href="/" className="brand">Barbeiros<span>.pt</span></a>

          <div className="navActions">
            <Link to="/community" className="btn btnOutline">Comunidade</Link>
            <button onClick={handleLogout} className="btn btnPrimary">Logout</button>
          </div>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <h1 className="sectionTitle">Dashboard</h1>
          <p className="sectionSub">Bem-vindo{userEmail ? `, ${userEmail}` : ""}.</p>

          <div className="cards3">
            <div className="card">
              <h3>O meu Perfil</h3>
              <p>Aqui vamos mostrar os dados do barbeiro e da barbearia.</p>
            </div>

            <div className="card">
              <h3>Diretório</h3>
              <p>Mais tarde vamos listar barbeiros e barbearias aqui.</p>
            </div>

            <div className="card">
              <h3>Agendamento</h3>
              <p>O barbeiro poderá colocar o link da sua agenda externa.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
