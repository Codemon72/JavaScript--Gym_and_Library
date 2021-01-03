# Method: replace()

returns new string with replaced values

`replace()` can replace the text specified (parameter 1) in the string with parameter 2. 

Searches a string for a specified value, or a "regular expression", and returns a new string where the specified values are replaced.

**Note**: If you are replacing a value (and not a regular expression), only the first instance of the value will be replaced. To replace all occurrences of a specified value, use the global (g) modifier (see "More Examples" below).

```js
let str = "this is an example.";
var result = str.replace("this","that");
console.log(result);

//output: that is an example.
```