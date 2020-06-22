/*
Write a function that returns true if all integers in an array are factors of a number, and false otherwise.
*/

const checkFactors = (arr, num) => {
    return arr.every(n => !(num % n)) 
}

console.log(checkFactors([2, 3, 4, 8], 12));
