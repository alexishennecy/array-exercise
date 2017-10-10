const newInventory = JSON.parse(localStorage.getItem("homeInventory"))

const rug = {
    "name": "rug",
    "type": "furniture",
    "location": "living room",
    "description": "pretty rug"
}

console.log(newInventory)

newInventory.furniture.push(rug)

const newInventoryString = JSON.stringify(newInventory)
localStorage.setItem("homeInventory", newInventoryString)