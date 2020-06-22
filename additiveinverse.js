/*
A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.
*/

const additiveInverse = (arr) => {
    return arr.map(n => Math.sign(n) ? -n : Math.abs(n))
}

console.log(additiveInverse([1,2,3,-4,-5,-6,-7]));