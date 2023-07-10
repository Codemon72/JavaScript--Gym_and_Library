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

Check if string is an isogram (word or phrase in which no letter is repeated)
```js
function isIsogram(str) {
  let lowerCaseString = str.toLowerCase(); // Convert the input string to lowercase
  let encounteredLetters = []; // Initialize an array to keep track of encountered letters

  for (let i = 0; i < lowerCaseString.length; i++) {
    const letter = lowerCaseString[i]; // Get the current letter

    // Check if the letter has already been encountered
    if (encounteredLetters.includes(letter)) {
      return false; // If the letter is already encountered, it's not an isogram, so return false
    } else {
      encounteredLetters.push(letter); // Add the letter to the encounteredLetters array
    }
  }
  return true; // If all letters are unique, it's an isogram, so return true
}
```