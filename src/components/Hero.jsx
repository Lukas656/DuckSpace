import React, { useEffect, useState } from "react";
import { getHeroData, getNavLinks } from "../services/api";

export default function Hero() {
  const [hero, setHero] = useState(null);
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    async function load() {
      const heroResp = await getHeroData();
      const navResp = await getNavLinks();

      setHero(heroResp[0]);
      setNavLinks(navResp);
    }

    load();
  }, []);

  if (!hero) return <div className="text-center py-20 text-white">Carregando...</div>;

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
        {/* camada de textura */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        </div>

        {/* navegação dinâmica */}
        <nav className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-6 z-30">
          {navLinks.map((item) => (
            <a
              key={item._id}
              href={item.link}
              className="text-sm text-white/70 hover:text-white"
            >
              {item.text}
            </a>
          ))}
        </nav>

        {/* conteúdo principal */}
        <div className="relative z-20 max-w-3xl">
          <img
            src={hero.logo}
            alt={hero.logoAlt}
            className="w-28 h-28 rounded-full mx-auto mb-6 border-4 border-white/10 shadow-xl"
          />

          <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] to-[#00D9FF] drop-shadow-lg">
            {hero.title}
          </h1>

          <p className="mt-4 text-white/80 text-lg md:text-xl">
            {hero.description}
          </p>

          {/* botões vindos do backend */}
          <div className="mt-8 flex items-center justify-center gap-4">
            {hero.buttons.map((btn) => (
              <a
                key={btn._id}
                href={btn.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg,#8A2BE2 0%, #6B46C1 100%)",
                  color: "white",
                }}
              >
                {btn.text}
              </a>
            ))}
          </div>
        </div>

        {/* glow decorativo */}
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
