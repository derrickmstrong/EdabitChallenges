/* 
Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.
*/

const unlucky13 = (arr) => {
    return arr.filter(num => num % 13)
}
console.log(unlucky13([15, 182, 435, 591, 637]));