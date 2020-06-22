/*
Given an array of integers, return the difference between the largest and smallest integers in the array.
*/

const maxDifference = (num) => {
    return num.sort((a, b) => a - b)[num.length - 1] - num.sort((a, b) => a - b)[0];
}

console.log(maxDifference([10,5,20,2,10,6]));


// V2
const difference = (nums) => {
    return Math.max(...nums) - Math.min(...nums);
}

console.log(difference([10, 5, 20, 2, 10, 6]));