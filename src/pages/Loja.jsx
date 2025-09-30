import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getLoja } from "../services/lojaService";
import { Cookie, ChevronLeft, ChevronRight } from "lucide-react";

export default function Loja() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const carouselRef = useRef(null);

  useEffect(() => {
    getLoja(slug)
      .then(setData)
      .catch(() => setError("Não conseguimos carregar a loja 😢"));
  }, [slug]);

  if (error) return <p className="text-center mt-20">{error}</p>;
  if (!data) return <p className="text-center mt-20">Carregando...</p>;

  // Função para montar link do WhatsApp com o produto
  const getWhatsappLink = (produtoNome, produtoZap) => {
    const mensagem = `Olá, gostaria de comprar o: ${produtoNome}`;
    return `https://wa.me/${
      produtoZap || data.whatsapp
    }?text=${encodeURIComponent(mensagem)}`;
  };

  // Scroll do carrossel
  const scroll = (dir) => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" p-6 max-w-6xl mx-auto relative">
      {/* Header alinhado ao centro para ficar visualmente ligado ao carrossel */}
      <div className="w-full p-2 text-center">
          {/* Logo */}
        <div className="flex items-center justify-center m-3 gap-3">
          <img
            src="https://i.ibb.co/wNBm3twq/Confeitaria.webp"
            alt="logo"
          className="w-19 h-19 rounded-full border-4 border-brand-nebulosa shadow-md hover:scale-105 transition-transform"
          />
        <h1 className="text-3xl md:text-4xl font-extrabold mb-1 text-white/95">
          {data.nome}
        </h1>
        </div>

        <p className="text-white/75 mb-4 max-w-3xl mx-auto">{data.descricao}</p>

        <h2 className="text-2xl font-semibold mb-2 inline-flex items-center gap-3 text-violet-100">
          <Cookie className="w-6 h-6 text-violet-300" />
          Vem Conferir
        </h2>
      </div>

      <div className="relative">
        {/* Botões do carrossel (roxo) */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll para esquerda"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-violet-600 text-white p-3 rounded-full shadow-lg hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-6"
        >
          {data.produtos.map((produto, index) => (
            <div
              key={produto.id ?? index}
              className="min-w-[250px] max-w-[250px] bg-white/6 border border-white/12 rounded-2xl shadow-md p-4 flex flex-col items-center text-center"
            >
              <div className="w-full h-40 rounded-md overflow-hidden mb-3 bg-gradient-to-b from-transparent to-black/20">
                <img
                  src={produto.imagem || "/fallback.png"}
                  alt={`Imagem do produto ${produto.nome}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-white leading-tight">
                {produto.nome}
              </h3>

              <p className="text-sm text-white/80 font-bold mb-3">
                {produto.preco}
              </p>

              {/* Usamos inline style para garantir o override do estilo global "a" */}
              <a
                href={getWhatsappLink(produto.nome, produto.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-white font-semibold rounded-lg px-6 py-2 transition-transform transform active:scale-95 shadow-md"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(124,58,237,1) 0%, rgba(139,92,246,1) 100%)",
                }}
              >
                Eu quero
              </a>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          aria-label="Scroll para direita"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-violet-600 text-white p-3 rounded-full shadow-lg hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Link de retorno */}
      <a
        href="/"
        className="block mt-10 text-violet-200 hover:underline text-center"
      >
        ⬅ Retornar
      </a>
    </div>
  );
}
