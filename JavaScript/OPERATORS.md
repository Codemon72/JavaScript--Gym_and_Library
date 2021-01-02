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

source: Hamburg Coding School Handout "JavaScript for Web"
