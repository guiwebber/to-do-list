// app/api/tasks/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';

// Defina o tipo para os parâmetros da rota
type Params = {
  id: string;
};

// Função para excluir uma tarefa baseada no ID
export async function DELETE(req: NextRequest, { params }: { params: Params }) {
  // Desestrutura o 'id' de 'params'
  const { id } = params;

  // Verifique se o ID foi passado
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  try {
    // Aqui você faria a lógica para deletar a tarefa no banco de dados ou na lista
    // Exemplo fictício: await deleteTaskById(id);

    // Retorne uma resposta de sucesso após excluir a tarefa
    return NextResponse.json({ message: `Task with ID ${id} deleted` }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete task' }, { status: 500 });
  }
}
