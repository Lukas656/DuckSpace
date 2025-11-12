import React from "react";
import ProductCard from "./ProductCard";

export default function Cardapio({ produtos = [], zap }) {
  return (
    <div className="mx-5 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {produtos.map((p, i) => (
        <ProductCard key={i} item={p} zap={zap} />
      ))}
    </div>
  );
}
