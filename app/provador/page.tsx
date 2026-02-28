"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

function ConteudoProvador() {
  const [imagem, setImagem] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const produtoSelecionado = searchParams.get("produto");

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImagem(url);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        fontFamily: "sans-serif"
      }}
    >
      <h1 style={{ fontSize: 32 }}>Provador Virtual Fitto</h1>

      {produtoSelecionado && (
        <div
          style={{
            marginBottom: 15,
            padding: 10,
            borderRadius: 8,
            background: "#ecfeff",
            border: "1px solid #67e8f9"
          }}
        >
          Produto selecionado: {produtoSelecionado}
        </div>
      )}

      <label
        style={{
          padding: "12px 20px",
          background: "black",
          color: "white",
          borderRadius: 8,
          cursor: "pointer"
        }}
      >
        Enviar Foto
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          style={{ display: "none" }}
        />
      </label>

      {imagem && (
        <img
          src={imagem}
          alt="Preview"
          style={{ width: 250, borderRadius: 12 }}
        />
      )}
    </main>
  );
}

export default function Provador() {
  return (
    <Suspense fallback={<div>Carregando provador...</div>}>
      <ConteudoProvador />
    </Suspense>
  );
}
