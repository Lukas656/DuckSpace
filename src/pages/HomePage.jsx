import React from "react";
import {
  Trophy,
  MapPin,
  Truck,
  Cookie,
  Instagram,
  Phone,
  ShoppingBag,
  Home,
} from "lucide-react";

const WHATSAPP = import.meta.env.VITE_WHATSAPP_REDIRECT;
const INSTAGRAM = import.meta.env.VITE_INSTAGRAM_REDIRECT;
const FEADBACK = import.meta.env.VITE_FEADBACK_REDIRECT;
const IFOOD = import.meta.env.VITE_IFOOD_REDIRECT;

export default function HomePage() {
  const lojas = [
    {
      nome: "DuckSpace",
      slug: "duckspace/all",
      icon: <Home className="w-4 h-4" />,
    },
    { nome: "Whatsapp", slug: WHATSAPP, icon: <Phone className="w-4 h-4" /> },
    { nome: "Ifood", slug: IFOOD, icon: <ShoppingBag className="w-4 h-4" /> },
    {
      nome: "Instagram",
      slug: INSTAGRAM,
      icon: <Instagram className="w-4 h-4" />,
    },
    {
      nome: "FeadBacks",
      slug: "https://www.instagram.com/stories/highlights/18184001122312729/",
      icon: <Cookie className="w-4 h-4" />,
    },
  ];

  return (
    <div className="flex items-center justify-center p-6 bg-brand-night min-h-screen">
      <div className="conteiner shadow-2xl rounded-3xl w-full max-w-sm p-6 relative border border-brand-galactico/30 bg-white/5 backdrop-blur-lg">
        {/* Logo */}
        <div className="flex justify-center m-2">
          <img
            src="https://i.ibb.co/wNBm3twq/Confeitaria.webp"
            alt="logo"
            className="w-20 h-20 rounded-full border-4 border-brand-nebulosa shadow-md hover:scale-105 transition-transform"
          />
        </div>

        {/* Nome da confeitaria */}
        <h1 className="text-xl font-bold text-center text-brand-cosmic tracking-wide mb-6">
          DUCK SPACE CONFEITARIA
        </h1>

        {/* Lista de botões */}
        <div className="w-full flex flex-col gap-3">
          {lojas.map((loja) => (
            <a
              key={loja.slug}
              href={loja.slug}
              aria-label={`Acessar ${loja.nome}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-2
                border border-brand-magenta/30
                rounded-xl py-3 px-4
                font-medium text-sm
                transition-all duration-300
                bg-gradient-to-r from-brand-cosmic/10 to-brand-Stellar/10
                text-brand-cosmic
                shadow-md hover:shadow-brand-cosmic/40
                hover:scale-105 active:scale-95
                hover:border-brand-cosmic/60
                hover:text-white
              "
            >
              <div className="flex items-left w-[30%]">
              {loja.icon}
              </div>
              <div className="flex items-left w-[60%]">
              {loja.nome}
              </div>

            </a>
          ))}
        </div>

        {/* Diferenciais */}
        <div
          className="
            text-base font-medium leading-relaxed 
            mt-6 p-4 
            rounded-2xl 
            bg-gradient-to-b from-brand-night/40 to-brand-galactico/20 
            border border-brand-magenta/30
            shadow-inner space-y-3
          "
        >
          <div className="flex items-center gap-2 text-brand-cosmic">
            <Cookie className="w-5 h-5" />
            <p className="text-sm">Confeitaria de qualidade</p>
          </div>
          <div className="flex items-center gap-2 text-brand-cosmic">
            <Trophy className="w-5 h-5" />
            <p className="text-sm">A campeã em recheios e coberturas</p>
          </div>
          <div className="flex items-center gap-2 text-brand-cosmic">
            <Truck className="w-5 h-5" />
            <p className="text-sm">Delivery de Doces</p>
          </div>
          <div className="flex items-center gap-2 text-brand-cosmic">
            <MapPin className="w-5 h-5" />
            <p className="text-sm">Guaianases e Região</p>
          </div>
        </div>
      </div>
    </div>
  );
}
