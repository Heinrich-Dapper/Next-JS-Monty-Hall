import Card from "../components/Card";
import styles from "../styles/Form.module.css";
import Link from "next/link";
import InputNumber from "../components/InputNumber";
import { useState } from "react";
export default function Form() {
  const [numberOfDoors, setNumberOfDoors] = useState(3)
  const [doorWithGift, setDoorWithGift] = useState(2)
  return (
    <div className={styles.form}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <InputNumber text="Number of Doors:"
            value={numberOfDoors} onChange={newQuantity => setNumberOfDoors(newQuantity)} />
        </Card>
      </div>
      <div>
        <Card>
          <InputNumber text="Door with the Gift:"
            value={doorWithGift} onChange={newDoorWithGift => setDoorWithGift(newDoorWithGift)} />
        </Card>
        <Card bgColor="#28a085">
          <Link href={`/game/${numberOfDoors}/${doorWithGift}`} >
            <h2 className={styles.link} style={{ flex: '1', margin: '0' }}>Start</h2>
          </Link>
        </Card>

      </div>
    </div>
  )
}
