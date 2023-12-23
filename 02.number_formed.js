// give an array of numbers, how to form the largest number
// compare the strings instead of numbers
// if two numbers start with same digits, compare the combinations of the two numbers

let numbers = [37, 46, 24, 781, 7812, 9]

function largestNumber(numbers) {
    let numStrings = numbers.map(number => number + '')
    numStrings.sort((a, b) => (b + a) - (a + b))
    let number = numStrings.join('')
    return number
}

console.log(largestNumber(numbers))