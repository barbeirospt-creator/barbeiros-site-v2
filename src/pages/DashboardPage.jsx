import React from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase.js";

export default function DashboardPage() {
  const [userEmail, setUserEmail] = React.useState("");
  const [profiles, setProfiles] = React.useState([]);
  const [businesses, setBusinesses] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [errorMsg, setErrorMsg] = React.useState("");

  React.useEffect(() => {
    async function loadData() {
      setLoading(true);
      setErrorMsg("");

      const { data: userData } = await supabase.auth.getUser();
      setUserEmail(userData?.user?.email || "");

      const { data: profilesData, error: profilesError } = await supabase
        .from("profiles")
        .select("*")
        .order("full_name", { ascending: true });

      const { data: businessesData, error: businessesError } = await supabase
        .from("business_info")
        .select("*")
        .order("business_name", { ascending: true });

      if (profilesError || businessesError) {
        setErrorMsg(
          profilesError?.message || businessesError?.message || "Erro ao carregar dados."
        );
      }

      setProfiles(profilesData || []);
      setBusinesses(businessesData || []);
      setLoading(false);
    }

    loadData();
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
          <p className="sectionSub">
            Bem-vindo{userEmail ? `, ${userEmail}` : ""}.
          </p>

          {loading && <p className="muted">A carregar dados...</p>}
          {errorMsg && <p className="muted">{errorMsg}</p>}

          {!loading && !errorMsg && (
            <>
              <section style={{ marginTop: "30px" }}>
                <h2 style={{ marginBottom: "18px" }}>Barbeiros</h2>
                <div className="cards3">
                  {profiles.length === 0 && (
                    <div className="card">
                      <p>Não existem barbeiros para mostrar.</p>
                    </div>
                  )}

                  {profiles.map((profile) => (
                    <div className="card" key={profile.id}>
                      <h3>{profile.full_name || profile.username || "Sem nome"}</h3>
                      <p>{profile.website || "Sem website"}</p>
                      <p className="muted">{profile.id}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section style={{ marginTop: "50px" }}>
                <h2 style={{ marginBottom: "18px" }}>Barbearias</h2>
                <div className="cards3">
                  {businesses.length === 0 && (
                    <div className="card">
                      <p>Não existem barbearias para mostrar.</p>
                    </div>
                  )}

                  {businesses.map((business) => (
                    <div className="card" key={business.id}>
                      <h3>{business.business_name || "Sem nome"}</h3>
                      <p>{business.description || "Sem descrição"}</p>
                      <p className="muted">{business.address || "Sem morada"}</p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
