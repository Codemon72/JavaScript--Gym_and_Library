splits a string into an array of substrings

The `split()` method is used to split a string into an array of substrings, and returns the new array.

**Tip**: If an empty string ("") is used as the separator, the string is split between each character.

**Note**: The `split()` method does not change the original string.

**Note**: `split()` is the reverse operation of the (array) join() method. 

#### Syntax

`string.split(separator, limit)`

### Parameters

- separator	- Optional. Specifies the character, or the regular expression, to use for splitting the string. If omitted, the entire string will be returned (an array with only one item).
- limit	- Optional. An integer that specifies the number of splits, items after the split limit will not be included in the array.

**Return Value**:	An Array, containing the splitted values.


`split()` can divide a string into several parts by a specified separator. The result is an array of strings. The split string does not include the separator itself. One of its classic uses is to divide a sentence into an array of words:

sources: 
https://www.w3schools.com/jsref/jsref_split.asp
https://www.codewars.com/kata/57280481e8118511f7000ffa


### Examples

```js
const str = "My name is John";
const words = str.split(" ");
console.log(words);
//output: [ 'My', 'name', 'is', 'John' ]
```

```js
// reverse a string
function reverseString(str){
  return str.split('').reverse().join('');  
}
reverseString('hello')
// output: 'olleh'
```
