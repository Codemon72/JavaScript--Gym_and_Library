general source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements

# Control Flow

`break`
Terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.

`switch`
Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.

Examples:
```js
const color = 'green';

switch (color) {
  case 'red':
    console.log('Color is red.');
    break;
  case 'green':
    console.log('Color is green.');
    break;
  default: 
    console.log('Color is not red or green.')
    break;
}
```
```js
let day;

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  // and so forth
}

console.log(`Today is ${day}`);
```

# Declarations

`var`
Declares a variable, optionally initializing it to a value.

`let`
Declares a block scope local variable, optionally initializing it to a value.

`const`
Declares a read-only named constant.

# Functions and Classes

# Iterations
### Loops
JavaScript supports different kinds of loops:

- for - loops through a block of code a number of times
- for/in - loops through the properties of an object
```
let txt = "";
const person = {fname:"John", lname:"Doe", age:25}; 

for (x in person) {
  txt += person[x] + " ";
}
```
- for/of - loops through the values of an iterable object
- while - loops through a block of code while a specified condition is true
- do/while - also loops through a block of code while a specified condition is true

source: https://www.w3schools.com/js/js_loop_for.asp