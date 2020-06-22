// v1
const findLargestNum = arr => Math.max(...arr) // via Spread operation on array
console.log(findLargestNum([100,254,29,2,200]));

// v2
const findLargestNumV2 = arr => {
  return arr.reduce((a,b) => Math.max(a,b)); // via Reduce method
};
console.log(findLargestNumV2([700, 254, 29, 2, 200]));
