The charAt() method returns the character at a specified index in a string.

The index of the first character is 0, the second character is 1, and so on.

The index of the last character in a string is string.length-1, the second last character is string.length-2, and so on (See "More Examples").

### Syntax
`string.charAt(index)`

### Parameter Values
- index	Required - An integer representing the index of the character you want to return

### Examples
```js
let str = "HELLO WORLD";
str.charAt(0)    // Returns "H"
``` 
- more complex example in /Exercises/6_vowelCode.js