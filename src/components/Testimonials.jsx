import React, { useEffect, useState } from "react";
import { getTestimonialsData } from "../services/api";

export default function Testimonials() {
  const [feadbacks, setAbouts] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getTestimonialsData();
      setAbouts(data);
    }
    load();
  }, []);

  // ainda carregando
  if (feadbacks.length === 0) {
    return <div className="text-center py-20 text-white">Carregando...</div>;
  }

  const first = feadbacks[0];

  return (
    <div className="px-6 py-30" id="feadbacks">
      <div className="mx-5 grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
        {first.cards.map((t) => (
          <div key={t._id} className="glass-card p-6">
            <p className="text-white/90 italic">“{t.text}”</p>
            <div className="mt-4 text-sm text-white/70 font-semibold">
              — {t.author}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex items-center my-5 justify-center">
        <a
          href={first.linkUrl}
          target="_blank"
          className="underline text-white/80 hover:text-white"
        >
          {first.linkText}
        </a>
      </div>
    </div>
  );
}
