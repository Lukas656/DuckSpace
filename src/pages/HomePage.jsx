import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Cardapio from "../components/Cardapio";
import Loja from "../components/Loja";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
       <Cardapio />
       <Loja />
      {/* <Testimonials />  */}
      <Footer /> 
    </>
  );
}