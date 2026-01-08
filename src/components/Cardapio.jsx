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

    // SVG da Onda Arredondada (Bordado de Chocolate)
  const ChocolateWave = ({ flip }) => (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`}>
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="relative block w-[calc(150%+1.3px)] h-[80px] md:h-[100px]"
        style={{ fill: '#4A2C2A' }}
      >
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
      </svg>
    </div>
  );

  const first = produtos[0];

  return (
    <section className="bg-[#FFF5F5] relative overflow-hidden" id="cardapio">
      {/* Onda Superior */}
       {/* Onda Superior (Chocolate) */}
      <div className="absolute top-0 left-0 w-full z-20">
        <ChocolateWave flip={true} />
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
      
      {/* Onda Inferior (Chocolate) */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <ChocolateWave flip={false} />
      </div>
    </section>
  );
}
