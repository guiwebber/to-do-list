'use client'
import React, { useState, useEffect } from "react";
import "../../app/globals.css";
import List from "../components/List";
import Form from "../components/Form";
import logo from "../assets/logo.png";

type Task = {
  id: number;
  titulo: string;
  descricao: string;
  prioridade: string;
  categoria: string;
  data: string;
};

function HomeList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Carrega os dados do JSON ao iniciar
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("/data/list.json");
      const data = await response.json();
      setTasks(data);
    };
    loadData();
  }, []);

  // Função para adicionar nova tarefa ao estado
  const handleAddTask = (newTask: Omit<Task, "id">) => {
    const taskWithId = { id: Date.now(), ...newTask };
    setTasks((prevTasks) => [...prevTasks, taskWithId]);
  };

  // Função para deletar uma tarefa
  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="w-full h-full ">
      <img
        src={logo.src}
        alt="Ícone escrito to-do List"
        className="w-36 m-auto"
      />
      <main>
        <Form onAddTask={handleAddTask} />
        <List tasks={tasks} onDeleteTask={handleDeleteTask} />
      </main>
    </div>
  );
}

export default HomeList;
