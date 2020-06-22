/* Create a function to remove all null values from an array. */

const removeNull = (arr) => {
    return arr.filter(a => a !== null)   
}

console.log(removeNull([1,3,4,null,30, 3,4, null]));