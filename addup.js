const addUp = (num) => {
    let int = num.toString().split('').map(Number)
    return int.reduce((a,b) => a + b)
}

console.log(addUp(600));