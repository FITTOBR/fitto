"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProvadorPage() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("produto");

  const [image, setImage] = useState<string | null>(null);

  async function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) return;

    const file = event.target.files[0];

    const fileName = `${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("fotos")
      .upload(fileName, file);

    if (error) {
      alert("Erro ao enviar imagem");
      return;
    }

    const { data: urlData } = supabase.storage
      .from("fotos")
      .getPublicUrl(fileName);

    setImage(urlData.publicUrl);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Provador Virtual</h1>

      {productId && <p>Produto selecionado: {productId}</p>}

      <input type="file" accept="image/*" onChange={handleUpload} />

      {image && (
        <div>
          <h3>Sua foto:</h3>
          <img src={image} alt="preview" width={250} />
        </div>
      )}
    </div>
  );
}
