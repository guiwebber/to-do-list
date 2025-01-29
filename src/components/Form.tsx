"use client";
import React, { useState } from "react";

type TaskInput = {
  titulo: string;
  descricao: string;
  prioridade: string;
  categoria: string;
  data: string;
};

type FormProps = {
  onAddTask: (task: TaskInput) => void;
};

function Form({ onAddTask }: FormProps) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [data, setData] = useState("");
  const maxLength = 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!titulo || !descricao || !prioridade || !categoria || !data) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    onAddTask({ titulo, descricao, prioridade, categoria, data });

    setTitulo("");
    setDescricao("");
    setPrioridade("");
    setCategoria("");
    setData("");
  };

  return (
    <div className="bg-zinc-200 p-10 m-10 rounded-lg max-sm:m-1 py-5 px-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título da tarefa"
          className="p-2 my-3 rounded-md w-full"
        />
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          maxLength={maxLength}
          rows={4}
          placeholder="Descrição da tarefa"
          className="p-2 my-3 rounded-md w-full"
        />
        <select
          value={prioridade}
          onChange={(e) => setPrioridade(e.target.value)}
          className="w-full my-3 rounded-md p-2"
        >
          <option value="">--Prioridade--</option>
          <option value="alta">Alta prioridade</option>
          <option value="media">Média prioridade</option>
          <option value="baixa">Baixa prioridade</option>
        </select>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="w-full my-3 rounded-md p-2"
        >
          <option value="">--Categoria--</option>
          <option value="estudos">Estudos</option>
          <option value="trabalho">Trabalho</option>
          <option value="pessoal">Pessoal</option>
        </select>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="w-full p-2 border-2 border-gray-300 rounded-lg"
        />
        <button className="bg-lime-600 p-4 border-none mt-4 w-full hover:bg-lime-500 rounded-lg">
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default Form;
