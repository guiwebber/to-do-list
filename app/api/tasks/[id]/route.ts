import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

// Caminho para o arquivo JSON
const filePath = path.join(process.cwd(), "data", "list.json");

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;  // Não é necessário `await`

    console.log("Recebendo DELETE para ID:", id);

    if (!id) {
      return NextResponse.json({ error: "ID não fornecido" }, { status: 400 });
    }

    const taskId = Number(id);
    if (isNaN(taskId)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    if (!fs.existsSync(filePath)) {
      console.log("Arquivo não encontrado:", filePath);
      return NextResponse.json({ error: "Arquivo list.json não encontrado" }, { status: 404 });
    }

    const tasks = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    console.log("Tarefas carregadas:", tasks);

    const updatedTasks = tasks.filter((task: { id: number }) => task.id !== taskId);

    if (tasks.length === updatedTasks.length) {
      return NextResponse.json({ error: "Tarefa não encontrada" }, { status: 404 });
    }

    // Escreve o arquivo atualizado de volta
    fs.writeFileSync(filePath, JSON.stringify(updatedTasks, null, 2));

    return NextResponse.json({ message: "Tarefa deletada com sucesso!" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao deletar tarefa:", error);
    return NextResponse.json({ error: "Erro ao deletar tarefa" }, { status: 500 });
  }
}
