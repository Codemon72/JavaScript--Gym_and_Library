The Math object allows you to perform mathematical tasks.

Math works with the Number type. It doesn't work with BigInt.

Unlike many other global objects, Math is not a constructor. All properties and methods of Math are **static**. You refer to the constant pi as `Math.PI` and you call the sine function as Math.sin(x), where x is the method’s argument. Constants are defined with the full precision of real numbers in JavaScript.

```js
const x = Math.PI;            // Returns PI
const y = Math.sqrt(16);      // Returns the square root of 16
```

### Static Methods
`Math.ceil(x)`
Returns the smallest integer greater than or equal to x.

`Math.floor(x)`
Returns the largest integer less than or equal to x.

`Math.pow(x, y)`
Returns base x to the exponent power y (that is, xy).

`Math.random()`
Returns a pseudo-random number between 0 and 1.

`Math.round(x)`
Returns the value of the number x rounded to the nearest integer.

`Math.sqrt(x)`
Returns the positive square root of x.


sources: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
https://www.w3schools.com/jsref/jsref_obj_math.asp
