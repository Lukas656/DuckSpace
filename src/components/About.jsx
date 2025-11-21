import React from "react";

const features = [
  {
    title: "Ingredientes Premium",
    icon: "https://a.lovart.ai/artifacts/agent/fMF34dn1CBoiDk6I.jpg",
  },
  {
    title: "Entrega Rápida",
    icon: "https://a.lovart.ai/artifacts/agent/44TwLmUOsRRiWv29.jpg",
  },
  {
    title: "Personalização",
    icon: "https://a.lovart.ai/artifacts/agent/gQe2sldiCdNaihqO.jpg",
  },
  {
    title: "Qualidade Garantida",
    icon: "https://a.lovart.ai/artifacts/agent/NCyuLcnvjBSe8pju.jpg",
  },
];

export default function About() {
  return (
    <div className="h-screen mx-auto px-6">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="glass-card p-6 flex flex-col items-center text-center">
            <img src={f.icon} alt={f.title} className="w-14 h-14 mb-4" />
            <h3 className="font-semibold text-lg text-white">{f.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
