"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("fitto_user");
    setLogado(!!user);
  }, []);

  function handleLogout() {
    localStorage.removeItem("fitto_user");
    window.location.href = "/login";
  }

  return (
    <html lang="pt-br">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {logado && (
          <header style={{
            padding: 16,
            borderBottom: "1px solid #ddd",
            display: "flex",
            gap: 20,
            alignItems: "center"
          }}>
          <strong>Fitto</strong>

<Link href="/provador">Provador</Link>
<Link href="/marketplace">Marketplace</Link>
<Link href="/lojista">Painel do Lojista</Link>

            <button
              onClick={handleLogout}
              style={{
                marginLeft: "auto",
                padding: "6px 12px",
                borderRadius: 6,
                border: "1px solid #ccc",
                cursor: "pointer"
              }}
            >
              Sair
            </button>
          </header>
        )}

        <main>{children}</main>
      </body>
    </html>
  );
}
