import React from "react";

function Form() {
  return (
    <div className="bg-zinc-200 p-10 m-10 rounded-lg">
      <form action="POST">
        <input
          type="text"
          placeholder="Título da tarefa"
          className="p-2 my-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-lime-500 "
        />
        <textarea
          placeholder="Descrição da tarefa"
          className="p-2 my-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-lime-500"
        />
        <select name="prioridade" id="prioridade" className="w-full my-3 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-lime-500">
          <option value="">--Prioridade--</option>
          <option value="alta">Alta prioridade</option>
          <option value="media">Média prioridade</option>
          <option value="baixa">Baixa prioridade</option>
        </select>
        <select name="categoria" id="categoria" className="w-full my-3 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-lime-500">
          <option value="">--Categoria--</option>
          <option value="estudos">Estudos</option>
          <option value="trabalho">Trabalho</option>
          <option value="pessoal">Pessoal</option>
        </select>
        <input type="date" className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-lime-500 "/>
      </form>
    </div>
  );
}

export default Form;
