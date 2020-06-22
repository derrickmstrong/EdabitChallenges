/*
Create a function that takes an integer n and reverses it.
*/

const rev = (num) => {
    let negNum = num
      .toString()
      .split('')
      .reverse()
      .join('')
      .slice(0, -1);

    let posNum = num
      .toString()
      .split('')
      .reverse()
      .join('');

    let result =
      num.toString().split('')[0] === '-' ? Number(negNum) : Number(posNum);

      console.log(Number.isInteger(result)); // Checking to see if result is a number

     return result
}

console.log(rev(-1234567));


// v2

const rev2 = (n) => {

    let result = Math.abs(n)
      .toString()
      .split('')
      .reverse()
      .join('');

    console.log(Number.isInteger(result)); // Checking to see if result is a number

    return result
}

console.log(rev2(-1234567));