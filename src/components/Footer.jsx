import React, { useEffect, useState } from "react";
import { getFooterData } from "../services/api";

export default function Footer() {
  const [footer, setFooter] = useState();

  useEffect(() => {
    async function load() {
      const data = await getFooterData();
      setFooter(data[0]); 
    }
    load();
  }, []);

  if (!footer) {
    return (
      <div className="text-center py-20 text-white">Carregando Footer...</div>
    );
  }

  return (
    <footer className="mt-12 bg-transparent border-t border-white/10 py-10">
      <div className="container mx-auto px-6 flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between gap-6">

        {/* Esquerda */}
        <div>
          <h4 className="font-serif text-xl text-white">{footer.title}</h4>
          <p className="text-sm text-white/70 mt-2">{footer.description}</p>

          <a
            href={footer.links[0].link}
            className="text-sm inline-flex gap-2 items-center text-white/70 hover:text-white mt-3"
          >
            {footer.links[0].text}
          </a>
        </div>

        {/* Direita */}
        <div className="flex gap-12 justify-center my-10 md:my-0">

          <div className="flex flex-col text-center md:text-left">
            <h5 className="text-sm text-white/80 font-semibold">Contato</h5>

            <p className="text-sm text-white/60 mt-2">
              <a
                href={footer.links[1].link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline inline-flex gap-2 items-center"
              >
                {footer.links[1].text}
              </a>
            </p>
          </div>

          <div>
            <h5 className="text-sm text-white/80 font-semibold">Siga</h5>
            <ul className="text-sm text-white/60 mt-2 space-y-2">
              {footer.links.slice(2).map((l) => (
                <li key={l._id}>
                  <a
                    href={l.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline inline-flex gap-2 items-center"
                  >
                    {l.text}
                  </a>
                </li>
              ))}
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
