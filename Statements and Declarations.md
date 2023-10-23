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


## Iterations & Loops

JavaScript supports different kinds of loops:

#### `for` Loop

```js
for (initialization; condition; iteration) {
  // code to be executed
}
```

**Use Case:**
- The `for` loop is a general-purpose loop used when you know the number of iterations in advance or when you need to iterate over elements of an array using an index.

Example:
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
**Pros:**
- Precise control over loop initialization, condition, and iteration.
- Suitable for iterating over arrays using an index.
**Cons:**
- Syntax can be more verbose than `for...of` for simple iterations.

#### `for...in` Loop

**Syntax:**
```js
for (variable in object) {
  // code to be executed
}
```
**Use Case:**
- The `for...in` loop is used to iterate over the enumerable properties of an object, typically objects like arrays, objects, or custom prototypes.
**Example:**
```js
const person = {
  name: 'John',
  age: 30,
  gender: 'male'
};
for (let key in person) {
  console.log(key, person[key]);
}
```
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
**Pros:**
- Useful for iterating over object properties.
- Provides access to both keys and values.

**Cons:**
- Not recommended for iterating over arrays because it may include inherited properties.

#### `for...of` Loop

**Syntax:**
```js
for (variable of iterable) {
  // code to be executed
}
```
**Use Case:**
- The `for...of` loop is used to iterate over the values of iterable objects, such as arrays, strings, maps, sets, and more.

Example:
```js
const fruits = ['Apple', 'Banana', 'Orange'];
for (let fruit of fruits) {
  console.log(fruit);
}
```
- **Pros:**
  - Simplifies iteration by directly providing values.
  - Automatically iterates over the elements of arrays and other iterable objects.
- **Cons:**
  - Does not provide access to array indices or object keys.

In summary, use the `for` loop when you need precise control over the iteration process and you know the number of iterations. Use the `for...in` loop when you want to iterate over object properties. Use the `for...of` loop when you want a simplified way to iterate over the values of iterable objects like arrays and strings.

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


- `continue` - terminates current iteration and jumps to the next
- `break` - terminates the whole loop
- **Tip**: also consider using `forEach()` or `map()` for your iterations

source:  
- https://www.w3schools.com/js/js_loop_for.asp


# Others

`debugger` 
Invokes any available debugging functionality. If no debugging functionality is available, this statement has no effect.

