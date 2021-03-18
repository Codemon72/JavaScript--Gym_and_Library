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


#### How to access object properties

You can access object properties in two ways:

`objectName.propertyName`

or

`objectName["propertyName"]`

#### Object Spreading

// spread operator in arrays:
let example1 = [1,2,3,4,5,6];
**let example2 = [...example1];**
example2.push(true);

console.log(example1); // -> [1,2,3,4,5,6]

// Object Spreading: 
const person = { name: 'Ansgar', age: 25 }
const person2 = {}
person2.name = person.name;
person2.age = person.age + 1;


const person2b = {
  name: person.name,
  age: person.age + 1,
};


**const person2c = { ...person };**
person2c.age = person.age + 1;
**const person2d = { ...person, age: person.age + 1 };**