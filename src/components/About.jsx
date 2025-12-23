import { useEffect, useState } from "react";
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

  if (abouts.length === 0) {
    return <div className="text-center py-20 text-white">Carregando...</div>;
  }

  const first = abouts[0];

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 md:py-32" id="about">
      <div className="text-center mb-16">
        <h1 className="font-brand logo-text text-3xl md:text-6xl text-var(--text)">
          {first.title}
        </h1>

        <p className="mt-2 logo-text md:text-3xl font-bold text-var(--text)">
          {first.subtitle}
        </p>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 items-center">

        <div className="flex flex-col items-center">
          <div className="bg-white/80 p-3 rounded-xl shadow-lg">
            <img
              src={first.image.src}
              alt={first.image.alt}
              className="w-72 h-80 object-cover rounded-lg"
            />
          </div>

          <p className="mt-3 text-sm text-var(--text)">
            {first.image.description}
          </p>
        </div>

        {/* LISTA DE DESTAQUES */}
        <ul className="flex flex-col gap-5 text-left">
  {first.highlights.map((item) => (
    <li
      key={item._id}
      className="flex items-center gap-4 logo-text text-xl md:text-2xl font-bold text-var(--text)"
    >
      <span className="text-pink-400 text-xl">
        {item.icon}
      </span>
      <span>{item.text}</span>
    </li>
  ))}
</ul>

      </div>
    </div>
  );
}
