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
      
{avatarFit && (
  <div style={{ marginTop: 30 }}>
    <h3>Medidas detectadas</h3>

    <p>Busto: {avatarFit.busto} cm</p>
    <p>Cintura: {avatarFit.cintura} cm</p>
    <p>Quadril: {avatarFit.quadril} cm</p>
    <p>Coxa: {avatarFit.coxa} cm</p>
    <p>Comprimento da perna: {avatarFit.perna} cm</p>

    <strong>
      Tamanho recomendado: {avatarFit.tamanho}
    </strong>

    <div style={{
      marginTop: 20,
      padding: 20,
      borderRadius: 12,
      background: "#f3f4f6"
    }}>
      <p>Simulação da peça no corpo</p>

      <div style={{
        height: 220,
        borderRadius: 10,
        background: "#e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        Roupa ajustada ao corpo tamanho {avatarFit.tamanho}
      </div>
    </div>

    <button
      style={{
        marginTop: 20,
        padding: "10px 20px",
        borderRadius: 8,
        border: "none",
        background: "#22c55e",
        color: "#fff",
        cursor: "pointer"
      }}
    >
      Comprar com tamanho {avatarFit.tamanho}
    </button>
  </div>
)}
  
