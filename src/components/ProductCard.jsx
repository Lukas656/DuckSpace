import React from "react";

export default function ProductCard({ item }) {
  // Lógica para verificar se está esgotado
  // Extrai apenas os números da string "10 unidades" -> 10
  const qtdNumerica = item.quantidade ? parseInt(item.quantidade.replace(/\D/g, "")) : 0;
  const isEsgotado = qtdNumerica < 1;
  

  return (
    <article 
      className={`w-full max-w-[320px] bg-white rounded-[1.5rem] shadow-xl overflow-hidden flex flex-col transition-all duration-500 relative
        ${isEsgotado ? "grayscale opacity-80 scale-95" : "hover:scale-[1.02]"}
      `}
    >
      
      {/* Badge de Estoque ou Esgotado */}
      <div className={`absolute top-4 right-4 z-30 font-bold text-[15px] px-3 py-1 rounded-full shadow-lg border transition-colors
        ${isEsgotado 
          ? "bg-gray-600 text-white border-gray-400" 
          : "bg-[#FFD1DC] text-[#4A2C2A] border-[#4A2C2A]/20"}
      `}>
        {isEsgotado ? "ESGOTADO" : item.quantidade}
      </div>

      {/* Cabeçalho do Card */}
      <div className="w-full h-64 overflow-hidden bg-white relative">
        <img
          src={item.image}
          alt={item.alt || item.title}
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>
        
        {/* Overlay de "Indisponível" sobre a imagem se estiver esgotado */}
        {isEsgotado && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full border border-white/30 text-sm font-bold uppercase tracking-widest">
              Indisponível
            </span>
          </div>
        )}
      </div>

      {/* Área de Informações */}
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
        <div className={`flex gap-3 w-full justify-center ${isEsgotado ? "pointer-events-none opacity-50" : ""}`}>
          {/* Botão Carrinho */}
          <a 
            href={item.buttonLink}
            // href="https://www.ifood.com.br/delivery/sao-paulo-sp/duck-space-confeitaria-vila-popular/3a0c8e6c-1a85-46a3-9379-48ac6c83f05d?UTM_Medium=share"
            target="_blank"
            disabled={isEsgotado}
            className="flex items-center gap-2 cursor-pointer bg-[#FF85A1] hover:bg-[#ff7091] text-white px-15 py-3 rounded-full text-xs font-bold transition-colors shadow-sm disabled:bg-gray-400"
          >
            <span className="text-sm w-full">{item.buttonText}</span>
          </a>
         
        </div>
      </div>
    </article>
  );
}
