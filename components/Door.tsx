import styles from "../styles/Door.module.css";
import DoorModel from "../model/door"
import Gift from "../components/Gift"

interface DoorProps {
    value: DoorModel,
    onChange : (newDoor : DoorModel) => void
}

export default function Door(props : DoorProps) {
    const door  = props.value
    const selected = door.selected && !door.open ? styles.selected : ''
    const changeSelection = e => props.onChange(door.changeSelection())
    const open = e => {
         e.stopPropagation()
         props.onChange(door.openDoor())
    }
    function renderDoor() {
        return (
                    <div className={styles.door}>
                        <div className={styles.number}>{door.number}</div>
                        <div className={styles.handle} onClick={open}></div>
                </div>
        )    
    }
    return (
        <div className={styles.area} onClick={changeSelection}>
            <div className={`${styles.frame} ${selected}`}>
                {door.closed ?  renderDoor() : door.haveGift ? <Gift/> : false }
            </div>

            <div className={styles.floor}></div>

        </div>

    )
    
}