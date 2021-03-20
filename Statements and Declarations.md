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

`function`
Declares a function with the specified parameters.

`function*`
Generator Functions enable writing iterators more easily.

`async function`
Declares an async function with the specified parameters.

`return`
Specifies the value to be returned by a function.

`class`
Declares a class.


# Iterations
### Loops
JavaScript supports different kinds of loops:

- for - loops through a block of code a number of times
- for/in - loops through the properties of an object
```js
let txt = "";
const person = {fname:"John", lname:"Doe", age:25}; 

for (x in person) {
  txt += person[x] + " ";
}
```
- for ...of - Iterates over iterable objects (including arrays, array-like objects, iterators and generators), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
- while - loops through a block of code while a specified condition is true
- do/while - same as while but will always run at least once
  ```js
  let i = 100;

  do {
    console.log('Number ' + i)
  }

  while (i < 10 );
  // -> Number 100
  ```
- for ...in loop - Iterates over the enumerable properties of an **object**, in arbitrary order. For each distinct property, statements can be executed.
  ```js
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 42
  }
  for (let x in user) {
    console.log(`key: ${x} has value: ${user[x]}`)
  }
  // will log out keys (x) and values (user[x])
  ```

- `continue` - terminates current iteration and jumps to the next
- `break` - terminates the whole loop
- **Tip**: also consider using `forEach()` or `map()` for your iterations

source:  
- https://www.w3schools.com/js/js_loop_for.asp


# Others

`debugger` 
Invokes any available debugging functionality. If no debugging functionality is available, this statement has no effect.

