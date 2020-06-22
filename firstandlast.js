const firstLast = arr => [arr.shift(), arr.pop()];
// Alternative
// const firstLast = (arr) => [arr[0], arr[arr.length-1]]
console.log(firstLast(['Hello', 3, 6, 9, 'World!', null]));