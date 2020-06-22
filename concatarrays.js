/*
Create a function that concatenates n input arrays, where n is variable.
*/

const concat = (...arr) => {
    return [...arr].flat(Infinity);
}

console.log(concat([1, 2, 3], [4, 5], [6, 7]));