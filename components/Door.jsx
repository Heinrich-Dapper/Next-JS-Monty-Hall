import styles from "../styles/Door.module.css";
export default function Door(props) {
    const selected = props.selected ? styles.selected : ''
    return (
            <div className={styles.area}>
                <div className={`${styles.frame} ${selected}`}>
                    <div className={styles.door}>
                        <div className={styles.number}>2</div>
                        <div className={styles.handle}></div>
                    </div>
                </div>
                <div className={styles.floor}></div>
            </div>
    )
}