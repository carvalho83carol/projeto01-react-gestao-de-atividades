import { TaskCardList } from "../../components/common/cards/TaskCardList"
import styles from "./Home.module.css"

export default function Home() {
    return (
        <section>
            <h1 className={styles['title']}>
                Gestão de Atividades
            </h1>

            <TaskCardList />
        </section>
    )
}