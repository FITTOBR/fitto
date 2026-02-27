"use client";

import { useEffect, useState } from "react";

type Produto = {
  nome: string;
  tamanho: string;
  busto: number;
  cintura: number;
  quadril: number;
};

export default function LojistaPage() {
  const [autorizado, setAutorizado] = useState(false);

  const [nome, setNome] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [busto, setBusto] = useState("");
  const [cintura, setCintura] = useState("");
  const [quadril, setQuadril] = useState("");

  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const user = localStorage.getItem("fitto_user");
    if (!user) window.location.href = "/login";
    else setAutorizado(true);

    const salvos = localStorage.getItem("fitto_produtos");
    if (salvos) setProdutos(JSON.parse(salvos));
  }, []);

  function salvarProduto() {
    const novo: Produto = {
      nome,
      tamanho,
      busto: Number(busto),
      cintura: Number(cintura),
      quadril: Number(quadril)
    };

    const lista = [...produtos, novo];
    setProdutos(lista);
    localStorage.setItem("fitto_produtos", JSON.stringify(lista));

    setNome("");
    setTamanho("");
    setBusto("");
    setCintura("");
    setQuadril("");
  }

  if (!autorizado) return null;

  return (
    <main style={{ padding: 40 }}>
      <h1>Painel do Lojista</h1>
      <p>Cadastro de roupas com medidas reais</p>

      <div style={{
        marginTop: 20,
        padding: 20,
        background: "white",
        borderRadius: 10,
        border: "1px solid #ddd",
        maxWidth: 400
      }}>
        <h3>Novo Produto</h3>

        <input
          placeholder="Nome da peça"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          placeholder="Tamanho (P, M, G)"
          value={tamanho}
          onChange={(e) => setTamanho(e.target.value)}
        />

        <input
          placeholder="Busto (cm)"
          value={busto}
          onChange={(e) => setBusto(e.target.value)}
        />

        <input
          placeholder="Cintura (cm)"
          value={cintura}
          onChange={(e) => setCintura(e.target.value)}
        />

        <input
          placeholder="Quadril (cm)"
          value={quadril}
          onChange={(e) => setQuadril(e.target.value)}
        />

        <button
          onClick={salvarProduto}
          style={{ marginTop: 10, padding: 10 }}
        >
          Salvar Produto
        </button>
      </div>

      <h2 style={{ marginTop: 40 }}>Produtos cadastrados</h2>

      {produtos.map((p, i) => (
        <div key={i} style={{
          marginTop: 10,
          padding: 15,
          border: "1px solid #ddd",
          borderRadius: 8,
          background: "white"
        }}>
          <strong>{p.nome}</strong>
          <p>Tamanho: {p.tamanho}</p>
          <p>Busto: {p.busto}</p>
          <p>Cintura: {p.cintura}</p>
          <p>Quadril: {p.quadril}</p>
        </div>
      ))}
    </main>
  );
}
