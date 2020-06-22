/*
Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
*/

const charCount = (myChar, str) => {
    return str
    .split('')
    .filter(char => char === myChar).length;
}

console.log(charCount('a','apple head'));