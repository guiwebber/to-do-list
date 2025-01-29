'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Form from "../components/Form";
import List from "../components/List";
import logo from "../assets/logo.png";

type Task = {
  id: number;
  titulo: string;
  descricao: string;
  prioridade: string;
  categoria: string;
  data: string;
  userEmail: string;  // Adicionando o userEmail para cada tarefa
};

function HomeList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const router = useRouter();

  // Carrega as tarefas do localStorage ao iniciar
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      const userTasks = storedTasks.filter(
        (task: Task) => task.userEmail === loggedInUser
      );
      setTasks(userTasks);
    } else {
      // Se não houver usuário logado, redireciona para o login
      router.push("/Login");
    }
  }, [router]);

  // Função para adicionar nova tarefa
  const handleAddTask = (newTask: Omit<Task, "id" | "userEmail">) => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) return;

    const taskWithId = { id: Date.now(), ...newTask, userEmail: loggedInUser };
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.push(taskWithId);
    setTasks(storedTasks);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  };

  // Função para deletar tarefa
  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);

    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const filteredTasks = storedTasks.filter((task: Task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  };

  // Função para fazer logout
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Remove o usuário logado do localStorage
    router.push("/Login"); // Redireciona para a página de login
  };

  return (
    <div className="w-full h-full">
      <img src={logo.src} alt="Ícone escrito to-do List" className="w-36 m-auto" />
      <main>
        <div className="flex justify-between items-center p-4">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white p-2 rounded-md hover:bg-red-500"
          >
            Logout
          </button>
        </div>
        <Form onAddTask={handleAddTask} />
        <List tasks={tasks} onDeleteTask={handleDeleteTask} />
      </main>
    </div>
  );
}

export default HomeList;
