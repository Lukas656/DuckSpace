import { useEffect, useState } from "react";
import { getDifferentiatorsData } from "../services/api";

export default function Loja() {
  const [abouts, setAbouts] = useState([]);
  const endereco = "Rua Raposo da Fonseca, 587 - Vila Popular, São Paulo - SP, 08460-520";
  
  useEffect(( ) => {
    async function load() {
      const data = await getDifferentiatorsData();
      setAbouts(data);
    }
    load();
  }, []);

  if (abouts.length === 0) {
    return <div className="text-center py-20 text-[#4A2C2A]">Carregando...</div>;
  }

  return (
    <section className="bg-[#FFF5F5] py-20 md:py-32" id="loja">
      <div className="mx-auto max-w-6xl px-6">
        {/* Título e Subtítulo */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-6xl text-[#4A2C2A] italic font-bold">
            {"Loja"}
          </h1>
          <p className="mt-4 text-[#4A2C2A] text-lg md:text-xl font-medium opacity-90">
            {"Venha nos visitar"}
          </p>
        </div>

        {/* CONTEÚDO DO MAPA */}
        <div className="flex justify-center mt-10">
          <div className="w-full max-w-4xl h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <iframe
              title="Localização da Loja"
              src={`https://www.google.com/maps?q=${encodeURIComponent(endereco )}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Texto do Endereço abaixo do mapa */}
        <div className="text-center mt-8">
          <p className="text-[#4A2C2A] font-semibold text-lg">
            📍 {endereco}
          </p>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-[#FF85A1] font-bold hover:underline"
          >
            Ver no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
