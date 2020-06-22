// Create a function that takes an array and returns the difference between the biggest and smallest numbers.

const diffMaxMin = (arr) => Math.max(...arr) - Math.min(...arr);

console.log(diffMaxMin([50,34,3,43,11]));