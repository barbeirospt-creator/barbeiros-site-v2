import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase.js";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const nav = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/dashboard";

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMsg(error.message);
      return;
    }

    nav(from, { replace: true });
  }

  return (
    <div className="authPage">
      <div className="authCard">
        <h1>Login</h1>
        <p className="muted">Entre na sua conta.</p>

        <form onSubmit={onSubmit} className="authForm">
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {msg ? <div className="authMsg">{msg}</div> : null}

          <button className="btn btnPrimary" disabled={loading}>
            {loading ? "A entrar..." : "Entrar"}
          </button>
        </form>

        <div className="authLinks">
          <span className="muted">Ainda não tem conta?</span>
          <Link to="/register">Registar</Link>
        </div>
      </div>
    </div>
  );
}
