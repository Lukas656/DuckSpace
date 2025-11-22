import React, { useEffect, useState } from "react";
import { getDifferentiatorsData } from "../services/api";

export default function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getDifferentiatorsData();
      setAbouts(data);
    }
    load();
  }, []);

  // enquanto nada chegou
  if (abouts.length === 0) {
    return <div className="text-center py-20 text-white">Carregando...</div>;
  }

  const first = abouts[0]; // 👈 agora é seguro

  return (
    <div className="text-center mx-auto px-6 py-20 md:py-30" id="about">
      {abouts.map((item) => (
        <div key={item._id}>
          <h1 className="text-3xl md:text-5xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] to-[#00D9FF] drop-shadow-lg">
            {item.title}
          </h1>

          <p className="mt-4 text-white/80 text-lg md:text-xl">
            {item.description}
          </p>
        </div>
      ))}

      <div className="grid m-8 gap-6 grid-cols-1 items-center justify-center md:grid-cols-3 cursor-pointer">
        {first.cards?.map((f) => (
          <div
            key={f.alt}
            className="glass-card p-3 flex flex-col items-center justify-center text-center"
          >
            <img src={f.image} alt={f.alt} className="w-20 h-20 mb-4 rounded-xl" />
            <h3 className="font-semibold text-sx text-white">{f.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
