"use client";
import { Banners } from "@/components/Banners/Banners";
import Cards from "@/components/Cards/Cards";
import Catalogo from "@/components/Catalogo/catalogo";
import Header from "@/components/Header/HeaderComplete";

import { useState } from "react";

export default function Home() {
  const [animes, setAnimes] = useState({});

  console.log(animes);
  return (
    <>
      {/* aqui é o main */}
      <Header Animes={setAnimes} />
      <Banners />
      <Cards />
      <Catalogo catalogoAnime={animes} />
    </>
  );
}
