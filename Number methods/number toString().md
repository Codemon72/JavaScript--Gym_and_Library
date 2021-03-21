The toString() method converts a number to a string.

### Syntax
`number.toString(radix)`

### Parameter	
- radix	- Optional. Which base to use for representing a numeric value. Must be an integer between 2 and 36.
  - 2 - The number will show as a binary value
  - 8 - The number will show as an octal value
  - 16 - The number will show as an hexadecimal value

**Return Value**:	A String, representing a number

Example:
```js
var num = 15;             
var a = num.toString();   // 15
var b = num.toString(2);  // 1111
var c = num.toString(8);  // 17
var d = num.toString(16); // f
```

source: https://www.w3schools.com/jsref/jsref_tostring_number.asp