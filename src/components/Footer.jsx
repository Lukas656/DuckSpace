import React from "react";
const INSTAGRAM = import.meta.env.VITE_INSTAGRAM_REDIRECT;
const FEADBACK = import.meta.env.VITE_FEADBACK_REDIRECT;
const IFOOD = import.meta.env.VITE_IFOOD_REDIRECT;
const WHATSAPP = import.meta.env.VITE_WHATSAPP_REDIRECT;

export default function Footer() {
  return (
    <footer className="mt-12 bg-transparent border-t border-white/6 py-10">
      <div className="container mx-auto px-6 flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between gap-6">
        <div>
          <h4 className="font-serif text-xl text-white">DuckSpace</h4>
          <p className="text-sm text-white/70 mt-2">
            Doceria: Bolos e doces | Qualidade 😋
          </p>
          <a href="#" className="text-sm text-white/70 hover:text-white">
            Voltar pro Inicio☝🏻️
          </a>
        </div>

        <div className="flex gap-6 justify-center my-10  md:my-[0px]">
          <div className="flex flex-col text-center md:text-left ">
            <h5 className="text-sm text-white/80 font-semibold">Contato</h5>
            <p className="text-sm text-white/60 mt-2">
              <a
                  href={`${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Whatsapp
                </a>
            </p>
          </div>

          <div>
            <h5 className="text-sm text-white/80 font-semibold">Siga</h5>
            <ul className="text-sm text-white/60 mt-2 space-y-1">
              <li>
                <a
                  href={`${INSTAGRAM}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`${IFOOD}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  iFood
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-white/50 mt-8 text-xs">
        © {new Date().getFullYear()} DuckSpace — Todos os direitos reservados
      </div>
    </footer>
  );
}
