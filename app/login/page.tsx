import Link from "next/link"

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Fitto 🚀</h1>
      <p>Ambiente de testes para lojistas</p>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        <Link href="/login">
          <button>Entrar no sistema</button>
        </Link>

        <Link href="/provador">
          <button>Provador Virtual</button>
        </Link>
      </div>
    </div>
  )
}
