import React from "react";

// Tipo de dado para as tarefas
type ListProps = {
  tasks: { id: number; titulo: string; descricao: string; prioridade: string; categoria: string; data: string }[];
  onDeleteTask: (taskId: number) => void;
};

const List = ({ tasks, onDeleteTask }: ListProps) => {
  return (
    <div className="space-y-4 p-5 max-w-3xl mx-auto">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">Nenhuma tarefa encontrada.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-md space-y-2"
          >
            <h3 className="text-lg font-semibold text-gray-800">{task.titulo}</h3>
            <p className="text-sm text-gray-600">{task.descricao}</p>
            <p className="text-xs text-gray-500">Prioridade: {task.prioridade}</p>
            <p className="text-xs text-gray-500">Categoria: {task.categoria}</p>
            <p className="text-xs text-gray-500">Data: {task.data}</p>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 transition-colors"
            >
              Deletar
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default List;
