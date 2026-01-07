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
      <div className="text-center py-20 text-[#4A2C2A]">Carregando Footer...</div>
    );
  }

  return (
    <footer className="relative bg-[#4A2C2A] pt-24 pb-10 overflow-hidden">
      {/* Onda Decorativa no Topo do Footer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-[#FFF5F5]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120c68.47-21.32,142.13-24.1,213.18-12.11Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
          
          {/* Coluna da Marca */}
          <div className="max-w-xs">
            <h4 className="font-serif text-3xl text-[#FFD1DC] italic font-bold mb-4">
              {footer.title}
            </h4>
            <p className="text-sm text-white/80 leading-relaxed">
              {footer.description}
            </p>
            <div className="mt-6">
              <a
                href={footer.links[0].link}
                className="bg-[#FF85A1] hover:bg-[#ff7091] text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-md inline-block"
              >
                {footer.links[0].text}
              </a>
            </div>
          </div>

          {/* Colunas de Links */}
          <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
            
            {/* Contato */}
            <div>
              <h5 className="text-[#FFD1DC] font-bold uppercase tracking-widest text-xs mb-4">Contato</h5>
              <p className="text-sm text-white/70 hover:text-white transition-colors">
                <a
                  href={footer.links[1].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center md:justify-start"
                >
                  <span>📍</span> {footer.links[1].text}
                </a>
              </p>
            </div>

            {/* Redes Sociais */}
            <div>
              <h5 className="text-[#FFD1DC] font-bold uppercase tracking-widest text-xs mb-4">Siga-nos</h5>
              <ul className="space-y-3">
                {footer.links.slice(2).map((l) => (
                  <li key={l._id}>
                    <a
                      href={l.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-[#FF85A1] transition-colors flex items-center gap-2 justify-center md:justify-start"
                    >
                      {l.text.toLowerCase().includes('instagram') && <span>📸</span>}
                      {l.text.toLowerCase().includes('facebook') && <span>👤</span>}
                      {l.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Linha Divisória e Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-xs">
            © {new Date().getFullYear()} <span className="text-[#FFD1DC] font-semibold">DuckSpace</span> — Todos os direitos reservados
          </div>
          <div className="flex gap-4 text-xs text-white/40">
            <span>Feito com ❤️ para você</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
