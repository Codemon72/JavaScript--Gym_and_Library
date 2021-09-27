// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from a to z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// first solution
// const printerError = (s) => {
//   const validLetters = "abcdefghijklm";
//   let errorCounter = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (!validLetters.includes(s.charAt(i))) {
//       errorCounter ++
//     }
//   }
//   return `${errorCounter}/${s.length}`
// }

// solution using regular expression 
// (first value is the length of a string returned from 's.replace()' with all valid letters removed; `gi` for global and case-insensitive)

const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;


console.log(printerError("aaabbbbhaijjjm")); // => "0/14"
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")); //=> "8/22"
