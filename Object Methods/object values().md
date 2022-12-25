The Object.values() method returns an array of a given object's property values.

### Syntax
`Object.values(exampleObj)`

### Parameters
- exampleObj - an object.

### Return value
An array containing the given object's own enumerable string-keyed property values.

Example:
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
const values = Object.values(person);
console.log(values)
// logs: ['John', 'Doe', 50, 'blue']
```
