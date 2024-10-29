import styles from "../Style/Porta.module.css";

export default function Porta(props) {
    return (
        <div className={styles.area}>
            <div className={styles.grade}>
                <div className={styles.porta}>
                    <div className={styles.numero}></div>
                    <div className={styles.macaneta}></div>
                </div>
            </div>
            <div className={styles.piso}></div>
        </div>
    )
}