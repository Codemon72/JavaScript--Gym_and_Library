// Simple, remove the spaces from the string, then return the resultant string.

// const noSpace = (string) => {
//   return string.split(' ').join('');
// }

// solution with regular expression
const noSpace = (x) => {
  return x.replace(/\s/g, '');
};

const quote = 'There is nothing permanent except change';

console.log(noSpace(quote)); // "Thereisnothingpermanentexceptchange"
