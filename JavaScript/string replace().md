Method: replace()

`replace()` can replace the text specified (parameter 1) in the string with parameter 2. 

Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced

```js
let str = "this is an example.";
var result = str.replace("this","that");
console.log(result);

//output:
that is an example.
```