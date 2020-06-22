/* 
Create a function that takes an array of strings and returns the words that are exactly four letters. 
*/

const isFourLetters = (arr) => {
    return arr.filter(a => a.length === 4)
}

console.log(isFourLetters(['Dean', 'Bob', 'Derrick', 'John', 'Nick', 'Malone']));