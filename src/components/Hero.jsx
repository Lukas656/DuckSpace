import React from "react";

const WHATSAPP = import.meta.env.VITE_WHATSAPP_REDIRECT;

export default function Hero({ loja }) {
  return (
    <>
      <header
        className="h-screen min-h-[680px] flex items-center justify-center text-center px-6 relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,14,39,0.9) 0%, rgba(27,18,60,0.85) 60%), url('https://a.lovart.ai/artifacts/agent/C5ojlSnWnCmIQHOd.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* subtle stars / parallax layer */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        </div>

        <nav className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-6 z-30">
          <a href="#about" className="text-sm text-white/70 hover:text-white">
            Sobre
          </a>
          <a
            href="#cardapio"
            className="text-sm text-white/70 hover:text-white"
          >
            Cardápio
          </a>
          <a
            href="#testimonials"
            className="text-sm text-white/70 hover:text-white"
          >
            Depoimentos
          </a>
        </nav>

        <div className="relative z-20 max-w-3xl">
          <img
            src={loja.logo}
            alt={`${loja.nome} logo`}
            className="w-28 h-28 rounded-full mx-auto mb-6 border-4 border-white/10 shadow-xl"
          />

          <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] to-[#00D9FF] drop-shadow-lg">
            {loja.nome}
          </h1>

          <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg md:text-xl">
            {loja.descricao}
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href={`${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105"
              style={{
                background: "linear-gradient(135deg,#8A2BE2 0%, #6B46C1 100%)",
                color: "white",
              }}
            >
              Pedir Agora
            </a>

            <a
              href="#cardapio"
              className="px-5 py-3 rounded-full border border-white/10 text-white/90 hover:bg-white/5 transition"
            >
              Ver Cardápio
            </a>
          </div>
        </div>

        {/* decorative neon glow */}
        <div
          className="absolute left-0 bottom-0 w-96 h-96 blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(138,43,226,0.25), transparent 30%), radial-gradient(circle at 80% 80%, rgba(0,217,255,0.15), transparent 30%)",
          }}
        />
      </header>
    </>
  );
}
