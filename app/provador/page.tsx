"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

function ConteudoProvador() {
  const [imagem, setImagem] = useState<string | null>(null);
  const [estado, setEstado] = useState("");
const [cidade, setCidade] = useState("");
const [liberado, setLiberado] = useState(false);
  const regioesLiberadas: Record<string, string[]> = {
  "SP": ["São Paulo", "Campinas"],
  "RJ": ["Rio de Janeiro"],
  "MG": ["Belo Horizonte"]
};
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
  <div style={{
    display: "flex",
    gap: 20,
    padding: 20,
    borderRadius: 12,
    border: "1px solid #e5e7eb",
    background: "#fff"
  }}>
    <img
      src="/produto-exemplo.png"
      style={{
        width: 120,
        height: 120,
        objectFit: "cover",
        borderRadius: 10
      }}
    />

    <div>
      <h3 style={{ margin: 0 }}>
        {produtoSelecionado === "camiseta-fitto-dry"
          ? "Camiseta Fitto Dry"
          : "Produto Fitto"}
      </h3>

      <p style={{ color: "#64748b", marginTop: 5 }}>
        Ajuste inteligente ao corpo
      </p>

      <div style={{
        marginTop: 10,
        padding: "6px 12px",
        borderRadius: 8,
        background: "#ecfeff",
        border: "1px solid #67e8f9",
        fontSize: 14
      }}>
        Tamanho recomendado será exibido após análise
      </div>
    </div>
  </div>
)}
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
