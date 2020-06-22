const numberSyllables = word => { 
  let char = word.split('');
  return char.filter(hyphen => hyphen === '-').length + 1;
};

console.log(numberSyllables('be-yond'));
console.log(numberSyllables('on-o-mat-o-poe-ia'));