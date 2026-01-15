// passar uma arrow function via props que, ao ser acionada em um botão no item da lista, exiba uma mensagem com a descrição daquela tarefa.

import { TaskCard } from "./TaskCard";

const tasks = [
    {
        title: "Fazer exercícios",
        category: "Saúde",
        priorityLevel: "Alta",
        status: "Pendente",
    },
    {
        title: "Fazer compras",
        category: "Pessoal",
        priorityLevel: "Média",
        status: "Concluído",
    },
    {
        title: "Agendar consulta médica",
        category: "Saúde",
        priorityLevel: "Baixa",
        status: "Concluído",
    },
];


export function TaskCardList() {
    return (
        <div className="task-card-list">
            {tasks.map((task, index) => (
                <TaskCard
                    key={index}
                    title={task.title}
                    category={task.category}
                    priorityLevel={task.priorityLevel}
                    status={task.status}
                />
            ))}
        </div>
    );
}


