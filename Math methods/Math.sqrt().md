The sqrt() method returns the square root of a number.

### Syntax
`Math.sqrt(x)`

### Parameter	Description
- x	Required - A number

### Return Value:	A Number. If x is a negative number, NaN is returned

### Examples:
Check if number is square number of integer:
```js
const isSquare = (num) => {
  return Number.isInteger(Math.sqrt(num))
}

let num = -1  // =>  false
// num =  0  // =>  true
// num =  3  // =>  false
// num =  4  // =>  true
// num = 25  // =>  true
// num = 26  // =>  false

console.log(isSquare(num))
```

sources:
- https://www.w3schools.com/jsref/jsref_sqrt.asp