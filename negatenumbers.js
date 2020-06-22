/*
Given an array of numbers, negate all elements contained within.

    Negating a positive value -+n will return -n, because all +'s are removed.
    Negating a negative value --n will return n, because the first - turns the second minus into a +.
*/

const negateArray = arr => {
  return arr.map(n => (Math.sign(n) == 1 ? -n : Math.abs(n)));
};

console.log(negateArray([1, 2, 3, -4, -5, -6, -7]));