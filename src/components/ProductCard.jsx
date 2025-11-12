import React from "react";
const PRODUCT = import.meta.env.VITE_PRODUCT_REDIRECT;

export default function ProductCard({ item, zap }) {
  const whatsappLink = `${PRODUCT}${encodeURIComponent(
    `Olá! Quero pedir: ${item.nome} - ${item.preco}`
  )}`;

  return (
    <article className="glass-card p-4 flex flex-col h-full">
      <div className="relative w-full h-44 rounded-lg overflow-hidden mb-3 bg-gradient-to-b from-transparent to-black/30">
        <img
          src={item.imagem}
          alt={item.nome}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute left-3 top-3 px-2 py-1 rounded bg-white/10 text-xs font-semibold text-white">
          {item.preco.includes("R$") ? item.preco : `R$ ${item.preco}`}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-white/95">{item.nome}</h3>
      <p className="text-sm text-white/70 flex-1">{item.descricao}</p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-center px-4 py-2 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-98"
        style={{
          background: "linear-gradient(90deg,#25D366,#16a34a)",
          color: "#fff",
        }}
      >
        Pedir pelo WhatsApp
      </a>
    </article>
  );
}
