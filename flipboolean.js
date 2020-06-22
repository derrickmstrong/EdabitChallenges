/*
Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.
*/

const reverse = (bool) => {
    return bool === true || bool === false ? !(bool) : 'boolean expected'
}

console.log(reverse(false));

// TEST
// true, false, 0, null