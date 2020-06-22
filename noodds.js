/*
Create a function that takes an array of numbers and returns only the even values.
*/

const noOdds = (arr) => {
    return arr.filter(num => !(num % 2)) // Optionally, num => num %2 === 0
}

console.log(noOdds([1,2,3,4,5,6]));