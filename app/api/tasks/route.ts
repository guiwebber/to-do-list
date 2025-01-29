// import fs from "fs";
// import path from "path";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const filePath = path.join(process.cwd(), "public", "data", "list.json"); // JSON na pasta 'public'

//     // Verifica se o arquivo existe
//     if (!fs.existsSync(filePath)) {
//       return new Response("Arquivo list.json não encontrado", { status: 404 });
//     }

//     // Lê o arquivo existente
//     const existingData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

//     // Adiciona a nova tarefa
//     const newTask = { id: Date.now(), ...body };
//     existingData.push(newTask);

//     // Escreve os dados no arquivo JSON
//     fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

//     return new Response(
//       JSON.stringify({ message: "Tarefa adicionada com sucesso!" }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Erro ao adicionar tarefa:", error);
//     return new Response(JSON.stringify({ error: "Erro ao adicionar tarefa" }), {
//       status: 500,
//     });
//   }
// }
import fs from "fs";
import path from "path";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const taskId = Number(params.id); // Obtemos o id da URL
    const filePath = path.join(process.cwd(), "data", "list.json");


    // Verifica se o arquivo existe
    if (!fs.existsSync(filePath)) {
      return new Response('Arquivo list.json não encontrado', { status: 404 });
    }

    // Lê os dados do arquivo JSON
    const existingData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // Filtra as tarefas para remover a com o id correspondente
    const updatedData = existingData.filter((task: { id: number }) => task.id !== taskId);

    // Escreve o arquivo atualizado
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));

    return new Response("Tarefa deletada com sucesso!", { status: 200 });
  } catch (error) {
    console.error("Erro ao deletar tarefa:", error);
    return new Response("Erro ao deletar tarefa", { status: 500 });
  }
}
