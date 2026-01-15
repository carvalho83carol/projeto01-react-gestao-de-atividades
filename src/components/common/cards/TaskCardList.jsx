// passar uma arrow function via props que, ao ser acionada em um botão no item da lista, exiba uma mensagem com a descrição daquela tarefa.

import { useState } from 'react';
import { TaskCard } from "./TaskCard";
import styles from "./TaskCardList.module.css";

const tasks = [
    {
        id: 1,
        title: "Fazer exercícios",
        category: "Saúde",
        priorityLevel: "Alta",
        status: "Pendente",
        description: "Realizar 30 minutos de corrida no parque.",
    },
    {
        id: 2,
        title: "Fazer compras",
        category: "Pessoal",
        priorityLevel: "Média",
        status: "Concluído",
        description: "Comprar vegetais, frutas e itens de limpeza.",
    },
    {
        id: 3,
        title: "Agendar consulta médica",
        category: "Saúde",
        priorityLevel: "Baixa",
        status: "Concluído",
        description: "Marcar retorno com o médico para o próximo mês.",
    },
    {
        id: 4,
        title: "Fazer compras",
        category: "Pessoal",
        priorityLevel: "Média",
        status: "Pendente",
        description: "Comprar vegetais, frutas e itens de limpeza.",
    },
    {
        id: 5,
        title: "Contas a pagar",
        category: "Financeiro",
        priorityLevel: "Alta",
        status: "Pendente",
        description: "Pagar as contas de luz, água.",
    },
];


export function TaskCardList() {
    const [activeTaskId, setActiveTaskId] = useState(null);

    const handleShowDetails = (taskId) => {
        // Se clicar no mesmo que já está aberto, fecha. Senão, abre o novo e fecha o anterior.
        setActiveTaskId(prevId => prevId === taskId ? null : taskId);
    };

    return (
        <div className={styles['task-card-list']}>
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    title={task.title}
                    category={task.category}
                    priorityLevel={task.priorityLevel}
                    status={task.status}
                    description={task.description}
                    isOpen={activeTaskId === task.id}
                    onDetailsClick={() => handleShowDetails(task.id)}
                />
            ))}
        </div>
    );
}


