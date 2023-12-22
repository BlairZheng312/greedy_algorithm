// to find the most valuable pack of items within the weight constraint
// item is divisible

let itemList = [
    {
        id: 1,
        value: 60,
        weight: 10
    },
    {
        id: 2,
        value: 120,
        weight: 30
    },
    {
        id: 3,
        value: 100,
        weight: 20
    }
]

function knapsack(itemList, weightConstrain) {
    let itemNumber = itemList.length
    // calculate the items' value per unit weight
    for (let i = 0; i < itemNumber; i++) {
        itemList[i].unit_value = itemList[i].value / itemList[i].weight
    }
    itemList.sort((a, b) => b.unit_value - a.unit_value)

    let remainingWeight = weightConstrain
    for (let i = 0; i < itemNumber; i++) {
        // fill the pack with items with higher unit value first
        if (itemList[i].weight <= remainingWeight) {
            remainingWeight -= itemList[i].weight
            itemList[i].quantity = 1
        }

        // divide the last item if the total weight is about to exceed the weight constraint
        else {
            itemList[i].quantity = +(remainingWeight / itemList[i].weight).toFixed(2)
            break
        }
    }
    itemList.sort((a, b) => a.id - b.id)
    return itemList
}

console.log(knapsack(itemList, 50))