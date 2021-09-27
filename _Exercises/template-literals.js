console.log('string text line 1\n' + 'string text line 2');
// output:
// "string text line 1
// string text line 2"

// EXPRESSIONS EMBEDDED INTO NORMAL STRINGS
let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// output:
// "Fifteen is 15 and
// not 20."

// EXPRESSIONS EMBEDDED WITH TEMPLATE LITERALS

let a1 = 5;
let b1 = 10;
console.log(`Fifteen is ${a1 + b1} and 
not ${2 * a1 + b1}.`);
// output:
// "Fifteen is 15 and
// not 20."


function plus(a,b){
  console.log(`${a} + ${b} = ${a+b}`);
}
plus(1,2);
plus(3,4);

//output:
// 1 + 2 = 3
// 3 + 4 = 7

// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals


// CODEWARS
// Coding in function fiveLine, function accept 1 parameter:s. s is a string.

// Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

// Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

// Note2: Using a string template can make your job easier.

let s1 = " a";
let s2 = "\txy \n";
let s3 = "           Ok               ";

// const fiveLine = (s) => {
//   let fiveLog = "";
//   for (let i = 1; i <= 5; i++){
//     for (let j = 1; j <= i; j++){
//       fiveLog += `${s.trim()}`
//     }
//     fiveLog += `\n`
//   }
//   return fiveLog;
// }

const fiveLine = (s) => {
  let trimmedString = s.trim();
  let fiveLog = "";
  for (let i = 1; i <= 5; i++){
    fiveLog += trimmedString.repeat(i);
    if(i < 5){fiveLog += `\n`};
  }
  return fiveLog;
}

console.log(fiveLine(s3));