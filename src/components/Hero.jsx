import { useEffect, useState } from "react";
import { getHeroData, getNavLinks } from "../services/api";

export default function Hero() {
  const [hero, setHero] = useState(null);
  const [navLinks, setNavLinks] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    async function load() {
      const heroResp = await getHeroData();
      const navResp = await getNavLinks();

      setHero(heroResp[0]);
      setNavLinks(navResp);
    }

    load();
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hero) return <div className="text-center">Carregando...</div>;

  return (
    <>
      <header className="flex items-center justify-center text-center ">
        {/* navegação dinâmica */}
        <nav
          className={`
    fixed top-0 left-0 w-full z-50 transition-all duration-300  py-4
    ${
      scrolled ? "backdrop-blur-lg bg-[#dbd4d4]/80 shadow-lg" : "bg-transparent"
    }
  `}
        >
          <div className="flex justify-center items-center gap-3 md:gap-20">
            <img
              src={hero.logo}
              alt={hero.logoAlt}
              className="w-15 h-15 rounded-full border-white/10 shadow-xl border-white/10"
            />
            {navLinks.map((item) => (
              <strong>
                <a
                  key={item._id}
                  href={item.link}
                  className="text-xm hover:text-[#fc80a4] transition-colors"
                >
                  {item.text}
                </a>
              </strong>
            ))}
          </div>
        </nav>

        {/* conteúdo principal */}
        <div className="w-full mt-30 md:80">
          <h1 className="font-brand logo-text text-2xl md:text-5xl text-var(--text)">
            {hero.title}
          </h1>
          <p className="my-4 logo-text md:text-3xl font-bold text-var(--text)">
            {hero.description}
          </p>
          <img
            src={hero.banner}
            alt={hero.bannerAlt}
            className="w-full mx-auto shadow-xl h-[200px] md:h-auto"
          />
        </div>
      </header>
    </>
  );
}
