import React from "react";

export default function ProductCard({ item }) {
  return (
    <article className="w-full max-w-[320px] bg-white rounded-[1.5rem] shadow-xl overflow-hidden flex flex-col transition-transform hover:scale-[1.02]">
      
      {/* Cabeçalho do Card: Imagem preenchendo tudo */}
      <div className="w-full h-64 overflow-hidden bg-white">
        <img
          src={item.image}
          alt={item.alt || item.title}
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Área de Informações (Fundo Rosa) */}
      {/* O rounded-t-[2.5rem] e o -mt-6 criam aquela sobreposição suave se desejar, 
          mas para ser fiel à imagem, mantemos o encaixe perfeito: */}
      <div className="bg-[#FFD1DC] p-6 flex flex-col items-center text-center flex-1">
        
        <h3 className="text-2xl font-bold text-[#4A2C2A] mb-2">
          {item.title}
        </h3>
        
        <p className="text-[#4A2C2A] text-base font-medium mb-3 opacity-80">
          {item.description}
        </p>

        <div className="text-2xl font-black text-[#4A2C2A] mb-6">
          R$ {item.price}
        </div>

        {/* Botões de Ação */}
        <div className="flex gap-3 w-full justify-center">
          {/* Botão Carrinho */}
          <button className="flex items-center gap-2 bg-[#FF85A1] hover:bg-[#ff7091] text-white px-4 py-2 rounded-full text-xs font-bold transition-colors shadow-sm">
            <span className="text-sm">🛍️</span> Carrinho
          </button>
          
          {/* Botão WhatsApp */}
          <a
            href={item.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#00C853] hover:bg-[#00a846] text-white px-4 py-2 rounded-full text-xs font-bold transition-colors shadow-sm"
          >
            <span className="text-sm">💬</span> Whatsapp
          </a>
        </div>
      </div>
    </article>
  );
}
