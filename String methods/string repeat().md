returns a new string with a specified number of copies of an existing string

The repeat() method returns a new string with a specified number of copies of the string it was called on.

#### Syntax

`string.repeat(count)`

Parameters
- count	   - Required. The number of times the original string value should be repeated in the new string.

**Return Value**:	A String, a new string containing copies of the original string.

source: https://www.w3schools.com/jsref/jsref_repeat.asp

### Examples

```js
// from calling the function with this string: accum("RqaEzty") -> this result is expected: "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
```