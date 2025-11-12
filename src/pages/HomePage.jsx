import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Cardapio from "../components/Cardapio";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

const WHATSAPP = import.meta.env.VITE_WHATSAPP_REDIRECT;

export default function HomePage() {
  const loja = {
    nome: "DuckSpace",
    whatsapp: WHATSAPP,
    descricao: "Doceria: Bolos e doces | Qualidade 😋",
    logo: "https://i.ibb.co/QFyqHmCc/Duck-Space-Copia.png",
    produtos: [
      {
        nome: "Bolo de chocolate",
        preco: "12,00",
        descricao:
          "Bolo temático com cobertura intergaláctica e brilho comestível ✨",
        imagem:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/3a0c8e6c-1a85-46a3-9379-48ac6c83f05d/202507051452_6QV9_.jpeg", // coloca imagem real depois
      },
      {
        nome: "Brigadeiro cremoso",
        preco: "14,99",
        descricao:
          "Bolo temático com cobertura intergaláctica e brilho comestível ✨",
        imagem:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/3a0c8e6c-1a85-46a3-9379-48ac6c83f05d/202506100019_23DQ_.jpeg", // coloca imagem real depois
      },
      {
        nome: "Bolo Galáctico",
        preco: "59,90",
        descricao:
          "Bolo temático com cobertura intergaláctica e brilho comestível ✨",
        imagem:
          "https://i.ibb.co/r2C3BjdK/Captura-de-tela-2025-09-10-220637.png", // coloca imagem real depois
      },
      {
        nome: "Cupcake Nebulosa",
        preco: "14,90",
        descricao: "Cupcake com swirl espacial e glitter de estrela",
        imagem:
          "https://i.ibb.co/Xx93yQ0X/Captura-de-tela-2025-09-10-215717.png",
      },
      {
        nome: "Brigadeiro Cósmico",
        preco: "6,90",
        descricao: "Brigadeiro galáctico com pó estelar",
        imagem:
          "https://i.ibb.co/Q7qpDWDV/Captura-de-tela-2025-09-10-215728.png",
      },
      {
        nome: "Brigadeiro Cósmico",
        preco: "6,90",
        descricao: "Brigadeiro galáctico com pó estelar",
        imagem:
          "https://i.ibb.co/G4shzC2C/Captura-de-tela-2025-09-10-215708.png",
      },
      {
        nome: "Brigadeiro Cósmico",
        preco: "6,90",
        descricao: "Brigadeiro galáctico com pó estelar",
        imagem:
          "https://i.ibb.co/zVGnJpmm/Captura-de-tela-2025-09-10-215646.png",
      },
      {
        nome: "Brigadeiro Cósmico",
        preco: "6,90",
        descricao: "Brigadeiro galáctico com pó estelar",
        imagem:
          "https://i.ibb.co/QFpYdXsg/Captura-de-tela-2025-09-10-215617.png",
      },
      {
        nome: "Brigadeiro Cósmico",
        preco: "6,90",
        descricao: "Brigadeiro galáctico com pó estelar",
        imagem:
          "https://i.ibb.co/TDWjVxSN/Captura-de-tela-2025-09-10-215657.png",
      },
    ],
  };

  const isDuckspace = loja.slug === "duckspace/all";

  return (
    <>
      <Hero loja={loja} />

      <div className="my-20 md:my-40" id="about">
        <About />
      </div>

      <div id="cardapio">
        <Cardapio produtos={loja.produtos} zap={loja.whatsapp} />
      </div>

      {/* Botão flutuante do WhatsApp */}
      <a
        key={loja.slug}
        href={`${loja.whatsapp}`}
        aria-label={`Acessar ${loja.nome}`}
        target={isDuckspace ? "_self" : "_blank"}
        rel={isDuckspace ? undefined : "noopener noreferrer"}
        className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50"
        style={{ background: "#25D366" }}
      >
        💬
      </a>

      <div className="my-20 md:my-40" id="testimonials">
        <Testimonials />
      </div>

      <Footer />
    </>
  );
}
