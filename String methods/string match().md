The `match()` method searches a string for a match against a regular expression, and returns the matches, as an Array object.

Note: If the regular expression does not include the g modifier (to perform a global search), the `match()` method will return only the first match in the string.

Note: This method returns `null` (not `[]` or `0`) if no match is found!!

### Syntax
`string.match(regexp)`

### Parameter Values

- regexp	Required - The value to search for, as a regular expression.



### Examples:

```js
let str = "The rain in SPAIN stays mainly in the plain";
str.match(/ain/g)   // Returns ain,ain,ain

// count all vowels in a string
function getCount(str) {
  return (str.match(/[aeiou]/g) || []).length
}
``` 
```js
// check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
```


sources:
- https://www.w3schools.com/jsref/jsref_match.asp 