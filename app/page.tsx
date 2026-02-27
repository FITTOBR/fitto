export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Fitto 🚀</h1>
      <p>Ambiente de testes para lojistas</p>

      <div style={{ marginTop: 30 }}>
        <a href="/login">
          <button style={{ padding: 12, marginRight: 10 }}>
            Entrar no sistema
          </button>
        </a>

        <a href="/provador">
          <button style={{ padding: 12 }}>
            Provador Virtual
          </button>
        </a>
      </div>
    </main>
  );
}
