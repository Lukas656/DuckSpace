import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Cardapio from "../components/Cardapio";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
const WHATSAPP = import.meta.env.VITE_WHATSAPP_REDIRECT;

import {
  MessageSquare, 
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
       <a
        href={WHATSAPP}
        aria-label={`Acessar whatsapp`}
        target={"_blank"}
        rel={"noopener noreferrer"}
        className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50"
        style={{ background: "#25D366" }}
      >
        {MessageSquare}
      </a>
      <About />
      <Cardapio />
      <Testimonials />
      <Footer />
    </>
  );
}