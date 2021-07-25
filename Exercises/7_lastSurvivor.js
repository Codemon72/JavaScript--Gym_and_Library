// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'

// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.

// work with the string
// const lastSurvivor = (letters, coords) => {
//   for (let i = 0; i < coords.length; i++) {
//     letters = letters.slice(0, coords[i]) + letters.slice(coords[i] + 1, letters.length[-1])
//   }
//   return letters;
// }


// or turn it into array first and then remove elements with splice():

const lastSurvivor = (letters, coords) => {
  letters = letters.split('');
  for (let i = 0; i < coords.length; i++) {
     letters.splice(coords[i], 1)
  }
  return letters.join('')
}


console.log(lastSurvivor("asdfghjklö", [5,4,3,2,1]))