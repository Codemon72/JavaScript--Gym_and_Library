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


// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals