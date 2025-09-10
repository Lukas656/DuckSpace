import React from "react";

const WHATSAPP = import.meta.env.VITE_WHATSAPP_REDIRECT;
const INSTAGRAM = import.meta.env.VITE_INSTAGRAM_REDIRECT;

export default function Home() {
  const lojas = [
    { nome: "DuckSpace", slug: "duckspace" },
    { nome: "Doces", slug: "maria-doces" },
    { nome: "Bolos", slug: "maria-doces" },
    { nome: "Whatsapp", slug: WHATSAPP },
    { nome: "Instagram", slug: INSTAGRAM },
  ];

  return (
    <div className="container-bg min-h-screen flex items-center justify-center p-4 transition-colors bg-brand-nebulosa">
      <div className="conteiner shadow-2xl rounded-3xl w-full max-w-sm p-6 relative border border-brand-galactico/30">
        {/* Logo */}
        <div className="flex justify-center m-4">
          <img
            src="https://i.ibb.co/wNBm3twq/Confeitaria.webp"
            alt="logo"
            className="w-24 h-24 rounded-full border-3 border-brand-nebulosa shadow-md "
          />
        </div>

        {/* Nome da confeitaria */}
        <h1 className="text-l font-semibold text-center text-white mb-4">
          DUCK SPACE
        </h1>

        {/* Lista de botões */}
        <div className="w-full flex flex-col gap-[16px]">
          {lojas.map((loja, i) => (
            <a
              key={loja.slug}
              href={loja.slug}
              className={`
                w-full text-center 
                border-2 border-white/20 
                rounded-xl py-3 px-4 
                font-medium 
                transition-all duration-300 
                block 
                text-transparent bg-clip-text 
                bg-gradient-to-r from-pink-300 to-red-400 
                bg-white/5 backdrop-blur-sm 
                shadow-lg hover:shadow-pink-400/30 
                hover:scale-[1.05] active:scale-[0.98]
                hover:border-pink-300/40
              `}
            >
              {loja.nome}
            </a>
          ))}
        </div>

        <p
          className="
            text-base md:text-l 
            font-medium 
            leading-relaxed 
            text-left 
            mt-8 
            p-4 
            rounded-2xl 
            bg-white/5 
            backdrop-blur-sm 
            border border-white/10
            shadow-md
          "
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            🍩 Confeitaria de qualidade
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
            🏆 A campeã em recheios e coberturas.
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-red-400">
            🛵 Delivery de Doces
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">
            📍 Guaianases e Região
          </span>
        </p>
      </div>
    </div>
  );
}
