The Math.ceil() function always rounds a number up to the next largest integer.

**Note**: Math.ceil(null) returns integer 0 and does not give a NaN error.

### Syntax
`Math.ceil(x)`

### Parameter
- x - Required A number.

### Return value
The smallest integer greater than or equal to the given number.

source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil

### Examples

```js
// return the middle one or two characters of a string, depending if the length of the word is odd or even
function getMiddle(s){
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
```