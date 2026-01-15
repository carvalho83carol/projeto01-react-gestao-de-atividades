import styles from './TaskCard.module.css';

/**
 * @typedef {Object} TaskCardProps
 * @property {string} title
 * @property {string} category
 * @property {string} priorityLevel
 * @property {string} status
 * @property {string} description
 * @property {boolean} isOpen
 * @property {function} onDetailsClick
 */

/**
 * @param {TaskCardProps} props
 */
export function TaskCard({ title, category, priorityLevel, status, description, isOpen, onDetailsClick }) {
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

            <div className={styles['urgent-container']}>
                {shouldShowUrgent && (
                    <span className={styles['urgent-label']}>⚠️ Urgente</span>
                )}
            </div>

            <button
                className={styles['details-button']}
                onClick={onDetailsClick}
            >
                {isOpen ? 'Ocultar Detalhes' : 'Ver Detalhes'}
            </button>

            {isOpen && (
                <div className={styles['description-container']}>
                    <p className={styles['description-text']}>{description}</p>
                </div>
            )}
        </div>
    );
}
