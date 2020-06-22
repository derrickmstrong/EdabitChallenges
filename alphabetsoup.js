/* Create a function that takes a string and returns a string with its letters in alphabetical order. */

const alphabetSoup = (str) => str.split('').sort().join('')

console.log(alphabetSoup('hello'));

// V2
const alphabetSoup2 = str => [...str].sort().join('');
console.log(alphabetSoup2('pizza'));

// str.split('') == [...str] | Both takes a string and splits each character in to separate array items