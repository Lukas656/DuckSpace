import React from "react";

export default function ProductCard({ item }) {
  return (
    <article className="glass-card p-4 flex flex-col h-full">
      <div className="relative w-full h-44 rounded-lg overflow-hidden mb-3 bg-gradient-to-b from-transparent to-black/30">
        <img
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
      </div>

     <div className="flex gap-4 justify-between">
      <h3 className="text-lg font-semibold text-white/95">{item.title}</h3>
      <div className="w-[70px] h-auto text-center p-1 rounded bg-white/10 text-xs font-semibold text-white">
        R$ {item.price}
      </div>
      </div> 


      <p className="text-sm text-white/70 flex-1">{item.description}</p>

      <a
        href={item.buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-center px-4 py-2 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-98"
        style={{
          background: "linear-gradient(90deg,#25D366,#16a34a)",
          color: "#fff",
        }}
      >
        {item.buttonText}
      </a>
    </article>
  );
}
