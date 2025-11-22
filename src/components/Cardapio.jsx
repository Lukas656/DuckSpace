import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProductsData } from "../services/api";

export default function Cardapio() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getProductsData();
      setProdutos(data);
    }
    load();
  }, []);

  if (produtos.length === 0) {
    return <div className="text-center py-20 text-white">Carregando...</div>;
  }

  const first = produtos[0];

  return (
    <div className=" mx-10 md:mx-30 py-20 md:py-30"  id="cardapio">
      {/* Título e descrição */}
      <h1 className="text-3xl md:text-5xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] to-[#00D9FF] drop-shadow-lg text-center">
        {first.title}
      </h1>

      <p className="mt-4 text-white/80 text-lg md:text-xl text-center max-w-2xl mx-auto">
        {first.description}
      </p>

      {/* Cards */}
      <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {first.products.map((p) => (
          <ProductCard key={p._id} item={p} zap={p.buttonLink} />
        ))}
      </div>
    </div>
  );
}
