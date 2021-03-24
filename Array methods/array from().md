The Array.from() method returns an Array object from any object with a length property or an iterable object.

**Note**: Quite useful e.g. when you want to iterate over an array but get an HTMLCollection.

### Syntax
`Array.from(object, mapFunction, thisValue)`

### Parameters
- object	- Required. The object to convert to an array
- mapFunction	- Optional. A map function to call on each item of the array
- thisValue	- Optional. A value to use as this when executing the mapFunction

**Return Value**:	An Array object

source: https://www.w3schools.com/jsref/jsref_from.asp

Example:
```js
let forms = document.forms
const formsArray = Array.from(forms);
```