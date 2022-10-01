converts property keys into array

The Object.keys() method returns an Array Iterator object with the keys of an object.

The Object.keys() method does not change the original object.

Object.keys() is an ECMAScript6 (ES6) feature.

### Syntax
Object.keys(object)

### Parameters
object - Required. An iterable object.

### Return Value
An array - An Array Iterator object containing the keys of an object.


Example:
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
const keys = Object.keys(person);
console.log(keys)
// logs: ['firstName', 'lastName', 'age', 'eyeColor']