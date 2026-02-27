export default function Login() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Login do Fitto</h1>
      <p>Área de acesso para lojistas</p>

      <input placeholder="Email" style={{ display: "block", marginTop: 20, padding: 10 }} />
      <input placeholder="Senha" type="password" style={{ display: "block", marginTop: 10, padding: 10 }} />

      <button style={{ marginTop: 20, padding: 12 }}>
        Entrar
      </button>
    </main>
  );
}
