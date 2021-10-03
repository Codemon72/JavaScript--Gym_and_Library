The Number.isInteger() method determines whether a value an integer.

This method returns true if the value is of the type Number, and an integer (a number without decimals). Otherwise it returns false.


**Note**: The Number.isInteger() method is not supported in Internet Explorer 11 and earlier versions.

### Syntax
`Number.isInteger(value)`

### Parameter	Description
- value	Required - The value to be tested

### Return Value:	A Boolean. Returns true if the value is an integer Number, otherwise it returns false

Examples:
```js
Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(5-2) //true
Number.isInteger(0) //true
Number.isInteger(0.5) //false
Number.isInteger('123') //false
Number.isInteger(false) //false
Number.isInteger(Infinity) //false
Number.isInteger(-Infinity) //false
Number.isInteger(0 / 0) //false
```

sources:
- https://www.w3schools.com/jsref/jsref_isinteger.asp