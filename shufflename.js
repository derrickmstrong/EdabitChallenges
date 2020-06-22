/*
Create a function that accepts a string (of a persons first and last name) and returns a string with the first and last name swapped.
*/

const nameShuffle = (str) => str.split(' ').reverse().join(' ')

console.log(nameShuffle('Derrick Strong'));


// Version 2 - Old Way
const nameShuffle2 = str => {
  return str.split(' ')[1] + ' ' + str.split(' ')[0];
};

console.log(nameShuffle2('Elsie Strong'));