"use client";

import Header from "@/components/Header/Header";
import { useState } from "react";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(""); // Variável de estado para o erro

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && email && senha) {
      // Aqui, você pode adicionar a lógica para lidar com o envio do formulário.
      console.log("Dados enviados:", { nome, email, senha });
    } else {
      setErro("Todos os campos devem ser preenchidos para o cadastro.");
    }
  };

  return (
    <>
      <Header />
      <div className="flex h-screen items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="min-w-max rounded-md bg-white p-16 text-slate-950 shadow-md"
        >
          <h2 className="mb-4 text-2xl font-bold">Faça seu Cadastro</h2>
          {erro && <p className="text-red-600">{erro}</p>}{" "}
          {/* Mostra o erro se houver */}
          <div className="mb-4">
            <label htmlFor="nome" className="block font-semibold text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              className="w-full rounded-md border border-gray-300 p-2"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-semibold text-gray-700"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border border-gray-300 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="senha"
              className="block font-semibold text-gray-700"
            >
              Senha
            </label>
            <input
              type="password"
              id="senha"
              className="w-full rounded-md border border-gray-300 p-2"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </>
  );
}
