export default function LoginPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Login do Fitto</h1>
      <p>Ambiente de testes para lojistas</p>

      <form style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 300 }}>
        <input placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button>Entrar</button>
      </form>
    </div>
  )
}
