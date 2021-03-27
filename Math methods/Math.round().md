The Math.round() function returns the value of a number rounded to the nearest integer.

**Note**: 2.49 will be rounded down (2), and 2.5 will be rounded up (3).

#### Syntax
`Math.round(x)`

Parameter
- x	- Required. The number to be rounded

**Return Value**:	A number, representing the nearest integer

```js
console.log(Math.round(0.9));
// expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// expected output: -5 -5 -6
```