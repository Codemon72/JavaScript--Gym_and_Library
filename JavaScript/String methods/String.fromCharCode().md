The fromCharCode() method converts Unicode values into characters.

**Note**: This is a static method of the String object, and the syntax is always String.fromCharCode().

#### Syntax
`String.fromCharCode(n1, n2, ..., nX)`

Parameters

- n1, n2, ..., nX	- Required. One or more Unicode values to be converted

**Return Value**:	A String, representing the character(s) representing the specified unicode number(s)
JavaScript Version:	ECMAScript 1

Example:
```js
const res = String.fromCharCode(72, 69, 76, 76, 79);
console.log(res)
// -> HELLO
```

source: https://www.w3schools.com/jsref/jsref_fromcharcode.asp