The Object.values() method returns an array of a given object's property values.

### Syntax
`Object.values(exampleObj)`

### Parameters
- exampleObj - an object.

### Return value
An array containing the given object's own enumerable string-keyed property values.

Example:
```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); 
// ['bar', 42]

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
const values = Object.values(person);
console.log(values)
// logs: ['John', 'Doe', 50, 'blue']

// Array-like object
const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(arrayLikeObj1)); 
// ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObj2)); 
// ['b', 'c', 'a']
```
