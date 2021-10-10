The includes() method returns true if an array contains a specified element, otherwise false.

Note: includes() is case sensitive.

### Syntax
`array.includes(element, start)`

### Parameter	Description
- element	Required - The element to search for
- start	Optional - Default 0. At which position in the array to start the search

### Return Value:	A Boolean

JavaScript Version:	ECMAScript 7

### Examples
Check if an array includes "Mango":
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango")   // Returns true
```

Check if an array includes "Banana", starting the search at position 3:
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Banana", 3);   // Returns false
```