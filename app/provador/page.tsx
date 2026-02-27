"use client";

import { useState } from "react";

export default function ProvadorPage() {
  const [foto, setFoto] = useState<string | null>(null);

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setFoto(url);
  }

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ fontSize: 32 }}>Provador Virtual Fitto</h1>

      <label style={{
        padding: "12px 20px",
        background: "black",
        color: "white",
        borderRadius: 8,
        cursor: "pointer"
      }}>
        Enviar Foto
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          style={{ display: "none" }}
        />
      </label>

      {foto && (
        <img
          src={foto}
          alt="Foto enviada"
          style={{
            width: 300,
            borderRadius: 12,
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
          }}
        />
      )}
    </main>
  );
}
