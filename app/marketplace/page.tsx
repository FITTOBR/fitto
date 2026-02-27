"use client";

import { useEffect, useState } from "react";

export default function MarketplacePage() {
  const [autorizado, setAutorizado] = useState(false);
  const [foto, setFoto] = useState<string | null>(null);
  const [roupa, setRoupa] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("fitto_user");
    if (!user) {
      window.location.href = "/login";
    } else {
      setAutorizado(true);
    }
  }, []);

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setFoto(URL.createObjectURL(file));
  }

  function testarRoupa(img: string) {
    setRoupa(img);
  }

  if (!autorizado) return null;

  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ color: "#333" }}>Marketplace Fitto</h1>

      <h2>1️⃣ Envie sua foto</h2>
      <input type="file" accept="image/*" onChange={handleUpload} />

      <h2 style={{ marginTop: 30 }}>2️⃣ Escolha uma peça</h2>

      <div style={{ display: "flex", gap: 20 }}>
        <img
          src="/roupa1.png"
          width={120}
          style={{ cursor: "pointer" }}
          onClick={() => testarRoupa("/roupa1.png")}
        />

        <img
          src="/roupa2.png"
          width={120}
          style={{ cursor: "pointer" }}
          onClick={() => testarRoupa("/roupa2.png")}
        />
      </div>

      <h2 style={{ marginTop: 30 }}>3️⃣ Resultado no seu corpo</h2>

      {foto && (
        <div style={{ position: "relative", width: 300 }}>
          <img src={foto} width={300} />
          {roupa && (
            <img
              src={roupa}
              width={300}
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          )}
        </div>
      )}

      {roupa && (
        <button style={{ marginTop: 20, padding: 12 }}>
          Comprar esta peça
        </button>
      )}
    </main>
  );
}
