import styles from "../styles/InputNumber.module.css";

interface InputNumberProps {
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function InputNumber(props: InputNumberProps) {
    const minus = () => props.onChange(props.value - 1)
    const plus = () => props.onChange(props.value + 1)
    return (
        <div className={styles.inputNumber}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.buttonGroup}>
                <button className={styles.buttons} onClick={minus}>-</button>
                <button className={styles.buttons} onClick={plus}>+</button>
            </div>
        </div>
    )
}