extract part of a string and return it as a new string

The slice() method extracts parts of a string and returns the extracted parts in a new string.

Use the start and end parameters to specify the part of the string you want to extract.

The first character has the position 0, the second has position 1, and so on.

**Tip**: Use a negative number to select from the end of the string.

#### Syntax

`string.slice(start, end)`

Parameter Values: 
- start - Required. The position where to begin the extraction. First character is at position 0
- end - Optional. The position (up to, but not including) where to end the extraction. If omitted, slice() selects all characters from the start-position to the end of the string

**Return Value**:	A String, representing the extracted part of the string

source: https://www.w3schools.com/jsref/jsref_slice_string.asp

Examples:

Remove first and last character of a string:
```js
const removeChar = (str) =>  {
  return str.slice(1, -1)
};
```

Uppercase every word
```js
function uppercaseEveryWord(string) {
  return string.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
}
console.log(
  uppercaseEveryWord("How can mirrors be real if our eyes aren't real.")
)
// => "How Can Mirrors Be Real If Our Eyes Aren't Real."
```