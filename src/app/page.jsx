"use client";

import { useReveal } from "../hooks/useReveal";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Process from "../components/Process";
import Platforms from "../components/Platforms";
import Results from "../components/Results";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page() {
  useReveal();

  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Platforms />
      <Results />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
