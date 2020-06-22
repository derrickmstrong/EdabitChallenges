const firstArg = (args) => args[0]
console.log(firstArg('1, 2, 3'));

const lastArg = (...args) => args.pop()
console.log(lastArg('a', 'b', 'c'));