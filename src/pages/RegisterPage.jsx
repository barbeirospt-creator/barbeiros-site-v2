import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase.js";

export default function RegisterPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const nav = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMsg(error.message);
      return;
    }

    setMsg("Conta criada com sucesso. Pode fazer login.");
    setTimeout(() => {
      nav("/login");
    }, 1200);
  }

  return (
    <div className="authPage">
      <div className="authCard">
        <h1>Register</h1>
        <p className="muted">Crie a sua conta para aceder à comunidade.</p>

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
            {loading ? "A criar..." : "Criar conta"}
          </button>
        </form>

        <div className="authLinks">
          <span className="muted">Já tem conta?</span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
