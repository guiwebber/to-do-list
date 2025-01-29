"use client";
import React from "react";

type Task = {
  id: number;
  titulo: string;
  descricao: string;
  prioridade: string;
  categoria: string;
  data: string;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("pt-BR").format(date);
};

type ListProps = {
  tasks: Task[];
  onDeleteTask: (taskId: number) => void;
};

async function handleDelete(taskId: number, onDeleteTask: (taskId: number) => void) {
  try {
    const response = await fetch(`/api/tasks/${taskId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // Se a API retornar com sucesso, deleta do estado também
      onDeleteTask(taskId);
    } else {
      alert("Erro ao deletar a tarefa");
    }
  } catch (error) {
    console.error("Erro ao tentar deletar a tarefa:", error);
    alert("Erro ao deletar a tarefa");
  }
}

function List({ tasks, onDeleteTask }: ListProps) {
  return (
    <div className="bg-zinc-200 p-10 m-10 rounded-lg max-sm:m-1 py-5 px-4">
      <h2>Tarefas:</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="my-3">
            <h3>{task.titulo}</h3>
            <p>{task.descricao}</p>
            <p>
              <strong>Prioridade:</strong> {task.prioridade}
            </p>
            <p>
              <strong>Categoria:</strong> {task.categoria}
            </p>
            <p>
              <strong>Data:</strong> {formatDate(task.data)}
            </p>
            <button
              onClick={() => handleDelete(task.id, onDeleteTask)}
              className="bg-red-500 text-white p-2 rounded-md mt-2"
            >
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
