/*
Create a function that takes a string as its argument and returns the string in reversed order.
*/

const reverse = (str) => str.split('').reverse().join('')
console.log(reverse('Hello World!'))