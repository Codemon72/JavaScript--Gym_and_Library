#### Arithmetic Operators

#### Assignment Operators

#### String Operators

`+` and `+=`

#### Comparison Operators

#### Conditional (Terniary) Operator

#### Logical Operators

`&&`, `||` and `!` // 'and', 'or' and 'not'

source: https://www.w3schools.com/jsref/jsref_operators.asp

#### Spread Operator

##### Object Spreading
When we want to make a copy of an object we run into a problem if we simply use the assignment operator =. 
```
const person = { name: ‘Henning’, age: 28 };
const personCopy = person;
copy.name = ‘Nina’;

console.log(`${person.name} is ${person.age} years old.`};
// prints: Nina is 28 years old.
```

By assigning person to a new variable we don’t make a copy, we just assign the object a new reference (personCopy) that will now be addressed by both identifiers.
Instead we can use the spread operator (...). 
This will allow to spread the object and its value into a new object:

```
const person = { name: ‘Henning’, age: 28 };
const person2 = { ...person }
person2.name = 'Nina'

console.log(`${person.name} is ${person.age} years old.`)
// prints: Henning is 28 years old.

console.log(`${person2.name} is ${person2.age} years old.`)
// prints: Nina is 28 years old.
```

##### Array Spreading
The spread operator works on arrays just as well and makes it very easy to merge to arrays into a new one:

```
const values1 = [1, 2, 3]
const values2 = [4, 5, 6]
const allValues = [...values1, ...values2] 
// [1, 2, 3, 4, 5, 6]
```

This is used less often as there is also the concat() method that will do the same:
const allValues = values1.concat(values2)

**Careful!**: This only makes a shallow copy. 

**What is a shallow copy?**
Making a shallow copy of an array or object means creating new references to the primitive values inside the object, copying them.
That means that changes to the original array will not affect the copied array, which is what would happen if only the reference to the array had been copied (such as would occur with the assignment operator =).
A shallow copy refers to the fact that only one level is copied, and that will work fine for an array or object containing only primitive values.
For objects and arrays containing other objects or arrays, copying these objects requires a deep copy. Otherwise, changes made to the nested references will change the data nested in the original object or array.
In this [article](https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089), I describe 4 methods of making a shallow copy and then 5 methods of making a deep copy in JavaScript.

sources: 
- Hamburg Coding School Handout "JavaScript for Web"
- well explained and referencing **shallow and deep copy**: https://livecodestream.dev/post/how-to-use-the-spread-operator-in-javascript/
- further reading on how to make a deep copy: https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089
