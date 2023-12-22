// to find the minimum number of coins

// value => the face value of different coins
let value = [100, 50, 20, 10, 5, 1]

function coinChange(value, amount) {
    let changeNumber = []
    let length = value.length
    for (let i = 0; i < length; i++) {
        let number = Math.floor(amount / value[i])
        changeNumber[i] = number
        amount = amount % value[i]
    }
    return changeNumber
}

console.log(coinChange(value, 378))
