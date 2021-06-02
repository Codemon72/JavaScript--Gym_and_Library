multiple values in a single variable

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


good reference: https://www.w3schools.com/jsref/jsref_obj_array.asp