"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSolidCrown } from "react-icons/bi";
import { BsBookmarkHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { LiaRobotSolid } from "react-icons/lia";

import SearchInput from "../Input/Input";
import "./styles.css";

export default function Header({ Animes }) {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isProfileVisible, setProfileVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
    setProfileVisible(false); // Garante que a busca esteja visível quando o perfil for oculto.
  };

  const toggleProfile = () => {
    setProfileVisible(!isProfileVisible);
    setSearchVisible(false); // Garante que o perfil esteja visível quando a busca for oculta.
  };
  const [text, setText] = useState("");

  useEffect(() => {
    if (text) {
      fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}`)
        .then((response) => response.json())
        .then((response) => Animes(response));
    }
    console.log(text);
  }, [text]);

  return (
    <div>
      <header className="flex w-full flex-wrap items-center justify-between bg-violet-800 p-3">
        <div className="text-2xl font-bold text-white">Anime Wave</div>
        <nav className="flex items-center space-x-9">
          <a
            href="#"
            className="text-base text-white hover:text-gray-200 max-lg:text-xl"
          >
            navegar
          </a>
          <a
            href="#"
            className=" text-base text-white hover:text-gray-200 max-lg:text-xl"
          >
            mangas
          </a>
          <a
            href="#"
            className=" text-base text-white hover:text-gray-200 max-lg:text-xl"
          >
            noticias
          </a>
        </nav>
        <div className=" flex items-center">
          <BiSolidCrown className="mx-2 text-3xl text-white hover:text-gray-200" />
          <FaSearch
            onClick={toggleSearch}
            className="mx-2 cursor-pointer text-3xl text-white hover:text-gray-200"
          />
          <BsBookmarkHeart className="mx-2 text-3xl text-white hover:text-gray-200" />
          <CgProfile
            onClick={toggleProfile}
            className="mx-2 cursor-pointer text-3xl text-white hover:text-gray-200"
          />
        </div>
      </header>

      {isSearchVisible && (
        <div className="bg-gray-900 p-3">
          <SearchInput
            value={text}
            onChange={(search) => setText(search.target.value)}
          />
        </div>
      )}

      {isProfileVisible && (
        <div className="mx-auto w-1/4 self-end bg-gray-900 p-3 text-center">
          <p className="mb-3 text-white">Você não possui um cadastro</p>
          <Link href={"http://localhost:3000/cadastro"}>
            <button className="bg-white text-slate-900">Cadastrar-se</button>
          </Link>
          <LiaRobotSolid className="text-4xl" />
        </div>
      )}
    </div>
  );
}
