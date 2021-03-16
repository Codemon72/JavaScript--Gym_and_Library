The Number() function converts the object argument to a number that represents the object's value.

If the value cannot be converted to a legal number, NaN is returned.

Note: If the parameter is a Date object, the Number() function returns the number of milliseconds since midnight January 1, 1970 UTC.


#### Syntax
`Number(object)`

Parameter
- `object` -Optional. A JavaScript object. If no argument is provided, it returns 0.

**Return Value**:	A Number. Returns different object values to their numbers. If the value cannot be converted to a legal number, NaN is returned. If no argument is provided, it returns 0.

Examples:
```js
  Number(true)        // returns: 1
  Number(false)       // returns: 0
  Number(new Date())  // returns something like: 1613909206554
  Number("999")       // returns: 999
  Number("999 888")   // returns: NaN
  Number("Blueberries") // returns: NaN
````




source: https://www.w3schools.com/jsref/jsref_number.asp