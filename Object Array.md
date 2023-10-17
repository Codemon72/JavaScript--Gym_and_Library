multiple values in a single variable

### Array constructor

#### Syntax

```js
new Array()
new Array(element1)
new Array(element1, element2)
new Array(element1, element2, /* …, */ elementN)
new Array(arrayLength)

Array()
Array(element1)
Array(element1, element2)
Array(element1, element2, /* …, */ elementN)
Array(arrayLength)
```

The Array() constructor creates Array objects. Array() can be called with or without new. Both create a new Array instance.

##### Parameters

`element1, …, elementN`
A JavaScript array is initialized with the given elements, except in the case where a single argument is passed to the Array constructor and that argument is a number (see the arrayLength parameter below).

`arrayLength`
If the only argument passed to the Array constructor is an **integer** between 0 and 232 - 1 (inclusive), this returns a new JavaScript array with its length property set to that number (Note: this implies an array of arrayLength empty slots, not slots with actual undefined values — see sparse arrays).

Examples:
```js
const arrayEmpty = new Array(2);

console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]); // undefined; actually, it is an empty slot

const fruits = new Array("Apple", "Banana");

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"

const arrayOfZeros = new Array(5).fill(0)
console.log(arrayOfZeros) // [0, 0, 0, 0, 0]
```
–––


### Add Element to Array
Easiest: `push()`
Works also with multiple elements:
```js
const zoo = ['🦊', '🐮'];
zoo.push('🐧', '🐦');
console.log(zoo); // ['🦊', '🐮', '🐧', '🐦']
```
or with the spread operator:
```js
const zoo = ['🦊', '🐮'];
const birds = ['🐧', '🐦', '🐤'];

zoo.push(...birds);

console.log(zoo); // ['🦊', '🐮', '🐧', '🐦', '🐤']
```
or using the index:
```js
const nuts = ["Walnut", "Hazelnut"];
nuts[2] = "Coconut";
// ["Walnut", "Hazelnut", "Coconut"]
```
or
```js
const nuts = ["Walnut", "Hazelnut"];
nuts[nuts.length] = "Coconut";
console.log(nuts) // ["Walnut", "Hazelnut", "Coconut"]
```
source / indepth article: https://www.samanthaming.com/tidbits/87-5-ways-to-append-item-to-array/
___


### Remove Element from Array
- `pop()` - Removes from the End of an Array
- `shift()` - Removes from the beginning of an Array
- `splice()` - removes from a specific Array index
- `filter()` - allows you to programatically remove elements from an Array
- and some more (see article below)
source: https://love2dev.com/blog/javascript-remove-from-array/
___

good reference: https://www.w3schools.com/jsref/jsref_obj_array.asp