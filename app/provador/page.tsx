"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ProvadorPage() {
  const searchParams = useSearchParams();
  const produtoSelecionado = searchParams.get("produto");

  const [imagemUsuario, setImagemUsuario] = useState<string | null>(null);

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImagemUsuario(imageUrl);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8fafc"
      }}
    >
      <div
        style={{
          width: 420,
          padding: 30,
          borderRadius: 16,
          background: "white",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: 26, marginBottom: 20 }}>
          Provador Virtual Fitto
        </h1>

        {produtoSelecionado && (
          <div
            style={{
              marginBottom: 20,
              padding: 15,
              borderRadius: 12,
              background: "#ecfeff",
              border: "1px solid #67e8f9"
            }}
          >
            <p style={{ fontWeight: "bold", marginBottom: 10 }}>
              Produto selecionado
            </p>

            <p style={{ marginBottom: 15 }}>
              {produtoSelecionado}
            </p>

            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
              alt="Produto"
              width={220}
              style={{ borderRadius: 10 }}
            />
          </div>
        )}

        {!imagemUsuario && (
          <label
            style={{
              display: "inline-block",
              padding: "12px 20px",
              background: "black",
              color: "white",
              borderRadius: 10,
              cursor: "pointer"
            }}
          >
            Enviar Foto
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              hidden
            />
          </label>
        )}

        {imagemUsuario && (
          <div style={{ marginTop: 20 }}>
            <p style={{ marginBottom: 10 }}>Sua foto:</p>
            <img
              src={imagemUsuario}
              alt="Usuário"
              width={220}
              style={{ borderRadius: 10 }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
