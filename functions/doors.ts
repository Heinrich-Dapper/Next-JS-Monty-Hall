import DoorModel from "../model/door";

export function createDoors(numberOfDoors: number, doorWithGift: number): DoorModel [] {
    return Array.from({ length: numberOfDoors}, (_, i) => {
        const number = i + 1
        const doorHaveGift = number === doorWithGift
        return new DoorModel(number, doorHaveGift)
    })
}
 export function updateDoors( doors: DoorModel[], modifiedDoor: DoorModel): DoorModel [] {
    return doors.map(actualDoor => {
        const isEqualsToModified = actualDoor.number === modifiedDoor.number

        if (isEqualsToModified) {
            return modifiedDoor
        } else {
            return modifiedDoor.open ? actualDoor : actualDoor.uncheck()
        }
    })

 }