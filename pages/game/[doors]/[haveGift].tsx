import { useEffect, useState } from "react"
import Door from "../../../components/Door"
import { createDoors, updateDoors } from "../../../functions/doors"
import styles from "../../../styles/game.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Game() {
    const router = useRouter()
    const [doors, setDoors] = useState([])
    const [validation, setValidation] = useState(false)

    useEffect(() => {
        const doors = +router.query.doors
        const haveGift = +router.query.haveGift
        const numberValidDoors = doors >= 3 && doors <= 100
        const validHaveGift = haveGift >= 1 && haveGift <= doors

        setValidation(numberValidDoors && validHaveGift)
        
    },[doors, router.query.doors, router.query.haveGift])

    useEffect(() => {
        const doors = +router.query.doors
        const haveGift = +router.query.haveGift
        setDoors(createDoors(doors, haveGift))
    },[router?.query])

    function renderDoors() {
        return doors.map(door => {
            return <Door key={door.number} value={door}
                onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
        })
    }
    return (
        <div id={styles.game}>
            <div className={styles.doors}>
                {validation ? renderDoors() : <h2>Valores Inválidos</h2>}
            </div>
            <div className={styles.buttons}>
                <Link href="/">
                    <button id={styles.restart}>Restart</button>
                </Link>
            </div>
        </div>
    )
}