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
    return <div className="text-center py-20 text-[#4A2C2A]">Carregando...</div>;
  }

  const first = produtos[0];

  return (
    <section className="bg-[#FFF5F5] relative overflow-hidden" id="cardapio">
      {/* Onda Superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-[#4A2C2A]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120c68.47-21.32,142.13-24.1,213.18-12.11Z"></path>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 relative z-10">
        {/* Título e descrição */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-6xl text-[#4A2C2A] italic font-bold">
            {first.title }
          </h1>
          <p className="mt-4 text-[#4A2C2A] text-lg md:text-xl font-medium opacity-90">
            {first.description }
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {first.products.map((p) => (
            <ProductCard key={p._id} item={p} />
          ))}
        </div>
      </div>

      {/* Onda Inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-[#4A2C2A]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120c68.47-21.32,142.13-24.1,213.18-12.11Z"></path>
        </svg>
      </div>
    </section>
  );
}
