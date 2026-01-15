import styles from './TaskCard.module.css';

/**
 * @typedef {Object} TaskCardProps
 * @property {string} title
 * @property {string} category
 * @property {string} priorityLevel
 * @property {string} status
 */

/**
 * @param {TaskCardProps} props
 */
export function TaskCard({ title, category, priorityLevel, status }) {
    const isHighPriority = priorityLevel === 'Alta';
    const isCompleted = status === 'Concluído';
    const shouldShowUrgent = isHighPriority && !isCompleted;

    const cardClasses = `${styles['task-card']} ${isHighPriority ? styles['high-priority'] : ''}`.trim();

    return (
        <div className={cardClasses}>
            <h3>{title}</h3>
            <p>Categoria: {category}</p>
            <p>Nível de Prioridade: {priorityLevel}</p>
            <p>Status: {status}</p>

            {shouldShowUrgent && (
                <span className={styles['urgent-label']}>⚠️ Urgente</span>
            )}
        </div>
    );
}
