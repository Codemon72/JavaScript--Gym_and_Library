a collection of named values called properties

The `key : value` pairs in JavaScript objects are called properties:

JavaScript objects are containers for named values called properties or methods. (A method is a function stored as a property.)

#### How to add key value pair to an object

easy:
```js
const person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566
};

// add variable
person.vice = "blueberries";

// add method
person.name = function() {
  return this.firstName + " " + this.lastName;
};

// check what you got
console.log(person)
```

#### How to delete key value pair from object
```js
delete objectName.keyName;
delete objectName[keyName];
```

#### How to access object properties

You can access object properties in two ways:

`objectName.propertyName`

or

`objectName["propertyName"]`


### How to check if key exists in object?
```js
let exists = Object.keys(exampleObject).includes('example');
```

#### Object Spreading
pass the elements of an array/ object but NOT the structure of the array/ object.
(Like you want to spread some butter on your steak but not the wrapping material.)

Use cases: 
- you just want a copy of another array/ object.
- you want to copy all items of an array/ object into another one but only the elements NOT in form of an array/ object
```js
let array1 = [1,2,3,4,5,6];
let array2 = [0, ...array1, 'blib'];
array2.push(true);

console.log(array1); // -> [1,2,3,4,5,6]
console.log(array2); // -> [0,1,2,3,4,5,6,'blib',true]
```
- pass elements into a function from an array
```js
function addThreeNumbers(x, y, z) {
  console.log( x + y + z)
}
let threeNumbers = [4, 11, 2]
addThreeNumbers(...threeNumbers)
```

```js
// Object Spreading: 
const person = { name: 'Ansgar', age: 25 }
const person2 = {}
person2.name = person.name;
person2.age = person.age + 1;

const person2b = {
  name: person.name,
  age: person.age + 1,
};

const person2c = { ...person };
person2c.age = person.age + 1;
const person2d = { ...person, age: person.age + 1 };

// ----

// Return the highest and lowest number from a number string
let numberString = "1 2 -3 4 5";

function highAndLow(numberString) {
  // Split the numbers string into an array of individual number strings
  numberArray = numberString.split(' ');

  // Math.max() returns the maximum number from the array
  // Math.min() returns the minimum number from the array
  // The spread syntax (...) spreads the array elements as individual arguments
  return `${Math.max(...numberArray)} ${Math.min(...numberArray)}`;
}

console.log(highAndLow(numberString));
```