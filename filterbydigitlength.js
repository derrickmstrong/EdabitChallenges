// Create a function that filters out an array to include numbers who only have a certain number of digits.

const filterDigitLength = (arr, length) => {
    const equalsLength = num => num.toString().length == length
    const result = arr.filter(equalsLength)
    
    console.log(result)
}

filterDigitLength([88, 232, 4, 9721, 555], 3)
filterDigitLength([2, 7, 8, 9, 1012], 1)
filterDigitLength([32, 88, 74, 91, 300, 4050], 1)
filterDigitLength([5, 6, 8, 9], 1)
