"use client";

export default function LoginPage() {

  function handleLogin() {
    localStorage.setItem("fitto_user", "logado");
    window.location.href = "/provador";
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Fitto</h1>
      <p>Ambiente de acesso ao sistema</p>

      <button
        onClick={handleLogin}
        style={{
          marginTop: 20,
          padding: "12px 20px",
          background: "black",
          color: "white",
          borderRadius: 8,
          border: "none",
          cursor: "pointer"
        }}
      >
        Entrar no sistema
      </button>
    </div>
  );
}
