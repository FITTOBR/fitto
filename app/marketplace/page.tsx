"use client";

import { useState } from "react";

type Medidas = {
  busto: number;
  cintura: number;
  quadril: number;
  coxa: number;
  perna: number;
  tamanho: string;
};

export default function MarketplacePage() {
  const [avatarFit, setAvatarFit] = useState<Medidas | null>(null);

  function gerarAvatarFit() {
    const medidas: Medidas = {
      busto: 96,
      cintura: 82,
      quadril: 102,
      coxa: 58,
      perna: 104,
      tamanho: "M"
    };
    setAvatarFit(medidas);
  }

  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ marginBottom: 10 }}>Marketplace Fitto</h1>
      <p>Teste virtual + compra direta</p>
      <p>Provador inteligente Fitto ativo</p>

      <h2>1️⃣ Captura corporal</h2>
      <p>Envie fotos frente, costas e laterais</p>

      <h2>2️⃣ Escolha uma peça</h2>
      <p>Selecione roupa para teste</p>

      <h2>3️⃣ Visualização no corpo</h2>

      <button
        onClick={gerarAvatarFit}
        style={{
          padding: "10px 20px",
          borderRadius: 8,
          border: "none",
          background: "#000",
          color: "#fff",
          cursor: "pointer",
          marginTop: 20
        }}
      >
        Gerar Avatar FIT
      </button>

    <button onClick={gerarAvatarFit}>
  Gerar Avatar FIT
</button>

    </main>
  );
}
