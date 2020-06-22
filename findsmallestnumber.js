const findSmallestNum = arr => {
  return arr.sort((a, b) => a - b)[0];
};
console.log(findSmallestNum([43, 53, 1, 43, 5, 32, -23]));

// Version 2
const findSmallestNum2 = arr => {
  return Math.min(...arr);
}
console.log(findSmallestNum2([43, 53, 1, 43, 5, 32, -203]));