// Write a function that returns true if there exists at least one number that is larger than or equal to n.
// Return false for an empty array [].

const existsHigher = (arr, num) => arr.some(x => x >= num) ? true : arr === [] ? false : false; // some() Array method | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
console.log(existsHigher([9,5], 5));


// V2
const existsHigher2 = (arr, num) => Math.max([...arr]) >= num ? true : arr === [] ? false : false;
console.log(existsHigher2([], 16));