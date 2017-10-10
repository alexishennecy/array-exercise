const vintageInkwell = {
    "name": "Vintage Ink Well",
    "type": "crafts",
    "location": "Writing desk",
    "description": "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
  }
  
const paintBrush = {
    "name": "Paintbrush",
    "type": "crafts",
    "location": "writing desk",
    "description": "I love to paint"
}

const canvas = {
    "name": "canvas",
    "type": "crafts",
    "location": "Writing desk",
    "description": "I love to make art"
}



  const writingDesk = {
    "name": "Shaker Writing Desk",
    "type": "furniture",
    "location": "Bedroom",
    "description": "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
  }

const couch = {
    "name": "couch",
    "type": "furniture",
    "location": "living room",
    "description": "so very comfy"
}

const chair = {
    "name": "chair",
    "type": "furniture",
    "location": "living room",
    "description": "Sit down in the chair"
}



  const dinnerPlate = {
  "name": "Dinner Plate",
  "type": "kitchen supplies",
  "location": "kitchen cabinet",
  "description": "I like to eat."
  }

  const oven = {
      "name": "oven",
      "type": "kitchen supplies",
      "location": "kitchen",
      "description": "make all the good food"
  }

  const refrigerator = {
      "name": "refrigerator",
      "type": "kitchen supplies",
      "location": "kitchen",
      "description": "storing the food items"
  }

  const spoon = {
      "name": "spoon",
      "type": "kitchen supplies",
      "location": "kitchen",
      "description": "using this to eat the food"
  }

  
  let crafts = []   //empty arrays
  let furniture = []
  let kitchenSupplies = []


  crafts.push(vintageInkwell, paintBrush, canvas)  //items going into the arrays 
  furniture.push(writingDesk, couch, chair)
  kitchenSupplies.push(dinnerPlate, oven, refrigerator, spoon)

  
  let HomeInventory = {  //object to hold all the arrays 
    "furniture": furniture,
    "crafts": crafts,
    "kitchenSupplies": kitchenSupplies
  }


  const homeInventoryString = JSON.stringify(HomeInventory)
  localStorage.setItem("homeInventory", homeInventoryString)

  
  const storedInventory = JSON.parse(localStorage.getItem("homeInventory"))

  console.log(storedInventory)