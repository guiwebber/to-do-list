import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

const filePath = path.join(process.cwd(), "data", "list.json");

function readTasks() {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeTasks(tasks: any) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// GET - Lista todas as tarefas
export async function GET() {
  const tasks = readTasks();
  return NextResponse.json(tasks, { status: 200 });
}

// POST - Adiciona uma nova tarefa
export async function POST(request: NextRequest) {
  try {
    const newTask = await request.json();
    const tasks = readTasks();
    const taskWithId = { id: Date.now(), ...newTask };
    tasks.push(taskWithId);
    writeTasks(tasks);

    return NextResponse.json(taskWithId, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao adicionar tarefa" }, { status: 500 });
  }
}
