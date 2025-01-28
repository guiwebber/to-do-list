import React from "react";

function Form() {
  return (
    <div className="bg-zinc-200 p-10 m-10">
      <form action="POST">
        <input
          type="text"
          placeholder="Título da tarefa"
          className="p-2 my-3 w-full"
        />
        <textarea
          placeholder="Descrição da tarefa"
          className="p-2 my-3 w-full"
        />
        <select name="prioridade" id="prioridade" className="w-full my-3 p-2">
          <option value="">--Prioridade--</option>
          <option value="alta">Alta prioridade</option>
          <option value="media">Média prioridade</option>
          <option value="baixa">Baixa prioridade</option>
        </select>
        <select name="categoria" id="categoria" className="w-full my-3 p-2">
          <option value="">--Categoria--</option>
          <option value="estudos">Estudos</option>
          <option value="trabalho">Trabalho</option>
          <option value="pessoal">Pessoal</option>
        </select>
        <input type="date" className="w-full my-3 p-2"/>
      </form>
    </div>
  );
}

export default Form;
