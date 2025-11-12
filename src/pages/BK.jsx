// import React from "react";
// import {
//   Trophy,
//   MapPin,
//   Truck,
//   Cookie,
//   Instagram,
//   Phone,
//   ShoppingBag,
//   Home,
// } from "lucide-react";

export default function Duckspace() {
  

  return (
    <>
      {/* <div className="flex items-center justify-center p-6 bg-brand-night min-h-screen containerHome-bg">
      <div className="conteiner shadow-2xl rounded-3xl w-full max-w-sm p-6 relative border border-brand-galactico/30 bg-white/5 backdrop-blur-lg">
        <div className="flex justify-center m-2">
          <img
            src="https://i.ibb.co/QFyqHmCc/Duck-Space-Copia.png"
            alt="logo"
            className="w-20 h-20 rounded-full border-4 border-brand-nebulosa shadow-md hover:scale-105 transition-transform"
          />
        </div>

        <h1 className="text-xl font-serif text-center text-brand-cosmic tracking-wide mb-6">
          DUCK SPACE CONFEITARIA
        </h1>

        <div className="w-full flex flex-col gap-3 font-script">
          {lojas.map((loja) => {
            const isDuckspace = loja.slug === "duckspace/all";

            return (
              <a
                key={loja.slug}
                href={loja.slug}
                aria-label={`Acessar ${loja.nome}`}
                target={isDuckspace ? "_self" : "_blank"}
                rel={isDuckspace ? undefined : "noopener noreferrer"}
                className="
          flex items-center justify-center gap-2
          border border-brand-magenta/30
          rounded-xl py-3 px-4
          font-script text-sm
          transition-all duration-300
          bg-gradient-to-r from-brand-cosmic/10 to-brand-Stellar/10
          text-brand-cosmic
          shadow-md hover:shadow-brand-cosmic/40
          hover:scale-105 active:scale-95
          hover:border-brand-cosmic/60
          hover:text-white
        "
              >
                <div className="flex items-left w-[30%]">{loja.icon}</div>
                <div className="flex items-left w-[60%] font-script">{loja.nome}</div>
              </a>
            );
          })}
        </div>

        <div
          className="
            text-base font-script leading-relaxed 
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
    */}
    </>
  );
}
