converts property keys and values into array

Example:
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
const result = Object.entries(person);
console.log(result)
// logs: ['lastName', 'Doe'],['age', 50],['eyeColor', 'blue']
```