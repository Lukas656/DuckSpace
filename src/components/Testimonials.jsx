import React from "react";

const items = [
  { name: "Mariana", text: "O bolo ficou perfeito, atendimento 5 estrelas!" },
  { name: "Carlos", text: "Entrega rápida e a decoração tava linda 😍" },
  { name: "Lucas", text: "Melhor doceria da região. Recomendo! amei❤️" },
];

const FEADBACK = import.meta.env.VITE_FEADBACK_REDIRECT;

export default function Testimonials() {
  return (
   <>
   <div className="mx-5 grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((t, i) => (
        <div key={i} className="glass-card p-6">
          <p className="text-white/90 italic">“{t.text}”</p>
          <div className="mt-4 text-sm text-white/70 font-semibold">
            — {t.name}
          </div>
        </div>
      ))}

    </div>
<div className="w-full flex itens-center my-5 justify-center">
      <a
        href={`${FEADBACK}`}
        target="_blank"
        className="underline"
      >
        Veja mais Feadbacks..
      </a>
</div>
   </>
  );
}
