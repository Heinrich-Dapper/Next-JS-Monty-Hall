import DoorModel from "../model/door";

export function createDoors(quantity: number, selected: number): DoorModel [] {
    return Array.from({ length: quantity}, (_, i) => {
        const number = i + 1
        const haveGift = number === selected
        return new DoorModel(number, haveGift)
    })
}
 export function updateDoors( doors: DoorModel[], modifiedDoor: DoorModel): DoorModel [] {
    return doors.map(actualDoor => {
        const isEqualsToModified = actualDoor.number === modifiedDoor.number

        if (isEqualsToModified) {
            return modifiedDoor
        } else {
            return modifiedDoor.open ? actualDoor : actualDoor.deselect()
        }
    })

 }