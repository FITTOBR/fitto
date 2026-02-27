"use client";

import { useEffect, useState } from "react";

type Medidas = {
  busto: number;
  cintura: number;
  quadril: number;
  coxa: number;
  perna: number;
  tamanho: string;
};

export default function MarketplacePage() {
  const [autorizado, setAutorizado] = useState(false);
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

  const [frente, setFrente] = useState<string | null>(null);
  const [costas, setCostas] = useState<string | null>(null);
  const [ladoE, setLadoE] = useState<string | null>(null);
  const [ladoD, setLadoD] = useState<string | null>(null);

  const [avatarFit, setAvatarFit] = useState<Medidas | null>(null);
  const [roupa, setRoupa] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("fitto_user");
    if (!user) window.location.href = "/login";
   else {
  setAutorizado(true);

  const salvos = localStorage.getItem("fitto_produtos");
  if (salvos) setProdutos(JSON.parse(salvos));
}

  function upload(e: React.ChangeEvent<HTMLInputElement>, tipo: string) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);

    if (tipo === "frente") setFrente(url);
    if (tipo === "costas") setCostas(url);
    if (tipo === "ladoE") setLadoE(url);
    if (tipo === "ladoD") setLadoD(url);
  }

  // Simulação do motor de medidas (MVP demonstrável)
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

  if (!autorizado) return null;

  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ marginBottom: 10 }}>Marketplace Fitto</h1>
      <button
  onClick={gerarAvatarFit}
  style={{
    padding: "10px 20px",
    borderRadius: 8,
    border: "none",
    background: "#000",
    color: "#fff",
    cursor: "pointer",
    marginTop: 20,
    marginBottom: 20
  }}
>
  Gerar Avatar FIT
</button>

{avatarFit && (
  <div style={{ marginBottom: 20, padding: 15, border: "1px solid #ddd", borderRadius: 10 }}>
    <h3>Avatar FIT criado</h3>
    <p>Busto: {avatarFit.busto} cm</p>
    <p>Cintura: {avatarFit.cintura} cm</p>
    <p>Quadril: {avatarFit.quadril} cm</p>
    <p>Coxa: {avatarFit.coxa} cm</p>
    <p>Comprimento da perna: {avatarFit.perna} cm</p>
    <strong>Tamanho recomendado: {avatarFit.tamanho}</strong>
  </div>
)}
      <p>Teste virtual + compra direta</p>
      <div style={{ marginTop: 30 }}>
  <button
    onClick={gerarAvatarFit}
    style={{
      padding: "10px 20px",
      borderRadius: 8,
      border: "none",
      background: "#000",
      color: "#fff",
      cursor: "pointer"
    }}
  >
    Gerar Avatar FIT
  </button>

  {avatarFit && (
    <div style={{ marginTop: 20, padding: 15, border: "1px solid #ddd", borderRadius: 10 }}>
      <h3>Avatar FIT criado</h3>
      <p>Busto: {avatarFit.busto} cm</p>
      <p>Cintura: {avatarFit.cintura} cm</p>
      <p>Quadril: {avatarFit.quadril} cm</p>
      <p>Coxa: {avatarFit.coxa} cm</p>
      <p>Comprimento da perna: {avatarFit.perna} cm</p>
      <strong>Tamanho recomendado: {avatarFit.tamanho}</strong>
    </div>
  )}
</div>

      <hr style={{ margin: "20px 0" }} />

      <h2>1️⃣ Captura corporal</h2>
      <button
  onClick={gerarAvatarFit}
  style={{
    padding: "10px 20px",
    borderRadius: 8,
    border: "none",
    background: "#000",
    color: "#fff",
    cursor: "pointer",
    marginTop: 10,
    marginBottom: 20
  }}
>
  Gerar Avatar FIT
</button>

{avatarFit && (
  <div style={{ marginBottom: 20, padding: 15, border: "1px solid #ddd", borderRadius: 10 }}>
    <h3>Avatar FIT criado</h3>
    <p>Busto: {avatarFit.busto} cm</p>
    <p>Cintura: {avatarFit.cintura} cm</p>
    <p>Quadril: {avatarFit.quadril} cm</p>
    <p>Coxa: {avatarFit.coxa} cm</p>
    <p>Comprimento da perna: {avatarFit.perna} cm</p>
    <strong>Tamanho recomendado: {avatarFit.tamanho}</strong>
  </div>
)}

      <button
  onClick={gerarAvatarFit}
  style={{
    padding: "10px 20px",
    borderRadius: 8,
    border: "none",
    background: "#000",
    color: "#fff",
    cursor: "pointer",
    marginBottom: 20
  }}
>
  Gerar Avatar FIT
</button>

{avatarFit && (
  <div style={{ marginBottom: 20, padding: 15, border: "1px solid #ddd", borderRadius: 10 }}>
    <h3>Avatar FIT criado</h3>
    <p>Busto: {avatarFit.busto} cm</p>
    <p>Cintura: {avatarFit.cintura} cm</p>
    <p>Quadril: {avatarFit.quadril} cm</p>
    <p>Coxa: {avatarFit.coxa} cm</p>
    <p>Comprimento da perna: {avatarFit.perna} cm</p>
    <strong>Tamanho recomendado: {avatarFit.tamanho}</strong>
  </div>
)}
      <div style={{ background: "red", color: "white", padding: 10 }}>
  TESTE FITTO VISÍVEL
</div>
      <p>Frente</p>
      <input type="file" accept="image/*" onChange={(e) => upload(e, "frente")} />

      <p>Costas</p>
      <input type="file" accept="image/*" onChange={(e) => upload(e, "costas")} />

      <p>Lado esquerdo</p>
      <input type="file" accept="image/*" onChange={(e) => upload(e, "ladoE")} />

      <p>Lado direito</p>
      <input type="file" accept="image/*" onChange={(e) => upload(e, "ladoD")} />

      {frente && costas && ladoE && ladoD && (
        <button
          onClick={gerarAvatarFit}
          style={{ marginTop: 20, padding: 12, borderRadius: 8 }}
        >
          Criar Avatar FIT
        </button>
      )}

      {avatarFit && (
        <div style={{
          marginTop: 20,
          padding: 20,
          background: "white",
          borderRadius: 10,
          border: "1px solid #ddd"
        }}>
          <h3>Avatar FIT criado</h3>
          <p>Busto: {avatarFit.busto} cm</p>
          <p>Cintura: {avatarFit.cintura} cm</p>
          <p>Quadril: {avatarFit.quadril} cm</p>
          <strong>Tamanho recomendado: {avatarFit.tamanho}</strong>
        </div>
      )}

      <hr style={{ margin: "30px 0" }} />

      <h2>2️⃣ Escolha uma peça</h2>

      <div style={{ display: "flex", gap: 20 }}>
        <img
          src="/roupa1.png"
          width={120}
          style={{ cursor: "pointer" }}
          onClick={() => setRoupa("/roupa1.png")}
        />
        <img
          src="/roupa2.png"
          width={120}
          style={{ cursor: "pointer" }}
          onClick={() => setRoupa("/roupa2.png")}
        />
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h2>3️⃣ Visualização no corpo</h2>

      {frente && (
        <div style={{ position: "relative", width: 300 }}>
          <img src={frente} width={300} />
          {roupa && (
            <img
              src={roupa}
              width={300}
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          )}
        </div>
      )}

      {avatarFit && roupa && (
        <button style={{
          marginTop: 20,
          padding: "14px 24px",
          borderRadius: 10,
          background: "#00a650"
        }}>
          Comprar com tamanho {avatarFit.tamanho}
        </button>
      )}
    </main>
  );
}
