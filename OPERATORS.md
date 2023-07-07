https://www.w3schools.com/jsref/jsref_operators.asp

#### Arithmetic Operators
`+`     Addition (and also used for concatenating strings)
`-`     Subtraction
`*`     Multiplication
`/`     Division
`%`     Modulus (Division Remainder)
`++`  	Increment
`--`    Decrement
`**`   	Exponentiation 


#### Assignment Operator
`=`    assigns a value
`+=`   example: x += y is the same as x = x + y
`-=`   example: x -= y is the same as x = x - y
`*=`   example: x += y is the same as x = x * y
`/=`   example: x += y is the same as x = x / y
`%=` 	 example: x += y is the same as x = x % y
`**=`  example: x += y is the same as x = x ** y

#### String Operators

`+` and `+=`

#### Comparison Operators
`==`  	equal to // 'equality operator'
`!=`   	not equal
`>`     greater than
`<`     less than
`>=`  	greater than or equal to
`<=`  	less than or equal to
`===`   equal value and equal type // 'identity operator'
`!==` 	not equal value and / or not equal type

#### Logical Operators

`&&`, `||` and `!` // 'and', 'or' and 'not'

##### Conditional Ternary Operator
 
```js
number > 5 
    ? console.log('Larger than 5')
    : console.log('Lesser or equal 5')
```

```js
[condition we want to test] 
		? [code we want executed if true] 
		: [code we want executed if false]
```

To express an `if else` statement we just put another condition to be tested after the colon (else):
```js
const canYouHaveBeer = (age) => {
  age >= 18
    ? alert(“Sure, we are in Europe, have a cold one!”)
    : age === 17 alert(“So close! But unfortunately, not yet.”)
    : alert(“Sorry young gun. How about a soda?”)
}
```

Beware: a ternary expression is **not** a replacement for an if/else construct - **it's an equivalent to an if/else construct that returns a value**. That is, an if/else clause is code, a ternary expression is an expression, meaning that it returns a value.

This means several things:
- use ternary expressions only when you have a variable on the left side of the `=` that is to be assigned the return value
- only use ternary expressions when the returned value is to be one of two values (or use nested expressions if that is fitting)
- each part of the expression (after ? and after : ) should return a value without side effects 


#### Spread Operator

The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.


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

or 

```
function plus(a,b,c,d,e){
  return a+b+c+d+e;
}
var arg1=[1,2,3,4,5];
var arg2=[2,3];
console.log(plus(...arg1));
console.log(plus(1,...arg2,4,5));

// output:
// 15
// 15
```


This is used less often as there is also the concat() method that will do the same:
const allValues = values1.concat(values2)

**Careful!**: This only makes a **shallow copy**. 

**What is a shallow copy?**
Making a shallow copy of an array or object means creating new references to the primitive values inside the object, copying them.
That means that changes to the original array will not affect the copied array, which is what would happen if only the reference to the array had been copied (such as would occur with the assignment operator =).
A shallow copy refers to the fact that only one level is copied, and that will work fine for an array or object containing only primitive values.
For objects and arrays containing other objects or arrays, copying these objects requires a deep copy. Otherwise, changes made to the nested references will change the data nested in the original object or array.
In this [article](https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089), I describe 4 methods of making a shallow copy and then 5 methods of making a deep copy in JavaScript.


#### Destructuring
deep dive: https://www.freecodecamp.org/news/javascript-object-destructuring-spread-operator-rest-parameter/

simple example:
```js
const [a, b] = [1, 2];   // the old method is var a=1, b=2;
console.log(a);
console.log(b);

// output:
// 1
// 2
```

Destructuring allows us to assign variables in a sentence-like form. 
Here's a slightly more complicated example:

```js
var [a,b]=[1,2]
//Exchange the values of the two variables
//classic method:
var c=a;    //defined c to help us
a=b;
b=c;
//deconstruction method:
var [a,b]=[1,2];
[b,a]=[a,b];
console.log(a);
console.log(b);

// output:
// 2
// 1
```

You can use the spread operator for destructuring like this:

```js
var [a,...b]=[1,2,3,4,5];
console.log(a);
console.log(b);

// output:
// 1
// [ 2, 3, 4, 5 ]
```
**Please note**: the spread operator must be the last variable: [...a,b]=[1,2,3,4,5] does not work.
a was assigned to the first element of the array, and b was initialized with the remaining elements in the array.

#### Rest Parameter vs Spread Operator `...`
The three-dot syntax `...` is called the rest parameter when used in a function's parameter list to collect remaining arguments into an array. It is called the spread operator when used outside of a function's parameter list to expand an iterable into individual elements.

**Note**: If you see an ellipse `...` in the argument list in a function declaration, it is a structure called rest parameter. The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

**Note**: The rest paramater must be the last argument in the function definition argument list.

```js
// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) { 
  return otherInfo;
}
// Invoke myBio function while passing five arguments to its parameters:
myBio("Bill", "Mosley", "16", "Blocks", "Awesome");

// The invocation above will return:
["16", "Blocks", "Awesome"]
```

```js
// REST PARAMETER IN A DESTRUCTURING ASSIGNMENT
// Define a destructuring array with two regular variables and one rest variable:
const [firstName, lastName, ...otherInfo] = ["Jupp", "Schulz", "Techie", "RPG enthusiast", "word nerd"]

// Invoke the otherInfo variable:
console.log(otherInfo); 

// The invocation above will return:
["Techie", "RPG enthusiast", "word nerd"]
```

SPREAD separates the values of an iterable and is used inside function calls and Array literals, while rest gathers individual values into an array and is used for rest parameters and destructuring.
```js
// SPREAD AN ARRAYS ITEMS AS INDIVIDUAL ARGUMENTS
// Define a function with three parameters:
function myBio(firstName, lastName, project) { 
  return `${firstName} ${lastName} runs ${project}`;
}

// Use spread to expand an array’s items into individual arguments:
myBio(...["Alfons", "Zimmermann", "Word Nerd"]);

// The invocation above will return:
"Alfons Zimmermann runs Word Nerd"
```
___


#### Type Operators
`typeof`	Returns the type of a variable
```js
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"
```
Please observe:

The data type of NaN is number
The data type of an array is object
The data type of a date is object
The data type of null is object
The data type of an undefined variable is undefined *
The data type of a variable that has not been assigned a value is also undefined *
You cannot use typeof to determine if a JavaScript object is an array (or a date).

The Data Type of typeof
The typeofoperator is not a variable. It is an operator. Operators ( + - * / ) do not have any data type.

But, the typeof operator always returns a string (containing the type of the operand).
source: https://www.w3schools.com/js/js_type_conversion.asp

`instanceof` 	The instanceof operator returns true if the specified object is an instance of the specified object:
```js
const cars = ["Saab", "Volvo", "BMW"];

cars instanceof Array;          // Returns true
cars instanceof Object;         // Returns true
cars instanceof String;         // Returns false
cars instanceof Number;         // Returns false
```




--- 





sources: 
- Hamburg Coding School Handout "JavaScript for Web"
- well explained and referencing **shallow and deep copy**: https://livecodestream.dev/post/how-to-use-the-spread-operator-in-javascript/
- further reading on how to make a deep copy: https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089


