The isArray() method determines whether an object is an array.

This function returns true if the object is an array, and false if not.

### Syntax
`Array.isArray(obj)`

Parameter
- obj	- Required. The object to be tested

**Return Value**:	A Boolean. Returns true if the object is an array, otherwise it returns false


Example
```js
var a=[1], b=1, c="1", d={1:1}, e=true;
console.log(Array.isArray(a)); //true    a is an array
console.log(Array.isArray(b)); //false   b is not an array
console.log(Array.isArray(c)); //false   c is not an array
console.log(Array.isArray(d)); //false   d is not an array
console.log(Array.isArray(e)); //false   e is not an array
```