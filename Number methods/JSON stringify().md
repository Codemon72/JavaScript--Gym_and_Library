The JSON.stringify() method converts JavaScript objects into strings.

When sending data to a web server the data has to be a string.

### Syntax
`JSON.stringify(obj, replacer, space)`

### Parameter	
- obj	- Required. The value to convert to a string
- replacer	- Optional. Either a function or an array used to transform the result. The replacer is called for each item.
- space	Optional. Either a String or a Number.
  A string to be used as white space (max 10 characters), or a Number, from 0 to 10, to indicate how many space characters to use as white space.

**Return Value**:	A String

Example:
```js
const obj = {
  name: 'Anton',
  lastname: 'Schlicksbier',
  age: 48
}
console.log(JSON.stringify(obj));
// {"name":"Anton","lastname":"Schlicksbier","age":48}
```

source: https://www.w3schools.com/jsref/jsref_stringify.asp